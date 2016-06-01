var floorplan1 = document.getElementById("floorplan1");
var floorplan2 = document.getElementById("floorplan2");
var floorplan3 = document.getElementById("floorplan3");

var canvas = document.getElementById("floorplan");
var ctx = canvas.getContext("2d");
ctx.drawImage(floorplan1, 0, 0, canvas.width, canvas.height);

var tickFormatter = function(d) {
    return d / 12;
};

var sliderTicks = [];
for (var i = 0; i <= 276; i += 12) {
    sliderTicks.push(i);
}

var sliderSteps = [];
for (var i = 0; i <= 287; i++) {
    sliderSteps.push(i);
}

var timeSlider = d3.slider().min(0).max(287).tickValues(sliderTicks).stepValues(sliderSteps).showRange(true).tickFormat(tickFormatter).callback(logSliderValue);

d3.select("#time-slider").call(timeSlider);

$("#button-f1").click(changeFloorplan);
$("#button-f2").click(changeFloorplan);
$("#button-f3").click(changeFloorplan);

$("#date-dropdown").change(changeDate);

$("#employee-dropdown").change(changeEmployee);

console.log($("#date-dropdown").val());
console.log($("#employee-dropdown").val());

function changeFloorplan() {
    $("button").removeClass("active");
    this.className = "button active";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (this.id === "button-f1") {
        ctx.drawImage(floorplan1, 0, 0, canvas.width, canvas.height);
    } else if (this.id === "button-f2") {
        ctx.drawImage(floorplan2, 0, 0, canvas.width, canvas.height);
    } else {
        ctx.drawImage(floorplan3, 0, 0, canvas.width, canvas.height);
    }
}

function changeDate() {
    console.log(this.value);
}

function changeEmployee() {
    console.log(this.value);
}

function logSliderValue() {
    console.log("%d:%02du", Math.floor(timeSlider.value() / 12), timeSlider.value() % 12 * 5 + "u");
}

$("#button-f1").click();
var initialFloor = new Image();
initialFloor.onload = function() {
    ctx.drawImage(initialFloor, 0, 0, canvas.width, canvas.height);
};
initialFloor.src = "img/VAST_Basic_F1.jpg";
