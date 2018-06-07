$(".keytext .clearfix li").hover(function() {
	$i = $(this).index();
	$(".keytext .clearfix li").eq($i).find(".downlist").slideDown();
}, function() {
	$(".keytext .clearfix li").eq($i).find(".downlist").slideUp();
})
$(".keywright").hover(function() {
	$(this).find(".info_content").show("slow");
}, function() {
	$(this).find(".info_content").hide();
})
$(".update_list li").hover(function() {
	$xiabiao = $(this).index();
	$(".update_list li").eq($xiabiao).find(".span_l").animate({ "width": "108px", "height": "111px" }, 300);
	$(".update_list li").eq($xiabiao).find(".span_r").animate({ "width": "108px", "height": "111px" }, 300);
}, function() {
	$xiabiao = $(this).index();
	$(".update_list li").eq($xiabiao).find(".span_l").animate({ "width": "0", "height": "0" }, 300);
	$(".update_list li").eq($xiabiao).find(".span_r").animate({ "width": "0", "height": "0" }, 300);
})