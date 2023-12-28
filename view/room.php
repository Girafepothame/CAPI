<div class="room">
    <button id="next">Suivant</button>
    <form action="./?page=room" method="post" style="display: none;">
        <input type="text" name="curr_t" id="ct">
        <input type="text" name="curr_p" id="cp">
        <input type="text" name="select" id="sel">
        <input id="send" type="submit"></input>
    </form>


    <?php
        $task_data = json_encode($_SESSION["tasks"]);
        echo '<div id="tasks" style="display: none;">'.$task_data.'</div>';
        
        $player_data = json_encode($_SESSION["players"]);
        echo '<div id="players" style="display: none;">'.$player_data.'</div>';

        echo '<div id="curt" style="display: none;">'.$_POST["curr_t"].'</div>';
        echo '<div id="curp" style="display: none;">'.$_POST["curr_p"].'</div>';

        $values = json_encode($_SESSION["values"]);
        echo '<div id="values" style="display: none;">'.$values.'</div>';
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