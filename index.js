const Hamburger = document.querySelector('.Hamburger');
const windows = document.querySelector('.header_right');
const container = document.querySelector('.container');
let state = false;

Hamburger.addEventListener('click',function(e){
    if(!state){
        Hamburger.classList.add('cross');
        windows.classList.add('open');
        container.classList.add('close');
        state = true;
    }else{
        Hamburger.classList.remove('cross');
        windows.classList.remove('open');
        container.classList.remove('close');
        state=false
    }
})
