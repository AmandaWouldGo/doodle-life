$(document).ready(function() {

  colorPick();
  clearAll();
  newCatImg();
  moreCats();

  // getUserInfo();

});

var canvas = document.getElementById('canvas'); //this gets the canvas element. I am setting it to a variable so that I can call canvas functions on it!
var context = canvas.getContext('2d'); 
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

context.lineWidth = 5; 
var down = false;

$('#canvas').mousedown(function(event) {
  event.preventDefault();

  var offset = $(this).offset();

  var mouseX = event.clientX - offset.left;
  var mouseY = event.clientY - offset.top;

  down = true;
  context.beginPath();
  context.moveTo(mouseX, mouseY);
  $(canvas).mousemove(draw);
});

// canvas.addEventListener('mousedown', function () {
//  down = true; //reassigns down to true while the mouse is down...so it draws
//  context.beginPath(); //listens for beginning coordinates for new line
//  context.moveTo(xPosition, yPosition); //tracks the x and y coords as the down mouse drags across screen
//  canvas.addEventListener('mousemove', draw); //This means that drawing will only happen when the mouse is BOTH down and moving
// });

$(canvas).mouseup(function(event) {
  event.preventDefault();
  down = false;
});
// canvas.addEventListener('mouseup', function () {
//  down = false; //resets down to false so that it stops drawing when mouse is no longer pressed!
// });
// function draw(event) {
//   xPosition = event.clientX - canvas.offsetLeft; //sets the x position of the mouse as it moves along inside the canvas
//   yPosition = event.clientY - canvas.offsetTop; //sets the y position of the mouse as it moves along inside the canvas

//   if(down == true) {
//    context.lineTo(xPosition, yPosition); //this moves a line along as it is drawn with mousemove and mousedown
//    context.stroke(); //This is actually what draws. Like the stroke of a pen!
//   };
// };

var draw = function(event) {
  event.preventDefault();
  var myOffset = $(this).offset();
  mouseX = event.clientX - myOffset.left;
  mouseY = event.clientY - myOffset.top;

  if(down == true) {
    context.lineTo(mouseX, mouseY);
    context.stroke();
  };
};

var colorPick = function() {
  $('.button-color').on("click", function(event) {
    event.preventDefault();
    var color = $(this).val(); // this = the button that was clicked and finds its value which is a hex color
    context.strokeStyle = color; // reset the stroke style color to hex color of button
  });
};

var clearAll = function() {
  $('#clear-canvas').mousedown(function(event) {
    event.preventDefault();
    context.clearRect(0, 0, canvas.width, canvas.height);
  });
};

function newCatImg(){
  $('#cat-image').on('click', 'img', moveCatImage);
  // Here is my API
  $.ajax({
    url: "http://thecatapi.com/api/images/get?format=xml&size=full&results_per_page=5",
    method: "GET",
    dataType: "xml"
  })
  .done(function(response){
    $('#cat-image').empty();

    $(response).find("url").each( function () {

      url = $(this).text();
      $('#cat-image').append("<img src=" + url + ">")
    });
  });
}

var moveCatImage = function(event) {
  event.preventDefault();
  var url = $(this).attr("src")

  $(canvas).css("background-image", "url("+url+")");
 
}

var moreCats = function() {
  $("#more-cats-button").on("click", function(event) {
    event.preventDefault();
    var verb = "GET"
    // var destination = "http://thecatapi.com/api/images/get?format=xml&size=full&results_per_page=10" 
    
    var request = $.ajax({
      method: verb,
      url: "http://thecatapi.com/api/images/get?format=xml&size=full&results_per_page=10",
      dataType: "xml"
    });

    request.done(function(response){
      $('#cat-image').empty();
      $(response).find("url").each(function(){
        url = $(this).text();
        $('#cat-image').append("<img src=" + url + ">");
      });
    });
  });
}

// function getUserInfo(){
//   $.get("http://localhost:9393/user_info")
//   .done(function(info){
//   })
// }
