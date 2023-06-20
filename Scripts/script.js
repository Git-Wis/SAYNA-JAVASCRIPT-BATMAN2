const haut = document.querySelector(".logo-left").children[0]
const bas = document.querySelector(".logo-left").children[4]


haut.addEventListener('click',()=>{
    scrollTo(scrollX,scrollY-100)
})

bas.addEventListener('click',()=>{
    scrollTo(scrollX,scrollY+100)
   
})

//efet fade left

const fadeElement = document.getElementById('fade-element');

function startFadeAnimation() {
  fadeElement.classList.add('fade-left')
}


// Démarrer l'animation de fondu 
startFadeAnimation();

//efet fade in on scroll

const fadeInElement = document.querySelectorAll('#fadeIn-element');

function handleScroll() {
  
    fadeInElement.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top
      const elementBottom = element.getBoundingClientRect().bottom
      const windowHeight = window.innerHeight
  
      if (elementTop < windowHeight) {
        element.classList.add('fade-in')
        console.log(`${elementTop} > ${windowHeight} `)

      }else if (elementBottom > windowHeight){
        console.log(`${elementBottom} > ${windowHeight} `)
      }
    });
  }
  
  window.addEventListener('scroll', handleScroll);
  


// Démarrer l'animation de fondu 
//startFadeINAnimation();

