function search(){
    var engine = document.getElementById("search_engine").value;
	var content = document.getElementById("search").value;
	if(engine == "baidu"){
		window.open("https://www.baidu.com/s?wd="+content)
	}
	if(engine == "bing"){
		window.open("https://cn.bing.com/search?q="+content)
	}
	if(engine == "google"){
		window.open("https://www.google.com/search?q="+content)
	}
	if(engine == "otomadwiki"){
		window.open("https://otomad.wiki/index.php?search="+content)
	}
	if(engine == "bilibili"){
		window.open("https://search.bilibili.com/all?keyword="+content)
	}
	if(engine == "niconico"){
		window.open("https://www.nicovideo.jp/search/"+content)
	}
	if(engine == "youtube"){
		window.open("https://www.youtube.com/results?search_query="+content)
	}
	if(engine == "acfun"){
		window.open("https://www.acfun.cn/search?keyword="+content)
	}
	if(engine == "miao"){
		window.open("https://www.mfuns.net/search?q="+content)
	}
}

function search_engine_logo(){
	var odclass = "display-logo";
	var logo = document.getElementById("display_logo");
	logo.className = "";
	var engine = document.getElementById("search_engine").value;
	var content = document.getElementById("search").value;
	var d = new Date();
    var exdays = 365;
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
	document.cookie = "search_engine="+engine+";"+expires;
	if(engine == "baidu"){
		logo.style.webkitMaskImage = "url(logo/baidu.svg)";
		setTimeout(function(){
			logo.className = odclass;
			},1)
	}
	if(engine == "bing"){
		logo.style.webkitMaskImage = "url(logo/bing.svg)";
		setTimeout(function(){
			logo.className = odclass;
			},1)
	}
	if(engine == "google"){
		logo.style.webkitMaskImage = "url(logo/google.svg)";
		setTimeout(function(){
			logo.className = odclass;
			},1)
	}
	if(engine == "otomadwiki"){
		logo.style.webkitMaskImage = "url(logo/otomadwiki.svg)";
		setTimeout(function(){
			logo.className = odclass;
			},1)
	}
	if(engine == "bilibili"){
		logo.style.webkitMaskImage = "url(logo/bilibili.svg)";
		setTimeout(function(){
			logo.className = odclass;
			},1)
	}
	if(engine == "niconico"){
		logo.style.webkitMaskImage = "url(logo/niconico.svg)";
		setTimeout(function(){
			logo.className = odclass;
			},1)
	}
	if(engine == "youtube"){
		logo.style.webkitMaskImage = "url(logo/youtube.svg)";
		setTimeout(function(){
			logo.className = odclass;
			},1)
	}
	if(engine == "acfun"){
		logo.style.webkitMaskImage = "url(logo/acfun.svg)";
		setTimeout(function(){
			logo.className = odclass;
			},1)
	}
	if(engine == "miao"){
		logo.style.webkitMaskImage = "url(logo/miao.png)";
		setTimeout(function(){
			logo.className = odclass;
			},1)
	}
}

function ifEnter(event){
	if (event.keyCode == 13){
    	search()
	}
}

function getCookie(cname)
{
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) 
  {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
  return "";
}

function engine_detect(){
	var dec_engine = getCookie("search_engine");
	var engine = document.getElementById("search_engine");
	for(i=0;i<engine.length;i++){
  		if(engine[i].value == dec_engine){
    		engine[i].selected = true;
			search_engine_logo();
		}
	}
}
