

/*******

改版权死妈苟
CNMB
虽说我也是魔改
你也至少留我个名字吧
我还留了原作名字呢
傻逼破碎苟
别想拆开来看到任何东西
Fuck You Mother!!

********/


function dip2px(b) {
    return Math.ceil(b * ctx.getResources().getDisplayMetrics().density)
}

function showMenuBtn() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            var b, a, f, g;
            try {
                null == GUI2 && (layout2 = new LinearLayout(ctx), layout2.setOrientation(1), bg3 = new android.graphics.drawable.GradientDrawable, bg3.setColor(android.graphics.Color.argb(0, 20, 20, 20)), bg3.setCornerRadius(dip2px(3)), b = new TextView(ctx), b.setTextColor(android.graphics.Color.WHITE), b.setBackground(bg3), b.setTextSize(18), b.setText(NAME + " " + VERSION), layout2.addView(b), name1 = new TextView(ctx), name1.setTextColor(android.graphics.Color.WHITE), name1.setBackground(bg3), name1.setText("破碎大陆模式[WetABQ]"), GUI2 = new PopupWindow(layout2, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT), GUI2.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT)), GUI2.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.BOTTOM, 1, 1)), a = new LinearLayout(ctx), a.setOrientation(1), f = new Button(ctx), stealthss ? f.setText(" ") : f.setText("Skiddy"), f.setTextColor(android.graphics.Color.BLACK), f.setTextSize(15), g = new android.graphics.drawable.GradientDrawable, g.setColor(android.graphics.Color.WHITE), g.setCornerRadius(10), f.setOnClickListener(new View.OnClickListener({
                    onClick: function() {
                        mainMenu();
                        exit();
                        null != GUI && GUI.isShowing() && GUI.dismiss()
                    }
                })), a.addView(f), GUI = new PopupWindow(a, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT), GUI.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT)), GUI.setAnimationStyle(android.R.style.Animation_Dialog), GUI.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 20, 10)
            } catch (c) {
                Toast.makeText(ctx, "An error occured: " + c, 1).show()
            }
        }
    }))
}

function showJumpBtn() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            var b, a;
            try {
                b = new LinearLayout(ctx), b.setOrientation(1), a = new Button(ctx), a.setText(" "), a.setTextColor(Color.rgb(0, 0, 0)), a.setBackground(jbg), a.getBackground().setAlpha(150), a.setOnClickListener(new View.OnClickListener({
                    onClick: function() {
                        setVelY(getPlayerEnt(), .4)
                    }
                })), b.addView(a), GUIj = new PopupWindow(b, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT), GUIj.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT)), GUIj.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.BOTTOM, 110, 135)
            } catch (f) {
                Toast.makeText(ctx, "An error occured: " + f, 1).show()
            }
        }
    }))
}

function showElevatorBtn() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            var b, a, f;
            try {
                b = new LinearLayout(ctx), b.setOrientation(1), a = new Button(ctx), a.setText("Up"), a.setTextColor(Color.rgb(255, 0, 255)), a.setBackground(theme), a.setPadding(10, 10, 10, 10), a.setPadding(10, 10, 10, 10), a.getBackground().setAlpha(150), a.setOnClickListener(new View.OnClickListener({
                    onClick: function() {
                        Entity.setPositionRelative(getPlayerEnt(), 0, 2.53, 0)
                    }
                })), b.addView(a), f = new Button(ctx), f.setText("Down"), f.setTextColor(Color.rgb(255, 0, 255)), f.setBackground(theme), f.setPadding(10, 10, 10, 10), f.getBackground().setAlpha(150), f.setOnClickListener(new View.OnClickListener({
                    onClick: function() {
                        Entity.setPosition(getPlayerEnt(), getPlayerX(), getPlayerY() - 1.01, getPlayerZ())
                    }
                })), b.addView(f), GUIe = new PopupWindow(b, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT), GUIe.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT)), GUIe.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.CENTER, 0, 0)
            } catch (g) {
                Toast.makeText(ctx, "An error occured: " + g, 1).show()
            }
        }
    }))
}

function showEscapeBtn() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            var b, a;
            try {
                b = new LinearLayout(ctx), b.setOrientation(1), a = new Button(ctx), a.setText("向前冲"), a.setTextColor(Color.rgb(255, 0, 255)), a.setBackground(theme), a.getBackground().setAlpha(150), a.setOnClickListener(new View.OnClickListener({
                    onClick: function() {
                        var a = [0, 0, 0];
                        toDirectionalVector(a, (getYaw() + 90) * Math.PI / 180, -1 * (getPitch() * Math.PI / 180));
                        setVelX(getPlayerEnt(), 6 * a[0]);
                        setVelZ(getPlayerEnt(), 6 * a[2]);
                        clientMessage("§4Skiddy §6>> §e冲刺")
                    }
                })), b.addView(a), GUIs = new PopupWindow(b, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT), GUIs.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT)), GUIs.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.CENTER, 0, 0)
            } catch (f) {
                Toast.makeText(ctx, "An error occured: " + f, 1).show()
            }
        }
    }))
}

function showReachSwitch() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            var b, a;
            try {
                b = new LinearLayout(ctx), b.setOrientation(1), a = new android.widget.ToggleButton(ctx), a.setText("R"), a.setTextOn("R"), a.setTextOff("R"), a.setChecked(airwalkgui), a.setTextSize(18), a.setBackground(bg), a.getBackground().setAlpha(150), a.setTextColor(android.graphics.Color.rgb(255, 255, 0)), a.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function() {
                        airwalkgui ? (followss = !1, a.setBackground(bg)) : (followss = !0, a.setBackground(abg));
                        a.setChecked(airwalkgui)
                    }
                })), b.addView(a), GUIr = new PopupWindow(b, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT), GUIr.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT)), GUIr.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.TOP, 100, 0)
            } catch (f) {
                Toast.makeText(ctx, "An error occured: " + f, 1).show()
            }
        }
    }))
}

function showAimSwitch() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            var b, a;
            try {
                b = new LinearLayout(ctx), b.setOrientation(1), a = new android.widget.ToggleButton(ctx), a.setText("飞行背包"), a.setTextOn("背包 已启动"), a.setTextOff("飞行背包"), a.setChecked(jetpackedd), a.setTextSize(18), a.setBackground(bg), a.getBackground().setAlpha(150), a.setTextColor(android.graphics.Color.rgb(255, 255, 0)), a.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function() {
                        jetpackedd ? (jetpackedd = !1, jetpackss = !1, a.setBackground(bg)) : (jetpackedd = !0, jetpackss = !0, a.setBackground(abg));
                        a.setChecked(jetpackedd)
                    }
                })), b.addView(a), GUIa = new PopupWindow(b, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT), GUIa.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT)), GUIa.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.TOP, 450, 0)
            } catch (f) {
                Toast.makeText(ctx, "An error occured: " + f, 1).show()
            }
        }
    }))
}

function showF5Btn() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            var b, a, f;
            try {
                b = new LinearLayout(ctx), b.setOrientation(1), a = 0, f = new Button(ctx), f.setText("F5"), f.setTextColor(Color.rgb(255, 0, 255)), f.setBackground(theme), f.getBackground().setAlpha(150), f.setOnClickListener(new View.OnClickListener({
                    onClick: function() {
                        a++;
                        2 < a && (a = 0);
                        ModPE.setPlayerViewPerspective(a)
                    }
                })), b.addView(f), GUIv = new PopupWindow(b, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT), GUIv.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT)), GUIv.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.BOTTOM, 0, 0)
            } catch (g) {
                Toast.makeText(ctx, "An error occured: " + g, 1).show()
            }
        }
    }))
}

function showZoomSwitch() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            var b, a;
            try {
                b = new LinearLayout(ctx), b.setOrientation(1), a = new android.widget.ToggleButton(ctx), a.setText("Z"), a.setTextOn("Z"), a.setTextOff("Z"), a.setChecked(zoomed), a.setTextSize(18), a.setBackground(bg), a.setTextColor(android.graphics.Color.rgb(255, 255, 0)), a.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function() {
                        zoomed ? (ModPE.resetFov(), zoomed = !1, a.setBackground(bg)) : (zoomed = !0, ModPE.setFov(20), a.setBackground(abg));
                        a.setChecked(zoomed)
                    }
                })), b.addView(a), GUIz = new PopupWindow(b, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT), GUIz.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT)), GUIz.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 3, 100)
            } catch (f) {
                Toast.makeText(ctx, "An error occured: " + f, 1).show()
            }
        }
    }))
}

function showRegenSwitch() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            var b, a;
            try {
                b = new LinearLayout(ctx), b.setOrientation(1), a = new android.widget.ToggleButton(ctx), a.setText("虚空行者"), a.setTextOn("虚行 ON!"), a.setTextOff("虚空行者"), a.setChecked(airwalkgui), a.setTextSize(18), a.setBackground(bg), a.setTextColor(android.graphics.Color.rgb(255, 255, 0)), a.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function() {
                        airwalkgui ? (airwalkgui = !1, followss = !1, a.setBackground(bg)) : (airwalkgui = !0, followss = !0, Block.setShape(95, 0, 0, 0, 1, 1, 1), a.setBackground(abg));
                        a.setChecked(airwalkgui)
                    }
                })), b.addView(a), GUIg = new PopupWindow(b, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT), GUIg.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT)), GUIg.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 3, 230)
            } catch (f) {
                Toast.makeText(ctx, "An error occured: " + f, 1).show()
            }
        }
    }))
}

