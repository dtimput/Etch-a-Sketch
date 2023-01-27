//variables
const container = document.querySelector('.container');
let mouseDown = false;


//All Functions
function createGrid(size){
    for(let i = 0; i < size * size; i++){
        const horizontal = document.createElement('div');
        horizontal.classList.add('pixel');
        container.appendChild(horizontal);
    }
    container.style.gridTemplateColumns = `repeat(${size}, 25px)`
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pixel => pixel.addEventListener('mouseover', colorize));
}

function removeGrid(){
    document.querySelector('.container').innerHTML = '';
}

function colorize(e){
    if(mouseDown){
    const cell = e.target;
    cell.style.backgroundColor = 'black';
    }
}

function setDimensions(){
    let input = prompt('Enter a Number between 2-30 to set the length of your drawing pad!');
    if(input >= 2 && input <=30){
        removeGrid();
        createGrid(input);
    }
}

function checkMouseDown(e){
    if(e.button === 0){
        mouseDown = true;
    }
}

function checkMouseUp(e){
    mouseDown = false;
}

createGrid(16);

//Event Listeners
const dimensionButton = document.querySelector('.setDimensions');
dimensionButton.addEventListener('click', setDimensions);

container.addEventListener('mousedown', checkMouseDown);
container.addEventListener('mouseup', checkMouseUp);

