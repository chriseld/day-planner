// Sets global variables
var timeBlocks = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
var currentTime = moment().hour();
var lastUsed = localStorage.getItem("date");
var today = moment().format("DD/MM/YYYY");

// Sets the "current day" section of the jumbotron
$("#currentDay").text(moment().format("dddd, MMMM D"));

// Checks if the last date the page was loaded matches today
// If the dates do not match, the localstorage is cleared
if(lastUsed != today) {
    localStorage.clear();
};

// Generates the elements for all hours between 9AM and 5PM
for(i = 0; i < timeBlocks.length; i++) {

    var container = $("<div>", {id: "container" + i, "class": "time-block"});
    $(".container").append(container);
    var block = $("<div>", {id: "block" + i, "class": "row"});
    var blockTime = parseInt(timeBlocks[i]);
    var blockText = localStorage.getItem(timeBlocks[i]);

    //Converts time to 12hr format
    if(blockTime < 6) {
        blockTime = blockTime + 12;
    }

    //Styles the blocks according to time comparison
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
    $(input).val(blockText);
    
    var saveBtn = $("<div>", {id: "btn" + i, "class": "saveBtn"});
    $(saveBtn).html("<img src='assets/img/save.svg'>");
    $(saveBtn).attr("style", "width: 10%");

    $("#container" + i).append(block);
    $("#block" + i).append(hour);
    $("#hour" + i).text(timeBlocks[i]);
    $("#block" + i).append(input);
    $("#block" + i).append(saveBtn);
}

// When the save button is clicked, updates localstorage
$(".saveBtn").click(function() {
    var entry = $(this).siblings().closest("textarea").val();
    var time = $(this).siblings().closest(".hour").text();
    var date = moment().format("DD/MM/YYYY");
    localStorage.setItem("date", date);
    localStorage.setItem(time, entry);
})