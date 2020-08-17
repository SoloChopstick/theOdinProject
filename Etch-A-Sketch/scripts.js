let container = document.getElementById('container');
function makeGrid(rows, cols) {
  //set CSS variables to show how many rows and cols
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (let i = 0; i < (rows*cols); i++) {
    let cell = document.createElement("div");
    cell.innerText = (i + 1);
    container.appendChild(cell).className = "grid-item";
  }
}

window.onload = function(){
  const generate = document.querySelector("#generate");
  generate.addEventListener('click', function () {
    makeGrid(16, 16);
  });

  let containerGrid = document.querySelectorAll('.grid-item');
  containerGrid.forEach(item => {
    item.addEventListener('mouseenter', event => {
      item.style.background = 'red';
    });
  });

  //testing mouse enter event listener
  container.addEventListener('mouseenter', e => {
    container.style.background = 'grey';
  });

}
