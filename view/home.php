
<div>
    <form action="./?page=config" method="post" id="play-form">
        <div class="sw-cont">
            <div class="select-wrapper">
                <select class="select" name="nb" id="nbPlayer" required>
                    <option value="2">Nombre de Joueurs</option>
                    <?php
                    for ($i=2; $i < 10; $i++) { 
                        echo "<option value='$i'>$i</option>";
                    }
                    ?>
                </select>
            </div>
            <div class="select-wrapper">
                <select class="select" name="mode" id="mode" required>
                    <option value="modStrict">Mode de jeu</option>
                    <option value="modStrict ">Strict</option>
                    <option value="modMaj">Majorité absolue</option>
                </select>
            </div>
        </div>
        <div id="fieldset_j">
            <div class="flip-card" id="player-cont-template">
                <div class="flip-card-inner">
                    <div class="bordered flip-card-front card">
                        <label id="p-lab" for="p1">Joueur 1</label>
                    </div>
                    <div class="flip-card-back card">
                        <input type="text" name="0" id="p1" required>
                    </div>
                </div>
            </div>

            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="bordered flip-card-front card">
                        <label for="p2"> Joueur 2</label>
                    </div>
                    <div class="flip-card-back card">
                        <input type="text" name="1" id="p2" required>
                    </div>
                </div>
            </div>
            
        </div>
        <input class="button" id="s-butt" type="submit" value="Commencer">
    </form>
    <a id="r-butt" href="./?page=rules"><button class="button">Les règles</button></div></a>
</div>


