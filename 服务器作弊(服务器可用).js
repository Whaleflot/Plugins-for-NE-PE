/* By Chunyulin
   作者：大龙   
  QQ:2697661934
  
^  请尽量少作弊，保证优良品德  */

var vers1=1,vers2=1,vers3=730  //JS版本
var eaed=4  //按钮之间的空隙

var shout=1
var jilou=false
var beied=false
var chaie=false
var kuaijli=true
var flymode=false
var daymode=false
var tipmode=false
var mugmode=true
var mugirmode=false
var animamode=false
var chtaomode=false
var gongomode=false
var shuipmode=false
var option_anima=false
var option_chtao=false
var option_gongo=false
var option_shuip=false
var option_mugir=false
var option_kuank=true
var option_kuan=false
var option_mug=true
var option_fly=false
var option_xyz=false
var option_day=false

Block.setLightLevel(14,15)
Block.setLightLevel(15,15)
Block.setLightLevel(16,15)
Block.setLightLevel(21,15)
Block.setLightLevel(56,15)
Block.setLightLevel(73,15)
Block.setLightLevel(129,15)
Block.setShape
(14,0.001,0.001,0.001,0.999,0.999,0.999)
Block.setShape
(15,0.001,0.001,0.001,0.999,0.999,0.999)
Block.setShape
(16,0.001,0.001,0.001,0.999,0.999,0.999)
Block.setShape
(21,0.001,0.001,0.001,0.999,0.999,0.999)
Block.setShape
(56,0.001,0.001,0.001,0.999,0.999,0.999)
Block.setShape
(73,0.001,0.001,0.001,0.999,0.999,0.999)
Block.setShape
(129,0.001,0.001,0.001,0.999,0.999,0.999)

function attackHook(w,e){
if(getCarriedItem()==280&&mugirmode==true){preventDefault();rideAnimal(w,e)}}

function useItem(x,y,z,i,b,s,it,bl){
if(i==280&&mugmode==true){
Level.addParticle(ParticleType.redstone, getPlayerX(),getPlayerY()-1,getPlayerZ(),0,5,0,7)
Entity.setPosition(getPlayerEnt(),x,y+3,z)
Level.addParticle(ParticleType.redstone, getPlayerX(),getPlayerY()-2,getPlayerZ(),0,5,0,7)}}

function entityAddedHook(e){
if(beied==true){
if(Entity.getEntityTypeId(e)==80){
Entity.setPosition
(Player.getEntity(),Entity.getX(beiod), Entity.getY(beiod)+2,Entity.getZ(beiod))
beied=false}}}

function Shekuns(){
if(beied==false){beied=true}
else{beied=false}
var beiod=Level.spawnMob(Player.getX()+Math.sin((getYaw()%360)*Math.PI/180)*1.5*Math.cos(getPitch()*Math.PI/180)/(-1),Player.getY()+Math.sin(getPitch()*Math.PI/180)*2.1*(-1),Player.getZ()+Math.cos((getYaw()%360)*Math.PI/180)*1.5*Math.cos(getPitch()*Math.PI/180),80)
Entity.setVelX(beiod,Math.sin((getYaw()%360)*Math.PI/180)*6*Math.cos(getPitch()*Math.PI/180)/(-1))
Entity.setVelY(beiod,Math.sin(getPitch()*Math.PI/180)*6*(-1))
Entity.setVelZ(beiod,Math.cos((getYaw()%360)*Math.PI/180)*6*Math.cos(getPitch()*Math.PI/180))}

function getPlayerent(){
return getPlayerEnt()}

function modTick(){
playerx=Math.floor(getPlayerX())
playery=Math.floor(getPlayerY())
playerz=Math.floor(getPlayerZ())
if(shuipmode==true){
if(getTile(playerx,playery-2,playerz)==8||getTile(playerx,playery-2,playerz)==9){
setVelY(getPlayerEnt(),0.000000001)}}
if(chtaomode==true&&chaie==true){
setVelY(getPlayerEnt(),0.7)
Player.setHealth(40000);chaie=false}
if(animamode==true){
if(getTile(playerx,playery-2,playerz)!=0){
Level.addParticle(13,getPlayerX(),getPlayerY()-1,getPlayerZ(),2,2,2,5)}
if(shout==1){shout=2;xbefore=getPlayerX()
zbefore=getPlayerZ()}
if(shout==3){shout=1
xafter=getPlayerX()-xbefore
zafter=getPlayerZ()-zbefore
setVelX(getPlayerEnt(),xafter)
setVelZ(getPlayerEnt(),zafter)
xafter=0;zafter=0}
if(shout!=1){shout=shout+1}}
if(daymode==true){Level.setTime(24000)}
if(tipmode==true){ModPE.showTipMessage
(playerx+" , "+playery+" , "+playerz)}}