function mainMenu() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            function b() {
                ctx.runOnUiThread(new Runnable({
                    run: function() {
                        var a, b, c, e, f, d, g, h, x, y, m, n, p, k, l, u, v, w;
                        try {
                            a = new LinearLayout(ctx), b = new ScrollView(ctx), c = new LinearLayout(ctx), a.setOrientation(1), a.setBackground(theme), a.getBackground().setAlpha(120), c.setOrientation(1), b.addView(a), c.addView(b), e = new TextView(ctx), e.setTextSize(20), e.setText("-| 战斗类 |-"), e.setTextColor(android.graphics.Color.WHITE), e.setBackgroundDrawable(new ColorDrawable(Color.BLACK)), e.getBackground().setAlpha(100), e.setGravity(Gravity.CENTER), a.addView(e), f = new Switch(ctx), f.setText("长臂猿[自动]"), f.setTextColor(android.graphics.Color.rgb(255, 255, 0)), f.setPadding(10, 3, 3, 3), f.setTextSize(15), f.setBackground(module), f.getBackground().setAlpha(100), f.setChecked(autohitboxed), f.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    autohitboxed ? (autohitboxs = !1, autohitboxed = !1, f.setBackground(module)) : (autohitboxs = !0, autohitboxed = !0, f.setBackground(bg));
                                    f.setChecked(autohitboxed)
                                }
                            })), a.addView(f), d = new Switch(ctx), d.setText("长臂猿[手动]"), d.setTextColor(android.graphics.Color.rgb(255, 255, 0)), d.setPadding(10, 3, 3, 3), d.setTextSize(15), d.setBackground(module), d.getBackground().setAlpha(100), d.setChecked(bypasshitboxed), d.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    bypasshitboxed ? (bypasshitboxs = !1, bypasshitboxed = !1, d.setBackground(module)) : (bypasshitboxs = !0, bypasshitboxed = !0, d.setBackground(bg));
                                    d.setChecked(bypasshitboxed)
                                }
                            })), a.addView(d), g = new Switch(ctx), g.setText("攻击瞄准"), g.setTextColor(android.graphics.Color.rgb(255, 255, 0)), g.setPadding(10, 3, 3, 3), g.setTextSize(15), g.setBackground(module), g.getBackground().setAlpha(100), g.setChecked(hitboxed), g.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    hitboxed ? (hitboxs = !1, hitboxed = !1, g.setBackground(module)) : (hitboxs = !0, hitboxed = !0, g.setBackground(bg));
                                    g.setChecked(hitboxed)
                                }
                            })), a.addView(g), h = new Switch(ctx), h.setText("瞬移攻击"), h.setTextColor(android.graphics.Color.rgb(255, 255, 0)), h.setPadding(10, 3, 3, 3), h.setTextSize(15), h.setBackground(module), h.getBackground().setAlpha(100), h.setChecked(aimboted), h.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    aimboted ? (aimbotss = !1, aimboted = !1, h.setBackground(module)) : (aimbotss = !0, aimboted = !0, h.setBackground(bg));
                                    h.setChecked(aimboted)
                                }
                            })), a.addView(h), x = new Switch(ctx), x.setText("长臂猿恢复"), x.setTextColor(android.graphics.Color.rgb(255, 255, 0)), x.setPadding(10, 3, 3, 3), x.setTextSize(15), x.setBackground(module), x.getBackground().setAlpha(100), x.setChecked(attackaimed), x.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    attackaimed ? (attackaims = !1, attackaimed = !1, x.setBackground(module)) : (attackaims = !0, attackaimed = !0, x.setBackground(bg));
                                    x.setChecked(attackaimed)
                                }
                            })), a.addView(x), y = new Switch(ctx), y.setText("平滑自瞄"), y.setTextColor(android.graphics.Color.rgb(255, 255, 0)), y.setPadding(10, 3, 3, 3), y.setTextSize(15), y.setBackground(module), y.getBackground().setAlpha(100), y.setChecked(aimassisted), y.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    aimassisted ? (aimassistss = !1, aimassisted = !1, y.setBackground(module)) : (aimassistss = !0, aimassisted = !0, y.setBackground(bg));
                                    y.setChecked(aimassisted)
                                }
                            })), a.addView(y), m = new Switch(ctx), m.setText("反击退"), m.setTextColor(android.graphics.Color.rgb(255, 255, 0)), m.setPadding(10, 3, 3, 3), m.setTextSize(15), m.setBackground(module), m.getBackground().setAlpha(100), m.setChecked(antikbed), m.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    antikbed ? (antikbss = !1, antikbed = !1, m.setBackground(module)) : (antikbss = !0, antikbed = !0, m.setBackground(bg));
                                    m.setChecked(antikbed)
                                }
                            })), a.addView(m), n = new Switch(ctx), n.setText("瞬移光环"), n.setTextColor(android.graphics.Color.rgb(255, 255, 0)), n.setPadding(10, 3, 3, 3), n.setTextSize(15), n.setBackground(module), n.getBackground().setAlpha(100), n.setChecked(grappleed), n.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    grappleed ? (grappless = !1, grappleed = !1, n.setBackground(module)) : (grappless = !0, grappleed = !0, n.setBackground(bg));
                                    n.setChecked(grappleed)
                                }
                            })), a.addView(n), p = new Switch(ctx), p.setText("刀刀暴击"), p.setTextColor(android.graphics.Color.rgb(255, 255, 0)), p.setPadding(10, 3, 3, 3), p.setTextSize(15), p.setBackground(module), p.getBackground().setAlpha(100), p.setChecked(criticalsed), p.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    criticalsed ? (criticales = !1, criticalsed = !1, p.setBackground(module)) : (criticales = !0, criticalsed = !0, p.setBackground(bg));
                                    p.setChecked(criticalsed)
                                }
                            })), a.addView(p), k = new Switch(ctx), k.setText("快速冲"), k.setTextColor(android.graphics.Color.rgb(255, 255, 0)), k.setPadding(10, 3, 3, 3), k.setTextSize(15), k.setBackground(module), k.getBackground().setAlpha(100), k.setChecked(escapeed), k.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    escapeed ? (GUIs.dismiss(), escapeed = !1, k.setBackground(module)) : (showEscapeBtn(), escapeed = !0, k.setBackground(bg));
                                    k.setChecked(escapeed)
                                }
                            })), a.addView(k), l = new Switch(ctx), l.setText("自动躲箭"), l.setTextColor(android.graphics.Color.rgb(255, 255, 0)), l.setPadding(10, 3, 3, 3), l.setTextSize(15), l.setBackground(module), l.getBackground().setAlpha(100), l.setChecked(arrowdodgeed), l.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    arrowdodgeed ? (arrowdodgess = !1, arrowdodgeed = !1, l.setBackground(module)) : (arrowdodgess = !0, arrowdodgeed = !0, fctoast("当你附近有箭实体时你将会躲闪!"), l.setBackground(bg));
                                    l.setChecked(arrowdodgeed)
                                }
                            })), a.addView(l), u = new Switch(ctx), u.setText("冲刺攻击"), u.setTextColor(android.graphics.Color.rgb(255, 255, 0)), u.setPadding(10, 3, 3, 3), u.setTextSize(15), u.setBackground(module), u.getBackground().setAlpha(100), u.setChecked(behindhited), u.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    behindhited ? (behindhitss = !1, behindhited = !1, u.setBackground(module)) : (behindhitss = !0, behindhited = !0, u.setBackground(bg));
                                    u.setChecked(behindhited)
                                }
                            })), a.addView(u), v = new Switch(ctx), v.setText("杀戮光环"), v.setTextColor(android.graphics.Color.rgb(255, 255, 0)), v.setPadding(10, 3, 3, 3), v.setTextSize(15), v.setBackground(module), v.getBackground().setAlpha(100), v.setChecked(bowaimboted), v.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    bowaimboted ? (bowaimboted = !1, bowaimbotss = !1, v.setBackground(module)) : (bowaimboted = !0, bowaimbotss = !0, v.setBackground(bg));
                                    v.setChecked(bowaimboted)
                                }
                            })), a.addView(v), w = new Switch(ctx), w.setText("破碎大陆"), w.setTextColor(android.graphics.Color.rgb(255, 255, 0)), w.setPadding(10, 3, 3, 3), w.setTextSize(15), w.setBackground(module), w.getBackground().setAlpha(100), w.setChecked(bled), w.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    if (bled) {
                                        fullbrightss = fastbreaked = fastbreakss = bypasshitboxed = bypasshitboxs = antikbed = antikbss = hitboxed = hitboxs = bled = !1;
                                        ModPE.resetImages();
                                        teamed = teams = dolphined = dolphinss = fullbrighted = !1;
                                        name1.setText("");
                                        layout2.removeView(name1);
                                        Block.setLightLevel(0, 0);
                                        for (i = 0; 256 > i; i++) Block.setDestroyTime(i, defDestroyTime[i]);
                                        w.setBackground(module)
                                    } else teams = teamed = dolphined = dolphinss = fullbrighted = fullbrightss = fastbreaked = fastbreakss = bypasshitboxed = bypasshitboxs = antikbed = antikbss = hitboxed = hitboxs = bled = !0, name1.setText("破碎大陆模式[WetABQ]"), layout2.addView(name1), w.setBackground(bg);
                                    w.setChecked(bled)
                                }
                            })), a.addView(w), menu1 = new PopupWindow(c, ctx.getWindowManager().getDefaultDisplay().getWidth() / 4, ctx.getWindowManager().getDefaultDisplay().getHeight()), menu1.setAnimationStyle(android.R.style.Animation_InputMethod), menu1.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 0, 0)
                        } catch (A) {
                            Toast.makeText(ctx, "Flqme Error: " + A, 1).show()
                        }
                    }
                }))
            }

            function a() {
                ctx.runOnUiThread(new Runnable({
                    run: function() {
                        var a, b, c, f, e, d, g, h, k, l, m, n, p, z, B, u, v, w, A, q, r, t, C, D, E, F, G, H, I;
                        try {
                            a = new LinearLayout(ctx), b = new ScrollView(ctx), c = new LinearLayout(ctx), a.setOrientation(1), a.setBackground(theme), a.getBackground().setAlpha(100), c.setOrientation(1), b.addView(a), c.addView(b), f = new TextView(ctx), f.setTextSize(20), f.setText("-| 移动类 |-"), f.setTextColor(android.graphics.Color.WHITE), f.setBackgroundDrawable(new ColorDrawable(Color.BLACK)), f.getBackground().setAlpha(100), f.setGravity(Gravity.CENTER), a.addView(f), e = new Switch(ctx), e.setText("生存飞行"), e.setTextColor(android.graphics.Color.rgb(255, 255, 0)), e.setPadding(10, 3, 3, 3), e.setTextSize(15), e.setBackground(module), e.getBackground().setAlpha(100), e.setChecked(flyed), e.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    flyed ? (Player.setCanFly(!1), flyed = !1) : (Player.setCanFly(!0), flyed = !0);
                                    e.setChecked(flyed)
                                }
                            })), a.addView(e), d = new Switch(ctx), d.setText("Inpvp飞行"), d.setTextColor(android.graphics.Color.rgb(255, 255, 0)), d.setPadding(10, 3, 3, 3), d.setTextSize(15), d.setBackground(module), d.getBackground().setAlpha(100), d.setChecked(inpvpflyed), d.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    inpvpflyed ? (inpvpflys = !1, inpvpflyed = !1) : (inpvpflys = !0, inpvpflyed = !0);
                                    d.setChecked(inpvpflyed)
                                }
                            })), a.addView(d), g = new Switch(ctx), g.setText("Vanilla加速"), g.setTextColor(android.graphics.Color.rgb(255, 255, 0)), g.setPadding(10, 3, 3, 3), g.setTextSize(15), g.setBackground(module), g.getBackground().setAlpha(100), g.setChecked(mineplexspeeded), g.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    mineplexspeeded ? (mineplexspeeds = !1, mineplexspeeded = !1, ModPE.setGameSpeed(20)) : (mineplexspeeds = !0, mineplexspeeded = !0, ModPE.setGameSpeed(48));
                                    g.setChecked(mineplexspeeded)
                                }
                            })), a.addView(g), h = new Switch(ctx), h.setText("Mineplex飞行"), h.setTextColor(android.graphics.Color.rgb(255, 255, 0)), h.setPadding(10, 3, 3, 3), h.setTextSize(15), h.setBackground(module), h.getBackground().setAlpha(100), h.setChecked(mineplexflyed), h.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    mineplexflyed ? (mineplexflys = !1, mineplexflyed = !1) : (mineplexflys = !0, mineplexflyed = !0);
                                    h.setChecked(mineplexflyed)
                                }
                            })), a.addView(h), k = new Switch(ctx), k.setText("滑行"), k.setTextColor(android.graphics.Color.rgb(255, 255, 0)), k.setPadding(10, 3, 3, 3), k.setTextSize(15), k.setBackground(module), k.getBackground().setAlpha(100), k.setChecked(glideed), k.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    glideed ? (glidess = !1, glideed = !1) : (glidess = !0, glideed = !0);
                                    k.setChecked(glideed)
                                }
                            })), a.addView(k), l = new Switch(ctx), l.setText("平行滑行"), l.setTextColor(android.graphics.Color.rgb(255, 255, 0)), l.setPadding(10, 3, 3, 3), l.setTextSize(15), l.setBackground(module), l.getBackground().setAlpha(100), l.setChecked(ndglideed), l.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    ndglideed ? (ndglidess = !1, ndglideed = !1) : (ndglidess = !0, ndglideed = !0);
                                    l.setChecked(ndglideed)
                                }
                            })), a.addView(l), m = new Switch(ctx), m.setText("滑行[绕过检测]"), m.setTextColor(android.graphics.Color.rgb(255, 255, 0)), m.setPadding(10, 3, 3, 3), m.setTextSize(15), m.setBackground(module), m.getBackground().setAlpha(100), m.setChecked(bypassglideed), m.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    bypassglideed ? (bypassglidess = !1, bypassglideed = !1) : (bypassglidess = !0, bypassglideed = !0);
                                    m.setChecked(bypassglideed)
                                }
                            })), a.addView(m), n = new Switch(ctx), n.setText("加速滑行"), n.setTextColor(android.graphics.Color.rgb(255, 255, 0)), n.setPadding(10, 3, 3, 3), n.setTextSize(15), n.setBackground(module), n.getBackground().setAlpha(100), n.setChecked(sglideed), n.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    sglideed ? (sglidess = !1, sglideed = !1) : (sglidess = !0, sglideed = !0);
                                    n.setChecked(sglideed)
                                }
                            })), a.addView(n), p = new Switch(ctx), p.setText("抖动滑行"), p.setTextColor(android.graphics.Color.rgb(255, 255, 0)), p.setPadding(10, 3, 3, 3), p.setTextSize(15), p.setBackground(module), p.getBackground().setAlpha(100), p.setChecked(dmgglideed), p.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    dmgglideed ? (dmgglidess = !1, dmgglideed = !1) : (dmgglidess = !0, dmgglideed = !0);
                                    p.setChecked(dmgglideed)
                                }
                            })), a.addView(p), z = new Switch(ctx), z.setText("向上滑行"), z.setTextColor(android.graphics.Color.rgb(255, 255, 0)), z.setPadding(10, 3, 3, 3), z.setTextSize(15), z.setBackground(module), z.getBackground().setAlpha(100), z.setChecked(upglideed), z.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    upglideed ? (upglidess = !1, upglideed = !1) : (upglidess = !0, upglideed = !0);
                                    z.setChecked(upglideed)
                                }
                            })), a.addView(z), B = new Switch(ctx), B.setText("空跳"), B.setTextColor(android.graphics.Color.rgb(255, 255, 0)), B.setPadding(10, 3, 3, 3), B.setTextSize(15), B.setBackground(module), B.getBackground().setAlpha(100), B.setChecked(airjumped), B.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    airjumped ? (GUIj.dismiss(), airjumped = !1) : (showJumpBtn(), airjumped = !0, fctoast("可能不支持部分设备"));
                                    B.setChecked(airjumped)
                                }
                            })), a.addView(B), u = new Switch(ctx), u.setText("高跳"), u.setTextColor(android.graphics.Color.rgb(255, 255, 0)), u.setPadding(10, 3, 3, 3), u.setTextSize(15), u.setBackground(module), u.getBackground().setAlpha(100), u.setChecked(highjumped), u.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    highjumped ? (highjumpss = !1, highjumped = !1) : (highjumpss = !0, highjumped = !0);
                                    u.setChecked(highjumped)
                                }
                            })), a.addView(u), v = new Switch(ctx), v.setText("攻击跳"), v.setTextColor(android.graphics.Color.rgb(255, 255, 0)), v.setPadding(10, 3, 3, 3), v.setTextSize(15), v.setBackground(module), v.getBackground().setAlpha(100), v.setChecked(hitjumped), v.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    hitjumped ? (hitjumpss = !1, hitjumped = !1) : (hitjumpss = !0, hitjumped = !0);
                                    v.setChecked(hitjumped)
                                }
                            })), a.addView(v), w = new Switch(ctx), w.setText("点击跳"), w.setTextColor(android.graphics.Color.rgb(255, 255, 0)), w.setPadding(10, 3, 3, 3), w.setTextSize(15), w.setBackground(module), w.getBackground().setAlpha(100), w.setChecked(tapjumped), w.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    tapjumped ? (tapjumpss = !1, tapjumped = !1) : (tapjumpss = !0, tapjumped = !0);
                                    w.setChecked(tapjumped)
                                }
                            })), a.addView(w), A = new Switch(ctx), A.setText("超级跳"), A.setTextColor(android.graphics.Color.rgb(255, 255, 0)), A.setPadding(10, 3, 3, 3), A.setTextSize(15), A.setBackground(module), A.getBackground().setAlpha(100), A.setChecked(longhoped), A.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    longhoped ? (longhopss = !1, longhoped = !1, lhtick = 0) : (longhopss = !0, longhoped = !0);
                                    A.setChecked(longhoped)
                                }
                            })), a.addView(A), q = new Switch(ctx), q.setText("加速‹PMMP›"), q.setTextColor(android.graphics.Color.rgb(255, 255, 0)), q.setPadding(10, 3, 3, 3), q.setTextSize(15), q.setBackground(module), q.getBackground().setAlpha(100), q.setChecked(speeded), q.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    speeded ? (speedss = !1, speeded = !1) : (speedss = !0, speeded = !0);
                                    q.setChecked(speeded)
                                }
                            })), a.addView(q), r = new Switch(ctx), r.setText("保持疾跑"), r.setTextColor(android.graphics.Color.rgb(255, 255, 0)), r.setPadding(10, 3, 3, 3), r.setTextSize(15), r.setBackground(module), r.getBackground().setAlpha(100), r.setChecked(zoomspeeded), r.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    zoomspeeded ? (zoomspeedss = !1, zoomspeeded = !1) : (zoomspeedss = !0, zoomspeeded = !0);
                                    r.setChecked(zoomspeeded)
                                }
                            })), a.addView(r), t = new Switch(ctx), t.setText("持续跳"), t.setTextColor(android.graphics.Color.rgb(255, 255, 0)), t.setPadding(10, 3, 3, 3), t.setTextSize(15), t.setBackground(module), t.getBackground().setAlpha(100), t.setChecked(jumpspeeded), t.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    jumpspeeded ? (jumpspeedss = !1, jumpspeeded = !1) : (jumpspeedss = !0, jumpspeeded = !0);
                                    t.setChecked(jumpspeeded)
                                }
                            })), a.addView(t), C = new Switch(ctx), C.setText("潜行加速"), C.setTextColor(android.graphics.Color.rgb(255, 255, 0)), C.setPadding(10, 3, 3, 3), C.setTextSize(15), C.setBackground(module), C.getBackground().setAlpha(100), C.setChecked(cspeeded), C.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    cspeeded ? (cspeedss = !1, cspeeded = !1) : (cspeedss = !0, cspeeded = !0);
                                    C.setChecked(cspeeded)
                                }
                            })), a.addView(C), D = new Switch(ctx), D.setText("变速"), D.setTextColor(android.graphics.Color.rgb(255, 255, 0)), D.setPadding(10, 3, 3, 3), D.setTextSize(15), D.setBackground(module), D.getBackground().setAlpha(100), D.setChecked(lbsgspeeded), D.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    lbsgspeeded ? (lbsgspeedss = !1, lbsgspeeded = !1, ModPE.setGameSpeed(20)) : (lbsgspeedss = !0, lbsgspeeded = !0);
                                    D.setChecked(lbsgspeeded)
                                }
                            })), a.addView(D), E = new Switch(ctx), E.setText("虚空行者[破碎]"), E.setTextColor(android.graphics.Color.rgb(255, 255, 0)), E.setPadding(10, 3, 3, 3), E.setTextSize(15), E.setBackground(module), E.getBackground().setAlpha(100), E.setChecked(followed), E.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    followed ? (followss = !1, followed = !1, GUIg.dismiss()) : (showRegenSwitch(), followed = !0);
                                    E.setChecked(followed)
                                }
                            })), a.addView(E), F = new Switch(ctx), F.setText("自动向前走"), F.setTextColor(android.graphics.Color.rgb(255, 255, 0)), F.setPadding(10, 3, 3, 3), F.setTextSize(15), F.setBackground(module), F.getBackground().setAlpha(100), F.setChecked(autowalked), F.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    autowalked ? (autowalkss = !1, autowalked = !1) : (autowalkss = !0, autowalked = !0);
                                    F.setChecked(autowalked)
                                }
                            })), a.addView(F), G = new Switch(ctx), G.setText("飞行背包"), G.setTextColor(android.graphics.Color.rgb(255, 255, 0)), G.setPadding(10, 3, 3, 3), G.setTextSize(15), G.setBackground(module), G.getBackground().setAlpha(100), G.setChecked(jetpacked), G.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    jetpacked ? (jetpackss = !1, jetpacked = !1, GUIa.dismiss()) : (showAimSwitch(), jetpacked = !0);
                                    G.setChecked(jetpacked)
                                }
                            })), a.addView(G), H = new Switch(ctx), H.setText("爬墙[瞬移]"), H.setTextColor(android.graphics.Color.rgb(255, 255, 0)), H.setPadding(10, 3, 3, 3), H.setTextSize(15), H.setBackground(module), H.getBackground().setAlpha(100), H.setChecked(steped), H.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    steped ? (stepss = !1, steped = !1) : (stepss = !0, steped = !0);
                                    H.setChecked(steped)
                                }
                            })), a.addView(H), I = new Switch(ctx), I.setText("爬墙[平滑]"), I.setTextColor(android.graphics.Color.rgb(255, 255, 0)), I.setPadding(10, 3, 3, 3), I.setTextSize(15), I.setBackground(module), I.getBackground().setAlpha(100), I.setChecked(csteped), I.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    csteped ? (cstepss = !1, csteped = !1) : (cstepss = !0, csteped = !0);
                                    I.setChecked(csteped)
                                }
                            })), a.addView(I), menu2 = new PopupWindow(c, ctx.getWindowManager().getDefaultDisplay().getWidth() / 4, ctx.getWindowManager().getDefaultDisplay().getHeight()), menu2.setAnimationStyle(android.R.style.Animation_InputMethod), menu2.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 0, 0)
                        } catch (S) {
                            Toast.makeText(ctx, "Flqme Error: " + S, 1).show()
                        }
                    }
                }))
            }

            function f() {
                ctx.runOnUiThread(new Runnable({
                    run: function() {
                        var a, b, c, e, f, d, g, h, k, l, m, n, p, q, r, u, v, w, t;
                        try {
                            a = new LinearLayout(ctx), b = new ScrollView(ctx), c = new LinearLayout(ctx), a.setOrientation(1), a.setBackground(theme), a.getBackground().setAlpha(100), c.setOrientation(1), b.addView(a), c.addView(b), e = new TextView(ctx), e.setTextSize(20), e.setText("-| 玩家类 |-"), e.setTextColor(android.graphics.Color.WHITE), e.setBackgroundDrawable(new ColorDrawable(Color.BLACK)), e.getBackground().setAlpha(100), e.setGravity(Gravity.CENTER), a.addView(e), f = new Switch(ctx), f.setText("追踪玩家"), f.setTextColor(android.graphics.Color.rgb(255, 255, 0)), f.setPadding(10, 3, 3, 3), f.setTextSize(15), f.setBackground(module), f.getBackground().setAlpha(100), f.setChecked(tracked), f.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    tracked ? (tracks = !1, tracked = !1) : (tracks = !0, tracked = !0, fctoast("ABQ: 这是一个测试的功能 有bug请反馈"));
                                    f.setChecked(tracked)
                                }
                            })), a.addView(f), d = new Switch(ctx), d.setText("追踪箱子"), d.setTextColor(android.graphics.Color.rgb(255, 255, 0)), d.setPadding(10, 3, 3, 3), d.setTextSize(15), d.setBackground(module), d.getBackground().setAlpha(100), d.setChecked(chestesped), d.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    chestesped ? (chestesp = !1, chestesped = !1) : (chestesp = !0, chestesped = !0, fctoast("ABQ: 这是一个测试的功能 有bug请反馈"));
                                    d.setChecked(chestesped)
                                }
                            })), a.addView(d), g = new Switch(ctx), g.setText("队伍检测"), g.setTextColor(android.graphics.Color.rgb(255, 255, 0)), g.setPadding(10, 3, 3, 3), g.setTextSize(15), g.setBackground(module), g.getBackground().setAlpha(100), g.setChecked(teamed), g.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    teamed ? (teams = !1, teamed = !1) : (teams = !0, teamed = !0, fctoast("ABQ: 这是一个测试的功能 有bug请反馈"));
                                    g.setChecked(teamed)
                                }
                            })), a.addView(g), h = new Switch(ctx), h.setText("快速拆床"), h.setTextColor(android.graphics.Color.rgb(255, 255, 0)), h.setPadding(10, 3, 3, 3), h.setTextSize(15), h.setBackground(module), h.getBackground().setAlpha(100), h.setChecked(bedbreakered), h.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    bedbreakered ? (bedbreakerss = !1, bedbreakered = !1) : (bedbreakerss = !0, bedbreakered = !0, fctoast("朝向/点击 床 将自动破坏 **有闪退风险**"));
                                    h.setChecked(bedbreakered)
                                }
                            })), a.addView(h), k = new Switch(ctx), k.setText("加速破坏方块"), k.setTextColor(android.graphics.Color.rgb(255, 255, 0)), k.setPadding(10, 3, 3, 3), k.setTextSize(15), k.setBackground(module), k.getBackground().setAlpha(100), k.setChecked(fastbreaked), k.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    if (fastbreaked)
                                        for (fastbreaked = fastbreakss = !1, i = 0; 256 > i; i++) Block.setDestroyTime(i, defDestroyTime[i]);
                                    else fastbreaked = fastbreakss = !0;
                                    k.setChecked(fastbreaked)
                                }
                            })), a.addView(k), l = new Switch(ctx), l.setText("夜视"), l.setTextColor(android.graphics.Color.rgb(255, 255, 0)), l.setPadding(10, 3, 3, 3), l.setTextSize(15), l.setBackground(module), l.getBackground().setAlpha(100), l.setChecked(fullbrighted), l.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    fullbrighted ? (fullbrightss = !1, fullbrighted = !1, ModPE.resetImages(), Block.setLightLevel(0, 0)) : (fullbrightss = !0, fullbrighted = !0, ModPE.resetImages());
                                    l.setChecked(fullbrighted)
                                }
                            })), a.addView(l), m = new Switch(ctx), m.setText("点击瞬移"), m.setTextColor(android.graphics.Color.rgb(255, 255, 0)), m.setPadding(10, 3, 3, 3), m.setTextSize(15), m.setBackground(module), m.getBackground().setAlpha(100), m.setChecked(taptped), m.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    taptped ? (taptpss = !1, taptped = !1) : (taptpss = !0, taptped = !0);
                                    m.setChecked(taptped)
                                }
                            })), a.addView(m), n = new Switch(ctx), n.setText("放大视角"), n.setTextColor(android.graphics.Color.rgb(255, 255, 0)), n.setPadding(10, 3, 3, 3), n.setTextSize(15), n.setBackground(module), n.getBackground().setAlpha(100), n.setChecked(ctrlzoomed), n.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    ctrlzoomed ? (GUIz.dismiss(), ctrlzoomed = !1) : (showZoomSwitch(), ctrlzoomed = !0);
                                    n.setChecked(ctrlzoomed)
                                }
                            })), a.addView(n), p = new Switch(ctx), p.setText("快速更换视角"), p.setTextColor(android.graphics.Color.rgb(255, 255, 0)), p.setPadding(10, 3, 3, 3), p.setTextSize(15), p.setBackground(module), p.getBackground().setAlpha(100), p.setChecked(viewchangered), p.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    viewchangered ? (GUIv.dismiss(), viewchangered = !1) : (showF5Btn(), viewchangered = !0, fctoast("**有闪退风险**"));
                                    p.setChecked(viewchangered)
                                }
                            })), a.addView(p), q = new Switch(ctx), q.setText("防掉虚空"), q.setTextColor(android.graphics.Color.rgb(255, 255, 0)), q.setPadding(10, 3, 3, 3), q.setTextSize(15), q.setBackground(module), q.getBackground().setAlpha(100), q.setChecked(fallbacked), q.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    fallbacked ? (fallbackss = !1, fallbacked = !1) : (fallbackss = !0, fallbacked = !0);
                                    q.setChecked(fallbacked)
                                }
                            })), a.addView(q), r = new Switch(ctx), r.setText("快速掉落"), r.setTextColor(android.graphics.Color.rgb(255, 255, 0)), r.setPadding(10, 3, 3, 3), r.setTextSize(15), r.setBackground(module), r.getBackground().setAlpha(100), r.setChecked(fastfalled), r.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    fastfalled ? (fastfallss = !1, fastfalled = !1) : (fastfallss = !0, fastfalled = !0);
                                    r.setChecked(fastfalled)
                                }
                            })), a.addView(r), u = new Switch(ctx), u.setText("水上漂[LBSG]"), u.setTextColor(android.graphics.Color.rgb(255, 255, 0)), u.setPadding(10, 3, 3, 3), u.setTextSize(15), u.setBackground(module), u.getBackground().setAlpha(100), u.setChecked(dolphined), u.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    dolphined ? (dolphinss = !1, dolphined = !1) : (dolphinss = !0, dolphined = !0);
                                    u.setChecked(dolphined)
                                }
                            })), a.addView(u), v = new Switch(ctx), v.setText("安全行走"), v.setTextColor(android.graphics.Color.rgb(255, 255, 0)), v.setPadding(10, 3, 3, 3), v.setTextSize(15), v.setBackground(module), v.getBackground().setAlpha(100), v.setChecked(safewalked), v.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    safewalked ? (safewalkss = !1, safewalked = !1) : (safewalkss = !0, safewalked = !0);
                                    v.setChecked(safewalked)
                                }
                            })), a.addView(v), w = new Switch(ctx), w.setText("浮空行走"), w.setTextColor(android.graphics.Color.rgb(255, 255, 0)), w.setPadding(10, 3, 3, 3), w.setTextSize(15), w.setBackground(module), w.getBackground().setAlpha(100), w.setChecked(scaffoldwalked), w.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    scaffoldwalked ? (scaffoldwalkss = !1, scaffoldwalked = !1) : (scaffoldwalkss = !0, scaffoldwalked = !0);
                                    w.setChecked(scaffoldwalked)
                                }
                            })), a.addView(w), t = new Switch(ctx), t.setText("穿墙"), t.setTextColor(android.graphics.Color.rgb(255, 255, 0)), t.setPadding(10, 3, 3, 3), t.setTextSize(15), t.setBackground(module), t.getBackground().setAlpha(100), t.setChecked(wallhacked), t.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    wallhacked ? (wallhackss = !1, wallhacked = !1, Entity.setCollisionSize(Player.getEntity(), 1, 2)) : (wallhackss = !0, wallhacked = !0);
                                    t.setChecked(wallhacked)
                                }
                            })), a.addView(t), menu3 = new PopupWindow(c, ctx.getWindowManager().getDefaultDisplay().getWidth() / 4, ctx.getWindowManager().getDefaultDisplay().getHeight()), menu3.setAnimationStyle(android.R.style.Animation_InputMethod), menu3.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 0, 0)
                        } catch (R) {
                            Toast.makeText(ctx, "Flqme Error: " + R, 1).show()
                        }
                    }
                }))
            }

            function g() {
                ctx.runOnUiThread(new Runnable({
                    run: function() {
                        var a, b, c, f, e, d, g, h, k, l, m, n, p;
                        try {
                            a = new LinearLayout(ctx), b = new ScrollView(ctx), c = new LinearLayout(ctx), a.setOrientation(1), a.setBackground(theme), a.getBackground().setAlpha(100), c.setOrientation(1), b.addView(a), c.addView(b), f = new TextView(ctx), f.setTextSize(20), f.setText("-| 开发类 |-"), f.setTextColor(android.graphics.Color.WHITE), f.setBackgroundDrawable(new ColorDrawable(Color.BLACK)), f.getBackground().setAlpha(100), f.setGravity(Gravity.CENTER), a.addView(f), e = new Button(ctx), e.setText("退出客户端"), e.setTextColor(Color.rgb(0, 0, 0)), e.setTextSize(15), e.setGravity(Gravity.CENTER), e.setOnClickListener(new View.OnClickListener({
                                onClick: function() {
                                    ccrash();
                                    fctoast("感谢您使用Skiddy")
                                }
                            })), a.addView(e), d = new Switch(ctx), d.setText("Spam"), d.setTextColor(android.graphics.Color.rgb(255, 255, 0)), d.setPadding(10, 3, 3, 3), d.setTextSize(15), d.setBackground(module), d.getBackground().setAlpha(100), d.setChecked(spamed), d.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    spamed ? (spamss = !1, spamed = !1) : (spamss = !0, spamed = !0, fctoast("使用 !spam <text> 来刷屏"));
                                    d.setChecked(spamed)
                                }
                            })), a.addView(d), g = new Switch(ctx), g.setText("Leet讲话"), g.setTextColor(android.graphics.Color.rgb(255, 255, 0)), g.setPadding(10, 3, 3, 3), g.setTextSize(15), g.setBackground(module), g.getBackground().setAlpha(100), g.setChecked(leetspeaked), g.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    leetspeaked ? (leetspeakss = !1, leetspeaked = !1) : (leetspeakss = !0, leetspeaked = !0);
                                    g.setChecked(leetspeaked)
                                }
                            })), a.addView(g), h = new Switch(ctx), h.setText("CriticalTrails"), h.setTextColor(android.graphics.Color.rgb(255, 255, 0)), h.setPadding(10, 3, 3, 3), h.setTextSize(15), h.setBackground(module), h.getBackground().setAlpha(100), h.setChecked(criticaltrailsed), h.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    criticaltrailsed ? (criticaltrailsss = !1, criticaltrailsed = !1) : (criticaltrailsss = !0, criticaltrailsed = !0, fctoast("可能会闪退!"));
                                    h.setChecked(criticaltrailsed)
                                }
                            })), a.addView(h), k = new Switch(ctx), k.setText("FlameHands"), k.setTextColor(android.graphics.Color.rgb(255, 255, 0)), k.setPadding(10, 3, 3, 3), k.setTextSize(15), k.setBackground(module), k.getBackground().setAlpha(100), k.setChecked(firepunched), k.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    firepunched ? (firepunchss = !1, firepunched = !1) : (firepunchss = !0, firepunched = !0);
                                    k.setChecked(firepunched)
                                }
                            })), a.addView(k), l = new Switch(ctx), l.setText("Derp"), l.setTextColor(android.graphics.Color.rgb(255, 255, 0)), l.setPadding(10, 3, 3, 3), l.setTextSize(15), l.setBackground(module), l.getBackground().setAlpha(100), l.setChecked(derped), l.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    derped ? (derpss = !1, derped = !1) : (derpss = !0, derped = !0);
                                    l.setChecked(derped)
                                }
                            })), a.addView(l), m = new Switch(ctx), m.setText("自动潜行‹发包›"), m.setTextColor(android.graphics.Color.rgb(255, 255, 0)), m.setPadding(10, 3, 3, 3), m.setTextSize(15), m.setBackground(module), m.getBackground().setAlpha(100), m.setChecked(twerked), m.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    twerked ? (twerkss = !1, twerked = !1) : (twerkss = !0, twerked = !0);
                                    m.setChecked(twerked)
                                }
                            })), a.addView(m), n = new Switch(ctx), n.setText("皮肤Derp"), n.setTextColor(android.graphics.Color.rgb(255, 255, 0)), n.setPadding(10, 3, 3, 3), n.setTextSize(15), n.setBackground(module), n.getBackground().setAlpha(100), n.setChecked(backfaceed), n.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    backfaceed ? (backfacess = !1, backfaceed = !1) : (backfacess = !0, backfaceed = !0);
                                    n.setChecked(backfaceed)
                                }
                            })), a.addView(n), p = new Switch(ctx), p.setText("HUD"), p.setTextColor(android.graphics.Color.rgb(255, 255, 0)), p.setPadding(10, 3, 3, 3), p.setTextSize(15), p.setBackground(module), p.getBackground().setAlpha(100), p.setChecked(stealthed), p.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
                                onCheckedChanged: function() {
                                    stealthed ? (stealthss = !1, stealthed = !1) : (stealthss = !0, stealthed = !0);
                                    p.setChecked(stealthed)
                                }
                            })), a.addView(p), menu4 = new PopupWindow(c, ctx.getWindowManager().getDefaultDisplay().getWidth() / 4, ctx.getWindowManager().getDefaultDisplay().getHeight()), menu4.setAnimationStyle(android.R.style.Animation_InputMethod), menu4.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 0, 0)
                        } catch (z) {
                            Toast.makeText(ctx, "Flqme Error: " + z, 1).show()
                        }
                    }
                }))
            }
            var c, h, k, l, e, d, q, r, t;
            try {
                c = new LinearLayout(ctx), h = new ScrollView(ctx), k = new LinearLayout(ctx), c.setOrientation(1), c.setBackground(theme), c.getBackground().setAlpha(100), k.setOrientation(1), h.addView(c), k.addView(h), l = new TextView(ctx), l.setTextSize(18), l.setText(NAME + " " + VERSION), l.setTextColor(android.graphics.Color.WHITE), l.setGravity(Gravity.CENTER), c.addView(l), e = new TextView(ctx), e.setTextSize(18), e.setText("模块数量: " + MODULES), e.setTextColor(android.graphics.Color.WHITE), e.setGravity(Gravity.CENTER), c.addView(e), d = new Button(ctx), d.setText("战斗类"), d.setTextColor(android.graphics.Color.BLACK), d.setTextSize(16), d.setGravity(Gravity.CENTER), d.setOnClickListener(new View.OnClickListener({
                    onClick: function() {
                        b();
                        exitcombat();
                        null != menu && menu.isShowing() && menu.dismiss();
                        null != GUI && GUI.isShowing() && GUI.dismiss();
                        exitUI.dismiss()
                    }
                })), c.addView(d), q = new Button(ctx), q.setText("移动类"), q.setTextColor(android.graphics.Color.BLACK), q.setTextSize(16), q.setGravity(Gravity.CENTER), q.setOnClickListener(new View.OnClickListener({
                    onClick: function() {
                        a();
                        exitmotion();
                        null != menu && menu.isShowing() && menu.dismiss();
                        null != GUI && GUI.isShowing() && GUI.dismiss();
                        exitUI.dismiss()
                    }
                })), c.addView(q), r = new Button(ctx), r.setText("玩家类"), r.setTextColor(android.graphics.Color.BLACK), r.setTextSize(16), r.setGravity(Gravity.CENTER), r.setOnClickListener(new View.OnClickListener({
                    onClick: function() {
                        f();
                        exitplayer();
                        null != menu && menu.isShowing() && menu.dismiss();
                        null != GUI && GUI.isShowing() && GUI.dismiss();
                        exitUI.dismiss()
                    }
                })), c.addView(r), t = new Button(ctx), t.setText("开发类"), t.setTextColor(android.graphics.Color.BLACK), t.setTextSize(16), t.setGravity(Gravity.CENTER), t.setOnClickListener(new View.OnClickListener({
                    onClick: function() {
                        g();
                        exitmisc();
                        null != menu && menu.isShowing() && menu.dismiss();
                        null != GUI && GUI.isShowing() && GUI.dismiss();
                        exitUI.dismiss()
                    }
                })), c.addView(t), menu = new PopupWindow(k, ctx.getWindowManager().getDefaultDisplay().getWidth() / 5, ctx.getWindowManager().getDefaultDisplay().getHeight() / 1), menu.setAnimationStyle(android.R.style.Animation_InputMethod), menu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 0, 0)
            } catch (J) {
                Toast.makeText(ctx, "Flqme Error: " + J, 1).show()
            }
        }
    }))
}

