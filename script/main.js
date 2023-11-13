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
    let players = _("#fieldset");
    pSelect.addEventListener("change", () => {
        players.innerHTML = "";
        let nbPlayer = pSelect.value;
        for (let i = 1; i <= nbPlayer; i++) {
            let label = document.createElement("label");
            label.for = "p" + i;
            label.innerHTML = "Joueur " + i;
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
    console.log("la page est config");
    let task = _("#tsk");
    let sender = _("#sendTask");
    let tasks = []

    task.addEventListener("keydown", (evt) => {
        if (evt.key === 'Enter') {
            tasks.push(search(task));
            console.log(tasks);
        }
    })

    sender.addEventListener("click", () => {
        tasks.push(search(task));
        console.log(tasks);
    })
}

function _(id) {
    return document.querySelector(id);
}

function search(el) {
    res = el.value;
    el.value = "";
    return res;
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
