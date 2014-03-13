<?php

$browser = get_browser();

if($browser->browser == 'IE' && $browser->majorver < 9) {
	echo '<script language="javascript">';
	echo 'alert("Welcome to Jones Contracting Inc. To view this website you must upgrade your browser. Please contact (508) 668-7888 for immediate assistance.")';
	echo '</script>';
	header( 'Location: http://windows.microsoft.com/en-us/internet-explorer/download-ie' );
}
else {
	echo '<script language="javascript">';
	echo 'alert("Your browser works.")';
	echo '</script>';
	header( "Location: index.html" );
}

?>
