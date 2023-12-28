<div class="rules">
        <div id="rules-cont">
                <h1>Règles du jeu</h1>
                <h2>1. Attribution des points</h2>
                <p>Dans le Planning Poker, la complexité des User Stories est évaluée en points, appelés "story points", plutôt qu'en jours-hommes.</p>
                <h2>2. Évaluation de la complexité relative</h2>
                <p>L'équipe compare ensuite les User Stories en fonction des points attribués à chacune. Exemple : Si une User Story se voit attribuer 3 points et qu'une autre en obtient 20, cela indique que la seconde est considérée comme étant environ sept fois plus complexe que la première.</p>
                <h2>3. Participation de tous les membres de l'équipe</h2>
                <p>Un des avantages majeurs du Planning Poker est qu'il donne à chaque membre de l'équipe l'opportunité d'exprimer librement son opinion. Ce qui améliore la précision des estimations, car elles sont le fruit d'un consensus entre personnes ayant différents niveaux d'expérience et d'expertise.</p>
                <h2>4. Favoriser le dialogue</h2>
                <p>Enfin, cette méthode favorise les interactions et les échanges constructifs au sein de l'équipe projet, notamment entre le responsable produit et les développeurs.</p>
        </div>

        <div id="card-cont">
                <?php
                $dirname = "ressources/images/cards/";
                $images = glob($dirname."*.svg");
                
                foreach($images as $image) {
                    echo '<img class="r-card" src="'.$image.'" />';
                }
                ?>
        </div>

        <a class="return" href="./?page=home"><button>Retour</button></a>
</div>