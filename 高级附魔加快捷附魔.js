
/*附魔begin*/
/*快捷附魔begin*/
var 附魔=new java.lang.Runnable({run:function(){try{
var $1=new android.widget.LinearLayout(ctx);
var $=new android.widget.PopupWindow(ctx);

$1.setOrientation(1);
$1.setGravity(17);
var $2=new android.widget.TextView(ctx);
$2.setText("附魔界面");
var $2_params=new android.widget.LinearLayout.LayoutParams(-2,-2);
$2.setLayoutParams($2_params);
$1.addView($2);
var $3=new android.widget.Button(ctx);
$3.setText("[锋利][保护][荆棘]");
$3.setTextSize(11);
$3.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
Player.enchant(Player.getSelectedSlotId(), Enchantment.SHARPNESS/*锋利*/, 5);
Player.enchant(Player.getSelectedSlotId(), Enchantment.PROTECTION/*保护*/, 5);
Player.enchant(Player.getSelectedSlotId(), Enchantment.THORNS/*荆棘*/, 5);
    
}}));
var $3_params=new android.widget.LinearLayout.LayoutParams(350,100);
$3_params.setMargins(0,0,0,0);
$3.setLayoutParams($3_params);
$1.addView($3);
var $4=new android.widget.Button(ctx);
$4.setText("[效率][时运]");
$4.setTextSize(11);
$4.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
Player.enchant(Player.getSelectedSlotId(), Enchantment.EFFICIENCY/*效率*/, 5);
Player.enchant(Player.getSelectedSlotId(), Enchantment.FORTUNE/*时运*/, 5);
}}));
var $4_params=new android.widget.LinearLayout.LayoutParams(350,100);
$4.setLayoutParams($4_params);
$1.addView($4);
var $5=new android.widget.Button(ctx);
$5.setText("[毁图时运]");
$5.setTextSize(11);
$5.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
Player.enchant(Player.getSelectedSlotId(), Enchantment.FORTUNE/*时运*/, 32000);
Player.enchant(Player.getSelectedSlotId(), Enchantment.EFFICIENCY/*效率*/, 32000);
Player.enchant(Player.getSelectedSlotId(), Enchantment.UNBREAKING/*保护*/, 32000);

}}));
$5.setPadding(0,0,0,0);
var $5_params=new android.widget.LinearLayout.LayoutParams(350,100);
$5.setLayoutParams($5_params);
$1.addView($5);

var $6=new android.widget.Button(ctx);
$6.setText("[毁人反甲]");
$6.setTextSize(11);
$6.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
Player.enchant(Player.getSelectedSlotId(), Enchantment.THORNS/*荆棘*/, 30000);
}}));
var $6_params=new android.widget.LinearLayout.LayoutParams(350,100);
$6.setLayoutParams($6_params);
$1.addView($6);

var $7=new android.widget.Button(ctx);
$7.setText("退出");
$7.setTextSize(11);
$7.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
$.dismiss()
}}));
var $7_params=new android.widget.LinearLayout.LayoutParams(350,100);
$7.setLayoutParams($7_params);
$1.addView($7);

  $3.setBackgroundColor(android.graphics.Color.argb(255,152,0,244)); 
 $4.setBackgroundColor(android.graphics.Color.argb(255,152,0,244));
 $5.setBackgroundColor(android.graphics.Color.argb(255,152,0,244));   
 $6.setBackgroundColor(android.graphics.Color.argb(255,152,0,244));   
 $7.setBackgroundColor(android.graphics.Color.argb(255,152,0,244));   
 
