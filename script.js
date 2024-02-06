const burger = document.getElementById('burger');
const close = document.getElementById('close');
const nav = document.getElementById('nav-bar');
//if click on burger/active/true
if(burger){
  burger.addEventListener('click', ()=>{
    nav.classList.add('active');
  })
}

//if close in pressed
if(close){
  close.addEventListener('click', ()=>{
    nav.classList.remove('active');
  })
}

 
