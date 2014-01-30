function home() {
	$( "#slider" ).empty().append("\
		<img src='img/index/index_14.gif' alt='#about0' /> \
		<img src='img/index/index_20.gif' alt='#about1' /> \
	");
	$( "#captions" ).empty().append("\
		<div id='about0' class='comment'></div>	\
		<div id='about1' class='comment'></div> \
	");
	$( "#about0" ).empty().append("\
		<h1>Welcome to the Jones Family</h1> \
		<p>Jones Contracting Incorporated is a family owned and operated excavation contracting company based in Walpole, MA.</p> \
		<p>We specialize in excavation site-work, utilities, spectic systems, drainage, asphalt paving, landscape construction, and snow removal services in Eastern Massachusetts.</p> \
	");
	$( "#about1" ).empty().append("\
		<p>Whether your project is a small residential septic systems or commercial land development our experience and skills lead to solid results. Jones Contracting has taken a variety of different projects with varying scopes of work in both the public and private sectors.</p> \
	");	
}

function excavating() {
	$( "#slider" ).empty().append("\
		<img src='img/excavating/excavating_10.gif' alt='#excavating0' /> \
		<img src='img/excavating/excavating_20.gif' alt='#excavating1' /> \
		<img src='img/excavating/excavating_22.gif' alt='#excavating2' /> \
		<img src='img/excavating/excavating_24.gif' alt='#excavating3' /> \
	");

	$( "#captions" ).empty().append("\
		<div id='excavating0' class='comment'></div>	\
		<div id='excavating1' class='comment'></div> \
		<div id='excavating2' class='comment'></div> \
		<div id='excavating3' class='comment'></div> \
	");
	$( "#excavating0" ).empty().append("\
		<h1>Excavation and Sitework</h1> \
		<p><ul> \
		    <li>Earth Moving</li> \
		    <li>Site Utilities</li> \
		    <li>Site Drainage</li> \
		    <li>Retension and Detention Ponds</li> \
		</ul></p> \
	");
	$( "#excavating1" ).empty().append("\
		<p><ul> \
		    <li>Bioswales</li> \
		    <li>Rain Gardens</li> \
		    <li>Road Construction</li> \
		    <li>Subgrade Preparation</li> \
		</ul></p> \
	");
	$( "#excating2" ).empty().append("\
		<p><ul> \
		    <li>Road Base Construction</li> \
		    <li>Asphalt, Concrete, Granite Curb</li> \
		    <li>Asphalt Paving</li> \
		    <li>Concrete and Asphalt Sidewalks</li> \
		</ul></p> \
	");
}

var theme_list = [
	"black-tie",
	"blitzer",
	"cupertino",
	"dark-hive",
	"dot-luv",
	"eggplant",
	"excite-bike",
	"flick",
	"hot-sneaks",
	"humanity",
	"le-frog",
	"mint-choc",
	"overcast",
	"pepper-grinder",
	"redmond",
	"smoothness",
	"south-street",
	"start",
	"sunny",
	"swanky-purse",
	"trontastic",
	"ui-darkness",
	"ui-lightness",
	"vader"
];


$( document ).ready(function() {
	$( "<link>" )
			.appendTo($("head"))
			.attr({type : "text/css", rel : "stylesheet"})
			.attr("href" , "jquery-ui-1.10.4.custom/css/themes/south-street/jquery-ui.css");	
			$( "#menu" ).hide();
	$( "#tabs" ).tabs();
	home();	

	$("input:radio[name=radio]").click(function() {
   	 	var path = "jquery-ui-1.10.4.custom/css/themes/".concat(theme_list[$("#radio1").prop("checked", true)],  "/jquery-ui.css");
   	 	console.log("Path: ");
   	 	console.log(path);
			$( "<link>" )
				.appendTo($("head"))
				.attr({type : "text/css", rel : "stylesheet"})
				.attr("href" , "jquery-ui-1.10.4.custom/css/themes/cupertino/jquery-ui.css");	
				$( "#menu" ).hide();
	});
	
});

