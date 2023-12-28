<?php

if(isset($_GET["page"])) {
    $page = $_GET["page"];
} else {
    $page = "home";
}

if ($page == "config") {
    $_SESSION["mode"] = $_POST["mode"]; 
    $_SESSION["nb_player"] = $_POST["nb"];
    array_shift($_POST);
    array_shift($_POST);
    $_SESSION["players"] = $_POST;
    $_SESSION["current_player"] = "player1";
}

if ($page == "room") {
    $_SESSION["values"] = [];
    if (isset($_POST["tasks"])) {
        $tasks = explode(",", $_POST["tasks"]);
        $_SESSION["tasks"] = $tasks;
        $_SESSION["current_task"] = 0;
    }
    if (isset($_POST["select"])) {
        array_push($_SESSION["values"], $_POST["select"]);
    }
    $current_player = $_SESSION["players"][$_POST["curr_p"]];
    $current_task = $_SESSION["tasks"][$_POST["curr_t"]];
}

?>