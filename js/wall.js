//var firstBrand = s.getParameter("brandId");

//主动向服务器发送获取大屏内容请求，一般用于程序刚刚启动的时候
function notifyScreenContent() {
	
    var jsonData =
	{
	   "body" : "",
	   "guid" : "M-10",
	   "type" : "GETSCREENCONTENT"
	};

	var rtnJson = sendJson(jsonData);
}

function notifyScreenContentDo(obj) {
	OutputLog('获取大屏内容进行处理' + obj.type);
}


//静音/取消静音所有层
function MuteAllLayer() {
    var jsonData =
	{
	   "body" : {
		  "mute" : true
	   },
	   "guid" : "M-44",
	   "type" : "MUTEALLLAYER"
	};

	var rtnJson = sendJson(jsonData);
}

//暂停播放显示墙
function PausePlayer() {
    var jsonData =
	{
	   "body" : {
		  "pause" : true
	   },
	   "guid" : "M-103",
	   "type" : "PAUSEPLAYER"
	};

	var rtnJson = sendJson(jsonData);
}

// 播放下一个场景
function NextScene() {
    var jsonData =
	{
	   "body" : "",
	   "guid" : "M-168",
	   "type" : "NEXTSCENE"
	};

	var rtnJson = sendJson(jsonData);
}

// 播放上一个场景
function PreviousScene() {
    var jsonData =
	{
	   "body" : "",
	   "guid" : "M-179",
	   "type" : "PREVIOUSSCENE"
	};

	var rtnJson = sendJson(jsonData);
}


//开启实时控制显示墙
function startExhibition() {
    var jsonData =
	{
	   "body" : "",
	   "guid" : "M-212",
	   "type" : "STARTEXHIBITION"
	};

	var rtnJson = sendJson(jsonData);
}

//停止实时控制显示墙
function startExhibition() {
    var jsonData =
	{
	   "body" : "",
	   "guid" : "M-181",
	   "type" : "STOPEXHIBITION"
	};

	var rtnJson = sendJson(jsonData);
}

//远程控制时发送移动鼠标请求
function mouseMoveRequest() {
    var jsonData =
	{
	   "body" : {
		  "MK_MouseEvent" : 0,
		  "x" : 2331,
		  "y" : 25
	   },
	   "guid" : "M-210",
	   "type" : "MOUSEMOVEREQUEST"
	};

	var rtnJson = sendJson(jsonData);
}

//开始远程控制，可对远程大屏上的内容进行实时拖放和调整大小
function startRemoteControl() {
    var jsonData =
	{
	   "body" : "",
	   "guid" : "M-182",
	   "type" : "STARTREMOTECONTROL"
	};

	var rtnJson = sendJson(jsonData);
}

//开始远程控制，可对远程大屏上的内容进行实时拖放和调整大小
function stopRemoteControl() {
    var jsonData =
	{
	   "body" : "",
	   "guid" : "M-211",
	   "type" : "STOPREMOTECONTROL"
	};

	var rtnJson = sendJson(jsonData);
}

