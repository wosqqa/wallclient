String.prototype.getParameter = function (key) {
    var re = new RegExp(key + '=([^&]*)(?:&)?');
    return this.match(re) && this.match(re)[1];
};
var s = location.href;
var storage = window.localStorage;

var serverURL = "";

var socket;
var socketOpen = 0;
var httpsConnect = 0;


function initConnect() {
	var text = $('#ipport').val();
	if (text == "") {
		alert("Please input host ip and port !");
		return;
	}
	if (socketOpen == 0){
		connect();
	} else {
		socket.close();
		socketOpen = 0;
		$("#connect").text("Connect");
	}
};
function OutputLog(msg) {
	var content = '<p>' + msg + '</p>';
	console.log(content);
};
function processConnect(wsURL) {
	try {
		socket = new WebSocket(wsURL);
		OutputLog('Socket Status: ' + socket.readyState);
		socket.onopen = function () {
			socketOpen = 1;
			$("#connect").text("Disconnect");
			OutputLog('Socket Status: ' + socket.readyState + ' (open)');
		}
		socket.onmessage = function (msg) {
			var str = "";
			str = msg.data;
			doMsg(str);
		}
		socket.onclose = function () {
			socketOpen = 0;
			$("#connect").text("Connect");
			OutputLog('Socket Status: ' + socket.readyState + ' (Closed)');
		}
	} catch (exception) {
		OutputLog('Error' + exception);
	}
}
function connect() {
	var iptext = $('#ipport').val();
	var wsURL = "ws://" + iptext + "/test";
	var httpsURL = "http://" + iptext + "/test";
	if(httpsConnect == 0) {
		var win = window.open(httpsURL,"");
		httpsConnect = 1;
	} else {
		processConnect(wsURL);

		setInterval(function(){
			//心跳检测
			var jsonData =
			{
				"body" : "",
				"guid" : "",
				"type" : "MASTERHEARTBEAT"
			};
			var rtnJson = sendJson(jsonData);
		},500);
	}
}

//客户发送WS消息
function sendJson(jsonData){
	var jsonDataStr = JSON.stringify(jsonData);
	socket.send(jsonDataStr);
	//OutputLog('Send message' + jsonDataStr);
}
//客户发送HTTP消息
function sendJsonHttp(jsonData){
	$.ajax({ 
		contentType: 'application/json',
		type: 'POST',
		url: serverURL,
		dataType: "json",
		data: JSON.stringify(jsonData),
		success: function (message) {
			alert(message);
			return message;
		},
		error: function (message) {
			console.log(message);
			alert("提交数据失败！888"+message);
        }
	});
}

//用户登录
function QueryUserLoginTable(username,password) {
    var jsonData =
	{
	   "body" : {
		  "userName" : username,
		  "userPassword" : password
	   },
	   "guid" : "M-0",
	   "type" : "QUERYUSERLOGIN"
	};

	var rtnJson = sendJson(jsonData);
}

//用户登录
function QueryUserLoginTableDo(obj) {
	OutputLog('处理用户登录' + obj.type);
	var userAuthority = obj.body.userAuthority;
	if(userAuthority){
		OutputLog('获取设备列表' + userAuthority.deviceConfiguration);
	}
}


