const swiperInsta = new Swiper('.swiper-insta', {
    direction: 'horizontal',
    loop: true,
    effect: 'slide',
    slidesPerView: 6,
    spaceBetween: 22,
    speed: 10000,
    autoplay : {
        delay: 1,
        disableOnInteraction: false,
    }
});

// swiperレスポンシブ対応--------------------------------------------
function updateSwiper() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1024) {
        swiperInsta.params.slidesPerView = 6;
    } else if (screenWidth >= 768) {
        swiperInsta.params.slidesPerView = 4;
    } else {
        swiperInsta.params.slidesPerView = 2;
    }
    swiperInsta.update();
}

// 初回の設定
updateSwiper();

// 画面サイズ変更時の処理
window.addEventListener('resize', function() {
    updateSwiper();
});