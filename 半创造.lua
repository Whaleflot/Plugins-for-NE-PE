function Main1()
SN = gg.choice({
	 "半创造",
	 "退出脚本",
}, nil, "这是一个公告")
if SN==1 then
	 Main2()
end
if SN==2 then
	 HS4()
end
FX=0
end

function Main2()
SN = gg.choice({
	 "半创造",
	 "返回主页",
}, nil, "把东西放到制作栏就可以拿出来")
if SN==1 then
	 HS3()
end
if SN==2 then
	 HS5()
end
FX=0
end

function HS3()
	 gg.clearResults()
	 gg.searchNumber("1.875F;5D;15.0F;0.60000002384F", gg.TYPE_DWORD, false, gg.SIGN_EQUAL, 0, -1)
	 gg.searchNumber("5", gg.TYPE_DWORD, false, gg.SIGN_EQUAL, 0, -1)
	 gg.getResults(100)
	 gg.editAll("1", gg.TYPE_DWORD)
	 gg.toast("把想要的物品放在制作栏里再拿出来")
end

function HS5()
	 Main1()
end

function HS4()
	 os.exit()
end



Main1()