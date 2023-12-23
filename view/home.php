
<div>
    <form action="./?page=config" method="post">
        <label for="nbPlayer">Nombre de joueurs :</label>
        <select name="nb" id="nbPlayer">
            <?php
            for ($i=2; $i < 10; $i++) { 
                echo "<option value='$i'>$i</option>";
            }
            ?>
        </select>
        <fieldset id="fieldset_j">
            <legend>Joueurs</legend>
            <label for="p1">Joueur 1 : </label>
            <input type="text" name="player1" id="p1">
            <label for="p2"> Joueur 2 : </label>
            <input type="text" name="player2" id="p2">
        </fieldset>
        <input type="submit" value="Commencer">
    </form>
    <a href="./?page=rules"><button>Les règles</button></div></a>
</div>


