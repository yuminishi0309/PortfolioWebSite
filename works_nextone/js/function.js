// フェードインメニュー  =========================================
const menuBtn = document.querySelector('#btn');
const btnTop = document.querySelector('#btn__top');
const btnMiddle = document.querySelector('#btn__middle');
const btnBottom = document.querySelector('#btn__bottom');
const gnav = document.querySelector('#gnav');
const gnavNav = document.querySelector('#gnav__nav');
const gnavLists = document.querySelectorAll('.gnav__list')
const gnavLinks =document.querySelectorAll('.gnav__link');

// ハンバーガーメニューボタン操作時の設定
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('btnBorderHide');
    btnTop.classList.toggle('rotateTop');
    btnMiddle.classList.toggle('hideMiddle');
    btnBottom.classList.toggle('rotateBottom');
    gnav.classList.toggle('gnavFadeIn');
    // PC用設定
    gnavNav.classList.toggle('gnavNavPc');
    for (let i = 0; i < gnavLists.length; i++) {
        gnavLists[i].classList.toggle('gnavListPc');
    }
    for (let i = 0; i < gnavLinks.length; i++) {
        gnavLinks[i].classList.toggle('gnavLinkPc')
    }
});

// ナビゲーション操作時の設定
gnav.addEventListener('click', () => {
    menuBtn.classList.remove('btnBorderHide');
    btnTop.classList.remove('rotateTop');
    btnMiddle.classList.remove('hideMiddle');
    btnBottom.classList.remove('rotateBottom');
    gnav.classList.remove('gnavFadeIn');
    // PC用設定
    gnavNav.classList.remove('gnavNavPc');
    for (let i = 0; i < gnavLists.length; i++) {
        gnavLists[i].classList.remove('gnavListPc');
    }
    for (let i = 0; i < gnavLinks.length; i++) {
        gnavLinks[i].classList.remove('gnavLinkPc')
    }
});

// リサイズヘッダー  =========================================
const header = document.querySelector('#header');
const mv = document.querySelector('#mv');
const mvHeight = mv.offsetHeight;
window.addEventListener('scroll', ()=> {
    const ST = window.scrollY;
    if(ST > mvHeight) {
        header.classList.add('resizeHeader');
    } else {
        header.classList.remove('resizeHeader');
    }
});
// レスポンシブ対応
const breakpointTab = window.matchMedia("(max-width:768px)"); 
const breakpointPC = window.matchMedia("(max-width:1024px)"); 
breakpointTab.addEventListener("change", () => {
    window.location.reload();
});
breakpointPC.addEventListener("change", () => {
    window.location.reload();
});

// スムーススクロール  =========================================
const smoothScroll = document.querySelectorAll('a[href^="#"]');
for (let i = 0; i < smoothScroll.length; i++) {
    smoothScroll[i].addEventListener('click', (e) => {
        e.preventDefault();
        const href = smoothScroll[i].getAttribute('href');
        const targetElement = document.getElementById(href.replace('#', ''));
        const rect = targetElement.getBoundingClientRect().top;
        const ST = window.scrollY;
        const target = rect + ST;

        window.scrollTo({
            top: target,
            behavior: 'smooth',
        });
    });
}