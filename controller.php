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
    if (isset($_POST["tasks"])) {
        $tasks = explode(",", $_POST["tasks"]);
        $_SESSION["tasks"] = $tasks;
        $_SESSION["current_task"] = 0;
    }
    $current_player = $_POST["curr_p"];
    $current_task = $_POST["curr_t"];
    var_dump($_SESSION);
}

?>