function exit() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            var b, a;
            try {
                b = new LinearLayout(ctx), a = new Button(ctx), a.setText("X"), a.setTextColor(Color.rgb(255, 255, 255)), a.setTextSize(15), a.setBackground(xbg), a.getBackground().setAlpha(150), a.setOnClickListener(new View.OnClickListener({
                    onClick: function() {
                        exitUI.dismiss();
                        menu.dismiss();
                        showMenuBtn()
                    }
                })), b.addView(a), exitUI = new PopupWindow(b, dip2px(40), dip2px(40)), exitUI.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT)), exitUI.setAnimationStyle(android.R.style.Animation_Translucent), exitUI.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.CENTER, 0, 0)
            } catch (f) {
                Toast.makeText(ctx, f, 1).show()
            }
        }
    }))
}

function exitcombat() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            var b, a;
            try {
                b = new LinearLayout(ctx), a = new Button(ctx), a.setText("X"), a.setTextColor(Color.rgb(255, 255, 255)), a.setTextSize(15), a.setBackground(xbg), a.getBackground().setAlpha(150), a.setOnClickListener(new View.OnClickListener({
                    onClick: function() {
                        exitcombatUI.dismiss();
                        menu1.dismiss();
                        mainMenu();
                        exit()
                    }
                })), b.addView(a), exitcombatUI = new PopupWindow(b, dip2px(40), dip2px(40)), exitcombatUI.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT)), exitcombatUI.setAnimationStyle(android.R.style.Animation_Translucent), exitcombatUI.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.CENTER, 0, 0)
            } catch (f) {
                Toast.makeText(ctx, f, 1).show()
            }
        }
    }))
}

