//Emmanuel Farrar
//VFW 1411
//Project 1

//create background
Ti.UI.setBackgroundColor("#fff");

//create main Window
var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#333",
});

//create top view to display changing text
var myfirstView = Ti.UI.createView({
	backgroundColor: "fff",
	borderRadius: 5,
	borderWidth: 1,
	height: 250,
	top: 20,
	left: 20,
	right: 20
	
	
});

//create top view to display left button below myfirstView
var mysecondView = Ti.UI.createView({
	backgroundColor: "lime",
	borderRadius: 5,
	borderWidth: 1,
	width: 150,
	height: 50,
	top: 35 + myfirstView.height,
	left: 20,
	
	
});

//create top view to display left button below myfirstView
var mythirdView = Ti.UI.createView({
	backgroundColor: "lime",
	borderRadius: 5,
	borderWidth: 1,
	width: 150,
	height: 50,
	top: 35 + myfirstView.height,
	right: 20,
	
	
});

//call views
mainWindow.add(myfirstView, mysecondView, mythirdView);
mainWindow.open();

