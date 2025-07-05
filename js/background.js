function change_background(obj){
    var back_content = document.getElementById("input_back").value;
    var form = back_content.split(".");
    var webs = back_content.split("/");
    var format = form[form.length-1].split("?")[0];
    var license = webs[0];
    var format_list = ['avif','bmp','gif','ico','png','jpeg','jpg','svg','tiff','webp','php'];
    var license_list = ['http:','https:'];
    if(format_list.includes(format) && license_list.includes(license)){
        document.getElementById("backform").submit();
    }
    else{
        mdui.snackbar({
            message: '<i class="mdui-icon material-icons">&#xe000;</i>  这不是受支持的图片格式或地址，请重新输入。',
            position: 'top'
            });
    }
}

engine_detect();

function backTop(){
    let box = document.getElementById("onBox");
    let back = document.getElementById("background");
    if(box.className != "hid_onbox"){
        box.className = "hid_onbox";
        back.className = "background-only";
    } else {
        box.className = "dis_onbox";
        back.className = "background";
    }
}
