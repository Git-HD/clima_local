var button = document.getElementById('button');

button.addEventListener('click', function(name){
    location.replace("http://localhost:8000/weather")
});


var button2 = document.getElementById('button2');

button2.addEventListener('click', function(name){
    location.replace("http://localhost:8000/weather/list")
});

var button3 = document.getElementById('button3');

button3.addEventListener('click', function(name){
    location.replace("http://localhost:8000/weather/history")
});