function exitmotion() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            var b, a;
            try {
                b = new LinearLayout(ctx), a = new Button(ctx), a.setText("X"), a.setTextColor(Color.rgb(255, 255, 255)), a.setTextSize(15), a.setBackground(xbg), a.getBackground().setAlpha(150), a.setOnClickListener(new View.OnClickListener({
                    onClick: function() {
                        exitmotionUI.dismiss();
                        menu2.dismiss();
                        mainMenu();
                        exit()
                    }
                })), b.addView(a), exitmotionUI = new PopupWindow(b, dip2px(40), dip2px(40)), exitmotionUI.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT)), exitmotionUI.setAnimationStyle(android.R.style.Animation_Translucent), exitmotionUI.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.CENTER, 0, 0)
            } catch (f) {
                Toast.makeText(ctx, f, 1).show()
            }
        }
    }))
}

function exitplayer() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            var b, a;
            try {
                b = new LinearLayout(ctx), a = new Button(ctx), a.setText("X"), a.setTextColor(Color.rgb(255, 255, 255)), a.setTextSize(15), a.setBackground(xbg), a.getBackground().setAlpha(150), a.setOnClickListener(new View.OnClickListener({
                    onClick: function() {
                        exitplayerUI.dismiss();
                        menu3.dismiss();
                        mainMenu();
                        exit()
                    }
                })), b.addView(a), exitplayerUI = new PopupWindow(b, dip2px(40), dip2px(40)), exitplayerUI.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT)), exitplayerUI.setAnimationStyle(android.R.style.Animation_Translucent), exitplayerUI.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.CENTER, 0, 0)
            } catch (f) {
                Toast.makeText(ctx, f, 1).show()
            }
        }
    }))
}

function exitmisc() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            var b, a;
            try {
                b = new LinearLayout(ctx), a = new Button(ctx), a.setText("X"), a.setTextColor(Color.rgb(255, 255, 255)), a.setTextSize(15), a.setBackground(xbg), a.getBackground().setAlpha(150), a.setOnClickListener(new View.OnClickListener({
                    onClick: function() {
                        exitmiscUI.dismiss();
                        menu4.dismiss();
                        mainMenu();
                        exit()
                    }
                })), b.addView(a), exitmiscUI = new PopupWindow(b, dip2px(40), dip2px(40)), exitmiscUI.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT)), exitmiscUI.setAnimationStyle(android.R.style.Animation_Translucent), exitmiscUI.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.CENTER, 0, 0)
            } catch (f) {
                Toast.makeText(ctx, f, 1).show()
            }
        }
    }))
}

function getNearestEntity(b) {
    var a, f, g, c = Server.getAllPlayers(),
        h = b,
        k = null;
    if (null != c) {
        for (b = 0; b < c.length; b++) a = Entity.getX(c[b]) - getPlayerX(), f = Entity.getY(c[b]) - getPlayerY(), g = Entity.getZ(c[b]) - getPlayerZ(), a = Math.sqrt(Math.pow(a, 2) + Math.pow(f, 2) + Math.pow(g, 2)), h > a && 0 < a && 1 <= Entity.getHealth(c[b]) && (h = a, k = c[b]);
        return k
    }
}

function nearArrow(b) {
    var a, f, g, c = Entity.getAll(),
        h = b,
        k = null;
    for (b = 0; b < c.length; b++) a = Entity.getX(c[b]) - getPlayerX(), f = Entity.getY(c[b]) - getPlayerY(), g = Entity.getZ(c[b]) - getPlayerZ(), a = Math.sqrt(Math.pow(a, 2) + Math.pow(f, 2) + Math.pow(g, 2)), h > a && 0 < a && (h = a, k = c[b]);
    return k
}

function removeColors(b) {
    var a = "0123456789abcdefklmnor".split("");
    return null != b ? (a.forEach(function(a) {
        b = b.replace(RegExp("§" + a, "g"), "")
    }), b) : ""
}

function isNotTeam(b) {
    var a, f = !0;
    for (i = 0; i < team.length; i++) a = removeColors(Entity.getNameTag(b)), a == team[i] && (f = !1);
    return f
}

function aimAtEnt(b, a) {
    var f, g, c, h, k, l, e, d;
    null != b && (f = Entity.getX(b) - getPlayerX(), g = Entity.getY(b) - getPlayerY(), c = Entity.getZ(b) - getPlayerZ(), null != a && posinstanceofArray && (f = Entity.getX(b) - a[0], g = Entity.getY(b) - a[1], c = Entity.getZ(b) - a[2]), "63" != Entity.getEntityTypeId(b) && (g += .5), h = Entity.getX(b) + .5, Entity.getY(b), k = Entity.getZ(b) + .5, l = Math.sqrt(f * f + g * g + c * c), g /= l, e = Math.asin(g), e = 180 * e / Math.PI, e = -e, d = -Math.atan2(h - (Player.getX() + .5), k - (Player.getZ() + .5)) * (180 / Math.PI), 89 > e && -89 < e && Entity.setRot(Player.getEntity(), d, e))
}

function aimAtEntA(b) {
    var a = Player.getX() - Entity.getX(b),
        f = Player.getY() - Entity.getY(b);
    b = Player.getZ() - Entity.getZ(b);
    var g = Math.asin(a / Math.sqrt(a * a + b * b)) / Math.PI * 180,
        a = Math.asin(f / Math.sqrt(a * a + b * b + f * f)) / Math.PI * 180;
    0 < b && (g = -g + 180);
    setRot(Player.getEntity(), g, a)
}

function bowAimAt(b) {
    var a = Entity.getX(b) - Player.getX(),
        f = Entity.getEntityTypeId(b) == EntityType.PLAYER ? Entity.getY(b) - Player.getY() : Entity.getY(b) + 1 - Player.getY(),
        g = Entity.getZ(b) - Player.getZ();
    b = 180 * Math.atan2(g, a) / Math.PI - 90;
    a = Math.sqrt(a * a + g * g);
    f = -(180 / Math.PI) * Math.atan((1 - Math.sqrt(1 - .007 * (.007 * a * a + 2 * f))) / (.007 * a));
    89 > f && -89 < f && setRot(Player.getEntity(), b, f)
}

function entityHurtHook() {
    antikbss
}

function toDirectionalVector(b, a, f) {
    b[0] = Math.cos(a) * Math.cos(f);
    b[1] = Math.sin(f);
    b[2] = Math.sin(a) * Math.cos(f)
}