function dip2px(ctx,dips){
return Math.ceil(dips*ctx.getResources().getDisplayMetrics().density)}

var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get() 
ctx.runOnUiThread(new java.lang.Runnable({run:function(){try{
var dialog=new android.app.AlertDialog.Builder(ctx)
dialog.setMessage("服务器JS已载入游戏")
dialog.show();XRayken()
var layout=new android.widget.LinearLayout(ctx)
var weup=new android.widget.Button(ctx)
weup.setBackgroundColor(android.graphics.Color.argb(30,255,255,255))
weup.setText("F")
weup.setOnClickListener(new android.view.View.OnClickListener(){
onClick:function(v){openMenu()}})
layout.addView(weup)
openWindow=new android.widget.PopupWindow(layout,dip2px(ctx,36), dip2px(ctx,36))
openWindow.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.BOTTOM|android.view.Gravity.LEFT,+4,+4)
var layout=new android.widget.LinearLayout(ctx)
var weup=new android.widget.Button(ctx)
weup.setBackgroundColor(android.graphics.Color.argb(30,255,255,255))
weup.setText("~")
weup.setOnClickListener(new android.view.View.OnClickListener(){
onClick:function(v){Chatoptions()}})
layout.addView(weup)
openWindow=new android.widget.PopupWindow(layout,dip2px(ctx,34), dip2px(ctx,32))
openWindow.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.TOP|android.view.Gravity.RIGHT,+54,+4)
}catch(err){print("错误:"+err)}}}))

function openMenu(){
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
var layout=new android.widget.LinearLayout(ctx);try{
var menu=new android.widget.PopupWindow(layout,dip2px(ctx,85), dip2px(ctx,35))
menu.setFocusable(true)
mainMenu=menu
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx,5),0,0,0);
var title=new android.widget.TextView(ctx)
title.setTextSize(22)
title.setTextColor(android.graphics.Color.rgb(255,255,255))
title.setText("服务器辅助")
title.setLayoutParams(textParams)
layout.addView(title)
var title=new android.widget.TextView(ctx)
title.setTextSize(16)
title.setTextColor(android.graphics.Color.rgb(225,225,225))
title.setText
("v"+vers1+"."+vers2+"."+vers3+"  测试版")
title.setLayoutParams(textParams)
layout.addView(title)
var fly=new android.widget.CheckBox(ctx)
fly.setTextColor(android.graphics.Color.rgb(255,0,0))
fly.setText("飞行模式")
fly.setChecked(option_fly)
fly.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener(){
onCheckedChanged:function(v,isChecked){
if(flymode==false){Player.setCanFly(true)
flymode=true
clientMessage("【JS】飞行模式已开启")}
else{Player.setCanFly(false)
flymode=false
clientMessage("【JS】飞行模式已关闭")}
option_fly=isChecked}})
layout.addView(fly)
var ani=new android.widget.CheckBox(ctx)
ani.setText("疾跑模式")
ani.setChecked(option_anima)
ani.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener(){
onCheckedChanged:function(v,isChecked){
if (animamode==false){animamode=true
clientMessage("【JS】疾跑模式已开启")}
else{animamode=false
clientMessage("【JS】疾跑模式已关闭")}
option_anima=isChecked}})
layout.addView(ani)
var cht=new android.widget.CheckBox(ctx);
cht.setText("超级跳跃")
cht.setChecked(option_chtao)
cht.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener(){
onCheckedChanged:function(v,isChecked){
if(chtaomode==false){Chaion()
chtaomode=true
clientMessage("【JS】超级跳跃已开启")}
else{open_tivnu.dismiss()
chtaomode=false
clientMessage("【JS】超级跳跃已关闭")}
option_chtao=isChecked}})
layout.addView(cht)
var day=new android.widget.CheckBox(ctx)
day.setText("锁定白天")
day.setChecked(option_day)
day.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener(){
onCheckedChanged:function(v,isChecked){
if (daymode==false){daymode=true
clientMessage("【JS】锁定白天已开启")}
else{daymode=false
clientMessage("【JS】锁定白天已关闭")}
option_day=isChecked}})
layout.addView(day)
var title=new android.widget.TextView(ctx)
title.setTextSize(eaed)
layout.addView(title)
var button=new android.widget.Button(ctx)
button.setText("玩家坐标")
button.setBackgroundColor(android.graphics.Color.argb(30,225,225,225))
button.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(viewarg){

Playsettings()}}));layout.addView(button)
var title=new android.widget.TextView(ctx)
title.setTextSize(eaed)
layout.addView(title)
var button=new android.widget.Button(ctx)
button.setText("挖矿助手")
button.setBackgroundColor(android.graphics.Color.argb(30,225,225,225))
button.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(viewarg){
Kuancoob()}}))
layout.addView(button)
var title=new android.widget.TextView(ctx)
title.setTextSize(eaed)
layout.addView(title)
var button=new android.widget.Button(ctx);
button.setText("其它功能")
button.setBackgroundColor(android.graphics.Color.argb(30,225,225,225))
button.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(viewarg){
genDuog()}}))
layout.addView(button)
var title=new android.widget.TextView(ctx)
title.setTextSize(eaed)
layout.addView(title)
var button=new android.widget.Button(ctx);
button.setText("关于")
button.setBackgroundColor(android.graphics.   Color.argb(30,225,225,225))
button.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(viewarg){
About()}}))
layout.addView(button)
var title=new android.widget.TextView(ctx)
title.setTextSize(10)
title.setText("请不要在没有进入服务器的情况下修改此页面的任何选项!")
title.setTextColor(android.graphics.Color.rgb(255,255,255))
title.setLayoutParams(textParams)
layout.addView(title)
var mlayout=makeMenu(ctx,menu,layout)
menu.setContentView(mlayout)
menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT|android.view.Gravity.TOP,0,0)
}catch(err){
print("错误:"+err)}
}

