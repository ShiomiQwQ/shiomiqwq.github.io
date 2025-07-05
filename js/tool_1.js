function query_tool_1(){
    let tool = document.getElementById("input_tool_1");
    let query_info = tool.value;
    let front = query_info.substr(0,2);
    if(front == "av"){
        let querying = query_info.substr(2);
        $.ajax({
            type: "get",
            url: 'https://api.bilibili.com/x/web-interface/view',
            data: {
                "aid": querying,
                "jsonp": "jsonp"
            },
            dataType: "jsonp",
            success: function (data) {
                if(data.code == 0){
                    tool.value = data.data.bvid
                }
                else {
                    tool.value = "";
                    tool.placeholder = "转换失败，请检查视频地址是否正确。";
                }
            },
            error: function(){
                tool.value = "";
                tool.placeholder = "转换失败，请检查网络情况。";
            }
        })
    }
    else if(front == "BV"){
        let querying = query_info;
        $.ajax({
            type: "get",
            url: 'https://api.bilibili.com/x/web-interface/view',
            data: {
                "bvid": querying,
                "jsonp": "jsonp"
            },
            dataType: "jsonp",
            success: function (data) {
                if(data.code == 0){
                    tool.value = "av" + data.data.aid;
                }
                else {
                    tool.value = "";
                    tool.placeholder = "转换失败，请检查视频地址是否正确。";
                }
            },
            error: function(){
                tool.value = "";
                tool.placeholder = "转换失败，请检查网络情况。";
            }
        })
    }
    else {
        tool.value = "";
        tool.placeholder = "请填写含 av 或 BV 前缀的视频。";
    }
}

function ifEnter_tool_1(event){
    if (event.keyCode == 13){
    	query_tool_1()
	}
}