function attackHook(b, a) {
    var f, g, c, h, k, l, e, d;
    return teams && ifTeam(a) ? (clientMessage("§4Skiddy §6>> §eTeams 队友检测 " + Entity.getNameTag(a)), void 0) : (b == Player.getEntity() && grappless && 0 < Entity.getHealth(a) && setPosition(getPlayerEnt(), Entity.getX(a), Entity.getY(a), Entity.getZ(a)), b == Player.getEntity() && criticales && 0 < Entity.getHealth(a) && 13 <= critTick && (critTick = 0), b == Player.getEntity() && bypasshitboxs && 0 < Entity.getHealth(a) && (Entity.setCollisionSize(a, 10, 100), clientMessage("§4Skiddy §6>> §eReach 距离攻击 " + Entity.getNameTag(a))), b == Player.getEntity() && attackaims && 0 < Entity.getHealth(a) && (Entity.setCollisionSize(a, 1, 2), clientMessage("§4Skiddy §6>> §eRebox 恢复距离攻击 " + Entity.getNameTag(a))), b == Player.getEntity() && hitboxs && 0 < Entity.getHealth(a) && (aimAtEntA(a), clientMessage("§4Skiddy §6>> §eHitAim 攻击瞄准 " + Entity.getNameTag(a))), b == Player.getEntity() && aimbotss && 0 < Entity.getHealth(a) && (Player.getX(), Player.getY(), Player.getZ(), setPosition(getPlayerEnt(), Entity.getX(a), Entity.getY(a), Entity.getZ(a)), clientMessage("§4Skiddy §6>> §eTpHit 瞬移攻击 " + Entity.getNameTag(a))), b == Player.getEntity() && hitjumpss && Utils.Player.isOnGround() && setVelY(getPlayerEnt(), .4), b == Player.getEntity() && firepunchss && (h = Entity.getX(a), k = Entity.getY(a), l = Entity.getZ(a), Level.addParticle(ParticleType.lava, h - .2, k + 1, l, 0, 0, 0, 180), Level.addParticle(ParticleType.flame, h - .2, k + 1, l, 0, 0, 0, 400), Entity.setFireTicks(a, 999)), b == Player.getEntity() && behindhitss && (e = getYaw() + 90, d = getPitch() - 180, f = Math.cos(Math.PI / 180 * e), g = Math.sin(Math.PI / 180 * d), c = Math.sin(Math.PI / 180 * e), setVelX(Player.getEntity(), 1 * f), setVelY(Player.getEntity(), 1 * g), setVelZ(Player.getEntity(), 1 * c)), void 0)
}

function destroyBlock(b, a, f) {
    forcedestroyss && 0 != getTile(b, a, f) && Level.setTile(b, a, f, 0, 0)
}

function ifTeam(b) {
    return 0 == Entity.getNameTag(b).indexOf("§1") && 0 == Entity.getNameTag(Player.getEntity()).indexOf("§1") ? !0 : 0 == Entity.getNameTag(b).indexOf("§2") && 0 == Entity.getNameTag(Player.getEntity()).indexOf("§2") ? !0 : 0 == Entity.getNameTag(b).indexOf("§3") && 0 == Entity.getNameTag(Player.getEntity()).indexOf("§3") ? !0 : 0 == Entity.getNameTag(b).indexOf("§4") && 0 == Entity.getNameTag(Player.getEntity()).indexOf("§4") ? !0 : 0 == Entity.getNameTag(b).indexOf("§5") && 0 == Entity.getNameTag(Player.getEntity()).indexOf("§5") ? !0 : 0 == Entity.getNameTag(b).indexOf("§6") && 0 == Entity.getNameTag(Player.getEntity()).indexOf("§6") ? !0 : 0 == Entity.getNameTag(b).indexOf("§7") && 0 == Entity.getNameTag(Player.getEntity()).indexOf("§7") ? !0 : 0 == Entity.getNameTag(b).indexOf("§8") && 0 == Entity.getNameTag(Player.getEntity()).indexOf("§8") ? !0 : 0 == Entity.getNameTag(b).indexOf("§c") && 0 == Entity.getNameTag(Player.getEntity()).indexOf("§c") ? !0 : 0 == Entity.getNameTag(b).indexOf("§9") && 0 == Entity.getNameTag(Player.getEntity()).indexOf("§9") ? !0 : 0 == Entity.getNameTag(b).indexOf("§e") && 0 == Entity.getNameTag(Player.getEntity()).indexOf("§e") ? !0 : 0 == Entity.getNameTag(b).indexOf("§a") && 0 == Entity.getNameTag(Player.getEntity()).indexOf("§a") ? !0 : 0 == Entity.getNameTag(b).indexOf("§b") && 0 == Entity.getNameTag(Player.getEntity()).indexOf("§b") ? !0 : 0 == Entity.getNameTag(b).indexOf("§d") && 0 == Entity.getNameTag(Player.getEntity()).indexOf("§d") ? !0 : !1
}

function useItem(b, a, f, g, c, h) {
    tapjumpss && setVelY(getPlayerEnt(), .4);
    taptpss && 0 == getTile(b, a + 1, f) && 0 == getTile(b, a + 2, f) && Entity.setPosition(Player.getEntity(), b + .5, a + 2.63, f + .5);
    placetpss && (h == BlockFace.NORTH ? Entity.setPositionRelative(getPlayerEnt(), 0, 0, -1) : h == BlockFace.SOUTH ? Entity.setPositionRelative(getPlayerEnt(), 0, 0, 1) : h == BlockFace.WEST ? Entity.setPositionRelative(getPlayerEnt(), -1, 0, 0) : h == BlockFace.EAST ? Entity.setPositionRelative(getPlayerEnt(), 1, 0, 0) : h == BlockFace.UP && Entity.setPositionRelative(getPlayerEnt(), 0, 1, 0))
}

function modTick() {
    var b, a, f, g, c, h, k, l, e, d, q, r, t, J, M, O, L, K, P, N, Q, x, y;
    if (timer++, b = Player.getX(), a = Player.getY(), f = Player.getZ(), g = Player.getX(), c = Player.getY(), h = Player.getZ(), (-1 != Server.getAddress().indexOf("easecation") || -1 != Server.getAddress().indexOf("fcmcpe")) && (ccrash(), fctoast("本挂禁止在EaseCation内使用！！！！！！")), bowaimbotss && 261 == getCarriedItem() && (k = getNearestEntity(100), null != k && "" != Player.getName(k) && " " != Player.getName(k) && "  " != Player.getName(k) && bowAimAtA(k)), autohitboxs && (l = Player.getPointedEntity(), null != l && "" != Entity.getNameTag(l) && " " != Entity.getNameTag(l) && "  " != Entity.getNameTag(l) && Player.isPlayer(l) && Entity.setCollisionSize(l, 10, 30)), tracks && (l = getNearestEntity(100), Skiddy.drawTracer(Entity.getX(l), Entity.getY(l), Entity.getZ(l), !0, "on")), bowaimbotss) {
        e = Server.getAllPlayers();
        for (d = 0; d < e.length; d++) q = Entity.getX(e[d]) - getPlayerX(), r = Entity.getY(e[d]) - getPlayerY(), t = Entity.getZ(e[d]) - getPlayerZ(), 16 >= q * q + r * r + t * t && e[d] !== getPlayerEnt() && Entity.setHealth(e[d], 0);
        e = Entity.getAll();
        for (d = 0; d < e.length; d++) q = Entity.getX(e[d]) - getPlayerX(), r = Entity.getY(e[d]) - getPlayerY(), t = Entity.getZ(e[d]) - getPlayerZ(), 400 >= q * q + r * r + t * t && e[d] != getPlayerEnt() && (10 == Entity.getEntityTypeId(e[d]) && Entity.setHealth(e[d], 0), 11 == Entity.getEntityTypeId(e[d]) && Entity.setHealth(e[d], 0), 12 == Entity.getEntityTypeId(e[d]) && Entity.setHealth(e[d], 0), 13 == Entity.getEntityTypeId(e[d]) && Entity.setHealth(e[d], 0), 14 == Entity.getEntityTypeId(e[d]) && Entity.setHealth(e[d], 0), 15 == Entity.getEntityTypeId(e[d]) && Entity.setHealth(e[d], 0), 16 == Entity.getEntityTypeId(e[d]) && Entity.setHealth(e[d], 0), 17 == Entity.getEntityTypeId(e[d]) && Entity.setHealth(e[d], 0), 18 == Entity.getEntityTypeId(e[d]) && Entity.setHealth(e[d], 0), 19 == Entity.getEntityTypeId(e[d]) && Entity.setHealth(e[d], 0), 20 == Entity.getEntityTypeId(e[d]) && Entity.setHealth(e[d], 0), 21 == Entity.getEntityTypeId(e[d]) && Entity.setHealth(e[d], 0), 22 == Entity.getEntityTypeId(e[d]) && Entity.setHealth(e[d], 0), 23 == Entity.getEntityTypeId(e[d]) && Entity.setHealth(e[d], 0), 24 == Entity.getEntityTypeId(e[d]) && Entity.setHealth(e[d], 0), 25 == Entity.getEntityTypeId(e[d]) && Entity.setHealth(e[d], 0), 26 == Entity.getEntityTypeId(e[d]) && Entity.setHealth(e[d], 0), 27 == Entity.getEntityTypeId(e[d]) && Entity.setHealth(e[d], 0), 32 == Entity.getEntityTypeId(e[d]) && Entity.setHealth(e[d], 0), 33 == Entity.getEntityTypeId(e[d]) && Entity.setHealth(e[d], 0), 34 == Entity.getEntityTypeId(e[d]) && Entity.setHealth(e[d], 0), 35 == Entity.getEntityTypeId(e[d]) && Entity.setHealth(e[d], 0), 36 == Entity.getEntityTypeId(e[d]) && Entity.setHealth(e[d], 0), 37 == Entity.getEntityTypeId(e[d]) && Entity.setHealth(e[d], 0), 38 == Entity.getEntityTypeId(e[d]) && Entity.setHealth(e[d], 0), 39 == Entity.getEntityTypeId(e[d]) && Entity.setHealth(e[d], 0), 40 == Entity.getEntityTypeId(e[d]) && Entity.setHealth(e[d], 0), 41 == Entity.getEntityTypeId(e[d]) && Entity.setHealth(e[d], 0), 42 == Entity.getEntityTypeId(e[d]) && Entity.setHealth(e[d], 0), 43 == Entity.getEntityTypeId(e[d]) && Entity.setHealth(e[d], 0), 44 == Entity.getEntityTypeId(e[d]) && Entity.setHealth(e[d], 0), 45 == Entity.getEntityTypeId(e[d]) && Entity.setHealth(e[d], 0), 46 == Entity.getEntityTypeId(e[d]) && Entity.setHealth(e[d], 0), 47 == Entity.getEntityTypeId(e[d]) && Entity.setHealth(e[d], 0), 48 == Entity.getEntityTypeId(e[d]) && Entity.setHealth(e[d], 0), 49 == Entity.getEntityTypeId(e[d]) && Entity.setHealth(e[d], 0), 50 == Entity.getEntityTypeId(e[d]) && Entity.setHealth(e[d], 0), 51 == Entity.getEntityTypeId(e[d]) && Entity.setHealth(e[d], 0), 52 == Entity.getEntityTypeId(e[d]) && Entity.setHealth(e[d], 0), 28 == Entity.getEntityTypeId(e[d]) && Entity.setHealth(e[d], 0), 54 == Entity.getEntityTypeId(e[d]) && Entity.setHealth(e[d], 0), 55 == Entity.getEntityTypeId(e[d]) && Entity.setHealth(e[d], 0), 53 == Entity.getEntityTypeId(e[d]) && Entity.setHealth(e[d], 0), 29 == Entity.getEntityTypeId(e[d]) && Entity.setHealth(e[d], 0), 57 == Entity.getEntityTypeId(e[d]) && Entity.setHealth(e[d], 0), 104 == Entity.getEntityTypeId(e[d]) && Entity.setHealth(e[d], 0), 105 == Entity.getEntityTypeId(e[d]) && Entity.setHealth(e[d], 0))
    }
    followss && ("0" == Level.getTile(getPlayerX(), getPlayerY() - 1, getPlayerZ()) || "95" == Level.getTile(getPlayerX(), getPlayerY() - 1, getPlayerZ())) && Level.setTile(getPlayerX(), getPlayerY() - 2, getPlayerZ(), 95, 0);
    (antikbss || 0 >= Entity.getHealth(getPlayerEnt())) && (1 <= kbTick ? kbTick-- : Entity.setImmobile(getPlayerEnt(), !1), kbHealth > Entity.getHealth(getPlayerEnt()) && (Entity.setImmobile(getPlayerEnt(), !0), kbTick = 1), kbTick = 0, kbHealth = Entity.getHealth(getPlayerEnt()));
    ndglidess && setVelY(getPlayerEnt(), 1E-8);
    stepss && Utils.Player.isCollidedHorizontally() && Entity.setPositionRelative(getPlayerEnt(), 0, 1.6, 0);
    cstepss && Utils.Player.isCollidedHorizontally() && setVelY(Player.getEntity(), .6);
    speedss && Utils.Player.isOnGround() && (setVelX(getPlayerEnt(), 1.5 * Entity.getVelX(getPlayerEnt())), setVelZ(getPlayerEnt(), 1.5 * Entity.getVelZ(getPlayerEnt())));
    zoomspeedss && (setVelX(getPlayerEnt(), 1.1 * Entity.getVelX(getPlayerEnt())), setVelZ(getPlayerEnt(), 1.1 * Entity.getVelZ(getPlayerEnt())));
    upglidess && setVelY(getPlayerEnt(), .3);
    criticaltrailsss && Level.addParticle(ParticleType.crit, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 10);
    highjumpss && (-.1 > Entity.getVelY(getPlayerEnt()) && setVelY(getPlayerEnt(), -.5), .35 > Entity.getVelY(getPlayerEnt()) && .2 < Entity.getVelY(getPlayerEnt()) && 1 == can && 1 == canGetHP && (setVelY(getPlayerEnt(), .6), can = 2, HP = Entity.getHealth(getPlayerEnt()), canGetHP = 0), Entity.getVelY(getPlayerEnt()) > gravity && 2 == can && (Player.setHealth(HP), canGetHP = 1, can = 0), Entity.getVelY(getPlayerEnt()) == gravity && 0 == can && (Player.setHealth(HP), canGetHP = 1, can = 1));
    (0 == isDev && "FirePro9978" == Entity.getNameTag(getPlayerEnt()) || "NNeBBuRR" == Entity.getNameTag(getPlayerEnt())) && (canBeDev = !0);
    autowalkss && (J = [0, 0, 0], toDirectionalVector(J, (getYaw() + 90) * Math.PI / 180, -1 * (getPitch() * Math.PI / 180)), setVelX(getPlayerEnt(), .4 * J[0]), setVelZ(getPlayerEnt(), .4 * J[2]));
    jetpackss && (M = getYaw() + 90, O = getPitch() - 180, g = Math.cos(Math.PI / 180 * M), c = Math.sin(Math.PI / 180 * O), h = Math.sin(Math.PI / 180 * M), setVelX(Player.getEntity(), 1 * g), setVelY(Player.getEntity(), 1 * c), setVelZ(Player.getEntity(), 1 * h));
    cspeedss && 1 == Entity.isSneaking(Player.getEntity()) && (setVelY(getPlayerEnt(), -100), setVelX(getPlayerEnt(), 1.7 * Entity.getVelX(getPlayerEnt())), setVelZ(getPlayerEnt(), 1.7 * Entity.getVelZ(getPlayerEnt())));
    null == team[0] && (team.push("FirePro9978"), team.push("iTzPurPle"), team.push("Affann"), team.push("Affannn"), team.push("NNeBBuRR"), team.push("QuinnMakkinje"));
    dolphinss && Utils.Player.isInWater() && setVelY(getPlayerEnt(), .1);
    solidliquidss && (Block.setShape(8, null, null, null, null, null, null), Block.setShape(9, null, null, null, null, null, null), Block.setShape(10, null, null, null, null, null, null), Block.setShape(11, null, null, null, null, null, null), Block.defineBlock(8, "Water", [
        ["still_water", 0]
    ], 8, !0, 4), Block.defineBlock(9, "Stationary Water", [
        ["still_water", 0]
    ], 9, !0, 4), Block.defineBlock(10, "Lava", [
        ["still_lava", 0]
    ], 10, !0, 4), Block.defineBlock(11, "Stationary Lava", [
        ["still_lava", 0]
    ], 11, !0, 4));
    wallhackss && Entity.setCollisionSize(Player.getEntity(), 0, 0);
    glidess && setVelY(getPlayerEnt(), -glideSpeed);
    dmgglidess && (setPosition(getPlayerEnt(), b, a + .19, f), setVelY(getPlayerEnt(), -.3));
    criticales && 22 > critTick && (critTick++, 13 == critTick && Entity.setPositionRelative(getPlayerEnt(), 0, 2, 0), 12 == critTick && (criticalTick = 12), 0 < criticalTick && (criticalTick--, setVelY(getPlayerEnt(), -.2)));
    hitboxs && (l = getNearestEntity(15), Entity.setCollisionSize(l, 10, 30));
    autoaim && (k = getNearestEntity(8), clientMessage("Entity Get: " + Entity.getNameTag(k)), null != k && "" != Entity.getNameTag(k) && " " != Entity.getNameTag(k) && "  " != Entity.getNameTag(k) && bowAimAtA(k));
    aimassistss && (l = Player.getPointedEntity(), null != l && "" != Entity.getNameTag(l) && " " != Entity.getNameTag(l) && "  " != Entity.getNameTag(l) && Player.isPlayer(l) && aimAtEntA(l));
    mineplexflys && (Player.setCanFly(!0), Player.setFlying(!0));
    mineplexflys && setVelY(getPlayerEnt(), -.007);
    inpvpflys && (setPosition(getPlayerEnt(), b, a + .19, f), setVelY(getPlayerEnt(), -.2));
    autoswordss && (L = 0, K = Player.getInventorySlot(L), 276 == K || 268 == K || 283 == K || 267 == K || 272 == K ? P = L : L++, k = getNearestEntity(7), null != k && "" != Player.getName(k) && " " != Player.getName(k) && "  " != Player.getName(k) && Player.setSelectedSlotId(P));
    jumpspeedss && Utils.Player.isOnGround() && (setVelY(getPlayerEnt(), .2), setVelX(getPlayerEnt(), 1.7 * Entity.getVelX(getPlayerEnt())), setVelZ(getPlayerEnt(), 1.7 * Entity.getVelZ(getPlayerEnt())));
    bypassglidess && (bgtick++, 1 > Entity.getVelY(getPlayerEnt()) && (setVelY(Player.getEntity(), -.2), 8 == bgtick && (setVelY(getPlayerEnt(), -.5), setVelX(getPlayerEnt(), 0), setVelZ(getPlayerEnt(), 0), bgtick = 0)));
    longhopss && Utils.Player.isOnGround() && (lhtick++, 8 <= lhtick && (lhtick = 0), .106 <= Utils.Velocity.calculateSpeed() && 0 == lhtick ? (J = [0, 0, 0], toDirectionalVector(J, (getYaw() + 90) * Math.PI / 180, -1 * (getPitch() * Math.PI / 180)), setVelX(getPlayerEnt(), J[0]), setVelY(getPlayerEnt(), .45), setVelZ(getPlayerEnt(), J[2])) : .105 >= Utils.Velocity.calculateSpeed() && 0 == lhtick && (setVelX(getPlayerEnt(), 0), setVelZ(getPlayerEnt(), 0)));
    autoclimbss && Utils.Player.isOnLadder() && setVelY(getPlayerEnt(), acspd);
    sglidess && (Entity.setVelY(getPlayerEnt(), -.5), setVelX(getPlayerEnt(), 1.2 * Entity.getVelX(getPlayerEnt())), setVelZ(getPlayerEnt(), 1.2 * Entity.getVelZ(getPlayerEnt())));
    fastbreakss && Utils.Block.fastBreak();
    fullbrightss && (Block.setLightLevel(0, 15), ModPE.resetImages());
    0 == timer % 5 && Utils.Player.isOnGround() && (fallbackX = Player.getX(), fallbackY = Player.getY(), fallbackZ = Player.getZ());
    0 == timer % 2 && Utils.Player.isOnGround() && (regenX = Player.getX(), regenZ = Player.getX());
    fallbackss && (Player.getX(), Q = Player.getY(), Player.getZ(), fallbackY - 6 > Q && (Entity.setPosition(Player.getEntity(), fallbackX, fallbackY, fallbackZ), clientMessage("§4Skiddy §6>> §e掉落回弹!")));
    fastfallss && (!Utils.Player.isOnGround() && -.07840000092983246 >= Entity.getVelY(getPlayerEnt()) || fallbackY - 6 > c) && setVelY(getPlayerEnt(), -100);
    regenerationss && (N = Player.getX(), x = Player.getZ(), 20 != Entity.getHealth(getPlayerEnt()) && 20 == Player.getHunger() && regenX == N || regenZ == x ? ModPE.setGameSpeed(120) : (20 == Entity.getHealth(getPlayerEnt()) && regenX != N || regenZ != x) && ModPE.setGameSpeed(20));
    sregenss && (ModPE.setGameSpeed(120), Entity.setImmobile(Player.getEntity(), !0));
    lbsgspeedss && ModPE.setGameSpeed(30);
    frostwalkerss && (g = Player.getX(), c = Player.getY(), h = Player.getZ(), 8 == getTile(g, c - 2, h) && setTile(g, c - 2, h, 79, 0), 9 == getTile(g, c - 2, h) && setTile(g, c - 2, h, 79, 0), 10 == getTile(g, c - 2, h) && setTile(g, c - 2, h, 4, 0), 11 == getTile(g, c - 2, h) && setTile(g, c - 2, h, 4, 0), 8 == getTile(g, c - 1, h) && (setTile(g, c - 1, h, 79, 0), setPosition(getPlayerEnt(), g, c + 1, h)), 9 == getTile(g, c - 1, h) && (setTile(g, c - 1, h, 79, 0), setPosition(getPlayerEnt(), g, c + 1, h)), 10 == getTile(g, c - 1, h) && (setTile(g, c - 1, h, 4, 0), setPosition(getPlayerEnt(), g, c + 1, h)), 11 == getTile(g, c - 1, h) && (setTile(g, c - 1, h, 4, 0), setPosition(getPlayerEnt(), g, c + 1, h)));
    safewalkss && Entity.setSneaking(Player.getEntity(), !0);
    scaffoldwalkss && (g = Player.getX(), c = Player.getY(), h = Player.getZ(), setTile(g, c - 2, h, 87, 0));
    arrowdodgess && (y = nearArrow(5), null != y && Entity.getEntityTypeId(y) == EntityType.ARROW && (clientMessage("§4Skiddy §6>> §e躲避弓箭!"), setPosition(getPlayerEnt(), g + .5, c, h)));
    bedbreakerss && 26 == Player.getPointedBlockId() && (clientMessage("§4Skiddy §6>> §e快速拆床!"), Level.destroyBlock(Player.getPointedBlockX(), Player.getPointedBlockY(), Player.getPointedBlockZ(), !0));
    godmodes && Player.setHealth(20)
}

