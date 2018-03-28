const navMain = document.querySelector('.nav-main');
const navMenu = document.querySelector('.nav-menu');
const navItems = document.querySelectorAll('.nav-item');

// Display menu - Mobile Device
if (window.matchMedia("(max-width: 767px)").matches) {
  navMain.addEventListener('click', () => {
    if (navMenu.classList.contains('toggleVisible')) {
      navMenu.classList.replace('toggleVisible', 'toggleHidden');
    }
    else {
      navMenu.classList.replace('toggleHidden', 'toggleVisible');
    }
  });
}
else{
  navMenu.classList.remove('toggleHidden');
}

// Toggle Menu Items 
navItems.forEach((navItem) => {
  navItem.addEventListener('click', toggleMenu);
})

function toggleMenu() {

  const selectedSubMenu = this.nextElementSibling;

  navItems.forEach((navItem) => {
    let otherMenuItem = navItem;
    let otherSubMenu = navItem.nextElementSibling;
    if (otherSubMenu === selectedSubMenu) {
      if (selectedSubMenu.classList.contains('toggleVisible')) {
        selectedSubMenu.classList.replace('toggleVisible', 'toggleHidden');
      }
      else {
        selectedSubMenu.classList.replace('toggleHidden', 'toggleVisible');
      }
    }
    else {
      otherSubMenu.classList.replace('toggleVisible', 'toggleHidden');
    }
    // + or -
    if (this === otherMenuItem) {
      if (this.firstElementChild.firstElementChild.innerText === '+'){
        this.firstElementChild.firstElementChild.innerText = '-';
      }
      else{
        this.firstElementChild.firstElementChild.innerText = '+';
      }
    }
    else {
      navItem.firstElementChild.firstElementChild.innerText = '+';
    }
  })
}
