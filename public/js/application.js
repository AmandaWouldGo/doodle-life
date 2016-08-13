$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them
  colorPick();
  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});

var canvas = document.getElementById('canvas'); //this gets the canvas element. I am setting it to a variable so that I can call canvas functions on it!
var context = canvas.getContext('2d'); //this sets the area coordinates of the canvas, aka the drawing space based on the canvas size and placement
// The context is 2d because this specifies the use of the 2d API rather than the 3D api. The 3d api is beyond my understanding at this point
context.lineWidth = 5; //this sets the width of the drawing tool. Add additional sizes in additional releases of app.
var down = false; //this will be connected to events when the mouse is pressed!

//next... add eventListeners to canvas itself! This is different than adding event listers to the document!

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', function () {
	down = true; //reassigns down to true while the mouse is down...so it draws
	context.beginPath(); //listens for beginning coordinates for new line
	context.moveTo(xPosition, yPosition); //tracks the x and y coords as the down mouse drags across screen
	canvas.addEventListener('mousemove', draw); //This means that drawing will only happen when the mouse is BOTH down and moving
});

canvas.addEventListener('mouseup', function () {
	down = false; //resets down to false so that it stops drawing when mouse is no longer pressed!
});

function draw(event) {
  xPosition = event.clientX - canvas.offsetLeft; //sets the x position of the mouse as it moves along inside the canvas
  yPosition = event.clientY - canvas.offsetTop; //sets the y position of the mouse as it moves along inside the canvas

  if(down == true) {
  	context.lineTo(xPosition, yPosition); //this moves a line along as it is drawn with mousemove and mousedown
  	context.stroke(); //This is actually what draws. Like the stroke of a pen!
  };
};

var colorPick = function() {
  $('.button-color').on("click", function(event) {
  	event.preventDefault();
  	var color = $(this).val();
  	context.strokeStyle = color;
  	console.log("it worked!");

  });
};
