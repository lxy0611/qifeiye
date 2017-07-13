$(function(){
	//下拉菜单
	$(".div-works>ul>li").hover(
		function(){
			$(this).find(".works-sjx").css("border-color","#000 transparent transparent transparent");
			$(this).find(".subnav").css("display","block");
		}
		,
		function(){
			$(this).find(".works-sjx").css("border-color","transparent transparent transparent #000");
			$(this).find(".subnav").css("display","none");
		})
	//小屏幕的下拉菜单
	var mark=0;
	$(".sort-btn").click(function() {
		if(mark==0){
			$(".hide-ul").css("display","block");
			$(".sort-btn>a").html("关闭<span class='caret'></span>");
			mark=1;
		}
		else{
			$(".hide-ul").css("display","none");
			$(".sort-btn>a").html("按分类浏览<span class='caret'></span>");
			mark=0;
		}
	})
	
	function divHtml(imgsrc,title,area) {
		 var str="<div class='col-md-6'>";
		 strimg="<div><img src="+imgsrc+" class='img-responsive'/></div>";
		 strTitle="<h4><strong>"+title+"</strong></h4>";
		 strarea="<span><strong>"+area+"</strong></span>";
		 str=str+strimg+"<div>"+strTitle+strarea+"</div></div>";
		 return str;
	}
	
	$.getJSON("case.json",function(data){
		var k=0;
		$.each(data, function(infoIndex, Info){
			k++;
			if(k>4) return;
			$("#div-works").append(divHtml(Info.imgsrc,Info.title,Info.areas));
		})
	})
	
    //点击按钮,一次性追加两条信息
	$("#btn-check").click(function(){
		var len=$("#div-works>div").length;
		$.getJSON("case.json",function(data){
			if(len==data.length){
				alert("已经加载完毕!");
				return;
			}
			else{
				for(var i=len;i<len+2;i++){
					$("#div-works").append(divHtml(data[i].imgsrc,data[i].title,data[i].areas));
				}
			}
	   })
	})	
})