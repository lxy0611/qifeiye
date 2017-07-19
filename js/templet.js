$(function(){
	//下拉菜单
	$(".div-templetnav2>li").hover(
		function(){
			$(this).find(".subnav").css("display","block");
		}
		,
		function(){
			$(this).find(".subnav").css("display","none");
		})
	
	$(".div-templetnav li").hover(
		function(){
			$(".div-templetnav li a").removeClass("activeli");
			$(this).find("a:first").addClass("activeli");
		})
	
	//选用与预览
	$(".div-showtemplet>div").hover(
		function(){
			$(this).find(".div-operate").css("display","block");
		}
		,
		function(){
			$(this).find(".div-operate").css("display","none");
		})
})