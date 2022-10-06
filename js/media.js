//获取指定级联Server下指定媒体文件夹下所有媒体文件
function GetCascadeServerMediaFileList() {
    var jsonData =
	{
	   "body" : {
		  "typeid" : "219"
	   },
	   "guid" : "M-117",
	   "type" : "GETCASCADESERVERMEDIAFILELIST"
	};

	var rtnJson = sendJson(jsonData);
}

function GetCascadeServerMediaFileListDo(obj) {
	OutputLog('获取指定级联Server下指定媒体文件夹下所有媒体文件' + obj.type);
}
