// スクロールに応じたロゴの位置調整
const logo = document.querySelector('#header__ttl');
window.addEventListener('scroll', function (){
    const ST = window.scrollY;
    if (140 < ST) {
        logo.classList.add('moveLogo');
    } else {
        logo.classList.remove('moveLogo');
    }
});