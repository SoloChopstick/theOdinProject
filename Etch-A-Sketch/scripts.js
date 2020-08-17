const container = document.getElementById('container');
const reset = document.querySelector("#reset");

makeGrid(16,16);
draw();

//Listener for reset button
reset.addEventListener('click', resetGrid);

function resetGrid() {
  //remove everything
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((item) => {
    item.remove();
  });
  //prompt for size
  let gridSize = prompt("Please enter desired grid size");
  makeGrid(gridSize, gridSize);
  draw();
}


function makeGrid(rows, cols) {
  //set CSS variables to show how many rows and cols
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (let i = 0; i < (rows*cols); i++) {
    let cell = document.createElement("div");
    //cell.innerText = (i + 1);
    container.appendChild(cell).className = "grid-item";
  }
}

function draw() {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((item) => {
    item.addEventListener("mouseenter", function() {
      item.classList.add("draw");
    });
  });
}
