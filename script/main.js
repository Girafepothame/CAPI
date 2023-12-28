/**
* @file main.js
* Fichier principal (javaScript) de l'application WEB
* @author Loic FABRE
* @author Jeremy Girault
* @date 2023
*/



document.addEventListener("DOMContentLoaded", () => {

    let page = findGetParameter("page") ?? "home";


    switch (page) {
        case "home":
            homeHandler();
            break;
        case "rules":
            roomHandler();
            break;
        case "config":
            configHandler();
            break;
        case "room":
            let p = _("#curp").innerHTML;
            let t = _("#curt").innerHTML;
            roomHandler(p, t);
            break;
        default:
            break;
    }

})

function findGetParameter(parameterName) { // Recupérer la page courrante comme en PHP pur archi MVC
    var result = null,
        tmp = [];
    location.search
        .substring(1)
        .split("&")
        .forEach(function (item) {
            tmp = item.split("=");
            if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}

function _(id) {
    if (id.substring(0, 1) == '#') {
        return document.querySelector(id);
    } else if (id.substring(0, 1) == '.') {
        return document.querySelectorAll(id);
    } else {
        console.log("Mauvais nom d'attribut à sélectionner, veillez à utiliser # ou . pour id ou class");
    }
}

function homeHandler() {
    let pSelect = _("#nbPlayer");
    let players = _("#fieldset_j");
    let pct = _("#player-cont-template");
    pSelect.addEventListener("change", () => {
        players.innerHTML = "";
        let nbPlayer = pSelect.value;
        for (let i = 1; i <= nbPlayer; i++) {
            let pc = pct.cloneNode(true);

            let label = pc.querySelector("label");
            label.innerHTML = "Joueur " + i;
            label.for = "p" + i;

            let input = pc.querySelector("input");
            input.name = i;
            input.id = "p" + i;
            players.appendChild(pc);
        }
    })
}


function search(el) { // return the value of a text input before reseting the field
    let res = el.value;
    el.value = "";
    return res;
}

function removetask(e) { // remove a row from the task table in HTML and remove it in the json table
    e.parentNode.remove();
}

async function readJSON(tab, event) { // fetch the data of a JSON file into an array
    const file = event.target.files.item(0)
    const text = await file.text();

    let table = JSON.parse(text);
    let tasks = table["tasks"];

    for (i in tasks) {
        addTask(tab, tasks[i]);
    }
}

function addTask(tab, task) { // Add a task to the task table (in order to create the backlog)
    tab.push(task);
    createTask(tab, task);
    console.log(tab);
}

function createTask(tab, task) { // Create a row inside the task table in the HTML
    let row = document.createElement("tr");
    let t = document.createElement("td");
    let del = document.createElement("td");

    t.innerHTML = task;
    t.classList.add("task");

    del.innerHTML = "<i class='fa fa-trash-o' style='color:red'></i>";
    del.addEventListener("click", () => {
        tab.splice(tab.indexOf(task), 1);
        removetask(del);
        console.log(task);
    })

    row.appendChild(t);
    row.appendChild(del);
    task_tab.appendChild(row);
}

function fillForm(tab) {
    let taskform = _("#taskform");
    let bl_input = document.createElement("input");

    bl_input.type = "text";
    bl_input.name = "tasks";

    bl_input.value = tab;

    taskform.appendChild(bl_input);
}

// The function that takes care of the elements of the config page
function configHandler() {

    let task = _("#tsk");
    let sender = _("#sendTask");
    let BLtab = {
        "type":"Backlog",
        "tasks": []
    };
    let tasks = BLtab["tasks"];

    // When adding a task via the input field
    task.addEventListener("keydown", (evt) => {
        if (evt.key === 'Enter' && task.value != "") {
            let task_val = search(task)
            addTask(tasks, task_val);
        }
    })
    sender.addEventListener("click", () => {
        let task_val = search(task)
        addTask(tasks, task_val);
        console.log(tasks);
    })

    // When adding backlog from a file
    _("#bcklog").addEventListener("change", (e) => {
        readJSON(tasks, e);
    })

    send = _("#bl_send");
    _("#send").addEventListener("click", (e) => {
        e.preventDefault()
        fillForm(tasks);
        send.click();
    })


}


function roomHandler(p, t) {
    value = ""
    console.log(t, p)
    var nextButton = _('#next');
    let JGame = {};
    JGame["tasks"] = JSON.parse(_("#tasks").innerHTML);
    JGame["players"] = JSON.parse(_("#players").innerHTML);
    JGame["current_task"] = t;
    JGame["current_player"] = p;
    console.log(JGame);


    next = _("#send");

    let cards = _(".card-g");

    for (let card of cards) {
        card.addEventListener('click', () => {
            cards.forEach(function(img) {
                img.classList.remove('imgSelected');
            });
            card.classList.add('imgSelected');
            value = _(".imgSelected")[0].id;
        })
    }
    

    nextButton.addEventListener('click', () => {
        let selected = _(".imgSelected");
        if (selected.length == 0) {
            alert("Veuillez choisir une carte");
        } else {
            _("#sel").value = selected[0].id;
            if (t < JGame["tasks"].length-1) {
                if (p < JGame["players"].length-1) {
                    p++;
                } else {
                    t++;
                    p = 0;
                }
                _("#cp").value = p
                _("#ct").value = t
                next.click();
            } else {
                if (p < JGame["players"].length-1) {
                    p++;
                    _("#cp").value = p
                    _("#ct").value = t
                    next.click();
                } else {
                    alert("C'est fini");
                }
            }
        }
    })

}
