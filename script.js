


// THIS IS THE CODE TO MAKE THE RESPONSIVE HAMBURGER MENU WORK FOR SMALL SCREENS/MOBILE.


const toggle = document.getElementsByClassName('toggle')[0]
const navbarLinks = document.getElementsByClassName('navbarLinks')[0]


toggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})
