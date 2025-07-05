function show_time(){
    var date = new Date();
    var mtime = date.getMinutes();
    if(mtime < 10){
        var mtime = "0" + mtime
    }
    var htime = date.getHours();
    if(htime < 10){
        var htime = "0" + htime
    }
    var stime = date.getSeconds();
    if(stime < 10){
        var stime = "0" + stime
    }
    var time_div = document.getElementById("timing");
    time_div.innerHTML = htime + ":" + mtime + "<span class='small-sec'>:" + stime + "</span>";
}

setInterval("show_time()",1000);
