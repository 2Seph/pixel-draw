
function createGrid(density) {
    let container = document.querySelector('.container');
    let colorPicker = document.querySelector('.colorPicker');
    let brushButton = document.getElementById('brush');
    
    container.innerHTML = '';
    let cellSize = (container.clientWidth / density) - 2;
  
    let mode = 'brush';
  
    
    let currentColor = colorPicker.value;
      colorPicker.addEventListener('input', () => {
        currentColor = colorPicker.value;
      });
  
  
    brushButton.addEventListener('click', () => {
      mode = 'brush';
    });
    
    let eraserButton = document.getElementById('eraser');
    eraserButton.addEventListener('click', () => {
      mode = 'eraser';
    });
  
    for (let i = 0; i < density * density; i++) {
      let cell = document.createElement('div');
      cell.classList.add('cell');
      cell.style.width = `${cellSize}px`;
      cell.style.height = `${cellSize}px`;
      container.appendChild(cell);
  
      cell.addEventListener('mouseover', () => {
        if (mode == 'brush') {
          cell.style.backgroundColor = currentColor;
          cell.style.border = `1px solid ${currentColor}`;
        } else if (mode == 'eraser') {
          cell.style.backgroundColor = "#000000";
          cell.style.border = "1px solid #0C221F";
        }
      });
    }
    
    
    
    
  let clear = document.getElementById('clear')
    clear.addEventListener('click' , ()=> {
      let allCells = document.querySelectorAll('.cell')
      allCells.forEach(cell => {
        cell.style.backgroundColor = "black"
        cell.style.border = "1px solid #0C221F"
      })
    })
  }  
  
  
  
  
  let gridDensityButton = document.getElementById('gridDensity');
  gridDensityButton.addEventListener('click', () => {
    let userInput = parseInt(prompt("Enter grid density (e.g., 16 for a 16x16 grid)"));
    if (userInput > 100) {
      userInput = parseInt(prompt("Please enter no more than 100"));
    } else {
      createGrid(userInput);
    }
  });
  
  
  createGrid(16);
  