$.setFocusable(false);
$.setContentView($1);
$.setWidth(350);
$.setHeight(550);
$.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(-21233468));
$.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,0,ctx.getScreenHeight()*0.25);
}catch(e){print(e)}}});
/*快捷附魔end*/
/*高级附魔begin*/
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var 高级附魔=new java.lang.Runnable({run:function(){try{
  var 等级=5
  var 高 = ctx.getScreenHeight();
  var 宽 = ctx.getScreenWidth();
  var 附魔1=附魔2=附魔3=附魔4=附魔5=附魔6=附魔7=附魔8=附魔9=附魔10=附魔11=附魔12=附魔13=附魔14=附魔15=附魔16=附魔17=附魔18=附魔19=附魔20=附魔21=附魔22=附魔23=附魔24=附魔25=false
 function b(q){
  q.setBackgroundColor(android.graphics.Color.argb(0,0,0,0));
 q.setTextColor(android.graphics.Color.argb(255,255,255,255));
  }
var $1=new android.widget.LinearLayout(ctx);
$1.setOrientation(1);
$1.setGravity(17);
var $2=new android.widget.ScrollView(ctx);
var $2_params=new android.widget.LinearLayout.LayoutParams(-2,-2);
$2.setLayoutParams($2_params);
var $3=new android.widget.LinearLayout(ctx);
var $3_params=new android.widget.FrameLayout.LayoutParams(-2,-2);
$3.setLayoutParams($3_params);
var $4=new android.widget.TextView(ctx);
$4.setText("欢迎使用炸狗附魔。");
var $4_params=new android.widget.LinearLayout.LayoutParams(-2,-2);
$4.setLayoutParams($4_params);
$3.addView($4);
$2.addView($3);
$1.addView($2);
var $5=new android.widget.LinearLayout(ctx);
var $5_params=new android.widget.LinearLayout.LayoutParams(-2,-2);
$5.setLayoutParams($5_params);
$5.setOrientation(1);
var $6=new android.widget.EditText(ctx);
$6.setHint("附魔等级在1~32000期间取值");
  $6.setTextSize(12);
  var $6_params=new android.widget.LinearLayout.LayoutParams(-2,-2);
$6.setLayoutParams($6_params);
$5.addView($6);
var $7=new android.widget.Button(ctx);
$7.setText("附魔");
  $7.setTextSize(13);
  var $7_params=new android.widget.LinearLayout.LayoutParams(-2,-2);
$7.setLayoutParams($7_params);
$5.addView($7);
$1.addView($5);
var $8=new android.widget.ScrollView(ctx);
var $8_params=new android.widget.LinearLayout.LayoutParams(-2,-2);
$8.setLayoutParams($8_params);
var $9=new android.widget.LinearLayout(ctx);
$9.setOrientation(1);
var $9_params=new android.widget.FrameLayout.LayoutParams(-2,-2);
$9.setLayoutParams($9_params);
var $10=new android.widget.Button(ctx);
$10.setText("不明翻译后是忠诚");
var $10_params=new android.widget.LinearLayout.LayoutParams(-2,-2);
$10.setLayoutParams($10_params);
$9.addView($10);
var $11=new android.widget.Button(ctx);
$11.setText("节肢克星");
var $11_params=new android.widget.LinearLayout.LayoutParams(-2,-2);
$11.setLayoutParams($11_params);
$9.addView($11);
var $12=new android.widget.Button(ctx);
$12.setText("爆炸保护");
var $12_params=new android.widget.LinearLayout.LayoutParams(-2,-2);
$12.setLayoutParams($12_params);
$9.addView($12);
var $13=new android.widget.Button(ctx);
$13.setText("水下速掘");
var $13_params=new android.widget.LinearLayout.LayoutParams(-2,-2);
$13.setLayoutParams($13_params);
$9.addView($13);
var $14=new android.widget.Button(ctx);
$14.setText("效率");
var $14_params=new android.widget.LinearLayout.LayoutParams(-2,-2);
$14.setLayoutParams($14_params);
$9.addView($14);
var $15=new android.widget.Button(ctx);
$15.setText("摔落保护");
var $15_params=new android.widget.LinearLayout.LayoutParams(-2,-2);
$15.setLayoutParams($15_params);
$9.addView($15);
var $16=new android.widget.Button(ctx);
$16.setText("火焰保护");
var $16_params=new android.widget.LinearLayout.LayoutParams(-2,-2);
$16.setLayoutParams($16_params);
$9.addView($16);
var $17=new android.widget.Button(ctx);
$17.setText("火矢");
var $17_params=new android.widget.LinearLayout.LayoutParams(-2,-2);
$17.setLayoutParams($17_params);
$9.addView($17);
var $18=new android.widget.Button(ctx);
$18.setText("时运");
var $18_params=new android.widget.LinearLayout.LayoutParams(-2,-2);
$18.setLayoutParams($18_params);
$9.addView($18);
var $19=new android.widget.Button(ctx);
$19.setText("无限");
var $19_params=new android.widget.LinearLayout.LayoutParams(-2,-2);
$19.setLayoutParams($19_params);
$9.addView($19);
var $20=new android.widget.Button(ctx);
$20.setText("击退");
var $20_params=new android.widget.LinearLayout.LayoutParams(-2,-2);
$20.setLayoutParams($20_params);
$9.addView($20);
var $21=new android.widget.Button(ctx);
$21.setText("海之眷顾");
var $21_params=new android.widget.LinearLayout.LayoutParams(-2,-2);
$21.setLayoutParams($21_params);
$9.addView($21);
var $22=new android.widget.Button(ctx);
$22.setText("抢夺");
var $22_params=new android.widget.LinearLayout.LayoutParams(-2,-2);
$22.setLayoutParams($22_params);
$9.addView($22);
var $23=new android.widget.Button(ctx);
$23.setText("诱饵");
$23.setGravity(0);
var $23_params=new android.widget.LinearLayout.LayoutParams(-2,-2);
$23.setLayoutParams($23_params);
$9.addView($23);
var $24=new android.widget.Button(ctx);
$24.setText("力量");
var $24_params=new android.widget.LinearLayout.LayoutParams(-2,-2);
$24.setLayoutParams($24_params);
$9.addView($24);
var $25=new android.widget.Button(ctx);
$25.setText("弹射物保护");
var $25_params=new android.widget.LinearLayout.LayoutParams(-2,-2);
$25.setLayoutParams($25_params);
$9.addView($25);
var $26=new android.widget.Button(ctx);
$26.setText("保护");
var $26_params=new android.widget.LinearLayout.LayoutParams(-2,-2);
$26.setLayoutParams($26_params);
$9.addView($26);
var $27=new android.widget.Button(ctx);
$27.setText("冲击");
var $27_params=new android.widget.LinearLayout.LayoutParams(-2,-2);
$27.setLayoutParams($27_params);
$9.addView($27);

var $28=new android.widget.Button(ctx);
$28.setText("水下呼吸");
var $28_params=new android.widget.LinearLayout.LayoutParams(-2,-2);
$28.setLayoutParams($28_params);
$9.addView($28);

var $29=new android.widget.Button(ctx);
$29.setText("锋利");
var $29_params=new android.widget.LinearLayout.LayoutParams(-2,-2);
$29.setLayoutParams($29_params);
$9.addView($29);

var $30=new android.widget.Button(ctx);
$30.setText("精准采集");
var $30_params=new android.widget.LinearLayout.LayoutParams(-2,-2);
$30.setLayoutParams($30_params);
$9.addView($30);

var $31=new android.widget.Button(ctx);
$31.setText("荆棘");
var $31_params=new android.widget.LinearLayout.LayoutParams(-2,-2);
$31.setLayoutParams($31_params);
$9.addView($31);

var $32=new android.widget.Button(ctx);
$32.setText("亡灵克星");
var $32_params=new android.widget.LinearLayout.LayoutParams(-2,-2);
$32.setLayoutParams($32_params);
$9.addView($32);

var $33=new android.widget.Button(ctx);
$33.setText("耐久");
var $33_params=new android.widget.LinearLayout.LayoutParams(-2,-2);
$33.setLayoutParams($33_params);
$9.addView($33);

var $34=new android.widget.Button(ctx);
$34.setText("火焰附加");
var $34_params=new android.widget.LinearLayout.LayoutParams(-2,-2);
$34.setLayoutParams($34_params);
$9.addView($34);


  $7.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
 等级 = Number(String($6.getText()))
if(附魔1) Player.enchant(Player.getSelectedSlotId(), Enchantment.AQUA_AFFINITY/*阿瓦亲和力 大概是忠诚？*/, 等级);
if( 附魔2) Player.enchant(Player.getSelectedSlotId(), Enchantment.BANE_OF_ARTHROPODS/*节肢动物贝恩*/, 等级);
if( 附魔3) Player.enchant(Player.getSelectedSlotId(), Enchantment.BLAST_PROTECTION/*防爆*/, 等级);
if(附魔4 ) Player.enchant(Player.getSelectedSlotId(), Enchantment.DEPTH_STRIDER/*深度斯特里德*/, 等级);
if( 附魔5) Player.enchant(Player.getSelectedSlotId(), Enchantment.EFFICIENCY/*效率*/, 等级);
if(附魔6 ) Player.enchant(Player.getSelectedSlotId(), Enchantment.FEATHER_FALLING/*羽落**/, 等级);
if(附魔7 ) Player.enchant(Player.getSelectedSlotId(), Enchantment.FIRE_PROTECTION/*消防*/, 等级);
if( 附魔8) Player.enchant(Player.getSelectedSlotId(), Enchantment.FLAME/*火焰*/, 等级);
if( 附魔9) Player.enchant(Player.getSelectedSlotId(), Enchantment.FORTUNE/*时运*/, 等级);
if(附魔10 ) Player.enchant(Player.getSelectedSlotId(), Enchantment.INFINITY/*无限*/, 等级);
if( 附魔11) Player.enchant(Player.getSelectedSlotId(), Enchantment.KNOCKBACK/*回击*/, 等级);
if( 附魔12) Player.enchant(Player.getSelectedSlotId(), Enchantment.LUCK_OF_THE_SEA/*海运 大概是海之眷顾？*/, 等级);
if( 附魔13) Player.enchant(Player.getSelectedSlotId(), Enchantment.LOOTING/*抢夺*/, 等级);
if(附魔14 ) Player.enchant(Player.getSelectedSlotId(), Enchantment.LURE/*引诱 大概是诱饵？*/, 等级);
if(附魔15 ) Player.enchant(Player.getSelectedSlotId(), Enchantment.POWER/*力量*/, 等级);
if(附魔16 ) Player.enchant(Player.getSelectedSlotId(), Enchantment.PROJECTILE_PROTECTION/*弹丸保护*/, 等级);
if(附魔17 ) Player.enchant(Player.getSelectedSlotId(), Enchantment.PROTECTION/*保护*/, 等级);
if( 附魔18) Player.enchant(Player.getSelectedSlotId(), Enchantment.PUNCH/*穿孔*/, 等级);
if( 附魔19) Player.enchant(Player.getSelectedSlotId(), Enchantment.RESPIRATION/*呼吸*/, 等级);
if(附魔20 ) Player.enchant(Player.getSelectedSlotId(), Enchantment.SHARPNESS/*锋利*/, 等级);
if( 附魔21) Player.enchant(Player.getSelectedSlotId(), Enchantment.SILK_TOUCH/*丝触摸*/, 等级);
if( 附魔22) Player.enchant(Player.getSelectedSlotId(), Enchantment.THORNS/*荆棘*/, 等级);
if(附魔23 ) Player.enchant(Player.getSelectedSlotId(), Enchantment.SMITE/*斯米特*/, 等级);
if( 附魔24) Player.enchant(Player.getSelectedSlotId(), Enchantment.UNBREAKING/*耐久*/, 等级);
if( 附魔25) Player.enchant(Player.getSelectedSlotId(), Enchantment.FIRE_ASPECT/*火方面*/, 等级);

附魔1=附魔2=附魔3=附魔4=附魔5=附魔6=附魔7=附魔8=附魔9=附魔10=附魔11=附魔12=附魔13=附魔14=附魔15=附魔16=附魔17=附魔18=附魔19=附魔20=附魔21=附魔22=附魔23=附魔24=附魔25=false
 b($13);b($12);b($10);b($11);b($14);b($15);b($16);b($17);b($18); b($19);b($20); b($21);b($22); b($23);b($24); b($25);b($26); b($27);b($28); b($29); b($30);b($31);b($32);b($33);  b($34);

}}));  
  $10.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
 附魔1=true
 print("以添加")
 $10.setTextColor(android.graphics.Color.rgb(250,100,10));
}}));  
  $11.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
