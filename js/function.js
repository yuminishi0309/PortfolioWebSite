// ===============  JS記述  ==============================================================
// レスポンシブ設定
const windowPC = 1024;
const windowTB = 768;
const windowWidth = window.innerWidth;
const isSPSize = (windowWidth < windowTB);
const isTBSize = (windowWidth >= windowTB && windowWidth <= windowPC);
const isPCSize = (windowWidth >= windowPC);

// NavMenu設定  -------------------------------------------------------------------
const menuBtn = document.querySelector('#menuBtn');
const smenu = document.querySelector('#smenu');
const topGnav = document.querySelector('#top__gnav');

menuBtn.addEventListener('click', function () {
    smenu.classList.toggle('smenu-fadeIn');
    topGnav.classList.toggle('topGnav-hide');
});
// NavMenuが閉じる
smenu.addEventListener('click', function () {
    smenu.classList.remove('smenu-fadeIn');
    topGnav.classList.remove('topGnav-hide');
});

//menuBtnアニメーション繰り返し設定------------------------------------------------------
const menuBtnLine = document.querySelectorAll(`[id^='menuBtnLine']`);
const elements = ["menuBtnLine01", "menuBtnLine02", "menuBtnLine03", "menuBtnLine04", "menuBtnLine05", "menuBtnLine06"];
const classNames = ["menuBtn__line01", "menuBtn__line02", "menuBtn__line03", "menuBtn__line04", "menuBtn__line05", "menuBtn__line06"];

setInterval(function(){
    for (let i = 0; i < elements.length; i++) {
        document.getElementById(elements[i]).classList.toggle(classNames[i]);
    }
}, 3000);

//pileIconアニメーション繰り返し設定------------------------------------------------------
const pileIconLine = document.querySelectorAll(`[id^='pileIconLine']`);
const pileElements = ["pileIconLine01", "pileIconLine02", "pileIconLine03", "pileIconLine04", "pileIconLine05", "pileIconLine06", "pileIconLine07", "pileIconLine08", "pileIconLine09", "pileIconLine10", "pileIconLine11", "pileIconLine12"];
const pileClassNames = ["pileIcon__line01", "pileIcon__line02", "pileIcon__line03", "pileIcon__line04", "pileIcon__line05", "pileIcon__line06", "pileIcon__line07", "pileIcon__line08", "pileIcon__line09", "pileIcon__line10", "pileIcon__line11", "pileIcon__line12"];

setInterval(function(){
    for (let i = 0; i < pileElements.length; i++) {
        document.getElementById(pileElements[i]).classList.toggle(pileClassNames[i]);
    }
}, 3500);

//スムーススクロール----------------------------------------------------------------------
const smoothScroll = document.querySelectorAll('a[href^="#"]');
for (let i = 0; i < smoothScroll.length; i++) {
    smoothScroll[i].addEventListener('click', (e) => {
        e.preventDefault();
        const href = smoothScroll[i].getAttribute('href');
        const targetElement = document.getElementById(href.replace('#', ''));
        const rect = targetElement.getBoundingClientRect().top;
        const offset = window.scrollY;
        const target = rect + offset;
        window.scrollTo({
            top: target,
            behavior: 'smooth',
        });
    });
}

//mv画像スクロール設定
window.addEventListener('scroll', () => {
    const mvImg = document.querySelector('#mvBg');
    const imgVerScrollY = window.scrollY/10;
    mvImg.style.transform = 'translateY('+ 0 + imgVerScrollY + 'px) scale(1.4)';
});

// Works Area Nav設定 固定＆色変更--------------------------------------------------
window.addEventListener('scroll', function () {
    const menuNav = document.querySelector('#js-scroll');
    const navWorks = document.querySelector('#js-worksColor');
    const navSkills = document.querySelector('#js-skillsColor');
    //SP
    //nav固定
    //worksセクション取得 → セクションのtop取得する
    const getWorks = document.querySelector('#works');
    const worksOffsetTop = Math.floor(getWorks.getBoundingClientRect().top);
    const worksOffsetBottom = Math.floor(getWorks.getBoundingClientRect().bottom);
    const getSkills = document.querySelector('#skills');
    const skillsOffsetTop = Math.floor(getSkills.getBoundingClientRect().top);
    const skillsOffsetBottom = Math.floor(getSkills.getBoundingClientRect().bottom);
    const position = Math.floor(window.innerHeight * .12);
    //worksセクショントップがwindow(position)の上10%の高さを過ぎたら対象要素にクラスをつける
    // nav fixed/opacity設定
    if (position > worksOffsetTop && position) {
        menuNav.classList.add('navFixed');
    } else {
        menuNav.classList.remove('navFixed');
    }
    if (position > skillsOffsetBottom - 100) {
        menuNav.classList.add('navOpacity');
    } else {
        menuNav.classList.remove('navOpacity');
    }

    // worksセクションでのnav色変更
    if (position > worksOffsetTop && position < worksOffsetBottom) {
        navWorks.classList.add('navBgColorB');
        navSkills.classList.add('navBgColorW');
    } else {
        navWorks.classList.remove('navBgColorB');
        navSkills.classList.remove('navBgColorW');
    }
    //skillsセクションでのnav色変更
    if (position > skillsOffsetTop && position < skillsOffsetBottom) {
        navWorks.classList.add('navBgColorW');
        navSkills.classList.add('navBgColorB');
    } else {
        navWorks.classList.remove('navBgColorW');
        navSkills.classList.remove('navBgColorB');
    }
});

