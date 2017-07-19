$(function(){
	//判断密码
	$("input[name='password']").blur(function(){
	    	if($(this).val()===""){
	    		$(this).next(".div-warn").css("display","block");
				$(this).next(".div-warn").find(".warn-info").find("i").text("此项必须填写");
				return false;
	    	}
	    	else if($(this).val().length<8){
	    		$(this).next(".div-warn").css("display","block");
	    		$(this).next(".div-warn").find(".warn-info").find("i").text("你的密码太短了");
	    		return false;
	    	}
	    	else{
	    		$(this).next(".div-warn").find(".warn-info").find("i").val("");
	    		$(this).next(".div-warn").css("display","none");
	    		
	    	}
	  })
	
    //二次确认密码
    
	$("input[name='confirm-password']").blur(function(){
		var pwd=$("input[name='password']").val();
	    	if(($(this).val()==="")){
	    		$(this).next(".div-warn").css("display","block");
				$(this).next(".div-warn").find(".warn-info").find("i").text("此项必须填写");
				return false;
	    	}
	    	else if(!($(this).val()===pwd)){
	    		$(this).next(".div-warn").css("display","block");
	    		$(this).next(".div-warn").find(".warn-info").find("i").text("两个密码不匹配");
				return false;
	    	}
	    	else{
	    		$(this).next(".div-warn").find(".warn-info").find("i").val("");
	    		$(this).next(".div-warn").css("display","none");
	    	}
	  })   	
	//邮箱
	var emailre= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	$("input[name='email']").blur(function(){
		    if(($(this).val()==="")){
	    		$(this).next(".div-warn").css("display","block");
				$(this).next(".div-warn").find(".warn-info").find("i").text("此项必须填写");
				return false;
	    	}
	    	else if(!(emailre.test($(this).val()))){
	    		$(this).next(".div-warn").css("display","block");
	    		$(this).next(".div-warn").find(".warn-info").find("i").text("请输入一个有效的电子邮件");
				return false;
	    	}
	    	else{
	    		$(this).next(".div-warn").find(".warn-info").find("i").val("");
	    		$(this).next(".div-warn").css("display","none");
	    	}
	   })
	
	//问题
	let a=Math.floor(Math.random() * 100);
	let b=Math.floor(Math.random() * 100);
	let quest=a+"+"+b+"等于几？";
	let sum=a+b;
	$(".label-quest").text(quest);
	$("input[name='answer']").blur(function(){
		    if($(this).val()===""){
		    	$(this).next(".div-warn").css("display","block");
		    	$(this).next(".div-warn").find(".warn-info").find("i").text("此项必须填写");
				return false;
		    }
	    	else if(!($(this).val()==sum)){
				$(this).next(".div-warn").css("display","block");
				$(this).next(".div-warn").find(".warn-info").find("i").text("回答错误");
				return false;
	    	}
	    	else{
	    		$(this).next(".div-warn").find(".warn-info").find("i").val("");
	    		$(this).next(".div-warn").css("display","none");
	    	}
	  })
	
	//注册按钮
	$(".btn-register").click(function(){
		if($("input[type='checkbox']").is(':checked')){
		    $(".div-warn2").find(".warn-info").find("i").val("");
	    	$(".div-warn2").css("display","none");
		}
		else{
		    $(".div-warn2").css("display","block");
		    $(".div-warn2").find(".warn-info").find("i").text("您必须服务我们的协议");
		    return false;
		}
		
	})
	
})