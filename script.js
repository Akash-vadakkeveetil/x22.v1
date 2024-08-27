
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Menu hidden */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}


//js code for the scroll thingy
window.addEventListener('scroll', function() {
   var scrollPosition = window.scrollY;


   if (scrollPosition > 140) {//to adjust the postion of the fade out
       document.documentElement.setAttribute('data-scroll', 'true');
   } else {
       document.documentElement.setAttribute('data-scroll', 'false');
   }
});
