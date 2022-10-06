// 搜索模式
function SearchProgramBasicInfo () {
    var jsonData =
	{
	   "body" : "",
	   "guid" : "M-18",
	   "type" : "SEARCHPROGRAMBASICINFO"
	};

	var rtnJson = sendJson(jsonData);
}

function SearchProgramBasicInfoDo (obj) {
    OutputLog('处理搜索模式' + obj.type);
	var basicInfo = obj.body.basicInfo;
	if(basicInfo){
		for(var i=0;i<basicInfo.length;i++){
			OutputLog('模式ID,名称' + basicInfo[i].ID + "--" + basicInfo[i].name + "--" + basicInfo[i].playtime);
		}
	}
}

// 加载模式
function LoadProgram (id) {
    var jsonData =
	{
	   "body" : {
		  "id" : id
	   },
	   "guid" : "M-27",
	   "type" : "LOADPROGRAM"
	};

	var rtnJson = sendJson(jsonData);
}

// 处理加载模式
function LoadProgramDo (obj) {
    OutputLog('处理加载模式' + obj.type);
	OutputLog('模式名称' + obj.name);
	var scenes = obj.body.scenes;
	if(scenes){
		for(var i=0;i<scenes.length;i++){
			OutputLog('模式中的场景ID,名称' + scenes[i].ID + "--" + scenes[i].name);
		}
	}
}

//保存当前模式
function saveCurrentProgram() {
    var jsonData =
	{
	   "body" : {
		  "ID" : -1,
		  "description" : "www",
		  "name" : "www",
		  "playtime" : -1
	   },
	   "guid" : "M-53",
	   "type" : "SAVECURRENTPROGRAM"
	};

	var rtnJson = sendJson(jsonData);
}

//播放模式
function playProgram() {
    var jsonData =
	{
	   "body" : {
		  "id" : 209
	   },
	   "guid" : "M-79",
	   "type" : "PLAYPROGRAM"
	};

	var rtnJson = sendJson(jsonData);
}

