//const 変数名 = new Swiper('スライダーのクラス名',{});
//初期化処理(必ず最初にする必要がある)。Sは大文字。
const swiperSv = new Swiper('.swiper-sv', {
    direction: 'horizontal',
    loop: true,
    effect: 'slide',
    slidesPerView: 4,

    speed: 6000,
    autoplay : {
        delay: 300,

    }



});