
	
	$(".Thright ul li").each(function(){
		$(".Thright ul li").hover(function(){
		$i=$(this).index();
		$(this).find(".motai").hide().parents("li").siblings().find(".motai").show();
		
	},function(){
		$(".Thright ul li").eq($i).find(".motai").hide().parents("li").siblings().find(".motai").hide();
	})
	})

