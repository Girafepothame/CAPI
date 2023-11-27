<div class="vote">
<h1>Tour de num_player</h1>
<div class="cards">
<?php
$dossierImages = "./ressources/images/";
if (is_dir($dossierImages)) {
    if ($dh = opendir($dossierImages)) {
        while (($fichier = readdir($dh)) !== false) {
            if (strpos($fichier, 'cartes_') === 0 && pathinfo($fichier)['extension'] === 'svg') {
                echo '<div>';
                echo '<img src="' . $dossierImages . $fichier . '" alt="' . $fichier . '" /><br>';
                echo '</div>';
            }
        }
        closedir($dh);
    }
} else {
    echo "Le dossier n'existe pas.";
}
?>
</div>
</div>