$(function(){
    // --------------------jQueryの記述--------------------
    
    $('#btn__menu').on('click', function(){
        //スライドメニュー & ハンバーガーメニュー
        $('#btn__top').toggleClass('rotateTop');
        $('#btn__bottom').toggleClass('rotateBottom');
        $('#gnav').toggleClass('translateNav');

        const ST = $(window).scrollTop();
        const hasClass = $('#gnav').hasClass('translateNav');
        //ヘッダーボタン文字色条件
        if (hasClass === false && ST <= 108) {
            $('.btn__link').removeClass('changeColorLink');
            $('#btn__menu').removeClass('changeColorMenu');
            $('#btn__top').removeClass('changeColorLine');
            $('#btn__bottom').removeClass('changeColorLine');
        } else if(hasClass === false) {
            $('.btn__link').addClass('changeColorLink');
            $('#btn__menu').addClass('changeColorMenu');
            $('#btn__top').addClass('changeColorLine');
            $('#btn__bottom').addClass('changeColorLine');
        } else {
            $('.btn__link').removeClass('changeColorLink');
            $('#btn__menu').removeClass('changeColorMenu');
            $('#btn__top').removeClass('changeColorLine');
            $('#btn__bottom').removeClass('changeColorLine');
        }
        // スライドメニューナビゲーション部分のフェードアップ
        if (hasClass === true) {
            $('.fadeUpAuto').addClass('showElement');
        } else {
            $('.fadeUpAuto').removeClass('showElement');
        }
        //gnav表示有/無でスクロール無効/有効　作動ok
        if (hasClass === true) {
            $('#top').css('overflow-y', 'hidden');
        } else {
            $('#top').css('overflow-y', 'auto');
        }
    });

    $('#gnav').on('click', function(){
        $('#gnav').removeClass('translateNav');
        $('#btn__top').removeClass('rotateTop');
        $('#btn__bottom').removeClass('rotateBottom');
        //スクロール有効化
        $('#top').css('overflow-y', 'auto');
        // gnavクリック後のbtn色条件
        const ST = $(window).scrollTop();
        const hasClass = $('#gnav').hasClass('translateNav');
        if (hasClass === false && ST <= 108) {
            $('.btn__link').removeClass('changeColorLink');
            $('#btn__menu').removeClass('changeColorMenu');
            $('#btn__top').removeClass('changeColorLine');
            $('#btn__bottom').removeClass('changeColorLine');
        } else if (hasClass === false) {
            $('.btn__link').addClass('changeColorLink');
            $('#btn__menu').addClass('changeColorMenu');
            $('#btn__top').addClass('changeColorLine');
            $('#btn__bottom').addClass('changeColorLine');
        }
    });

    //　スクロール時設定  -----------------------------------------
    const windowHeight = $(window).innerHeight();
    $(window).on('scroll', function(){
        const ST = $(window).scrollTop();
        // ヘッダー変更 & スライドメニュー時の文字色条件
        if($('#gnav').hasClass('translateNav')) {
            $('.btn__link').removeClass('changeColorLink')
            $('#btn__menu').removeClass('changeColorMenu');
            $('#btn__top').removeClass('changeColorLine');
            $('#btn__bottom').removeClass('changeColorLine');
        } else if(ST >= 108){
            $('#header').addClass('changeHeader');
            $('#header__link').addClass('changeLogo');
            $('.btn__link').addClass('changeColorLink');
            $('#btn__menu').addClass('changeColorMenu');
            $('#btn__top').addClass('changeColorLine');
            $('#btn__bottom').addClass('changeColorLine');
        } else {
            $('#header').removeClass('changeHeader');
            $('#header__link').removeClass('changeLogo');
            $('.btn__link').removeClass('changeColorLink');
            $('#btn__menu').removeClass('changeColorMenu');
            $('#btn__top').removeClass('changeColorLine');
            $('#btn__bottom').removeClass('changeColorLine');
        }
        // ページ全体のフェードアップ
        $('.fadeUp').each(function(){
            const target = $(this).offset().top;
            if(ST > target - windowHeight / 1.4){
                $(this).addClass('showElement');
            }
        });
    });

    //スムーススクロール  -----------------------------------
    $('.gnav__link').on('click', function(){
        const target = $(this).attr('href');
        const targetPos = $(target).offset().top;
        $('html, body').animate({scrollTop: targetPos}, 500);
        //gnav消す
        $('#gnav').removeClass('translateNav');
        $('#btn__top').removeClass('rotateTop');
        $('#btn__bottom').removeClass('rotateBottom');
        //スクロール有効化
        $('#top').css('overflow-y', 'auto');
        return false;
    });

    //モーダルウィンドウ & 背景固定  ---------------------------
    $('.course__box').on('click', function(){
        const modal = $(this).attr('data-modal');
        $('#top').css('overflow-y', 'hidden');
        $(modal).fadeIn(function(){
            $(this).on('click', function(){
                $(this).fadeOut();
                $('#top').css('overflow-y', 'auto');
            });
        });
    });


    // ----------------------jQuery記述ここまで----------------------
});