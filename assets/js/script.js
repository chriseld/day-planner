var timeBlocks = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
var currentTime = moment().hour();


// Sets the "current day" section of the jumbotron
$("#currentDay").text(moment().format("dddd, MMMM D"));

for(i = 0; i < timeBlocks.length; i++) {
    var container = $("<div>", {id: "container" + i, "class": "time-block"});
    $(".container").append(container);
    var block = $("<div>", {id: "block" + i, "class": "row"});
    var blockTime = parseInt(timeBlocks[i]);
    if(blockTime < 6) {
        blockTime = blockTime + 12;
    }
    if(blockTime < currentTime) {
        $(block).addClass("past");
    } else if(blockTime > currentTime) {
        $(block).addClass("future");
    } else if(blockTime === currentTime) {
        $(block).addClass("present");
    }
    var hour = $("<div>", {id: "hour" + i, "class": "hour"});
    $(hour).attr("style", "width: 10%");
    
    var input = $("<textarea>", {id: "input" + 1, "class": "description"});
    $(input).attr("style", "width: 80%");
    
    var saveBtn = $("<div>", {id: "btn" + i, "class": "saveBtn"});
    $(saveBtn).html("<img src='assets/img/save.svg'>");
    $(saveBtn).attr("style", "width: 10%");

    $("#container" + i).append(block);
    $("#block" + i).append(hour);
    $("#hour" + i).text(timeBlocks[i]);
    $("#block" + i).append(input);
    $("#block" + i).append(saveBtn);
}

$(".saveBtn").click(function() {
    var entry = $(this).siblings().closest("textarea").val();
    var time = $(this).siblings().closest(".hour").text();
    var date = moment().format("DD/MM/YYYY");
    console.log(entry + time + date);
    //localStorage.setItem()
})

$( document ).ready(function() {
    var lastUsed = localStorage.getItem(date);
    var today = moment().format("DD/MM/YYYY");
    if(localStorage != today) {
        localStorage.clear();
    }
});