function chatHook(b) {
    var a, f, g, c = b.split(" ");
    if ("!" == b.charAt(0) && (preventDefault(), com.mojang.minecraftpe.MainActivity.currentMainActivity.get().updateTextboxText("")), "!" == c[0] && (clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: Command not found. check the commands by typing !help <page>"), preventDefault()), "!help" == c[0] && (("1" == c[1] || null == c[1]) && (clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: Help page: 1/5"), clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: Available Commands: "), clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: !help > Shows this kind of page > Usage: !help <page>"), clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: !glidespeed > Sets the glide speed when using the Glide module > Usage: !glidespeed <number> or default"), clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: !setfov > Sets the fov with the specified number > Usage: !setfov <number or default>"), clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: !setspeed > Sets your game speed with the specified number > Usage: !setspeed <number or default>"), preventDefault()), "2" == c[1] && (clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: Help page: 2/5"), clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: Available Commands: "), clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: !gamemode > Sets your gamemode into the specified gamemode > Usage: !gamemode <number> or gamemode"), clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: !vclip > Teleports you with the chosen number/blocks Usage: !vclip <number, can use - like -3>"), clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: !team > Adds or removes Team-Mate on the given name > Usage: !team <add or remove> <nametag>"), clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: !teamlist > Shows your Team-Mates in chat > Usage: !teamlist"), preventDefault()), "3" == c[1] && (clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: Help page: 3/5"), clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: Available Commands: "), clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: !spam > Sets the word in the chat when using Spam > Usage: !spam <word>"), clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: spamdelay > Sets the delay when using Spam > Usage: !spamdelay <seconds>"), clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: !acspeed > Sets the Auto Climb speed > Usage: !acspeed <speed>"), clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: !nwrange > Sets the NearWarning range > Usage: !nwrange <range>"), preventDefault()), "4" == c[1] && (clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: Help page: 4/5"), clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: Available Commands: "), clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: !freeze > Freezes yourself (you can still see whats going on > Usage: !freeze <on/off>"), clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: !info > Gives the info of client and its developers (and testers) > Usage: !info"), clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: !tp > Teleports to the given Coordinates > Usage: !tp <x> <y> <z>"), clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: !theme > Changes the theme > Usage: !theme <flqme/infqrno>"), preventDefault()), "5" == c[1] && (clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: Help page: 5/5"), clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: Available Commands: "), clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: !search > Searches the given text > Usage: !search <text>"), clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: !fe > Force enchants the item in your hand > Usage: !fe <sword/bow/tool/armor>"), preventDefault())), "!glidespeed" == c[0] && (null == c[1] && (clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: Put a number next to a space in !glidespeed. Example: !glidespeed 5 will set the glide speed into 0.5"), preventDefault()), null != c[1] && "default" != c[1] && (glideSpeed = .1 * c[1], clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: Glide Speed is set into: " + .1 * c[1]), preventDefault()), "default" == c[1] && (glideSpeed = .3, clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: Glide Speed is set to default"), preventDefault())), "!setfov" == c[0] && (null == c[1] && (clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: Put a number next to a space in !setfov. Example: !setfov 15 will set the fov into 15"), preventDefault()), null != c[1] && "default" != c[1] && (ModPE.setFov(c[1]), clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: Fov is set into: " + c[1]), preventDefault()), "default" == c[1] && (ModPE.resetFov(), clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: Fov is set to default"), preventDefault())), "!setspeed" == c[0] && (null == c[1] && (clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: Put a number next to a space in !setspeed. Example: !setspeed 50 will set the game speed into 50"), preventDefault()), null != c[1] && "default" != c[1] && (ModPE.setGameSpeed(c[1]), clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: Game speed is set into: " + c[1]), preventDefault()), "default" == c[1] && (ModPE.setGameSpeed(20), clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: Game Speed is set to default"), preventDefault())), "!gamemode" == c[0] && (null == c[1] && (clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: Put a gamemode or number next to !gamemode. Example: !gamemode creative or !gamemode 1 will set the gamemode to creative"), preventDefault()), null != c[1] && ("1" == c[1] ? a = 1 : "creative" == c[1] ? a = 1 : "0" == c[1] ? a = 0 : "survival" == c[1] ? a = 0 : "2" == c[1] ? a = 2 : "adventure" == c[1] ? a = 2 : "3" == c[1] ? a = 3 : "spectator" == c[1] && (a = 3), Level.setGameMode(a), clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: Game Mode is into: " + c[1]), preventDefault())), "!vclip" == c[0] && (null == c[1] && (clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: Put a number next to !vclip. Example: !vclip -5 will teleport you 5 blocks down"), preventDefault()), null != c[1] && (preventDefault(), "-" == b.charAt(8) ? (f = Utils.Text.replaceAll("-", "", c[1]), Entity.setPosition(getPlayerEnt(), getPlayerX(), getPlayerY() - f, getPlayerZ()), clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: Teleported " + c[1] + " blocks")) : "-" != b.charAt(8) && (Entity.setPositionRelative(getPlayerEnt(), 0, +c[1], 0), clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: Teleported " + c[1] + " blocks")))), "!team" == c[0] && ((null == c[1] || null == c[2]) && (clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: Put a remove or add or list after !team and a name after it"), preventDefault()), null != c[1] && null != c[2] && ("add" == c[1] && (team.push(c[2]), clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: Added " + c[2] + " to your Team-Mates")), preventDefault()), "remove" == c[1] && "FirePro9978" != c[2] && "iTzPurPle" != c[2] && "Affann" != c[2] && "Affannn" != c[2] && "NNeBBuRR" != c[2] && "QuinnMakkinje" != c[2])) {
        for (i = 0; i < team.length; i++) team[i] == c[2] && (team.splice(i, 1), clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: Removed " + c[2] + " to your Team-Mates"));
        "FirePro9978" != c[2] && "iTzPurPle" != c[2] && "Affann" != c[2] && "Affannn" != c[2] && "NNeBBuRR" != c[2] && "QuinnMakkinje" != c[2] || clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: You cant remove us ~Flqme Team");
        preventDefault()
    }
    "!teamlist" == c[0] && (clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: List of Team-Mates: " + team), preventDefault());
    "!spam" == c[0] && (null == c[1] && (clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: Put a word (No sentence, sorry) next to a space in !spam. Example: !spam void will set the spam text into void"), preventDefault()), null != c[1] && (spamText = c[1], clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: Spam text is set into: " + c[1]), preventDefault()));
    "!spamdelay" == c[0] && (null == c[1] && (clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: Put a number next to a space in !spam. Example: !spam 3.5 will set the spam delay into 3.5 seconds"), preventDefault()), null != c[1] && (spamDelay = 1E3 * c[1], 1 == c[1] ? (clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: Spam delay is set into: 1 Second"), preventDefault()) : (clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: Spam delay is set into: " + c[1] + " Seconds"), preventDefault())));
    "!acspeed" == c[0] && (null == c[1] && (clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: Put a number next to a space in !acspeed. Example: !acspeed 5 will set the Auto Climb speed into 5"), preventDefault()), null != c[1] && (acspd = .1 * c[1], clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: Auto Climb speed is set into: " + .1 * c[1]), preventDefault()));
    "!devMode" == c[0] && (1 == canBeDev && "FirePro9978" == Entity.getNameTag(getPlayerEnt()) || "NNeBBuRR" == Entity.getNameTag(getPlayerEnt()) ? (isDev = !0, preventDefault(), fctoast("Developer Mode Enabled!")) : (ccrash(), fctoast("You are trying to access Developer Mode. Crashing client..."), preventDefault()));
    "!nwrange" == c[0] && (null == c[1] && (clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: Put a number next to a space in !nwrange. Example: !nwrange 10 will set the NearWarning range into 10"), preventDefault()), null != c[1] && (nwrange = c[1], clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: NearWarning range is set into: " + c[1]), preventDefault()));
    leetspeakss && ("!" != b.charAt(0) && "/" != b.charAt(0) && Server.sendChat(" " + convertToLeet(b)), preventDefault(), com.mojang.minecraftpe.MainActivity.currentMainActivity.get().updateTextboxText(""));
    "!freeze" == c[0] && ("on" == c[1] && (Entity.setImmobile(getPlayerEnt(), !0), clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: You are now frozen!")), "off" == c[1] && (Entity.setImmobile(getPlayerEnt(), !1), clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: You can move now!")), null == c[1] && clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: Put on or off next to !freeze. Example: !freeze on will froze you until you type !freeze off"));
    "!info" == c[0] && (clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: FlqmeClient: Alpha 6"), clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: Flqme made by FirePro9978"), clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: Code Developers: NNeBBuRR, Hacker Lastaad, ArceusMatt, JohnMacroCraft"), clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: Testers: MadMinerYT, AmayMask, Affann, iTzPurple, Smasher565, QuinnMakkinje, ImBannable, RealMCPvPER, KaosUlt, DinosaurusRex02"), clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: Special Thanks to GodSoft029, Peacestorm, Apric0cks, NSITF MCPE, Pokey, SoloTroll and Purple xKai"), clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: Contact us: Kik @FirePro9978, Email: coolpro9978@gmail.com"), clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: Other Recommended Clients: Charged, GravePE, Nuke, Crimson, CyberZ, PokeyHack, Storm, NEB, SmashHaxPE, Flame, DragOP, Cloud, Xive, Hydom, Quvon, Vertex"), fctoast("BehindHit and Escape idea was from Hacker Lastaad"), fctoast("FallBack and CrouchSpeed Code was from NNeBBuRR"));
    "!tp" != c[0] || ((null == c[1] || null == c[2] || null == c[3]) && clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: Put coordinates next to !tp. Example: !tp 1 2 3 will teleport you to coordinates: x:1 y:2 z:3"), null == c[1] && null == c[2] && null == c[3] || (setPosition(getPlayerEnt(), c[1], c[2], c[3]), clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: Succesfully teleported to coordinates: X: " + c[1] + " Y: " + c[2] + " Z: " + c[3])));
    "!theme" == c[0] && ("flqme" == c[1] && (theme = nbg, theme1 = mbg, module = nnbg, clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: Succesfully changed to Flqme Theme!")), "infqrno" == c[1] && (theme = iibg, theme1 = fbg, module = ibg, clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: Succesfully changed to Infqrno Theme!")), null == c[1] && clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: Themes available: flqme, infqrno"));
    "!search" == c[0] && (g = c[1], ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            var a = new android.webkit.WebView(ctx);
            a.getSettings().setJavaScriptEnabled(!0);
            a.setWebChromeClient(new android.webkit.WebChromeClient);
            a.setWebViewClient(new android.webkit.WebViewClient);
            a.loadUrl("https://www.google.de/#q=" + g);
            (new android.app.AlertDialog.Builder(ctx)).setView(a).show()
        }
    })));
    "!fe" == c[0] && ("sword" == c[1] && (Player.enchant(Player.getSelectedSlotId(), Enchantment.UNBREAKING, 15), Player.enchant(Player.getSelectedSlotId(), Enchantment.SHARPNESS, 15), Player.enchant(Player.getSelectedSlotId(), Enchantment.KNOCKBACK, 15), Player.enchant(Player.getSelectedSlotId(), Enchantment.FIRE_ASPECT, 15), Player.enchant(Player.getSelectedSlotId(), Enchantment.LOOTING, 15), clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: Force Enchanted Sword!")), "bow" == c[1] && (Player.enchant(Player.getSelectedSlotId(), Enchantment.UNBREAKING, 15), Player.enchant(Player.getSelectedSlotId(), Enchantment.POWER, 15), Player.enchant(Player.getSelectedSlotId(), Enchantment.INFINITY, 15), Player.enchant(Player.getSelectedSlotId(), Enchantment.FLAME, 15), Player.enchant(Player.getSelectedSlotId(), Enchantment.PUNCH, 15), clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: Force Enchanted Bow!")), "tool" == c[1] && (Player.enchant(Player.getSelectedSlotId(), Enchantment.UNBREAKING, 15), Player.enchant(Player.getSelectedSlotId(), Enchantment.FORTUNE, 15), Player.enchant(Player.getSelectedSlotId(), Enchantment.EFFICIENCY, 15), clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: Force Enchanted Tool!")), "armor" == c[1] && (Player.enchant(Player.getSelectedSlotId(), Enchantment.UNBREAKING, 15), Player.enchant(Player.getSelectedSlotId(), Enchantment.PROTECTION, 15), Player.enchant(Player.getSelectedSlotId(), Enchantment.FIRE_PROTECTION, 15), Player.enchant(Player.getSelectedSlotId(), Enchantment.PROJECTILE_PROTECTION, 15), Player.enchant(Player.getSelectedSlotId(), Enchantment.BLAST_PROTECTION, 15), Player.enchant(Player.getSelectedSlotId(), Enchantment.THORNS, 15), Player.enchant(Player.getSelectedSlotId(), Enchantment.DEPTH_STRIDER, 15), Player.enchant(Player.getSelectedSlotId(), Enchantment.AQUA_AFFINITY, 15), Player.enchant(Player.getSelectedSlotId(), Enchantment.FEATHER_FALLING, 15), clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: Force Enchanted Armor!")), null == c[1] && clientMessage("§l§4[§r§6Skiddy§l§4§l]§r§6: Put sword, bow, tool or armor next to !fe. Example: !fe sword will force enchant your sword"))
}

