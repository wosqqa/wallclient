//运行预案
function runMission() {
    var jsonData =
	{
	   "body" : "",
	   "guid" : "M-60",
	   "type" : "RUNMISSION"
	};

	var rtnJson = sendJson(jsonData);
}

//保存Mission任务表
function saveMissionTable() {
    var jsonData =
	{
	   "body" : {
		  "missionItemInfo" : [
			 {
				"beginTime" : "2015-06-02 04:27:27",
				"contentID" : 126,
				"contentName" : "模式 2",
				"endTime" : "2015-06-02 08:25:13"
			 },
			 {
				"beginTime" : "2015-06-02 12:10:44",
				"contentID" : 167,
				"contentName" : "gd",
				"endTime" : "2015-06-02 17:24:55"
			 }
		  ]
	   },
	   "guid" : "M-129",
	   "type" : "SAVEMISSION"
	};

	var rtnJson = sendJson(jsonData);
}

//查询Mission表任务
function queryMissionTable() {
    var jsonData =
	{
	   "body" : "",
	   "guid" : "M-134",
	   "type" : "QUERYMISSION"
	};

	var rtnJson = sendJson(jsonData);
}
