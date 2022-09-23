/*
 * @PackageName: 
 * @Description: 
 * @Author: Man
 * @Date: 2022-09-01 11:44:27
 * @LastModifiedBy: git config user.name
 * @LastEditTime: 2022-09-23 15:26:20
 */
// 输入密码
function password_input()
{
    var password = "123456"
    for(var i = 0; i < password.length; i++)
    {
        var p = text(password[i].toString()).findOne().bounds();
        click(p.centerX(), p.centerY());
        sleep(100);
    }
}
 
// 解锁屏幕
function unlock()
{
    if(!device.isScreenOn())
    {
        device.wakeUp()
        sleep(500)
        var width = device.width
        var height = device.height
        setScreenMetrics(width, height)
        swipe(width/2, height-300, width/2, 300, 1000)
        // swipe(540,2100,540,300,1000)
        sleep(1000)
        password_input()
    }
}
//关闭应用 
function killApp(appName) {
    let forcedStopStr = ["结束", "停", "强"];
    let packageName = app.getPackageName(appName);//获取应用包名 通过软件名
    if (packageName) {
        app.openAppSetting(packageName);//进入应用设置信息
        text(appName).waitFor();//等待查询到名字出现
        for (var i = 0; i < forcedStopStr.length; i++) {
            if (textContains(forcedStopStr[i]).exists()) {//判定关键字是否存在
                sleep(500);
                let forcedStop = textContains(forcedStopStr[i]).findOne();
                if (forcedStop.enabled()) {
                    text("结束运行").waitFor();
                    //这里的结束运行不能被点击,我用控件中心点来点击
                    var 结束运行 = text("结束运行").findOne().bounds();
                    click(结束运行.centerX(), 结束运行.centerY());
                    sleep(500);
                    forcedStop.click();
                    text("确定").findOne().click();
                    sleep(1000);
                    home();
                    break;
                }
            }
        }
    }
}
function swipeAction(){
    var xyArr = [220]
    var x0=device.width/2
    var y0=device.height/4*3
    var angle = 0
    var x = 0
    var y = 0
    for (let i = 0; i < 30; i++) {
      y = x * tan(angle)
      log(y)
      if((y0-y)<0){
        break
      }
      var xy = [x0+x,y0-y]
      xyArr.push(xy)
      x += 5;
      angle += 3
    }
    gesture.apply(null,xyArr)
    function tan(angle) {
      return Math.tan(angle * Math.PI / 180);
    }
  }
unlock()
sleep(1000)
killApp("企业微信")
sleep(500)
launchApp("企业微信")
sleep(500)
while(!click("工作台"));
sleep(300)
while(!click("学生健康打卡"));
sleep(2000)
while(!click("提交"));
sleep(2000)
while(!click("确定"));
sleep(1000)
home()