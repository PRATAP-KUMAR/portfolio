const hmbBtn = document.getElementById('ham-btn');
const mobileMenu = document.getElementById('menu-items');
const toggleBtnIcon = document.querySelector('.ham-btn > i');
const menuLinks = Array.from(mobileMenu.querySelectorAll('li'));

const hamburgerMenu = () => {
  toggleBtnIcon.classList.toggle('fa-bars');
  toggleBtnIcon.classList.toggle('fa-x');
  toggleBtnIcon.classList.toggle('zidx');
  mobileMenu.classList.toggle('show-menu');
};

hmbBtn.addEventListener('click', () => hamburgerMenu());

for (let i = 0; i < menuLinks.length; i += 1) {
  menuLinks[i].addEventListener('click', () => {
    if (mobileMenu.classList.contains('show-menu')) hamburgerMenu();
  });
}
