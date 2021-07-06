// var notes = document.getElementById("#htmlFile").innerHTML;

// var document = document.querySelector(".document");

// var htmlFile = document.querySelector("#htmlFile");
// var cssFile = document.querySelector("#cssFile");
// var jsFile = document.querySelector("#jsFile");
// var webApiFile = document.querySelector("#webApiFile");
// var thirdApiFile = document.querySelector("#thirdApiFile");
// var serverApiFile = document.querySelector("#serverApiFile");
// var nodeJsFile = document.querySelector("#nodeJsFile");

var htmlButton = $("#html");
var cssButton = $("#css");
var jsButton = $("#javascript");
var webApiButton = $("#webApi");
var thirdApiButton = $("#thirdApi");
var serverApiButton = $("#serverApi");
var nodeJsButton = $("#nodeJs");

htmlButton.on("click", () => {
  document.getElementById("#file").src =
    "./assets/documents/Week 1 Imaged Notes.pdf";
});

cssButton.on("click", () => {
  document.getElementById("#file").src = 
    "./assets/documents/Week 2 Imaged Notes.pdf";
});

jsButton.on("click", () => {});

webApiButton.on("click", () => {});

thirdApiButton.on("click", () => {});

serverApiButton.on("click", () => {});

nodeJsButton.on("click", () => {});