function ccrash() {
    c1()
}

function c1() {
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            (new android.os.Handler).postDelayed(new java.lang.Runnable({
                run: function() {
                    c2()
                }
            }), 500)
        }
    }))
}

function c2() {
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            (new android.os.Handler).postDelayed(new java.lang.Runnable({
                run: function() {
                    crash()
                }
            }), 1E3)
        }
    }))
}

function fctoast(b, a) {
    try {
        var f = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
        f.runOnUiThread(new java.lang.Runnable({
            run: function() {
                var g, c = android.widget.Toast.makeText(com.mojang.minecraftpe.MainActivity.currentMainActivity.get(), "" + b, android.widget.Toast.LENGTH_LONG),
                    h = new android.widget.LinearLayout(f),
                    k = new android.widget.TextView(f);
                b = null == a ? "SkiddyClient: " + b : a + ": " + b;
                k.setText(b);
                k.setGravity(android.view.Gravity.CENTER);
                k.setTextSize(15);
                k.setPadding(10, 10, 10, 10);
                k.setTextColor(android.graphics.Color.rgb(255, 128, 0));
                g = new android.graphics.drawable.GradientDrawable;
                g.setColor(android.graphics.Color.BLACK);
                g.setStroke(5, android.graphics.Color.rgb(255, 128, 0));
                h.addView(k);
                h.setBackground(g);
                h.getBackground().setAlpha(150);
                c.setView(h);
                c.show()
            }
        }))
    } catch (g) {
        print(g)
    }
}

function convertToLeet(b) {
    b = b.toUpperCase();
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
        f = "4 8 ( |} 3 |= G |-| 1 _| |< |_ |^| N 0 |) Q R 5 7 |_| V W X Y Z".split(" ");
    for (i = 0; i < a.length; i++) b = Utils.Text.replaceAll(a[i], f[i], b);
    return b
}

function rptask() {
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            (new android.os.Handler).postDelayed(new java.lang.Runnable({
                run: function() {
                    var b, a, f, g;
                    backfacess && (b = getPlayerEnt(), a = Math.floor(Entity.getYaw(b)), f = Math.floor(Entity.getPitch(b)), 189 >= f && Entity.setRot(b, a, 192));
                    twerkss && (tCounter++, 6 == tCounter && Entity.setSneaking(Player.getEntity(), 1), 11 == tCounter && (Entity.setSneaking(Player.getEntity(), 0), tCounter = 1));
                    derpss && (b = getPlayerEnt(), a = Math.floor(Entity.getYaw(b)), f = Math.floor(Entity.getPitch(b)), Entity.setRot(b, a + 30, f));
                    sniperss && (g = getNearestEntity(100), null != g && 261 == Player.getCarriedItem() && "" != Player.getName(g) && " " != Player.getName(g) && "  " != Player.getName(g) ? (bowAimAt(g), ModPE.setFov(13)) : ModPE.resetFov());
                    bowaimbotss && 261 == getCarriedItem() && (g = getNearestEntity(100), null != g && "" != Player.getName(g) && " " != Player.getName(g) && "  " != Player.getName(g) && bowAimAtA(g));
                    autoaim && (g = getNearestEntity(8), null != g && "" != Entity.getNameTag(g) && " " != Entity.getNameTag(g) && "  " != Entity.getNameTag(g) && bowAimAtA(g));
                    nx = getPlayerX();
                    ny = getPlayerY();
                    nz = getPlayerZ();
                    eval(rptask())
                }
            }), 900 / 70)
        }
    }))
}

function rptask2() {
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            (new android.os.Handler).postDelayed(new java.lang.Runnable({
                run: function() {
                    var b, a, f, g, c, h, k, l, e;
                    if (nearwarningss && (b = getNearestEntity(nwrange), null != b && "" != Player.getName(b) && " " != Player.getName(b) && "  " != Player.getName(b) && isNotTeam(b) && (a = removeColors(Entity.getNameTag(b)), fctoast("" + a + "x: " + Math.floor(Entity.getX(b)) + " y: " + Math.floor(Entity.getY(b)) + " z: " + Math.floor(Entity.getZ(b)), "NearWarning"))), chestesp)
                        for (b = getPlayerX(), a = getPlayerY(), f = getPlayerZ(), k = -chestTracersRange; chestTracersRange >= k; k++)
                            for (l = -chestTracersRange; chestTracersRange >= l; l++)
                                for (e = -chestTracersRange; chestTracersRange >= e; e++) g = b + k, c = a + l, h = f + e, 54 != getTile(g, c, h) && 23 != getTile(g, c, h) || Skiddy.drawTracer(g, c, h, !0, "on");
                    nx = getPlayerX();
                    ny = getPlayerY();
                    nz = getPlayerZ();
                    eval(rptask2())
                }
            }), 2500)
        }
    }))
}

function rptask3() {
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            (new android.os.Handler).postDelayed(new java.lang.Runnable({
                run: function() {
                    if (spamss) {
                        var b = " ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
                        spamTime++;
                        ln++;
                        27 == ln && (ln = 0);
                        Server.sendChat(b[ln] + "=" + spamTime + " " + spamText + " " + spamTime + "=" + b[ln])
                    }
                    nx = getPlayerX();
                    ny = getPlayerY();
                    nz = getPlayerZ();
                    eval(rptask3())
                }
            }), spamDelay)
        }
    }))
}

function leaveGame() {
    canBeDev = isDev = !1;
    leaveG && (leaveG = !1, fctoast("系统检测到您已退出!", "Skiddy客户端"));
    fctoast("系统检测到您已退出服务器!")
}
var bg, ibg, mbg, fbg, xbg, nbg, nnbg, iibg, abg, gmbg, jbg, destructbg, theme, theme1, module, Skiddy, Utils, chestTracersRange, GUI, GUIj, GUIe, GUIr, GUIa, GUIg, GUIz, GUIs, GUIv, menu, menu1, menu2, menu3, menu4, exitUI, exitcombatUI, exitmotionUI, exitplayerUI, exitmiscUI, gmChange, clr, fct, team, leaveG, VERSION, NAME, DEVELOPERS, MODULES, isDev, canBeDev, bypasshitbox, bypasshitboxs, bypasshitboxed, inpvpfly, inpvpflys, inpvpflyed, mineplexspeed, mineplexspeeds, mineplexspeeded, mineplexfly, mineplexflys, mineplexflyed, hitbox, hitboxs, hitboxed, antikbs, antikbss, antikbed, attKbTick, kbTick, kbHealth, ndglides, ndglidess, ndglideed, aimbots, aimbotss, aimboted, reachs, reachss, reached, switchreachs, switchreached, sreached, switchaims, switchaimed, saimed, grapples, grappless, grappleed, autoswords, autoswordss, autosworded, steps, stepss, steped, csteps, cstepss, csteped, criticalss, criticales, criticalsed, critTick, criticalTick, tapjumps, tapjumpss, tapjumped, taptps, taptpss, taptped, speeds, speedss, speeded, brightblockss, brightblocksed, blockDataValues, zoomspeeds, zoomspeedss, zoomspeeded, jumpspeeds, jumpspeedss, jumpspeeded, upglides, upglidess, upglideed, bowaimbots, bowaimbotss, bowaimboted, criticaltrailss, criticaltrailsss, criticaltrailsed, highjumps, highjumpss, highjumped, can, canGetHP, HP, gravity, derps, derpss, derped, twerks, twerkss, twerked, tCounter, backfaces, backfacess, backfaceed, autowalks, autowalkss, autowalked, jetpacks, jetpackss, jetpacked, cspeeds, cspeedss, cspeeded, airjumps, airjumped, dolphins, dolphinss, dolphined, fallbacks, fallbackss, fallbacked, fallbackX, fallbackY, fallbackZ, timer, solidliquids, solidliquidss, solidliquided, wallhacks, wallhackss, wallhacked, stealths, stealthss, stealthed, glides, glidess, glideed, glideSpeed, aimassists, aimassistss, aimassisted, elevators, elevatored, snipers, sniperss, snipered, bypassglides, bypassglidess, bypassglideed, bgtick, spams, spamss, spamed, spamTime, spamDelay, ln, spamText, hitjumps, hitjumpss, hitjumped, longhops, longhopss, longhoped, lhtick, placetps, placetpss, placetped, autoclimbs, autoclimbss, autoclimbed, acspd, sglides, sglidess, sglideed, dmgglides, dmgglidess, dmgglideed, follows, followss, followed, forcedestroys, forcedestroyss, forcedestroyed, fastbreaks, fastbreakss, fastbreaked, defDestroyTime, nearwarnings, nearwarningss, nearwarninged, nwrange, fullbrights, fullbrightss, fullbrighted, leetspeaks, leetspeakss, leetspeaked, regenerations, regenerationss, regenerationed, regenX, regenZ, sregens, sregenss, sregend, sregened, lbsgspeeds, lbsgspeedss, lbsgspeeded, ctrlzooms, ctrlzoomed, zoomed, escapes, escapeed, frostwalkers, frostwalkerss, frostwalkered, viewchangers, viewchangered, firepunchs, firepunchss, firepunched, safewalks, safewalkss, safewalked, scaffoldwalks, scaffoldwalkss, scaffoldwalked, arrowdodges, arrowdodgess, arrowdodgeed, behindhits, behindhitss, behindhited, sidereachs, sidereached, bedbreakers, bedbreakerss, bedbreakered, fastfalls, fastfallss, fastfalled, ghosthands, ghosthandss, ghosthanded, godmode, godmodes, godmodeed, autoaims, autoaim, autoaimed, attackaims, attackaim, attackaimed, bled, flyed, jetpackedd, layout2, GUI2, bg3, name1, teams, teamed, tracks, tracked, chestesp, chestesped, airwalkgui, autohitboxs, autohitboxed, ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(),
    Button = android.widget.Button,
    LinearLayout = android.widget.LinearLayout,
    RelativeLayout = android.widget.RelativeLayout,
    PopupWindow = android.widget.PopupWindow,
    ScrollView = android.widget.ScrollView,
    TextView = android.widget.TextView,
    CheckBox = android.widget.CheckBox,
    Switch = android.widget.Switch,
    Toast = android.widget.Toast,
    Runnable = java.lang.Runnable,
    View = android.view.View,
    ColorDrawable = android.graphics.drawable.ColorDrawable,
    Color = android.graphics.Color,
    Gravity = android.view.Gravity,
    Intent = android.content.Intent,
    Uri = android.net.Uri;