附魔2 =true
print("以添加")
 $11.setTextColor(android.graphics.Color.rgb(250,100,10));
}}));
  $12.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
附魔3 =true
print("以添加")
 $12.setTextColor(android.graphics.Color.rgb(250,100,10));
}}));  
  $13.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
 附魔4=true
print("以添加")
 $13.setTextColor(android.graphics.Color.rgb(250,100,10));
}}));  
  $14.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
 附魔5=true
print("以添加")
 $14.setTextColor(android.graphics.Color.rgb(250,100,10));
}}));  
  $15.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
 附魔6= true
print("以添加")
 $15.setTextColor(android.graphics.Color.rgb(250,100,10));
}}));
  $16.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
 附魔7= true
print("以添加")
 $16.setTextColor(android.graphics.Color.rgb(250,100,10));
}}));  
  $17.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
 附魔8= true;
print("以添加")
 $17.setTextColor(android.graphics.Color.rgb(250,100,10));
}}));   
  $18.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
附魔9 = true
print("以添加")
 $18.setTextColor(android.graphics.Color.rgb(250,100,10));
}}));  
  $19.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
 附魔10= true;
print("以添加")
 $19.setTextColor(android.graphics.Color.rgb(250,100,10));
}}));
  $20.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
附魔11= true ;
print("以添加")
 $20.setTextColor(android.graphics.Color.rgb(250,100,10));
}}));  
  $21.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
