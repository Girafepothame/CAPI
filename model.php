<?php
function afficheImg() {
    
    $txtHtml = "";
    $dirname = "ressources/images/cards/";
    $images = glob($dirname."*.svg");
    
    foreach($images as $image) {
        $position = strpos($image, "_") + 1;
        $id = substr($image, $position);
        $sousChaine = str_replace(".svg", "", $id);

        $txtHtml .= '<div>';
        $txtHtml .= '<img id="img' . $sousChaine . '" src="'.$image.'" onclick="selectImage(\'img' . $sousChaine . '\')">';
        $txtHtml .= '</div>';
    }
    return $txtHtml;
}
?>