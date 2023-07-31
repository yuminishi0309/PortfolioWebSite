//const 変数名 = new Swiper('スライダーのクラス名',{});　初期化処理。Sは大文字。

const swiperMv = new Swiper('.swiper-mv',{

    loop: true,
    effect: 'slide',

    autoplay:{
        delay: 5000,
        disableOnInteraction: true
    },
    speed: 3000

});
