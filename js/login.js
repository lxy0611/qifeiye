$(function(){
	//判断密码
	$("input[name='password']").blur(function(){
	if($(this).val()===""){
		$(this).next(".div-warn").css("display","block");
		$(this).next(".div-warn").find(".warn-info").find("i").text("此项必须填写");
		return false;
	}
	else{
		$(this).next(".div-warn").find(".warn-info").find("i").val("");
		$(this).next(".div-warn").css("display","none");
		}
	})
	//用户名或邮箱
	var num=4;
	/*var usernamere=/^[a-zA-Z0-9_]+[a-zA-Z0-9_]+$/;*/
	var emailre= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	$("input[name='email']").blur(function(){
	    if(($(this).val()==="")){
			$(this).next(".div-warn").css("display","block");
			$(this).next(".div-warn").find(".warn-info").find("i").text("此项必须填写");
			return false;
		}
		else if(!(emailre.test($(this).val()))){
			$(this).next(".div-warn").css("display","block");
			$(this).next(".div-warn").find(".warn-info").find("i").text("无效的电子邮件或用户名");
			return false;
		}
		/*else if(!(usernamere.test($(this).val()))){
			$(this).next(".div-warn").css("display","block");
			$(this).next(".div-warn").find(".warn-info").find("i").text("无效的电子邮件或用户名");
			return false;
		}*/
		else{
			$(this).next(".div-warn").next(".warn-info").find("i").val("");
			$(this).next(".div-warn").css("display","none");
		}
	})	
})