ModPE.langEdit("menu.copyright", "§4Skiddy§6客户端: §e61 个作弊模组已加载 - 魔改: WetABQ");
ModPE.langEdit("menu.generatingLevel", "加载中... §l§c§kSkidd");
ModPE.langEdit("menu.generatingTerrain", "加载中... §l§c§kSkiddy");
ModPE.langEdit("menu.loadingLevel", "加载中... §a§kSkiddy");
ModPE.langEdit("progressScreen.generating", "加载中... §l§c§kSkiddy");
ModPE.langEdit("progressScreen.message.building", "加载中... §l§c§kSkiddy");
ModPE.langEdit("progressScreen.message.locating", "加载中... §l§c§kSkiddy");
bg = new android.graphics.drawable.GradientDrawable;
bg.setColor(android.graphics.Color.RED);
bg.setStroke(4, android.graphics.Color.rgb(255, 255, 255));
bg.setCornerRadius(2);
ibg = new android.graphics.drawable.GradientDrawable;
ibg.setColor(android.graphics.Color.BLACK);
ibg.setStroke(5, android.graphics.Color.RED);
mbg = new android.graphics.drawable.GradientDrawable;
mbg.setColor(android.graphics.Color.BLACK);
mbg.setCornerRadius(2);
fbg = new android.graphics.drawable.GradientDrawable;
fbg.setColor(android.graphics.Color.BLACK);
fbg.setStroke(5, android.graphics.Color.RED);
fbg.setCornerRadius(3);
xbg = new android.graphics.drawable.GradientDrawable;
xbg.setColor(android.graphics.Color.WHITE);
xbg.setCornerRadius(100);
nbg = new android.graphics.drawable.GradientDrawable;
nbg.setColor(android.graphics.Color.BLACK);
nbg.setAlpha(100);
nnbg = new android.graphics.drawable.GradientDrawable;
nnbg.setColor(android.graphics.Color.WHITE);
nnbg.setStroke(4, android.graphics.Color.rgb(0, 128, 128));
iibg = new android.graphics.drawable.GradientDrawable;
iibg.setColor(android.graphics.Color.BLACK);
iibg.setAlpha(250);
iibg.setStroke(2, android.graphics.Color.RED);
abg = new android.graphics.drawable.GradientDrawable;
abg.setAlpha(150);
abg.setColor(android.graphics.Color.BLACK);
abg.setStroke(4, android.graphics.Color.rgb(255, 128, 0));
gmbg = new android.graphics.drawable.GradientDrawable;
gmbg.setColor(android.graphics.Color.RED);
gmbg.setStroke(2, android.graphics.Color.rgb(255, 255, 255));
gmbg.setCornerRadius(2);
jbg = new android.graphics.drawable.GradientDrawable;
jbg.setColor(android.graphics.Color.TRANSPARENT);
jbg.setCornerRadius(4);
destructbg = new android.graphics.drawable.GradientDrawable;
destructbg.setColor(android.graphics.Color.RED);
destructbg.setStroke(4, android.graphics.Color.rgb(255, 255, 255));
theme1 = theme = mbg;
module = nbg;
Skiddy = {
    drawTracer: function(b, a, f, g) {
        for (var c = 0; 25 >= c; c++) Level.addParticle(ParticleType.flame, b, a, f, (getPlayerX() - b) / c, g ? 0 : (getPlayerY() - a) / c, (getPlayerZ() - f) / c, 2)
    }
};
Utils = {
    Movement: {
        doJesus: function() {
            return Utils.Block.isLiquid(getTile(getPlayerX(), Player.getY() - 1.7, getPlayerZ())) ? !0 : !1
        },
        canStep: function() {
            var b = !1;
            return toDirectionalVector(playerDir, (getYaw() + 90) * DEG_TO_RAD, -0 * DEG_TO_RAD), !Utils.Block.isAir(getTile(Player.getX() + .95 * playerDir[0], Player.getY() - 1.2, Player.getZ() + .95 * playerDir[2])) && Utils.Block.isAir(getTile(Player.getX() + .95 * playerDir[0], Player.getY(), Player.getZ() + .95 * playerDir[2])) && (b = !0), b
        },
        flyBypass: function() {
            return byTicks++, 8 <= byTicks && (toDirectionalVector(playerDir, (getYaw() + 90) * DEG_TO_RAD, -0 * DEG_TO_RAD), getPlayerEnt(), setPosition(getPlayerEnt(), Player.getX() + .0224 * playerDir[0], Player.getY() + 1337, Player.getZ() + .0224 * playerDir[2]), setPosition(getPlayerEnt(), Player.getX(), Player.getY() - 1337, Player.getZ()), byTicks = 0), !0
        }
    },
    Target: {
        getDistanceToEntity: function(b) {
            var a = getPlayerX() - Entity.getX(b),
                f = getPlayerY() - Entity.getY(b);
            b = getPlayerZ() - Entity.getZ(b);
            return Math.sqrt(a * a + f * f + b * b)
        },
        isInRange: function(b, a) {
            return Utils.Target.getDistanceToEntity(b) <= a ? !0 : !1
        },
        isValid: function(b) {
            return b == getPlayerEnt() ? !1 : !frnd && FriendManager.isFriend(Entity.getNameTag(b)) ? !1 : !0
        }
    },
    Rotation: {
        getYawRot: function(b) {
            var a = Entity.getX(b) - getPlayerX();
            b = Entity.getZ(b) - getPlayerZ();
            return -(180 / Math.PI * Math.atan2(a, b))
        },
        getPitchRot: function(b) {
            var a, f;
            return Entity.getX(b) - getPlayerX(), a = Entity.getY(b) - getPlayerY(), Entity.getZ(b) - getPlayerZ(), a /= Utils.Target.getDistanceToEntity(b), f = 180 / Math.PI * Math.asin(a), -f
        }
    },
    Block: {
        isLiquid: function(b) {
            return 8 <= b && 11 >= b ? !0 : !1
        },
        fastBreak: function() {
            for (i = 0; 256 > i; i++) Block.setDestroyTime(i, 0)
        },
        isLadder: function(b) {
            return 65 == b ? !0 : !1
        }
    },
    Velocity: {
        calculateSpeed: function() {
            return Math.sqrt(Math.pow(Entity.getVelX(getPlayerEnt()), 2) + Math.pow(Entity.getVelZ(getPlayerEnt()), 2))
        }
    },
    Text: {
        replaceAll: function(b, a, f) {
            return f.replace(RegExp(b, "g"), a)
        }
    },
    Player: {
        isInWater: function() {
            return Utils.Block.isLiquid(getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt()))) ? !0 : !1
        },
        isOnLadder: function() {
            return Utils.Block.isLadder(getTile(getPlayerX(), getPlayerY() + .001, getPlayerZ())) ? !0 : !1
        },
        isOnGround: function() {
            for (var b = Entity.getY(getPlayerEnt()); 1 < b;)--b;
            return 61 <= Math.round(100 * b) && 63 >= Math.round(100 * b) && 0 != getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())) && !Utils.Block.isLiquid(getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt()))) ? !0 : 11 <= Math.round(100 * b) && 13 >= Math.round(100 * b) && 0 != getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())) && !Utils.Block.isLiquid(getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt()))) ? !0 : !1
        },
        isCollidedHorizontally: function() {
            for (var b = Entity.getX(getPlayerEnt()), a = Entity.getZ(getPlayerEnt()), f = Math.round(b - .5), g = Math.round(a - .5); 1 > b;) b += 1;
            for (; 1 > a;) a += 1;
            for (; 1 < b;)--b;
            for (; 1 < a;)--a;
            return 31 == Math.round(100 * b) && (b -= .01), 31 == Math.round(100 * a) && (a -= .01), 69 == Math.round(100 * b) && (b += .01), 69 == Math.round(100 * a) && (a += .01), 30 == Math.round(100 * b) && f--, 30 == Math.round(100 * a) && g--, 70 == Math.round(100 * b) && f++, 70 == Math.round(100 * a) && g++, 0 == getTile(f, Entity.getY(getPlayerEnt()), g) && 0 == getTile(f, Entity.getY(getPlayerEnt()) - 1, g) ? !1 : .1 >= Block.getDestroyTime(getTile(f, Entity.getY(getPlayerEnt()) - 1, g)) && .1 >= Block.getDestroyTime(getTile(f, Entity.getY(getPlayerEnt()), g)) ? !1 : 30 == Math.round(100 * b) || 70 == Math.round(100 * b) ? !0 : 30 == Math.round(100 * a) || 70 == Math.round(100 * a) ? !0 : !1
        }
    }
};
chestTracersRange = 10;
gmChange = Level.getGameMode();
clr = "§";
fct = "§l§4[§r§6Skiddy§l§4§l]§r§6: ";
team = [];
leaveG = !0;
VERSION = "b58-1";
NAME = "Skiddy";
DEVELOPERS = "Koikoi";
MODULES = "61";
criticalsed = criticales = csteped = cstepss = steped = stepss = autosworded = autoswordss = grappleed = grappless = saimed = switchaimed = sreached = switchreached = reached = reachss = aimboted = aimbotss = ndglideed = ndglidess = antikbed = antikbss = hitboxed = hitboxs = mineplexflyed = mineplexflys = mineplexspeeded = mineplexspeeds = inpvpflyed = inpvpflys = bypasshitboxed = bypasshitboxs = canBeDev = isDev = !1;
criticalTick = critTick = 0;
brightblocksed = speeded = speedss = taptped = taptpss = tapjumped = tapjumpss = !1;
blockDataValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 141, 15, 16, 17, 18, 20, 21, 22, 24, 26, 30, 31, 32, 35, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 51, 53, 54, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 67, 68, 71, 73, 74, 78, 79, 80, 81, 82, 83, 85, 87, 92, 95, 98, 102, 103, 105, 107, 109, 108, 112, 114, 128, 155, 156, 245, 246, 247, 248, 249, 253, 254, 255];
highjumped = highjumpss = criticaltrailsed = criticaltrailsss = bowaimboted = bowaimbotss = upglideed = upglidess = jumpspeeded = jumpspeedss = zoomspeeded = zoomspeedss = !1;
canGetHP = can = 1;
gravity = -.07840000092983246;
twerked = twerkss = derped = derpss = !1;
tCounter = 0;
fallbacked = fallbackss = dolphined = dolphinss = airjumped = cspeeded = cspeedss = jetpacked = jetpackss = autowalked = autowalkss = backfaceed = backfacess = !1;
fallbackX = Player.getX();
fallbackY = Player.getY();
fallbackZ = Player.getZ();
timer = 0;
glideed = glidess = stealthed = stealthss = wallhacked = wallhackss = solidliquided = solidliquidss = !1;
glideSpeed = .3;
bypassglideed = bypassglidess = snipered = sniperss = elevatored = aimassisted = aimassistss = !1;
bgtick = 0;
spamed = spamss = !1;
spamTime = 0;
spamDelay = 3500;
ln = 0;
spamText = "记住, 使用时没有句子!spam";
longhoped = longhopss = hitjumped = hitjumpss = !1;
lhtick = 0;
autoclimbed = autoclimbss = placetped = placetpss = !1;
acspd = .4;
fastbreaked = fastbreakss = forcedestroyed = forcedestroyss = followed = followss = dmgglideed = dmgglidess = sglideed = sglidess = !1;
defDestroyTime = [null, 1.5, .6, .5, 2, 2, 0, -1, null, null, null, null, .5, .6, 3, 3, 3, 2, .2, .6, .3, 3, 3, null, .8, null, .2, .7, null, null, 4, 0, 0, null, null, .8, null, 0, 0, 0, 0, 3, 5, 2, 2, 2, 0, 1.5, 2, 50, 0, 0, null, 2, 2.5, null, 3, 5, 2.5, 0, .6, 3.5, 3.5, 1, 3, .4, .7, 2, 1, null, null, 5, null, 3, 3, null, null, null, .1, .5, .2, .4, .6, 0, null, 2, 1, .4, .3, null, 1, .5, null, null, -1, 3, null, 1.5, null, null, 5, .3, 1, 0, 0, null, 2, 2, 1.5, null, null, 2, null, 2, null, null, null, null, null, null, null, null, null, null, null, null, null, .8, null, null, null, null, null, 2, 2, 2, null, null, 2, null, 0, 0, null, null, null, null, null, null, null, null, null, null, null, null, .8, .8, 2, 2, null, null, null, null, null, null, null, null, null, null, null, .5, .1, 5, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, 3.5, 50, 5, .6, .6, 5, null, null, null, null, 0];
nearwarninged = nearwarningss = !1;
nwrange = 35;
regenerationed = regenerationss = leetspeaked = leetspeakss = fullbrighted = fullbrightss = !1;
regenX = Player.getX();
regenZ = Player.getZ();
autohitboxed = autohitboxs = airwalkgui = chestesped = chestesp = tracked = tracks = teamed = teams = jetpackedd = flyed = bled = attackaimed = attackaim = autoaimed = autoaim = godmodeed = godmodes = ghosthanded = ghosthandss = fastfalled = fastfallss = bedbreakered = bedbreakerss = sidereached = behindhited = behindhitss = arrowdodgeed = arrowdodgess = scaffoldwalked = scaffoldwalkss = safewalked = safewalkss = firepunched = firepunchss = viewchangered = frostwalkered = frostwalkerss = escapeed = zoomed = ctrlzoomed = lbsgspeeded = lbsgspeedss = sregened = sregend = sregenss = !1;
showMenuBtn();
rptask();
rptask2();
rptask3();