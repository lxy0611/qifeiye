$(function(){

	//写字：做一个响应式的网站....
	var texts="做一个响应式网站<br />让世界更好的了解您";
	var len=texts.length;
	var i=0;
	var mark=0;
	var markbiao="";
	/*setInterval(function(){
		if(i<len){
			if(texts[i]===">"){
				markbiao+=texts[i];
				$("#writeSpan").before(markbiao);
				mark=0;
			}
			else if(texts[i]==="<"|| mark==1) {
				mark=1;
				markbiao+=texts[i];
			}
			else{
			    $("#writeSpan").before(texts[i]);
			   }
			i++;
		}
	},300)*/
	
	
	function  myWrite(texts){
		if(i<len){
			if(texts[i]===">"){
				markbiao+=texts[i];
				$("#writeSpan").before(markbiao);
				mark=0;
			}
			else if(texts[i]==="<"|| mark==1) {
				mark=1;
				markbiao+=texts[i];
			}
			else{
			    $("#writeSpan").before(texts[i]);
			   }
			i++;
		}
		else return;
	}
	setInterval(function(){
		myWrite(texts);
	},300);
	
	/*
	//置顶导航
	if($(window).scroll(function(){
		$("nav").addClass("navbar-fixed-top");
		$("nav .navbar-right").display("none");
	})
	*/
	//关于导航
	$("#li-about").hover(
		function(){
			$(".div-about").css("display","block");
			$(".navbar-inverse").css("border-bottom","1px solid #C3C3C3;");
		}
		,
		function(){
			$(".div-about").css("display","none");
			$(".navbar-inverse").css("border-bottom","none");
		}
	)
	
	//文档导航
	$("#li-document").hover(
		function(){
			$(".div-document").css("display","block");
			//$(".navbar-inverse").css("border-bottom","1px solid #C3C3C3");
		}
		,
		function(){
			$(".div-document").css("display","none");
			//$(".navbar-inverse").css("border-bottom","none");
		}
	)
	$(".list-honorimg").hover(
		function(){
			$(this).find("img").removeClass("gray");
		}
		,
		function(){
			$(this).find("img").addClass("gray");
		}
	)
	
	
	
	//轮播
	$(".carousel").carousel({interval: 2000});
	$(".div-wechatlink").hover(
		function(){
			$(".div-showwechat").css("display","block");
		}
		,
		function(){
			$(".div-showwechat").css("display","none");
		}
	)
	
	
	
	/*//一秒打开有点狠
	var updateadvimgs=["cdn-blue.png","cache-blue.png","compress-blue.png","merge-blue.png","analy-blue.png","losslesscmp-blue.png"];
    var markadvimg=null;
    var updateadvimg=null;
    var markindex=0;
	$(".div-advantageinfo").hover(
		function(){
			markadvimg=$(this).find("div:first").find("div:first").css("background-image");
			markindex=$(this).index();
			updateadvimg="url(img/"+updateadvimgs[markindex]+")";
			$(this).find("div:first").find("div:first").css("background-image",updateadvimg);
		},
		function(){
			$(this).find("div:first").find("div:first").css("background-image",markadvimg);
		})
	*/
	$(".div-advantageinfo").hover(
		function(){
			$(this).find(".top-img").css("opacity","1");
		},
		function(){
			$(this).find(".top-img").css("opacity","0");
		})

	//小屏幕导航
	$(".li-docu").click(function() {
		$(".div-navbar-ul1").removeClass("active-ul");
		$(".div-navbar-ul1").addClass("left-ul");
		$(".div-navbar-ul2").addClass("active-ul");
		
	})
	$(".li-ab").click(function() {
		$(".div-navbar-ul1").removeClass("active-ul");
		$(".div-navbar-ul1").addClass("left-ul");
		$(".div-navbar-ul3").addClass("active-ul");
		
	})
	$(".li-cmp").click(function() {
		$(".div-navbar-ul3").removeClass("active-ul");
		$(".div-navbar-ul3").addClass("left-ul");
		$(".div-navbar-ul4").addClass("active-ul");	
	})
	
	$(".li-back1").click(function() {
		$(".div-navbar-ul1").addClass("active-ul");
		$(".div-navbar-ul2").removeClass("active-ul");
	})
	$(".li-back2").click(function() {
		$(".div-navbar-ul1").addClass("active-ul");
		$(".div-navbar-ul3").removeClass("active-ul");
	})
	$(".li-back3").click(function() {
		$(".div-navbar-ul3").addClass("active-ul");
		$(".div-navbar-ul4").removeClass("active-ul");
	})
	
	$(".span-close").click(function(){
		$(".div-page").removeClass("left-div-page");
		$(".div-nav").removeClass("active-div");
		$(".div-page").addClass("active-div");
	})
	
	$(".btn-nav-toggle").click(function(){
		$(".div-page").removeClass("active-div");
		$(".div-page").addClass("left-div-page");
	    $(".div-nav").addClass("active-div");
	})
	
	
	
})