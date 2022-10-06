//添加Message项
function addMessageTable() {
    var jsonData =
	{
	   "body" : {
		  "backgroundBlueColor" : 149,
		  "backgroundGreenColor" : 255,
		  "backgroundRedColor" : 43,
		  "blueColor" : 10,
		  "content" : "welcome again",
		  "direction" : 1,
		  "font" : "宋体",
		  "fontBold" : false,
		  "fontItalic" : false,
		  "fontSize" : 100,
		  "fontUnderline" : false,
		  "greenColor" : 77,
		  "height" : 147,
		  "messageContentXML" : "<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<Root>\n    <Content>welcome again</Content>\n    <Direction>1</Direction>\n    <TextLayout>1</TextLayout>\n    <Font>宋体</Font>\n    <FontSize>100</FontSize>\n    <FontBold>0</FontBold>\n    <FontItalic>0</FontItalic>\n    <FontUnderline>0</FontUnderline>\n    <RedColor>232</RedColor>\n    <GreenColor>77</GreenColor>\n    <BlueColor>10</BlueColor>\n    <BackRedColor>43</BackRedColor>\n    <BackGreenColor>255</BackGreenColor>\n    <BackBlueColor>149</BackBlueColor>\n    <Transparency>100</Transparency>\n    <Speed>50</Speed>\n</Root>\n",
		  "messageName" : "message_22",
		  "messagePositionInfoList" : [
			 {
				"message_slave_height" : 1.0,
				"message_slave_width" : 1.0,
				"message_slave_x" : 0.0,
				"message_slave_y" : 0.0,
				"slaveID" : 100,
				"slave_scale_height" : 0.1361110,
				"slave_scale_width" : 0.2834380,
				"slave_scale_x" : 0.6353120,
				"slave_scale_y" : 0.1231480
			 }
		  ],
		  "messagePositionXML" : "<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<Root>\n    <messagePositionInfo X=\"2033\" Y=\"133\" Width=\"907\" Height=\"147\" />\n    <slavePositionInfo ID=\"100\" X=\"0.635312\" Y=\"0.123148\" Width=\"0.283438\" Height=\"0.136111\" Message_Scale_X=\"0\" Message_Scale_Y=\"0\" Message_Scale_Width=\"1\" Message_Scale_Height=\"1\" />\n</Root>\n",
		  "permanentRun" : 0,
		  "redColor" : 232,
		  "speed" : 50,
		  "status" : 0,
		  "textHorizontalLayout" : true,
		  "transparency" : 100,
		  "width" : 907,
		  "x" : 2033,
		  "y" : 133,
		  "zorder" : 1001
	   },
	   "guid" : "M-65",
	   "type" : "ADDMESSAGE"
	};

	var rtnJson = sendJson(jsonData);
}

//删除Message项
function deleteMessageTable() {
    var jsonData =
	{
	   "body" : {
		  "backgroundBlueColor" : 149,
		  "backgroundGreenColor" : 255,
		  "backgroundRedColor" : 43,
		  "blueColor" : 10,
		  "content" : "welcome again",
		  "direction" : 1,
		  "font" : "宋体",
		  "fontBold" : false,
		  "fontItalic" : false,
		  "fontSize" : 100,
		  "fontUnderline" : false,
		  "greenColor" : 77,
		  "height" : 147,
		  "id" : 298,
		  "messageContentXML" : "<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<Root>\n    <Content>welcome again</Content>\n    <Direction>1</Direction>\n    <TextLayout>1</TextLayout>\n    <Font>宋体</Font>\n    <FontSize>100</FontSize>\n    <FontBold>0</FontBold>\n    <FontItalic>0</FontItalic>\n    <FontUnderline>0</FontUnderline>\n    <RedColor>232</RedColor>\n    <GreenColor>77</GreenColor>\n    <BlueColor>10</BlueColor>\n    <BackRedColor>43</BackRedColor>\n    <BackGreenColor>255</BackGreenColor>\n    <BackBlueColor>149</BackBlueColor>\n    <Transparency>100</Transparency>\n    <Speed>50</Speed>\n</Root>\n",
		  "messageName" : "message_22",
		  "messagePositionInfoList" : [
			 {
				"message_slave_height" : 1.0,
				"message_slave_width" : 1.0,
				"message_slave_x" : 0.0,
				"message_slave_y" : 0.0,
				"slaveID" : 100,
				"slave_scale_height" : 0.1361110,
				"slave_scale_width" : 0.2834380,
				"slave_scale_x" : 0.3103120,
				"slave_scale_y" : 0.1111110
			 }
		  ],
		  "messagePositionXML" : "<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<Root>\n    <messagePositionInfo X=\"993\" Y=\"120\" Width=\"907\" Height=\"147\" />\n    <slavePositionInfo ID=\"100\" X=\"0.310312\" Y=\"0.111111\" Width=\"0.283438\" Height=\"0.136111\" Message_Scale_X=\"0\" Message_Scale_Y=\"0\" Message_Scale_Width=\"1\" Message_Scale_Height=\"1\" />\n</Root>\n",
		  "permanentRun" : 0,
		  "redColor" : 232,
		  "speed" : 50,
		  "status" : 0,
		  "textHorizontalLayout" : true,
		  "transparency" : 100,
		  "width" : 907,
		  "x" : 993,
		  "y" : 120,
		  "zorder" : 1001
	   },
	   "guid" : "M-97",
	   "type" : "DELETEMESSAGE"
	};

	var rtnJson = sendJson(jsonData);
}

