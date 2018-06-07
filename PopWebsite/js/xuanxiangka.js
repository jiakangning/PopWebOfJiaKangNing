$(function(){
	$(".frc1top span").eq(0).click(function(){
		$(".frc1mainer .frc1main01").show().siblings(".frc1mainer .frc1main02").hide();
//	    $(this).css("background","#CCCCCC").delay(1000,function(){
//	    	$(this).css("background","red")
//	    });
        $(this).css("background","#666").siblings().css("background","#ccc");

	})
	$(".frc1top span").eq(1).click(function(){
		$(".frc1mainer .frc1main02").show().siblings(".frc1mainer .frc1main01").hide();
	    $(this).css("background","#666").siblings().css("background","#ccc");
	})
	$(".frc2top span").eq(0).click(function(){
		$(".frc2main .frc2main01").show().siblings(".frc2main .frc2main02").hide();
//	    $(this).css("background","#CCCCCC").delay(1000,function(){
//	    	$(this).css("background","red")
//	    });
        $(this).css("background","#666").siblings().css("background","#ccc");

	})
	$(".frc2top span").eq(1).click(function(){
		$(".frc2main .frc2main02").show().siblings(".frc2main .frc2main01").hide();
	    $(this).css("background","#666").siblings().css("background","#ccc");
	})
	
	
	
	$(".lu").eq(0).hover(function(){
		$(".figurer").css("top",0);
		$(".figurer p").html("卢玥行，品质与美是要艺术的手法去塑造。").animate(1000);}
	,function(){
		$(".figurer").css("top","50px");
		$(".figurer p").html("尚，则有崇尚，高尚，高品位，领先。").animate(1000);
	});
	$(".gao").eq(0).hover(function(){
		$(".figurer").css("top",0);
		$(".figurer p").html("高洪志，时尚是高尚的，时尚离不开艺术。").animate(1000);}
	,function(){
		$(".figurer").css("top","50px");
		$(".figurer p").html("尚，则有崇尚，高尚，高品位，领先。").animate(1000);
	});
	$(".tan").eq(0).hover(function(){
		$(".figurer").css("top",0);
		$(".figurer p").html("谭升，美应该脱离生活，是超现实的。").animate(1000);}
	,function(){
		$(".figurer").css("top","50px");
		$(".figurer p").html("尚，则有崇尚，高尚，高品位，领先。").animate(1000);
	});
    $(".hang").eq(0).hover(function(){
		$(".figurer").css("top",0);
		$(".figurer p").html("杭鸿志，美，注重和谐，协调就是美！").animate(1000);}
	,function(){
		$(".figurer").css("top","50px");
		$(".figurer p").html("尚，则有崇尚，高尚，高品位，领先。").animate(1000);
	});
    $(".luo").eq(0).hover(function(){
		$(".figure").css("top","-20px");
		$(".figure p").html("罗文，与其奢华浪费，不如朴素节俭。").animate(1000);}
	,function(){
		$(".figure").css("top","50px");
		$(".figure p").html("尚，则有崇尚，高尚，高品位，领先。").animate(1000);
	});
	$(".ni").eq(0).hover(function(){
		$(".figure").css("top","-20px");
		$(".figure p").html("倪艺林，与其奢华浪费，不如朴素节俭。").animate(1000);}
	,function(){
		$(".figure").css("top","50px");
		$(".figure p").html("尚，则有崇尚，高尚，高品位，领先。").animate(1000);
	});
	$(".ran").eq(0).hover(function(){
		$(".figure").css("top","-20px");
		$(".figure p").html("冉求，一种永远不会过时而又充满活力的一种艺术。").animate(1000);}
	,function(){
		$(".figure").css("top","50px");
		$(".figure p").html("尚，则有崇尚，高尚，高品位，领先。").animate(1000);
	});
    $(".son").eq(0).hover(function(){
		$(".figure").css("top","-20px");
		$(".figure p").html("宋杰，引领当前时代人的正确价值观！").animate(1000);}
	,function(){
		$(".figure").css("top","50px");
		$(".figure p").html("尚，则有崇尚，高尚，高品位，领先。").animate(1000);
	});

})