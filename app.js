const board = document.querySelector('.container');
const cells = [...board.querySelectorAll('.cell')];


function updateBoard(e) {
     if(e.target.className === 'cell') {
   e.target.textContent = 'X';
     } 
}

board.addEventListener('click', updateBoard);
//console.log(cells);