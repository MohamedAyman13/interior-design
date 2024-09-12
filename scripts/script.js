const navLinks = document.querySelector('.nav-links');
const menuFunctionality = (element) => {
    element.name = element.name === 'menu'? 'close': 'menu';
    if(window.innerWidth <= 520 && window.innerWidth >= 481) {
        navLinks.classList.toggle('max-sm:top-[12%]') 
    } else if (window.innerWidth <= 480) {
        navLinks.classList.toggle('max-sm:top-[18%]')
    } else {
        navLinks.classList.toggle('top-[24%]')
    }
}

const accordionHeader = document.querySelectorAll('.accordion-header')
const plusIcon = document.querySelectorAll('.plus')
accordionHeader.forEach((element, index) => {
    element.addEventListener('click', event => {
        const accordionBody = document.querySelectorAll('.accordion-body')[index]
        activeIcon = plusIcon[index];
        activeIcon.setAttribute('name', 'remove-outline')
        element.classList.toggle('active')
        if (element.classList.contains('active')) {
            accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px'
        }
        else {
            accordionBody.style.maxHeight = 0
            activeIcon.setAttribute('name', 'add-outline')
        }
    })
})