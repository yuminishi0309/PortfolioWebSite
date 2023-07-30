

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
menuBtn.addEventListener('click', function () {
    smenu.classList.toggle('smenu-fadeIn');
});
// NavMenuが閉じる
smenu.addEventListener('click', function () {
    smenu.classList.remove('smenu-fadeIn');
});

//menuBtnアニメーション繰り返し設定------------------------------------------------------
const menuBtnLine = document.querySelectorAll(`[id^='menuBtnLine']`);
// console.log(menuBtnLine);

for (let i = 0; i < menuBtnLine.length; i++) {
    function animation() {
        menuBtnLine.forEach(e => {
            // クラス名あるか調べて、同じクラス名をつけたり外したりまではできてる
            // できない：id = menuBtnLine01〜06 => 各数字に対応したクラス menuBtn__line01〜06　追加したい

            const hasClass = menuBtnLine[i].classList.contains(`[class^='menuBtn__Line']`);
            // console.log(hasClass);
            if (hasClass === false) {
                e.classList.add(`menuBtn__Line`);
                
            } else {
                e.classList.remove(`menuBtn__line`);
            }
        });
    }
}
setInterval(animation, 3000);

//スムーススクロール----------------------------------------------------------------------
const smoothScroll = document.querySelectorAll('a[href^="#"]');
for (let i = 0; i < smoothScroll.length; i++) {
    smoothScroll[i].addEventListener('click', (e) => {
        e.preventDefault();
        const href = smoothScroll[i].getAttribute('href');
        const targetElement = document.getElementById(href.replace('#', ''));
        const rect = targetElement.getBoundingClientRect().top;
        const offset = window.pageYOffset;
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

// Works Area Nav設定　固定＆色変更--------------------------------------------------
window.addEventListener('scroll', function () {
    const menuNav = document.querySelector('#js-scroll');
    const navWorks = document.querySelector('#js-worksColor');
    const navSkills = document.querySelector('#js-skillsColor');
    //SP
    //nav固定
    //worksセクション取得　→　セクションのtop取得する
    const getWorks = document.querySelector('#works');
    const worksOffsetTop = Math.floor(getWorks.getBoundingClientRect().top);
    const worksOffsetBottom = Math.floor(getWorks.getBoundingClientRect().bottom);
    const getSkills = document.querySelector('#skills');
    const skillsOffsetTop = Math.floor(getSkills.getBoundingClientRect().top);
    const skillsOffsetBottom = Math.floor(getSkills.getBoundingClientRect().bottom);
    const position = Math.floor(window.innerHeight * .12);
    //worksセクショントップがwindow(position)の上10%の高さを過ぎたら対象要素にクラスをつける
    // nav　fixed/opacity設定
    if (position > worksOffsetTop && position < skillsOffsetBottom) {
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
        // PC版スクロールオフ
        if (isPCSize) {
            document.addEventListener('touchmove', noscroll, { passive: false });
            document.addEventListener('wheel', noscroll, { passive: false });
        }

        const closeModal = document.querySelectorAll('.modal__wrap');
        for (let i = 0; i < closeModal.length; i++) {
            closeModal[i].addEventListener('click', (e) => {
                openModal.classList.remove('modal-open');
                // PC版スクロールオン
                document.removeEventListener('touchmove', noscroll);
                document.removeEventListener('wheel', noscroll);
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
        //スクロールオフ
        document.addEventListener('touchmove', noscroll, { passive: false });
        document.addEventListener('wheel', noscroll, { passive: false });

        openDModal.addEventListener('click', (e) => {
            openDModal.classList.remove('modal-open');
            //スクロールオン
            document.removeEventListener('touchmove', noscroll);
            document.removeEventListener('wheel', noscroll);
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
            const scrollPos = window.pageYOffset;
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
    });
}

// CONTACT & footer 背景色変更-----------------------------------------------
// SP
window.addEventListener('scroll', function () {
    const body = document.querySelector('#top');
    // SP
    if (isSPSize) {
        if (6200 < this.window.scrollY) {
            body.classList.add('bgChange');
        } else {
            body.classList.remove('bgChange');
        }
    }
    //Tab
    if (isTBSize) {
        if (7000 < this.window.scrollY) {
            body.classList.add('bgChange');
        } else {
            body.classList.remove('bgChange');
        }
    }
    //PC
    if (isPCSize) {
        if (6400 < this.window.scrollY) {
            body.classList.add('bgChange');
        } else {
            body.classList.remove('bgChange');
        }
    }
});


