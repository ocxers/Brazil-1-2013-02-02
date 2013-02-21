$(document).ready(function () {
    // part 2: navigation
    // when scroll to a specific value (here is 1210), the navigation will fade in, and fixed in the top of the browser
    // so, it would be a good user experience
    var flag = true;
    $(window).scroll(function () {
        var st = $(this).scrollTop();
        if (st >= 1210) {
            if (flag) {
                $('.nav').addClass('nav-active')
                    .css({ 'top': '-70px', 'opacity': '0', 'filter': 'alpha(opacity = 0)' })
                    .animate({ 'top': '0', 'opacity': '1', 'filter': 'alpha(opacity = 100)' }, 550);
                flag = false;
            }
        }
        if (st <= 28) {
            if (!flag) {
                $('.nav').css({ 'top': '28px' }).removeClass('nav-active');
                flag = true;
            }
        }
    });

    // part 7: diferenciais
    $('.plus').click(function () {
        var $this = $(this);
        if ($this.hasClass('diferenciais-box-plus')) {
            $this.removeClass('diferenciais-box-plus').addClass('diferenciais-box-minus');
            // $this.siblings('.sub-box').fadeIn('slow');
            $this.siblings('.sub-box').slideDown('slow');
        }
        else {
            $this.removeClass('diferenciais-box-minus').addClass('diferenciais-box-plus');
            // $this.siblings('.sub-box').fadeOut('slow');
            $this.siblings('.sub-box').slideUp('slow');
        }
    });
    $('.sub-box').hide();
    $('.diferenciais-box-middle').hover(function () {
        // $('.sub-box').fadeIn('slow');
        $('.sub-box').slideDown('slow');
        $('.plus').removeClass('diferenciais-box-plus').addClass('diferenciais-box-minus');
    })

    // part 10: Marquee
    // when hover the left arrow, the images will run from right to left
    // when hover the right arrow, the images will run from left to right
    var mq;
    var visibleWidth = 0;
    var fullWidth = 0;
    var mLeft = 0;
    var mRight = 0;
    $('#midia-left').hover(function () {
        mq = setInterval(function () {
            if (fullWidth == 0) {
                visibleWidth = $('.midia-marque-ul').width();
                $('.midia-marque-ul').children().each(function () {
                    fullWidth += $(this)['outerWidth']();
                });
            }
            mLeft = $('.midia-marque-ul').css('left').replace('px', '');
            if (fullWidth + mLeft <= visibleWidth) {
                clearInterval(mq);
                return;
            }
            else {
                $('.midia-marque-ul').stop().animate({
                    left: '-=1'
                }, 10);
            }
        }, 100);
    }, function () {
        clearInterval(mq);
    });
    $('#midia-right').hover(function () {
        mq = setInterval(function () {
            mRight = $('.midia-marque-ul').css('left').replace('px', '');
            if (mRight >= 0) {
                clearInterval(mq);
                return;
            }
            else {
                $('.midia-marque-ul').stop().animate({
                    left: '+=1'
                }, 10);
            }
        }, 100);
    }, function () {
        clearInterval(mq);
    });

    // part 8: show the 'data-content' when mouse hover the corresponding element
    // make sure you have set the 'date-content' attribute in each element
    // $('.ferramentas-content').hover(function () { 
    $('.flux-icon-cross').hover(function () {
        $('.popover-content').text($(this).attr('data-content'));
        $('.popover').css('left', $(this).offset().left - 285);
        $('.popover').show();
    }, function () {
        // if you need to hide the popover when mouse leave the element, please uncomment the line below:
        // $('.popover').hide();
    });
});

/* by Sharing 2/2/2013 */