function makeMenu(ctx,menu,layout){
var mlayout=new android.widget.RelativeLayout(ctx)
var svParams=new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.FILL_PARENT,android.widget.RelativeLayout.LayoutParams.FILL_PARENT)
var scrollview=new android.widget.ScrollView(ctx)
var pad=dip2px(ctx,5)
scrollview.setPadding(pad,pad,pad,pad)
scrollview.setLayoutParams(svParams)
scrollview.addView(layout)
mlayout.addView(scrollview);return mlayout}

function XRay(){
playerx=Math.floor(getPlayerX())
playery=Math.floor(getPlayerY())
playerz=Math.floor(getPlayerZ())
taui=getTile(playerx,playery,playerz)
if(taui==0){option_kuan=true
clientMessage("【JS】矿物透视已开启")
setTile(playerx,playery,playerz,46)}
if(taui==46){option_kuan=false
clientMessage("【JS】矿物透视已关闭")
setTile(playerx,playery,playerz,0)}}

function Playsettings(){
playerx=getPlayerX()
playery=getPlayerY()
playerz=getPlayerZ()
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
var layout=new android.widget.LinearLayout(ctx);try{
var menu=new android.widget.PopupWindow(layout,dip2px(ctx,75), dip2px(ctx,30))
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)
var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx,5),0,0,0)
var title=new android.widget.TextView(ctx)
title.setTextSize(20)
title.setText("玩家坐标")
title.setTextColor(android.graphics.Color.rgb(255,255,255))
title.setLayoutParams(textParams)
layout.addView(title)
var title=new android.widget.TextView(ctx)
title.setTextSize(14)
title.setText("X坐标：")
title.setTextColor(android.graphics.Color.rgb(255,255,255))
title.setLayoutParams(textParams)
layout.addView(title)
var deian_x=new android.widget.EditText(ctx)
deian_x.setText
(String(getPlayerX(getPlayerent())))
deian_x.setInputType(android.text.InputType.TYPE_CLASS_NUMBER)
layout.addView(deian_x)
var title=new android.widget.TextView(ctx)
title.setTextSize(14)
title.setText("Y坐标：")
title.setTextColor(android.graphics.Color.rgb(255,255,255))
title.setLayoutParams(textParams)
layout.addView(title)
var deian_y=new android.widget.EditText(ctx)
deian_y.setText
(String(getPlayerY(getPlayerent())))
deian_y.setInputType(android.text.InputType.TYPE_CLASS_NUMBER)
layout.addView(deian_y)
var title=new android.widget.TextView(ctx)
title.setTextSize(14)
title.setText("Z坐标：")
title.setTextColor(android.graphics.Color.rgb(255,255,255))
title.setLayoutParams(textParams)
layout.addView(title)
var deian_z=new android.widget.EditText(ctx)
deian_z.setText
(String(getPlayerZ(getPlayerent())))
deian_z.setInputType(android.text.InputType.TYPE_CLASS_NUMBER)
layout.addView(deian_z)
var button=new android.widget.Button(ctx)
button.setText("移动坐标")
button.setBackgroundColor(android.graphics.Color.argb(30,225,225,225))
button.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(viewarg){
Entity.setPosition(getPlayerent(),deian_x.getText(),deian_y.getText(),deian_z.getText())
clientMessage("【JS】你已移动到指定坐标")}}))
layout.addView(button)
var title=new android.widget.TextView(ctx)
title.setTextSize(eaed)
layout.addView(title)
var button=new android.widget.Button(ctx)
button.setText("发送坐标")
button.setBackgroundColor(android.graphics.Color.argb(30,225,225,225))
button.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(viewarg){
Server.sendChat
(playerx+","+playery+","+playerz)}}))
layout.addView(button)
var tip=new android.widget.CheckBox(ctx)
tip.setText("显示坐标")
tip.setChecked(option_xyz)
tip.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener(){
onCheckedChanged:function(v,isChecked){
if (tipmode==false){tipmode=true
clientMessage("【JS】显示坐标已开启")}
else{tipmode=false
ModPE.showTipMessage("")
clientMessage("【JS】显示坐标已关闭")}
option_xyz=isChecked}})
layout.addView(tip)
var button=new android.widget.Button(ctx)
button.setText("记录坐标")
button.setBackgroundColor(android.graphics.Color.argb(30,255,225,225))
button.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(viewarg){
jilob=playerx;jilon=playery;jilot=playerz
if(jilou!=true){jilou=true}
clientMessage("【JS】已记录所在坐标")}}))
layout.addView(button)
var title=new android.widget.TextView(ctx)
title.setTextSize(eaed)
layout.addView(title)
var button=new android.widget.Button(ctx)
button.setText("传送坐标")
button.setBackgroundColor(android.graphics.Color.argb(30,255,225,225))
button.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(viewarg){
if(jilou==true){
Entity.setPosition
(getPlayerent(),jilob,jilon,jilot)
clientMessage("【JS】已传送至记录坐标")}
else{clientMessage("【JS】无记录坐标")}}}))
layout.addView(button)
var mlayout=makeMenu(ctx,menu,layout)
menu.setContentView(mlayout)
menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT|android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25,0)}
catch(err){
print("错误:"+err)}}

