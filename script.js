// THIS IS THE CODE FOR THE SLIDES ANIMATION ON THE MAIN PAGE.


var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 6000); // Change image every 2 seconds
}



// THIS IS THE CODE FOR THE HAMBURGER MENU FOR SMALLER SCREENS AND MOBILE SCREENS.



const toggle = document.getElementsByClassName('toggle')[0]
const navbarLinks = document.getElementsByClassName('navbarLinks')[0]


toggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})