附魔12= true ;
print("以添加")
 $21.setTextColor(android.graphics.Color.rgb(250,100,10));
}}));   
  $22.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
 附魔13= true;
print("以添加")
 $22.setTextColor(android.graphics.Color.rgb(250,100,10));
}}));  
  $23.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
附魔14= true ;
print("以添加")
 $23.setTextColor(android.graphics.Color.rgb(250,100,10));
}}));
  $24.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
 附魔15= true;
print("以添加")
 $24.setTextColor(android.graphics.Color.rgb(250,100,10));
}}));  
  $25.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
附魔16= true ;
print("以添加")
 $25.setTextColor(android.graphics.Color.rgb(250,100,10));
}}));     
  $26.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
附魔17= true ;
print("以添加")
 $26.setTextColor(android.graphics.Color.rgb(250,100,10));
}}));  
  $27.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
 附魔18= true;
print("以添加")
 $27.setTextColor(android.graphics.Color.rgb(250,100,10));
}}));
  $28.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
附魔19= true ;
print("以添加")
 $28.setTextColor(android.graphics.Color.rgb(250,100,10));
}}));  
  $29.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
 附魔20= true;
print("以添加")
 $29.setTextColor(android.graphics.Color.rgb(250,100,10));
}}));     
  $30.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
附魔21= true ;
print("以添加")
 $30.setTextColor(android.graphics.Color.rgb(250,100,10));
}}));  
  $31.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