function Chaion(){
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get() 
ctx.runOnUiThread(new java.lang.Runnable({run:function(){try{
var layout=new android.widget.LinearLayout(ctx)
var tivnu=new android.widget.Button(ctx);
tivnu.setBackgroundColor(android.graphics.Color.argb(30,255,255,255))
tivnu.setText("T")
tivnu.setOnClickListener(new android.view.View.OnClickListener(){onClick:function(v){
if(chaie==true){chaie=false}
else{chaie=true}
Level.addParticle(ParticleType.cloud, getPlayerX(),getPlayerY()-1,getPlayerZ(),0,0,0,10)}})
layout.addView(tivnu)
open_tivnu=new android.widget.PopupWindow(layout, dip2px(ctx,40), dip2px(ctx,40))
open_tivnu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.BOTTOM|android.view.Gravity.RIGHT,+60,+60)
}catch(err){print("错误："+err)}}}))}

function Tiunken(){
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get() 
ctx.runOnUiThread(new java.lang.Runnable({run:function(){try{
var layout=new android.widget.LinearLayout(ctx)
var shei=new android.widget.Button(ctx)
shei.setBackgroundColor(android.graphics.Color.argb(30,255,255,255))
shei.setText("S")
shei.setOnClickListener(new android.view.View.OnClickListener(){onClick:function(v){
Shekuns()}});layout.addView(shei)
open_suvti=new android.widget.PopupWindow(layout,dip2px(ctx,40), dip2px(ctx,40))
open_suvti.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.BOTTOM|android.view.Gravity.RIGHT,0,0)
}catch(err){print("错误："+err)}}}))}

