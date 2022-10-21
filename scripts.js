

function makeGrid(gridArea) {
    const container = document.getElementById('container');
    container.style.gridTemplateRows = `repeat(${gridArea}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${gridArea}, 1fr)`;
    for (c=0; c < (gridArea*gridArea); c++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = `grid-item`;
    }

    const gridItem = document.querySelector('#container');
    const items = gridItem.querySelectorAll('div');
    items.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.classList.add('changeBackground');
        });
    });
}

function userPrompt() {
    const num = prompt('What is the size of the grid?');
    makeGrid(num);
}


const button = document.getElementById('button');
button.addEventListener('click',userPrompt);

