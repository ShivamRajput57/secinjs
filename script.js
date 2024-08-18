const link = document.querySelector('.shares');
const disc = document.querySelector('.links');


link.addEventListener('click', linkfun);



function linkfun() {
    
    disc.classList.toggle('ready');
}