function XRayken(){
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get() 
ctx.runOnUiThread(new java.lang.Runnable({run:function(){try{
var layout=new android.widget.LinearLayout(ctx)
var xray=new android.widget.Button(ctx)
xray.setBackgroundColor(android.graphics.Color.argb(30,255,255,255))
xray.setText("X-RAY")
xray.setOnClickListener(new android.view.View.OnClickListener(){onClick:function(v){
XRay()}});layout.addView(xray)
open_xray=new android.widget.PopupWindow(layout,dip2px(ctx,74), dip2px(ctx,32))
open_xray.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.TOP|android.view.Gravity.RIGHT,+102,+4)
}catch(err){print("错误："+err)}}}))}

function genDuog(){
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
var layout=new android.widget.LinearLayout(ctx);try{
var menu=new android.widget.PopupWindow(layout,dip2px(ctx,75), dip2px(ctx,30))
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)
var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx,5),0,0,0)
var title=new android.widget.TextView(ctx)
title.setTextSize(20)
title.setText("其它功能")
title.setTextColor(android.graphics.Color.rgb(255,255,255))
title.setLayoutParams(textParams)
layout.addView(title)
var mug=new android.widget.CheckBox(ctx);
mug.setText("木棍瞬移")
mug.setChecked(option_mug)
mug.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener(){
onCheckedChanged:function(v,isChecked){
if(mugmode==false){mugmode=true
clientMessage("【JS】木棍瞬移已开启")}
else{mugmode=false
clientMessage("【JS】木棍瞬移已关闭")}
option_mug=isChecked}})
layout.addView(mug)
var mugir=new android.widget.CheckBox(ctx)
mugir.setText("木棍骑乘")
mugir.setChecked(option_mugir)
mugir.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener(){
onCheckedChanged:function(v,isChecked){
if(mugirmode==false){mugirmode=true
clientMessage("【JS】木棍骑乘已开启")}
else{mugirmode=false
clientMessage("【JS】木棍骑乘已关闭")}
option_mugir=isChecked}})
layout.addView(mugir)
var gong=new android.widget.CheckBox(ctx);
gong.setTextColor(android.graphics.Color.rgb(255,0,0))
gong.setText("射箭传送")
gong.setChecked(option_gongo)
gong.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener(){
onCheckedChanged:function(v,isChecked){
if(gongomode==false){Tiunken()
gongomode=true
clientMessage("【JS】射箭传送已开启")}
else{open_suvti.dismiss()
gongomode=false
clientMessage("【JS】射箭传送已关闭")}
option_gongo=isChecked}})
layout.addView(gong)
var shuip=new android.widget.CheckBox(ctx)
shuip.setText("水上漂浮")
shuip.setChecked(option_shuip)
shuip.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener(){
onCheckedChanged:function(v,isChecked){
if(shuipmode==false){shuipmode=true
clientMessage("【JS】水上漂浮已开启")}
else{shuipmode=false
clientMessage("【JS】水上漂浮已关闭")}
option_shuip=isChecked}})
layout.addView(shuip)
var title=new android.widget.TextView(ctx)
title.setTextSize(eaed)
layout.addView(title)
var button=new android.widget.Button(ctx)
button.setText("自杀")
button.setBackgroundColor(android.graphics.Color.argb(30,225,225,225))
button.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(viewarg){
Player.setHealth(0)
clientMessage("【JS】你选择了自杀")}}))
layout.addView(button);
var mlayout=makeMenu(ctx,menu,layout)
menu.setContentView(mlayout)
menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT|android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25,0)
}catch(err){
print("错误:"+err)
}}

function About(){
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var layout=new android.widget.LinearLayout(ctx);try{
var menu=new android.widget.PopupWindow(layout,dip2px(ctx,75), dip2px(ctx,30))
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx,5),0,0,0)
var title=new android.widget.TextView(ctx)
title.setTextSize(20)
title.setText("关于")
title.setTextColor(android.graphics.Color.rgb(255,255,255))
title.setLayoutParams(textParams)
layout.addView(title)
var title=new android.widget.TextView(ctx)
title.setTextSize(17)
title.setText("服务器辅助.js\n\nBy Chunyulin\nQQ:1051213119\n百度贴吧:\n@暴漫金馆\n来自Box工作室\n\n特别鸣谢：\n@切尔利\n@Liuyan205\n来自百度贴吧\n\n如果你有好的想法或建议，可以联系作者告知！")
title.setTextColor(android.graphics.Color.rgb(255,255,255))
title.setLayoutParams(textParams)
layout.addView(title)
var mlayout=makeMenu(ctx,menu,layout)
menu.setContentView(mlayout)
menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT|android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25,0)
}catch(err){
print("错误:"+err)}}

