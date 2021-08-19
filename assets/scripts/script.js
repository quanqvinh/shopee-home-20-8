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
const slideFrame = document.querySelector('.banners-slider');
const slideRoll = document.querySelector('.banners-slider__slides-roll');
const slides = document.getElementsByClassName('banners-slider__slides-roll--slide');
const slidePosition = document.getElementsByClassName('banners-slider__slide-position--index');

for (let i = 1; i < slides.length - 1; i++) {
    slides[i].style.backgroundImage = `url('assets/img/wrapper/slider/slide${i}.png')`;
}
slides[0].style.backgroundImage = `url('assets/img/wrapper/slider/slide14.png')`;
slides[15].style.backgroundImage = `url('assets/img/wrapper/slider/slide1.png')`;
slidePosition[0].style.backgroundColor = '#ee4d2d';
slidePosition[0].style.borderColor = '#ee4d2d';

var index = 1, duration = 5000;
var auto = setTimeout(autoChangeSlide, duration);
function autoChangeSlide() {
    nextSlide();
    auto = setTimeout(autoChangeSlide, duration);
}

function nextSlide() {
    slidePosition[index-1].style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
    slidePosition[index-1].style.borderColor = 'rgba(137, 137, 137, 0.4)';
    index++;
    slidePosition[index == 15 ? 0 : index - 1].style.backgroundColor = '#ee4d2d';
    slidePosition[index == 15 ? 0 : index - 1].style.borderColor = '#ee4d2d';
    slideRoll.style.transform = `translateX(-${index * slideFrame.offsetWidth}px)`;
    if (index == 15) {
        setTimeout(() => {
            slideRoll.style.transitionProperty = 'none';
            slideRoll.style.transform = `translateX(-${slideFrame.offsetWidth}px)`;
            setTimeout(() => {
                slideRoll.style.transitionProperty = 'transform';
            }, 5);
            index = 1;
        }, 500);
    }
}

function nextSlideWithDuration() {
    clearTimeout(auto);
    nextSlide();
    setTimeout(() => {
        auto = setTimeout(autoChangeSlide, duration);
    }, 5);
}

function previousSlide() {
    slidePosition[index-1].style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
    slidePosition[index-1].style.borderColor = 'rgba(137, 137, 137, 0.4)';
    index--;
    slidePosition[index == 0 ? 13 : index - 1].style.backgroundColor = '#ee4d2d';
    slidePosition[index == 0 ? 13 : index - 1].style.borderColor = '#ee4d2d';
    slideRoll.style.transform = `translateX(-${index * slideFrame.offsetWidth}px)`;
    if (index == 0) {
        setTimeout(() => {
            slideRoll.style.transitionProperty = 'none';
            slideRoll.style.transform = `translateX(-${14 * slideFrame.offsetWidth}px)`;
            setTimeout(() => {
                slideRoll.style.transitionProperty = 'transform';
            }, 5);
            index = 14;
        }, 500);
    }
}

function previousSlideWithDuration() {
    clearTimeout(auto);
    previousSlide();
    setTimeout(() => {
        auto = setTimeout(autoChangeSlide, duration);
    }, 5);
}

for (let i = 0; i < slidePosition.length; i++) {
    slidePosition[i].addEventListener('click', () => {
        clearTimeout(auto);
        slidePosition[index - 1].style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
        slidePosition[index - 1].style.borderColor = 'rgba(137, 137, 137, 0.4)';
        slidePosition[i].style.backgroundColor = '#ee4d2d';
        slidePosition[i].style.border = '#ee4d2d';
        index = i + 1;
        slideRoll.style.transform = `translateX(-${index * slideFrame.offsetWidth}px)`;
        setTimeout(() => {
            auto = setTimeout(autoChangeSlide, duration);
        }, 5);
    })
}

// Banner picture ---------------------------------------------
const bannerPictures = document.getElementsByClassName('banner-picture__item');
var bannerPictureFiles = ['banner1.png', 'banner2.png'];
for (let i = 0; i < bannerPictures.length; i++) {
    bannerPictures[i].style.backgroundImage = `url('assets/img/wrapper/banner/${bannerPictureFiles[i]}')`;
}

// Hot link ---------------------------------------------------
var homeNav = ["option1.png", "option2.png", "option3.gif", "option4.gif", "option5.png", "option6.png", "option7.png", "option8.png", "option9.png", "option10.png"];

const hotLinkImages = document.getElementsByClassName('home-container__hot-link--image');

for (let i = 0; i < hotLinkImages.length; i++) {
    hotLinkImages[i].style.backgroundImage = `url('assets/img/wrapper/hot-link-image/${homeNav[i]}')`;
}