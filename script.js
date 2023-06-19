/// copy menu from mobile

function copyMenu() {
    let dptCategory = document.querySelector('.dpt-cat');
    let dptPlace = document.querySelector('.departments');
    dptPlace.innerHTML = dptCategory.innerHTML

    // copy inside nav to nav

    let mainNav = document.querySelector('.header-nav nav');
    let navPlace = document.querySelector('.off-canvas nav');

    navPlace.innerHTML = mainNav.innerHTML;

    //copy .header-top .wrapper to .thetop-nav
    var topNav = document.querySelector('.header-top .wrapper');
    var topPlace = document.querySelector('.off-canvas .thetop-nav')
    console.log(topNav.innerHTML)
    topPlace.innerHTML = topNav.innerHTML

}
copyMenu()



// show mobile menu

const menuButton = document.querySelector('.trigger'),
    closeButton = document.querySelector('.t-close'),
    addClass = document.querySelector('.site');

menuButton.addEventListener('click', () => {
    addClass.classList.toggle('showmenu')
})
closeButton.addEventListener('click', (e) => {
    e.preventDefault();
    addClass.classList.remove('showmenu')
})

// show sub menu on mobile

const submenu = document.querySelectorAll('.has-child .icon-small');
submenu.forEach((menu) => menu.addEventListener('click', toggle))

function toggle(e) {
    e.preventDefault();
    submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null)

    if (this.closest('.has-child').classList != 'expand')
        this.closest('.has-child').classList.toggle('expand')
}

// slider
const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
});