document.addEventListener("DOMContentLoaded", () => {

    let page = findGetParameter("page") ?? "home";

    switch (page) {
        case "home":
            homeHandler();
            break;
        case "config":
            configHandler();
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

function search(el) { // return the value of a text input before reseting the field
    let res = el.value;
    el.value = "";
    return res;
}

function removerow(e) {
    e.parentNode.parentNode.remove();
}

function homeHandler() {
    let pSelect = _("#nbPlayer");
    let players = _("#fieldset_j");
    pSelect.addEventListener("change", () => {
        players.innerHTML = "<legend>Joueurs</legend>";
        let nbPlayer = pSelect.value;
        for (let i = 1; i <= nbPlayer; i++) {
            let label = document.createElement("label");
            label.for = "p" + i;
            label.innerHTML = "Joueur " + i + " : ";
            let player = document.createElement("input");
            player.type = "text";
            player.name = "player" + i;
            player.id = "p" + i;
            player.required = true;

            players.appendChild(label)
            players.appendChild(player);
        }
    })
}

async function readJSON(event) { // fetch the data of a JSON file into an array
    const file = event.target.files.item(0)
    const text = await file.text();

    let tab = JSON.parse(text);
    let tasks = tab["tasks"];

    for (i in tasks) {
        console.log(tasks[i]);
        createTask(tasks[i]);
    }

}

async function writeJSON(content) {
    const file = require('fs');
    file.writeFileSync("save.js", content);
}


function addTask(tab, task) { // Add a task to the task table (in order to create the backlog)
    tab.push(task);

    createTask(task);
}

function createTask(task) { // Create a row inside the task table
    let row = document.createElement("tr");
    let t = document.createElement("td");
    let del = document.createElement("td");

    t.innerHTML = task;
    t.classList.add("task");
    del.innerHTML = "<i class='fa fa-trash-o' style='color:red' onclick='removerow(this);'></i>";
    row.appendChild(t);
    row.appendChild(del);
    task_tab.appendChild(row);
}

function createTaskForm(tab) {
    let taskform = _("#taskform");
    let content;
    let Jtab = {
        "type": "Backlog",
        "name": "samer",
        "tasks": {

        }
    };
    for (let i = 0; i < tab.length; i++) {
        let tName = "task" + i;
        let tValue = tab[i].innerHTML;
        let input = document.createElement("input");

        input.type = "text";
        input.name = tName;
        input.value = tValue;

        taskform.appendChild(input);

        Jtab["tasks"][tName] = tValue;
        content = JSON.stringify(Jtab);
    }
    console.log(content);
    writeJSON(content);
}

function configHandler() {

    let task = _("#tsk");
    let sender = _("#sendTask");
    let tasks = [];

    task.addEventListener("keydown", (evt) => {
        if (evt.key === 'Enter' && task.value != "") {
            let task_val = search(task)
            addTask(tasks, task_val);
        }
    })
    sender.addEventListener("click", () => {
        let task_val = search(task)
        addTask(tasks, task_val);
    })

    let save = _("#bl_save");
    let tsk_tab = [];

    save.addEventListener("click", () => {
        let t_tab = _(".task");
        if (t_tab.length > 0) {
            for (let t of t_tab) {
                tsk_tab.push(t);
            }
            createTaskForm(tsk_tab);
            // Prevent modifying task tab
            _("#fieldset_t").disabled = true;
            _("#bl_send").disabled = false;
        } else {
            console.log("Valide pas si t'as rien dans le tableau mon gars");
        }
    })
}
