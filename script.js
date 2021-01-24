const container = document.querySelector('#container');

for (let i = 0; i<256; i++){
    const grid = document.createElement('div');
    grid.classList.add('blue');
    container.appendChild(grid);
}

document.querySelectorAll(".blue").forEach(blue => 
    blue.addEventListener("mouseover", () => blue.classList.add("yellow"))
);