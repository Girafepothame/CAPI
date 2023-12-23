<?php

if(isset($_GET["page"])) {
    $page = $_GET["page"];
} else {
    $page = "home";
}

if ($page == "config") {
    $_SESSION["players"] = $_POST;
}

if ($page == "room") {
    $tasks = explode(",", $_POST["tasks"]);

    $_SESSION["tasks"] = $tasks;
    var_dump($_SESSION);
}


