function home() {
	$( "#aboutCarousel" ).empty().append(" \
		<ol class='carousel-indicators'> \
	   		<li data-target='#aboutCarousel' data-slide-to='0' class='active'></li> \
	       	<li data-target='#aboutCarousel' data-slide-to='1'></li> \
	       	<li data-target='#aboutCarousel' data-slide-to='2'></li> \
	   	</ol> \
	   	<div id='about-carousel-inner' class='carousel-inner'></div> \
	   	<a class='left carousel-control' href='#aboutCarousel' data-slide='prev'><span class='glyphicon glyphicon-chevron-left'></span></a> \
	    <a class='right carousel-control' href='#aboutCarousel' data-slide='next'><span class='glyphicon glyphicon-chevron-right'></span></a> \
	");
	$( "#about-carousel-inner" ).empty().append(" \
		<div class='item active'> \
		   	<img data-src='js/holder.js/900x500/auto/#FFFFFF:#7a7a7a/text:First slide'> \
			<div class='container'> \
		  		<img src='img/excavating/excavating_10.gif'> \
		      	<div class='carousel-caption'> \
		        	<h1>Welcome to the Jones Family</h1> \
		        	<p>Jones Contracting Incorporated is a family owned and operated excavation contracting company based in Walpole, MA.</p> \
		       	</div> \
		   	</div> \
		</div> \
		<div class='item'> \
		 	<img data-src='js/holder.js/900x500/auto/#FFFFFF:#6a6a6a/text:Second slide'> \
		   	<div class='container'> \
		      	<div class='carousel-caption'> \
		           	<p>We specialize in excavation site-work, utilities, spectic systems, drainage, asphalt paving, landscape construction, and snow removal services in Eastern Massachusetts.</p> \
		       	</div> \
		  	</div> \
		</div> \
		<div class='item'> \
		   	<img data-src='js/holder.js/900x500/auto/#FFFFFF:#5a5a5a/text:Third slide'> \
		  	<div class='container'> \
		      	<div class='carousel-caption'> \
		          	<p>Whether your project is a small residential septic systems or commercial land development our experience and skills lead to solid results. Jones Contracting has taken a variety of different projects with varying scopes of work in both the public and private sectors.</p> \
		       	</div> \
		  	</div> \
		</div> \
	");
}

function excavation() {
	$( "#myCarousel" ).empty().append(" \
		<ol class='carousel-indicators'> \
	   		<li data-target='#myCarousel' data-slide-to='0' class='active'></li> \
	       	<li data-target='#myCarousel' data-slide-to='1'></li> \
	       	<li data-target='#myCarousel' data-slide-to='2'></li> \
	   	</ol> \
	   	<div id='carousel-inner' class='carousel-inner'></div> \
	   	<a class='left carousel-control' href='#myCarousel' data-slide='prev'><span class='glyphicon glyphicon-chevron-left'></span></a> \
	    <a class='right carousel-control' href='#myCarousel' data-slide='next'><span class='glyphicon glyphicon-chevron-right'></span></a> \
	");
	$( "#carousel-inner" ).empty().append(" \
		<div class='item active'> \
		   	<img data-src='js/holder.js/900x500/auto/#FFFFFF:#7a7a7a/text:First excavation'> \
			<div class='container'> \
		  		<img src='img/excavating/excavating_10.gif'> \
		      	<div class='carousel-caption'> \
		        	<h1>Excavation and Sitework</h1> \
		        	<p><ul> \
		        		<li>Earth Moving</li> \
		        		<li>Site Utilities</li> \
		        		<li>Site Drainage</li> \
		        		<li>Retension and Detention Ponds</li> \
		        	</ul></p> \
		       	</div> \
		   	</div> \
		</div> \
		<div class='item'> \
		 	<img data-src='js/holder.js/900x500/auto/#FFFFFF:#6a6a6a/text:Second excavation'> \
		   	<div class='container'> \
		      	<div class='carousel-caption'> \
		           	<p><ul> \
		        		<li>Bioswales</li> \
		        		<li>Rain Gardens</li> \
		        		<li>Road Construction</li> \
		        		<li>Subgrade Preparation</li> \
		        	</ul></p> \
		       	</div> \
		  	</div> \
		</div> \
		<div class='item'> \
		   	<img data-src='js/holder.js/900x500/auto/#FFFFFF:#5a5a5a/text:Third excavation'> \
		  	<div class='container'> \
		      	<div class='carousel-caption'> \
		          	<p><ul> \
		        		<li>Road Base Construction</li> \
		        		<li>Asphalt, Concrete, Granite Curb</li> \
		        		<li>Asphalt Paving</li> \
		        		<li>Concrete and Asphalt Sidewalks</li> \
		        	</ul></p> \
		       	</div> \
		  	</div> \
		</div> \
	");
}


$( document ).ready(function() {
	home();
	excavation();
	$('.nav-tabs a').click(function (e) {
      	e.preventDefault();
      	$(this).tab('show');
    });
});



