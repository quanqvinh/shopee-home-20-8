// Show and hide popup in header---------------------
const popups = document.getElementsByClassName('popup');
const expandBtns = document.getElementsByClassName('popup-expand');

for (let i = 0; i < popups.length; i++) {
    expandBtns[i].addEventListener('mouseover', () => {
        expandBtns[i].style.opacity = '0.7';
    });
    expandBtns[i].addEventListener('mouseout', () => {
        expandBtns[i].style.opacity = '1';
    });
    if (expandBtns[i].classList.contains('header-container__your-cart'))
        continue;
    popups[i].addEventListener('mouseover', () => {
        expandBtns[i].style.opacity = '0.7';
    });
    popups[i].addEventListener('mouseout', () => {
        expandBtns[i].style.opacity = '1';
    });
}

// Slider -------------------------------------------
const slider = document.querySelector('.banners-slider');
const slidePosition = document.getElementsByClassName('banners-slider__slide-position--index');
var index = 1, duration = 700;

const initSlide = document.createElement('a');
initSlide.classList.add('banners-slider__slide');
initSlide.style.backgroundImage = `url('assets/img/wrapper/slider/slide1.png')`;
initSlide.style.backgroundPosition = 'right center';
slider.appendChild(initSlide);
slidePosition[0].style.backgroundColor = 'var(--primary-color)';

setTimeout(changeSlide, 3000);
function changeSlide() {
    slidePosition[index-1].style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
    index++;
    if (index == 15)
        index = 1;
    
    let nextSlide = document.createElement('a');
    nextSlide.classList.add('banners-slider__slide');
    nextSlide.style.backgroundImage = `url('assets/img/wrapper/slider/slide${index}.png')`;
    nextSlide.style.backgroundPosition = 'right center';
    slider.appendChild(nextSlide);
    slidePosition[index-1].style.backgroundColor = 'var(--primary-color)';
    
    const preSlide = document.getElementsByClassName('banners-slider__slide')[0];
    
    preSlide.style.animationPlayState = 'running';

    setTimeout(() => {
        slider.removeChild(preSlide);
    }, 500);
    setTimeout(changeSlide, 5000);
}