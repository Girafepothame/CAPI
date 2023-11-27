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

function homeHandler() {
    let pSelect = _("#nbPlayer");
    let players = _("#fieldset_j");
    pSelect.addEventListener("change", () => {
        players.innerHTML = "";
        let nbPlayer = pSelect.value;
        for (let i = 1; i <= nbPlayer; i++) {
            let label = document.createElement("label");
            label.for = "p" + i;
            label.innerHTML = "Joueur : " + i;
            let player = document.createElement("input");
            player.type = "text";
            player.name = "player" + i;
            player.id = "p" + i;

            players.appendChild(label)
            players.appendChild(player);
        }
    })
}

function configHandler() {
    console.log("la page est config !");
    let task = _("#tsk");
    let sender = _("#sendTask");
    let tasks = [];
    let bcklog = _("#bcklog");

    task.addEventListener("keydown", (evt) => {
        if (evt.key === 'Enter') {
            let task_val = search(task)
            addTask(tasks, task_val);
            
        }
    })

    sender.addEventListener("click", () => {
        let task_val = search(task)
        addTask(tasks, task_val);
        
    })

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

function search(el) { // return the value of a text input before reseting the field
    res = el.value;
    el.value = "";
    return res;
}

function addTask(tab, task) { // Add a task to the task table (in order to create the backlog)
    task_tab = _("#task_tab");
    tab.push(task);

    createTask(task);
}

function createTask(task) { // Create a row inside the task table
    let row = document.createElement("tr");
    let t = document.createElement("td");
    let del = document.createElement("td");

    t.innerHTML = task;
    del.innerHTML = "<i class='fa fa-trash-o' style='color:red' onclick='removerow(this);'></i>";
    row.appendChild(t);
    row.appendChild(del);
    task_tab.appendChild(row);
}

function removerow(e) {
    e.parentNode.parentNode.remove();
}

function findGetParameter(parameterName) { // Recupérer la page courrante comme en PHP pur archi MVC
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
            tmp = item.split("=");
            if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}
