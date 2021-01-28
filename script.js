const container = document.querySelector('#container');
const body = document.querySelector('body');
const buttonarea = document.createElement('div');

buttonarea.classList.add('buttonarea')
body.appendChild(buttonarea)

// //create grid squares where i=amount of squares
// function creategrid(a) {for (let i = 0; i<a; i++){
//     let grid = document.createElement('div');
//     grid.classList.add('blue');
//     container.appendChild(grid);
// }}
// creategrid(1024)

//create grid squares where i=amount of squares
function creategridflex(a) {for (let i = 0; i<a; i++){
    let gridflex = document.createElement('div');
    gridflex.classList.add('gridflex');
    container.appendChild(gridflex);
}}

creategridflex(30)

function creategrid(a) {for (let i=0;i<a;i++){
    // let grid = document.createElement('div');
    // grid.classList.add('blue');
    // document.querySelectorAll('.gridflex').forEach(gridflex => gridflex.appendChild(grid))
    let gridflex = document.querySelectorAll('.gridflex')
    gridflex.forEach(function(gridflex) {
        let grid = document.createElement('div');
        grid.classList.add('blue');
        gridflex.appendChild(grid);
    })
    // for (i=0; i<gridflex.length;i++){
    //     let grid = document.createElement('div');
    //     grid.classList.add('blue');  
    //     gridflex[i].appendChild(grid);
        
    // }
}} 


creategrid(30)


//changes color of squares by adding .yellow class on mouseover
function changecolor () {document.querySelectorAll(".blue").forEach(blue => 
    blue.addEventListener("mouseover", () => blue.classList.add("yellow"))
)};

changecolor()

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
    document.querySelectorAll('.blue').forEach(blue => blue.remove())
    let userinput = prompt('How many rows? (max 100)', 100)
    creategridflex(userinput)
    creategrid(userinput)
    changecolor()
    }
)


