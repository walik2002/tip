const menuAuto = document.querySelector('.menu-auto');
const itemAuto = document.querySelectorAll('li');
const img = document.querySelectorAll('img');
const slider = document.querySelector('.slider');
let sliderHeight = img[0].clientHeight;
let count = 0;
let index = 0;
let group = 2;
let interval;
menuAuto.addEventListener('click', (event) => {

    let current = 0
    clearInterval(interval)
    const target = event.target.closest('li');
    if (!target) {
        return;
    }
    itemAuto.forEach((el, i) => {
        el.classList.remove('active');
        if (el == target) {
            index = i;
            current = i
        }
    });
    target.classList.add('active');

    slider.style.transition = 'none';

    slider.style.transform = `translateY(-${index * 2 * sliderHeight}px)`;
    count = index * 2 + 1
    group = 1
    interval = setInterval(function () {

        console.log("index = " + index + " count = " + count)
        if ( group == 2)
        {
            count = index * 2;
            group = 0
            slider.style.transform = `translateY(-${count * sliderHeight}px)`;
        }
        slider.style.transition = 'transform 0.9s ease-in-out';
        slider.style.transform = `translateY(-${(count) * sliderHeight}px)`;
        count++
        group++

    }, 2000);
});