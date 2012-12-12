var gui = require('nw.gui');
var win = gui.Window.get();

onload = function() {
	console.log(localStorage.width)
	if (localStorage.width && localStorage.height) {
		win.resizeTo(Number(localStorage.width), Number(localStorage.height));
		win.moveTo(Number(localStorage.x), Number(localStorage.y));
		console.log("window resized")
	}
	win.show();
}

// Save size on close.
win.on('close', function() {
	localStorage.x      = win.x;
	localStorage.y      = win.y;
	localStorage.width  = win.width;
	localStorage.height = win.height;
	console.log("save window pos")
	this.close(true);
});

var editor = ace.edit("editor");
editor.setTheme("ace/theme/twilight");
editor.getSession().setMode("ace/mode/javascript");

// create menus
var menubar = new gui.Menu({type: "menubar"});
var fileMenu = new gui.Menu()
menubar.append(new gui.MenuItem({label: "File", submenu: fileMenu}))
fileMenu.append(new gui.MenuItem({label: "New", click: function () {
	alert('New')
}}))
var editMenu = new gui.Menu()
menubar.append(new gui.MenuItem({label: "Edit", submenu: editMenu}))
editMenu.append(new gui.MenuItem({label: "Undo", click: function () {
	alert('Undo')
}}))
win.menu = menubar
