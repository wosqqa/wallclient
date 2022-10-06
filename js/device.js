//获取设备列表
function GetDeviceList() {
    var jsonData =
	{
	   "body" : {
		  "id" : 1,
		  "keyword" : ""
	   },
	   "guid" : "M-134",
	   "type" : "GETDEVICELIST"
	};

	var rtnJson = sendJson(jsonData);
}

function GetDeviceListDo(obj) {
	OutputLog('获取设备列表' + obj.type);
	var infoList = obj.body.infoList;
	if(infoList){
		for(var i=0;i<infoList.length;i++){
			OutputLog('获取设备列表' + infoList[i].deviceName);
		}
	}
}


//添加时钟控件
function AddWidgetTable_Clock() {
    var jsonData =
	{
	   "body" : {
		  "clock" : {
			 "countdowndatatime" : "00:10:00",
			 "iscountdownclock" : false,
			 "language" : true,
			 "showAnalogClock" : false,
			 "showDate" : true,
			 "showDigitalClock" : true,
			 "showIn24Hours" : false,
			 "showbackground" : false
		  },
		  "height" : 400,
		  "slaveID" : 100,
		  "slave_scale_height" : 0.370370,
		  "slave_scale_width" : 0.1250,
		  "slave_scale_x" : 0.0,
		  "slave_scale_y" : 0.0,
		  "type" : 0,
		  "widgetPositionXML" : "<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<Root>\n    <X>0</X>\n    <Y>0</Y>\n    <Width>400</Width>\n    <Height>400</Height>\n    <Slave ID=\"100\">\n        <X>0</X>\n        <Y>0</Y>\n        <Width>0.125</Width>\n        <Height>0.37037</Height>\n    </Slave>\n</Root>\n",
		  "width" : 400,
		  "x" : 0,
		  "y" : 0,
		  "zorder" : 1501
	   },
	   "guid" : "M-117",
	   "type" : "ADDWIDGET"
	};

	var rtnJson = sendJson(jsonData);
}

//添加天气控件
function AddWidgetTable_Weather() {
    var jsonData =
	{
	   "body" : {
		  "height" : 400,
		  "slaveID" : 100,
		  "slave_scale_height" : 0.370370,
		  "slave_scale_width" : 0.1250,
		  "slave_scale_x" : 0.0,
		  "slave_scale_y" : 0.0,
		  "type" : 1,
		  "weather" : {
			 "city" : "Shanghai",
			 "highTemperature" : "20",
			 "language" : "zh-CN",
			 "lowTemperature" : "10",
			 "proxyIP" : "",
			 "proxyPort" : "",
			 "temperFormat" : "C",
			 "useProxy" : false,
			 "useTrans" : false,
			 "weatherImage" : "32d.png",
			 "weatherName" : "Weather",
			 "weatherTitle" : "tornado",
			 "woeid" : "2151849"
		  },
		  "widgetPositionXML" : "<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<Root>\n    <X>0</X>\n    <Y>0</Y>\n    <Width>400</Width>\n    <Height>400</Height>\n    <Slave ID=\"100\">\n        <X>0</X>\n        <Y>0</Y>\n        <Width>0.125</Width>\n        <Height>0.37037</Height>\n    </Slave>\n</Root>\n",
		  "width" : 400,
		  "x" : 0,
		  "y" : 0,
		  "zorder" : 1501
	   },
	   "guid" : "M-31",
	   "type" : "ADDWIDGET"
	};

	var rtnJson = sendJson(jsonData);
}