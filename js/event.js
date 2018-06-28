$(document).ready(function(){
		// changes backgroundcolor when mouseover or mouseout
	 	$(".block").mouseover(function(){
			$(this).css("background-color", "#FF7A85");
		});
		$(".block").mouseout(function(){
			$(this).css("background-color", "#FFBEC3");
		});

		// moves to another page when clicked
		$(".main").click(function(){
			location.href = "index.html";
		})
		$("button[name=intro]").click(function(){
			location.href = "intro.html";
		});
		$("button[name=works]").click(function(){
			location.href = "works.html";
		});
		$("button[name=contact]").click(function(){
			location.href = "contact.html";
		});

		// controls Image Slide function
		//$("img").attr("style", "width:200px", "height:150px");
		$('img').hide();
		$('img').first().show();
		$('img').click(function(){
			$('div[id=imgs]').append($('img').first());
			$('img').last().hide();
			$('img').first().fadeIn(1000).show();
			console.log($('img'));
		})
});

