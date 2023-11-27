<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Planning Poker</title>
    <link rel="stylesheet" href="ressources/style.css">
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>
    <?php

    switch ($page) {
        case 'home':
            include_once("view/home.php");
            break;
        case "config":
            include_once("view/config.php");
            break;
        case "rules":
            include_once("view/rules.php");
            break;
        case "room":
            include_once("view/room.php");
            break;
        case "vote":
            include_once("view/vote.php");
            break;
    }

    ?>
    <script src="script/main.js"></script>
</body>
</html>