// WEB COLORS START

//Global Variable
let colors = await loadTextFile("web-colors.txt");

//HTML Variables
let outputEl = document.getElementById("container");

// Event Listener on Update Button
document.getElementById("update-btn").addEventListener("click", updateColors);

// Process Update Button Click
function updateColors() {
  // Input
  let colorsStr = document.getElementById("colors-in").value;
  // Update Colors Array
  colors = colorsStr.split(",");
}

// Event Listener on Go Button
document.getElementById("go-btn").addEventListener("click", goBtnClicked);

// Process Go Button Click
function goBtnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu-select").value;

  // Process Menu Selection
  if (selection === "display-all") {
    displayAll();
  } else if (selection === "starts-with") {
    displayStartLetter();
  } else if (selection === "includes") {
    displayIncludes();
  }
}

// MENU FUNCTIONS
// Display All Colors
function displayAll() {
  outputEl.innerHTML = "<h2> DISPLAY ALL COLORS</h2>";

  for (let color of colors) {
    outputEl.innerHTML += `<h4 style="color:${color}"> ${color}</h4>`;
  }
}

// Display all Colors with prompted Starting Letter
function displayStartLetter() {
  console.log("Colors that Start With...");
}

// Display all colors that include provided substring
function displayIncludes() {
  console.log("Colors that Include...");
}
