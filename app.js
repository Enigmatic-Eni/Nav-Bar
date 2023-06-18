const links = document.querySelector('.links');
const toggle = document.querySelector('.button');

toggle.addEventListener('click', function(){
    links.classList.toggle('show-links')
});