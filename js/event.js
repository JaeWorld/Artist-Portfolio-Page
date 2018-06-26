$(function(){
		$(".block").mouseover(function(){
			$(this).css("background-color", "yellow");
		});
		$(".block").mouseout(function(){
			$(this).css("background-color", "grey");
		});

		$("button[name=intro]").click(function(){
			location.href = "intro.html";
		});
		$("button[name=works]").click(function(){
			location.href = "works.html";
		});
		$("button[name=contact]").click(function(){
			location.href = "contact.html";
		});
	});