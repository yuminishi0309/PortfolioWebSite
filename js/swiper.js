// swiper
const swiperWorks = new Swiper ('.swiper-works', {
    direction: 'horizontal',
    loop: false,
    effect: 'slide',
    // grabCursor: true,

    slidesPerView: 1.3,
        breakpoints: {
            768: {
                slidesPerView: 1.8,
            },
            1024: {
                slidesPerView: 4,
            }
        },

    spaceBetween: 20,
        // breakpoints: {
        //     768: {
        //         spaceBetween: 60,
        //     },
        //     1024: {
        //         spaceBetween: 60,
        //     }
        // },

    // slidesOffsetBefore: 20,
        // breakpoints: {
        //     768: {
        //         slidesOffsetBefore: 80,

        //     },
        //     1024: {
        //         spaceBetween: 160,
        //     }
        // },


    // autoplay : {
    //     delay: 300,
    // }
    // speed: 6000,
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