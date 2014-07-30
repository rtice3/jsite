<?php

$path = $_SERVER['REQUEST_URI'];


switch ( $path ) {
	case "/gallery.html":
		$active_tab = "1";
		echo $active_tab;
		break;
	case "/excavation.html":
	case "/sitework.html":
		$active_tab = "2";
		echo $active_tab;
		break;
	case "/utilities.html":
		$active_tab = "3";
		echo $active_tab;
		break;
	case "/septic.html":
	case "/sewer.html":
		$active_tab = "4";
		echo $active_tab;
		break;
	case "/asphalt.html":
	case "/paving.html":
		$active_tab = "5";
		echo $active_tab;
		break;
	case "/landscape.html":
		$active_tab = "6";
		echo $active_tab;
		break;
	case "/snow.html":
	case "/plowing.html":
		$active_tab = "7";
		echo $active_tab;
		break;
	case "/technical.html":
	case "/specialty.html":
		$active_tab = "8";
		echo $active_tab;
		break;
	case "/contact.html":
		$active_tab = "9";
		echo $active_tab;
		break;
	case "/index.html":
	case "/home.html":
	case "/about.html":
		$active_tab = "0";
		echo $active_tab;
		break;
}

?>