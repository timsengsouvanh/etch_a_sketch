const container = document.querySelector('#container');
const body = document.querySelector('body');


//create grid squares where i=amount of squares
for (let i = 0; i<256; i++){
    const grid = document.createElement('div');
    grid.classList.add('blue');
    container.appendChild(grid);
}

//changes color of squares by adding .yellow class on mouseover
document.querySelectorAll(".blue").forEach(blue => 
    blue.addEventListener("mouseover", () => blue.classList.add("yellow"))
);

function createbutton(){
    const button = document.createElement('button')
    button.textContent = 'CLEAR'
    button.classList.add('button');
    body.appendChild(button);
}
createbutton()

const button = document.querySelector('button');

button.addEventListener('click', () => {
    document.querySelectorAll('.yellow').forEach(yellow => yellow.classList.remove('yellow'))
})
   