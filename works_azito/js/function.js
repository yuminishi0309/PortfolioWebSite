// フェードインメニューボタン設定-------------------------------------------
const menuBtn = document.querySelector('#btn');
const btnTop = document.querySelector('#btn__top');
const btnMiddle = document.querySelector('#btn__middle');
const btnBottom = document.querySelector('#btn__bottom');
const gnav = document.querySelector('#gnav');

// メニューボタン操作時の挙動
menuBtn.addEventListener('click', () => {
    btnTop.classList.toggle('rotateTop');
    btnMiddle.classList.toggle('hideMiddle');
    btnBottom.classList.toggle('rotateBottom');
    gnav.classList.toggle('gnav-fadeIn');
});

// ナビゲーション操作時の挙動
const gnavLinks = document.querySelectorAll('.gnav__link');
for (let i =0; i < gnavLinks.length; i++) {
    gnavLinks[i].addEventListener('click', () => {
        btnTop.classList.remove('rotateTop');
        btnMiddle.classList.remove('hideMiddle');
        btnBottom.classList.remove('rotateBottom');
        gnav.classList.remove('gnav-fadeIn');
    });
}