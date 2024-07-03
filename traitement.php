<?php

// on teste la déclaration de nos variables
if (isset($_POST['nom']) && isset($_POST['fonction'])) {
	// on affiche nos résultats
	echo 'Votre nom est '.$_POST['nom'].' et votre fonction est '.$_POST['fonction'];
}

   
?>