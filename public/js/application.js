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

$(canvas).mouseup(function(event) {
  event.preventDefault();
  down = false;
});

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
    var color = $(this).val();
    context.strokeStyle = color;
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
  var request = $.ajax({
    url: "http://thecatapi.com/api/images/get?format=xml&size=full&results_per_page=5",
    method: "GET",
    dataType: "xml"
  });
  
  request.done(function(response){

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
