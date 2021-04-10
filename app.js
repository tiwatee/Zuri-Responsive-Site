const navlinks = document.querySelector('.nav-links');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');


openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);


function show(){
    navlinks.style.display = 'flex';
    navlinks.style.top = '0';
}

function close(){
    navlinks.style.top = '-100%';
}