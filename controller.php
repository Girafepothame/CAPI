<?php

if(isset($_GET["page"])) {
    $page = $_GET["page"];
} else {
    $page = "home";
}


if ($page == "config") {
    $_SESSION["players"] = $_POST;
}