function Kuancoob(){
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var layout=new android.widget.LinearLayout(ctx);try{
var menu=new android.widget.PopupWindow(layout,dip2px(ctx,75), dip2px(ctx,30))
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx,5),0,0,0)
var title=new android.widget.TextView(ctx)
title.setTextSize(20)
title.setText("挖矿助手")
title.setTextColor(android.graphics.Color.rgb(255,255,255))
title.setLayoutParams(textParams)
layout.addView(title)
var kuan=new android.widget.CheckBox(ctx)
kuan.setText("矿物透视")
kuan.setChecked(option_kuan)
kuan.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener(){
onCheckedChanged:function(v,isChecked){
XRay();option_kuan=isChecked}})
layout.addView(kuan)
var kuank=new android.widget.CheckBox(ctx)
kuank.setText("快捷按钮")
kuank.setChecked(option_kuank)
kuank.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener(){
onCheckedChanged:function(v,isChecked){
if(kuaijli!=true){XRayken();kuaijli=true}
else{open_xray.dismiss();kuaijli=false}
option_kuank=isChecked}})
layout.addView(kuank)
var mlayout=makeMenu(ctx,menu,layout)
menu.setContentView(mlayout)
menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT|android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25,0)
}catch(err){
print("错误:"+err)}}

function Chatoptions(){
data_cipher=ModPE.readData
("Chunyulin_cipher")
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get() 
ctx.runOnUiThread(new java.lang.Runnable({run:function(){try{
var dialog=new android.app.AlertDialog.Builder(ctx)
dialog.setItems(new java.lang.String("发送聊天,快捷指令,一键登录,密码设置").split(","),new android.content.DialogInterface.OnClickListener(){onClick:function(dia,w){
if(w==0){Sendinformation()}
else if(w==1){print("暂未完善,敬请期待!")}
else if(w==2){if(data_cipher!=""){
Server.sendChat(data_cipher)}
else{Ciphersettings();print("请先设置密码")}}
else if(w==3){Ciphersettings()}}})
dialog.show()
}catch(err){print("错误:"+err)}}}))}

function Sendinformation(){
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get() 
ctx.runOnUiThread(new java.lang.Runnable({run:function(){try{
var layout=new android.widget.LinearLayout(ctx)
var dialog=new android.app.Dialog(ctx)
dialog.setContentView(layout)
dialog.setTitle("发送聊天信息");dialog.show()
var edittext=new android.widget.EditText(ctx)
edittext.setText("")
layout.addView(edittext)
layout.setOrientation(android.widget.LinearLayout.VERTICAL)
var button=new android.widget.Button(ctx)
button.setText("确定发送")
button.setOnClickListener(new android.view.View.OnClickListener(){
onClick:function(v){dialog.dismiss()
Server.sendChat(edittext.getText())}})
layout.addView(button)
}catch(err){print("错误:"+err)}}}))}

function Ciphersettings(){
data_cipher=ModPE.readData
("Chunyulin_cipher")
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get() 
ctx.runOnUiThread(new java.lang.Runnable({run:function(){try{
var layout=new android.widget.LinearLayout(ctx)
var dialog=new android.app.Dialog(ctx)
dialog.setContentView(layout)
dialog.setTitle("设置登录密码");dialog.show()
var edittext=new android.widget.EditText(ctx)
edittext.setText(data_cipher)
layout.addView(edittext)
layout.setOrientation(android.widget.LinearLayout.VERTICAL)
var button=new android.widget.Button(ctx)
button.setText("保存密码")
button.setOnClickListener(new android.view.View.OnClickListener(){onClick:function(v){
if(edittext.getText()!=""){
ModPE.saveData
("Chunyulin_cipher",edittext.getText())
print("密码已保存");dialog.dismiss()}}})
layout.addView(button)
var button=new android.widget.Button(ctx)
button.setText("清除密码")
button.setOnClickListener(new android.view.View.OnClickListener(){
onClick:function(v){if(data_cipher!=""){
ModPE.removeData("Chunyulin_cipher")
print("密码已清除");dialog.dismiss()}}})
layout.addView(button)
}catch(err){print("错误:"+err)}}}))}

  











  
  
  
 
  
