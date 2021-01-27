const container = document.querySelector('#container');
const body = document.querySelector('body');
const buttonarea = document.createElement('div');

buttonarea.classList.add('buttonarea')
body.appendChild(buttonarea)

//create grid squares where i=amount of squares
for (let i = 0; i<1024; i++){
    const grid = document.createElement('div');
    grid.classList.add('blue');
    container.appendChild(grid);
}

//changes color of squares by adding .yellow class on mouseover
document.querySelectorAll(".blue").forEach(blue => 
    blue.addEventListener("mouseover", () => blue.classList.add("yellow"))
);

function createbutton1(){
    const button = document.createElement('button')
    button.textContent = 'CLEAR'
    button.classList.add('button1');
    buttonarea.appendChild(button);
}
createbutton1()

function createbutton2(){
    const button = document.createElement('button')
    button.textContent = 'RESIZE'
    button.classList.add('button2');
    buttonarea.appendChild(button);
}

createbutton2()

const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2')

//event listener to clear drawing
button1.addEventListener('click', () => {
    document.querySelectorAll('.yellow').forEach(yellow => yellow.classList.remove('yellow'))
})

//event listener to resize/clear
button2.addEventListener('click', () => {
    document.querySelectorAll('.yellow').forEach(yellow => yellow.classList.remove('yellow'))
    let userinput = prompt('How many rows? (max 100)', 100)

    }
)
