const container = document.querySelector('.container');

function createGrid(size){
    for(let i = 0; i < size * size; i++){
        const horizontal = document.createElement('div');
        horizontal.classList.add('pixel');
        container.appendChild(horizontal);
    }
}

createGrid(16);