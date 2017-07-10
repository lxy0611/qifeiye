/*
 * 定义动画背景
 */
var circleArr = [];

var animBag=function(pointNum,winWidth,winHeight,context,canvas){
	this.winWidth=winWidth;
	this.winHeight=winHeight;
	this.pointNum=pointNum;
	this.context=context;
	this.canvas=canvas;
}

//线条：开始xy坐标，结束xy坐标，线条透明度
function Line (x, y, _x, _y, o) {
	this.beginX = x,
	this.beginY = y,
	this.closeX = _x,
	this.closeY = _y,
	this.o = o;
}

//绘制线条
function drawLine (cxt, x, y, _x, _y, o) {
	var line = new Line(x, y, _x, _y, o)
	cxt.beginPath()
	cxt.strokeStyle = 'rgba(0,0,0,'+ o +')'
	cxt.moveTo(line.beginX, line.beginY)
	cxt.lineTo(line.closeX, line.closeY)
	cxt.closePath()
	cxt.stroke();
}

//点：圆心xy坐标，半径，每帧移动xy的距离
function Circle (x, y, r, moveX, moveY) {
	this.x = x,
	this.y = y,
	this.r = r,
	this.moveX = moveX,
	this.moveY = moveY;
}

// 绘制原点
function drawCricle(cxt, x, y, r, moveX, moveY) {
	var circle = new Circle(x, y, r, moveX, moveY);
	cxt.beginPath();
	cxt.arc(circle.x, circle.y, circle.r, 0, 2*Math.PI);
	cxt.closePath();
	cxt.fill();
	return circle;
}

//生成max和min之间的随机数，用作画圆的信息
function num (max, _min) {
	var min = arguments[1] || 0;
	return Math.floor(Math.random()*(max-min+1)+min);
}

//初始化生成原点
function initPoint(pointNum,context,winWidth,winHeight,canvas) {
   
	circleArr = [];
	for (var i = 0; i < pointNum; i++) {
		circleArr.push(drawCricle(context, num(winWidth), num(winHeight), num(15, 2), num(10, -10)/40, num(10, -10)/40));
	}
	draw(canvas,pointNum,context,canvas);
}


//每帧绘制
function draw (canvas,pointNum,context,canvas) {
	/*context.clearRect(0,0,canvas.width, canvas.height); //清了画布*/
	for (var i = 0; i < pointNum; i++) {
		drawCricle(context, circleArr[i].x, circleArr[i].y, circleArr[i].r);
	}
	for (var i = 0; i < pointNum; i++) {
		for (var j = 0; j < pointNum; j++) {
			if (i + j < pointNum) {
				var A = Math.abs(circleArr[i+j].x - circleArr[i].x),
					B = Math.abs(circleArr[i+j].y - circleArr[i].y);
				var lineLength = Math.sqrt(A*A + B*B);
				var C = 1/lineLength*7-0.009;
				var lineOpacity = C > 0.03 ? 0.03 : C;
				if (lineOpacity > 0) {
					drawLine(context, circleArr[i].x, circleArr[i].y, circleArr[i+j].x, circleArr[i+j].y, lineOpacity);
				}
			}
		}
	}
}

//调用执行
animBag.prototype.show=function () {
	console.log(this.context);
	initPoint(this.pointNum,this.context,this.winWidth,this.winHeight,this.canvas);
	setInterval(function (){
		for (var i = 0; i < a.pointNum; i++) {
			var cir = circleArr[i];
			cir.x += cir.moveX;
			cir.y += cir.moveY;
			if (cir.x > this.winWidth) cir.x = 0;
			else if (cir.x < 0) cir.x = this.winWidth;
			if (cir.y > this.winHeight) cir.y = 0;
			else if (cir.y < 0) cir.y = this.winHeight;	
		}
		draw();
	}, 16);
}