//编辑Message项
function editMessageTable() {
    var jsonData =
	{
	   "body" : {
		  "backgroundBlueColor" : 149,
		  "backgroundGreenColor" : 255,
		  "backgroundRedColor" : 43,
		  "blueColor" : 10,
		  "content" : "welcome again",
		  "direction" : 1,
		  "font" : "宋体",
		  "fontBold" : false,
		  "fontItalic" : false,
		  "fontSize" : 100,
		  "fontUnderline" : false,
		  "greenColor" : 77,
		  "height" : 147,
		  "id" : 298,
		  "messageContentXML" : "<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<Root>\n    <Content>welcome again</Content>\n    <Direction>1</Direction>\n    <TextLayout>1</TextLayout>\n    <Font>宋体</Font>\n    <FontSize>100</FontSize>\n    <FontBold>0</FontBold>\n    <FontItalic>0</FontItalic>\n    <FontUnderline>0</FontUnderline>\n    <RedColor>232</RedColor>\n    <GreenColor>77</GreenColor>\n    <BlueColor>10</BlueColor>\n    <BackRedColor>43</BackRedColor>\n    <BackGreenColor>255</BackGreenColor>\n    <BackBlueColor>149</BackBlueColor>\n    <Transparency>100</Transparency>\n    <Speed>50</Speed>\n</Root>\n",
		  "messageName" : "message_22",
		  "messagePositionInfoList" : [
			 {
				"message_slave_height" : 1.0,
				"message_slave_width" : 1.0,
				"message_slave_x" : 0.0,
				"message_slave_y" : 0.0,
				"slaveID" : 100,
				"slave_scale_height" : 0.1361110,
				"slave_scale_width" : 0.2834380,
				"slave_scale_x" : 0.3103120,
				"slave_scale_y" : 0.1111110
			 }
		  ],
		  "messagePositionXML" : "<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<Root>\n    <messagePositionInfo X=\"993\" Y=\"120\" Width=\"907\" Height=\"147\" />\n    <slavePositionInfo ID=\"100\" X=\"0.310312\" Y=\"0.111111\" Width=\"0.283438\" Height=\"0.136111\" Message_Scale_X=\"0\" Message_Scale_Y=\"0\" Message_Scale_Width=\"1\" Message_Scale_Height=\"1\" />\n</Root>\n",
		  "permanentRun" : 0,
		  "redColor" : 232,
		  "speed" : 50,
		  "status" : 0,
		  "textHorizontalLayout" : true,
		  "transparency" : 100,
		  "width" : 907,
		  "x" : 993,
		  "y" : 120,
		  "zorder" : 1001
	   },
	   "guid" : "M-77",
	   "type" : "EDITMESSAGE"
	};

	var rtnJson = sendJson(jsonData);
}


//查询Message项
function queryMessageTable() {
    var jsonData =
	{
	   "body" : {
		  "keyWords" : "messag"
	   },
	   "guid" : "M-91",
	   "type" : "QUERYMESSAGE"
	};

	var rtnJson = sendJson(jsonData);
}
