const container = document.querySelector('#container');


//create grid
// function creategrid(){
//     grid.classList.add('blue')
//     container.appendChild(grid);
// }

for (let i = 0; i<256; i++){
    const grid = document.createElement('div');
    grid.classList.add('blue');
    container.appendChild(grid);
}