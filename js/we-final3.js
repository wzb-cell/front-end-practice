// 输入密码
function password_input() {
    var password = "123456"
    for (var i = 0; i < password.length; i++) {
        var p = text(password[i].toString()).findOne().bounds();
        click(p.centerX(), p.centerY());
        sleep(100);
    }
}

// 解锁屏幕
function unlock() {
    if (!device.isScreenOn()) {
        device.wakeUp()
        sleep(500)
        var width = device.width
        var height = device.height
        setScreenMetrics(width, height)
        swipe(width / 2, height - 300, width / 2, 300, 1000)
        // swipe(540,2100,540,300,1000)
        sleep(1000)
        password_input()
    }
}

function killApp2(appName) {//填写包名或app名称都可以
    var name = getPackageName(appName);//通过app名称获取包名
    if(!name){//如果无法获取到包名，判断是否填写的就是包名
        if(getAppName(appName)){
            name = appName;//如果填写的就是包名，将包名赋值给变量
        }else{
            return false;
        } 
    }

    app.openAppSetting(name);//通过包名打开应用的详情页(设置页)
    text(app.getAppName(name)).waitFor();//通过包名获取已安装的应用名称，判断是否已经跳转至该app的应用设置界面
    sleep(1000);//稍微休息一下，不然看不到运行过程，自己用时可以删除这行
    let is_sure = textMatches(/(.*强.*|.*停.*|.*结.*)/).findOne();//在app的应用设置界面找寻包含“强”，“停”，“结”，“行”的控件
    //特别注意，应用设置界面可能存在并非关闭该app的控件，但是包含上述字样的控件，如果某个控件包含名称“行”字
    //textMatches(/(.*强.*|.*停.*|.*结.*|.*行.*)/)改为textMatches(/(.*强.*|.*停.*|.*结.*)/)
    //或者结束应用的控件名为“结束运行”直接将textMatches(/(.*强.*|.*停.*|.*结.*|.*行.*)/)改为text("结束运行")
    

    if (is_sure.enabled()) {//判断控件是否已启用（想要关闭的app是否运行）
        is_sure.parent().click();//结束应用的控件如果无法点击，需要在布局中找寻它的父控件，如果还无法点击，再上一级控件，本案例就是控件无法点击
        textMatches(/(.*确.*|.*定.*)/).findOne().click();//需找包含“确”，“定”的控件
        log(app.getAppName(name) + "应用已被关闭");
        sleep(1000);
        back();
    } else {
        log(app.getAppName(name) + "应用不能被正常关闭或不在后台运行");
        back();
    }
}



function swipeAction() {
    var xyArr = [220]
    var x0 = device.width / 2
    var y0 = device.height / 4 * 3
    var angle = 0
    var x = 0
    var y = 0
    for (let i = 0; i < 30; i++) {
        y = x * tan(angle)
        log(y)
        if ((y0 - y) < 0) {
            break
        }
        var xy = [x0 + x, y0 - y]
        xyArr.push(xy)
        x += 5;
        angle += 3
    }
    gesture.apply(null, xyArr)
    function tan(angle) {
        return Math.tan(angle * Math.PI / 180);
    }
}
unlock()
sleep(1000)
home()
killApp2("企业微信")
sleep(1000)
home()
sleep(1000)
launchApp("企业微信")
sleep(500)
while (!click("工作台"));
sleep(300)
while (!click("学生健康打卡"));
sleep(4000)
while (!click("提交"));
sleep(1000)
let i = 5
while(i--){
    back()
    sleep(1000)
}
sleep(1000)
home()
