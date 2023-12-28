<div class="room">
    <button id="next">Suivant</button>
    <form action="./?page=room" method="post" style="display: none;">
        <input type="text" name="curr_t" id="ct">
        <input type="text" name="curr_p" id="cp">
        <input id="send" type="submit"></input>
    </form>


    <?php
        $task_data = json_encode($_SESSION["tasks"]);
        echo '<div id="tasks">'.$task_data.'</div>';
        $player_data = json_encode($_SESSION["players"]);
        echo '<div id="players">'.$player_data.'</div>';
        var_dump($_SESSION["players"]);
    ?>

    <div class="contNamePlayer">
        <?php
            echo '<h1 class="namePlayer" id="namePlayer"> Au tour de : '.$current_player.'</h1>';
        ?>
    </div>

    <div class="blocFeatures">
        <?php
            echo '<p id="current_task">'.$current_task.'</p>';
        ?>
    </div>

    <div class="cards">
        <?php
            echo afficheImg();
        ?>
    </div>

</div>