附魔22 = true;
print("以添加")
 $31.setTextColor(android.graphics.Color.rgb(250,100,10));
}}));
  $32.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
附魔23= true ;
print("以添加")
 $32.setTextColor(android.graphics.Color.rgb(250,100,10));
}}));  
  $33.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
附魔24 = true;
print("以添加")
 $33.setTextColor(android.graphics.Color.rgb(250,100,10));
}}));       
  $34.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
 附魔25= true;
print("以添加")
 $34.setTextColor(android.graphics.Color.rgb(250,100,10));
}}));       
  
  
  b($13);b($12);b($10);b($11);b($14);b($15);b($16);b($17);b($18); b($19);b($20); b($21);b($22); b($23);b($24); b($25);b($26); b($27);b($28); b($29); b($30);b($31);b($32);b($33); 
  b($7);  b($34);
  $7.setTextColor(android.graphics.Color.rgb(250,0,0));

$8.addView($9);
$1.addView($8);
var $=new android.widget.PopupWindow(ctx);
$.setFocusable(true);
$.setContentView($1);
$.setWidth(宽*0.25);
$.setHeight(高);
$.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(-21233468));
$.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.LEFT  | android.view.Gravity.TOP,0,0);
}catch(e){print(e)}}});
/*高级附魔end*/

/*附魔开关begin*/
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable({run:function(){try{
var $1=new android.widget.LinearLayout(ctx);
$1.setGravity(17);
var $2=new android.widget.Button(ctx);
$2.setText("魔");
$2.setGravity(3);
$2.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
ctx.runOnUiThread(附魔);
ctx.runOnUiThread(高级附魔);
  }}));
  $2.setBackgroundColor(android.graphics.Color.argb(255,148,0,195)); 
var $2_params=new android.widget.LinearLayout.LayoutParams(120,120);
$2.setLayoutParams($2_params);
$1.addView($2);
var $=new android.widget.PopupWindow(ctx);
$.setFocusable(false);
$.setContentView($1);
$.setWidth(100);
$.setHeight(100);
$.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(0));
$.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,0,ctx.getScreenHeight()*0.3);
}catch(e){print(e)}}}));
/*附魔开关end*/
/*附魔end*/

