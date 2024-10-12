

const navToggleBtn = document.querySelectorAll('[data-nav-toggler]');
const overlay = document.querySelector("[data-overlay]");
const navbar = document.querySelector('[data-navbar]');

navToggleBtn.forEach(togglebtn => {
    togglebtn.addEventListener('click', e => {
        navbar.classList.toggle("active");
        overlay.classList.toggle("active");
        document.body.classList.toggle("nav-is-open");
    });
});


const /** {NodeElement} */ sliderBtnLeft = document.querySelector('[data-slider-btn-left]');
const /** {NodeElement} */ sliderBtnRight = document.querySelector('[data-slider-btn-right]');
const /** {NodeList} */ sliderItems = document.querySelectorAll('[data-slider-item]');


let currentIndex = 0;


/**
 * CHANGE SLIDER ITEM FUNCTION
 */
const changeSliderItem = function () {
    if (window.innerWidth >= 1200) {
        for (let i = 0; i < sliderItems.length; i++) {
            sliderItems[i].style.display = 'none';
        }
        sliderItems[currentIndex].style.display = 'flex';
    } else {
        // On smaller screens, all items should be visible
        for (let i = 0; i < sliderItems.length; i++) {
            sliderItems[i].style.display = 'flex';
        }
    }
};

changeSliderItem();

/**
 * NEXT SLIDER FUNCTION
 */

const sliderNext = function () {
    if (currentIndex < sliderItems.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }

    changeSliderItem();
}


/**
 * PREVIOUS SLIDER FUNCTION
 */

const sliderPrev = function () {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = sliderItems.length - 1;
    }
    changeSliderItem();
}

/**
 * Add EventListener for next and prev button
 */
sliderBtnLeft.addEventListener('click', sliderPrev);
sliderBtnRight.addEventListener('click', sliderNext);

/**
 * Handle window resize event
 */

window.addEventListener('resize', changeSliderItem);