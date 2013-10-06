$(document).ready(
	function() {
		//change the users cursor while hovering over the mana symbol (top right corner)
		$(".whiteMana").hover(function() {
            $('.whiteMana').css( 'cursor', 'pointer' );
        });
		//when clicked, the symbol toggles between white or blue
		//the background is also changed
    	$(".whiteMana").click(
			function() {
				if ($(".whiteMana").hasClass("switched"))
				{
					$(".whiteMana").attr("src", "images/whiteMana.jpg");
					$(".whiteMana").removeClass("switched");
					$("#container").css("background", "white");
				}else{
					$(".whiteMana").attr("src", "images/blueMana.jpg");
					$(".whiteMana").addClass("switched");
					$("#container").css("background", "#4197d0");
				}
			}
		);
		//change the font size of the abilities section while it is moused over
		$("#abilities").mouseover(function() {
            $("#abilities > p").css("font-size", "1.1em");
        });
		//change the font size back when mouse leaves
		$("#abilities").mouseout(function() {
            $("#abilities > p").css("font-size", "1em");
        });
		
		//change the users cursor while hovering over the stats section (bottom right corner)
		$("#stats").hover(function() {
            $('#stats').css( 'cursor', 'pointer' );
        });
		
		//swap the stats between 3/4 and 4/3 with a click
		$("#stats").click(function() {
			if ($("#stats").hasClass("switched")){
            	$("#stats > p > b").text("3/4");
				$("#stats").removeClass("switched");
			}else{
				$("#stats > p > b").text("4/3");
				$("#stats").addClass("switched");
			}
        });
	}
);