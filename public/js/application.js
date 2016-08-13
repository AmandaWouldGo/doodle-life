$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});

var canvas = document.getElementById('canvas'); //this gets the canvas element. I am setting it to a variable so that I can call canvas functions on it!
var context = canvas.getContext('2d'); //this sets the area coordinates of the canvas, aka the drawing space based on the canvas size and placement
// The context is 2d because this specifies the use of the 2d API rather than the 3D api. The 3d api is beyond my understanding at this point
context.lineWidth = 5; //this sets the width of the drawing tool. Add additional sizes in additional releases of app.
var down = false;

