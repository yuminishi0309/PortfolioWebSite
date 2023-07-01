// swiper
const swiperWorks = new Swiper ('.swiper-works', {
    direction: 'horizontal',
    loop: false,
    effect: 'slide',
    slidesPerView: 2,
        breakpoints: {
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            }
        },
    spaceBetween: 20,
    pagination: {
        el: '.swiper-works__pagination',
        type: 'bullets',
        // clickable: false
    },
    navigation: {
        prevEl: '.swiper-works__prev',
        nextEl: '.swiper-works__next'
    }
});