// Modal設定 & 背景固定  -------------------------------------------------
//WebSiteArea  --------------------
const swiperSlide = document.querySelectorAll('.swiper-works__slide');
function noscroll(e) {
    e.preventDefault();
}

for (let i = 0; i < swiperSlide.length; i++) {
    swiperSlide[i].addEventListener('click', (e) => {
        const modal = swiperSlide[i].getAttribute('data-modal');
        const openModal = document.querySelector(modal);
        openModal.classList.add('modal-open');

        const closeModal = document.querySelectorAll('.modal__wrap');
        for (let i = 0; i < closeModal.length; i++) {
            closeModal[i].addEventListener('click', (e) => {
                openModal.classList.remove('modal-open');
            });
        }
        //Modal内でgo siteボタンクリック後、モーダルを非表示にしない
        const modalLink = openModal.querySelector('.modal__link');
        modalLink.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    });
}

// DesignArea---------------------
const designWorks = document.querySelectorAll('.works__box');
for (let i = 0; i < designWorks.length; i++) {
    designWorks[i].addEventListener('click', (e) => {
        const DModal = designWorks[i].getAttribute('data-modal');
        const openDModal = document.querySelector(DModal);
        openDModal.classList.add('modal-open');

        openDModal.addEventListener('click', (e) => {
            openDModal.classList.remove('modal-open');
        });
    });
}

// SKILLSパララックスアニメーション設定-------------------------------------------
const activeArea = document.querySelectorAll('.js-parallaxArea');
const activeSize = 1367
if (activeSize <= windowWidth) {
    activeArea.forEach((e, i) => {
        const target = e.querySelectorAll('.js-parallax');
        const areaPosX = e.getBoundingClientRect().left;
        const xAreaCenter = areaPosX + activeArea[i].offsetWidth / 2;
        // 箱内にマウスムーブした時の処理
        e.addEventListener('mousemove', (el) => {
            const scrollPos = window.scrollY;
            const areaPosY = e.getBoundingClientRect().top;
            const yAreaCenter = scrollPos + areaPosY + activeArea[i].offsetHeight / 2;
            const x = (el.pageX - xAreaCenter);
            const y = (el.pageY - yAreaCenter);
            //パララックスさせる要素にstyle指定
            //shadow-dark
            target[0].style.transform = `translate(${x * .006}px, ${y * .016}px)`;
            //shadow-light
            target[1].style.transform = `translate(${x * .03}px, ${y * .03}px)`;
        });
         // 箱内からマウスが出た時の処理
         e.addEventListener('mouseleave', () => {
            //shadow-dark
            target[0].style.transform = '';
            //shadow-light
            target[1].style.transform = '';
        });
    });
}

// CONTACT & footer 背景色変更-----------------------------------------------
const headerLogo = document.querySelector('#header__img');
const body = document.querySelector('#top');
window.addEventListener('scroll', function () {
    // SP
    if (isSPSize) {
        if (6000 < this.window.scrollY) {
            body.classList.add('bgChange');
            headerLogo.src = "images/logo_gray.svg";
        } else {
            body.classList.remove('bgChange');
            headerLogo.src = "images/logo_black.svg";
        }
    }
    //Tab
    if (isTBSize) {
        if (6600 < this.window.scrollY) {
            body.classList.add('bgChange');
            headerLogo.src = "images/logo_gray.svg";
        } else {
            body.classList.remove('bgChange');
            headerLogo.src = "images/logo_black.svg";
        }
    }
    //PC
    if (isPCSize) {
        if (6200 < this.window.scrollY) {
            body.classList.add('bgChange');
            headerLogo.src = "images/logo_gray.svg";
        } else {
            body.classList.remove('bgChange');
            headerLogo.src = "images/logo_black.svg";
        }
    }
});


