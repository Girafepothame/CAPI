<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Planning Poker</title>
    <link rel="stylesheet" href="ressources/style.css">
</head>
<body>
    <?php

    
    switch ($page) {
        case 'home':
            include_once("view/home.php");
            break;
        case "config":
            include_once("view/config.php");
    }

    ?>
    <script src="script/main.js"></script>
</body>
</html>