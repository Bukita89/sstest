$(document).ready(function(){
    windowWidth = $(window).width();
    //activate first tab
    function activateFirstTab(){
        firstItem = $('.tab-item').first();
        firstItem.addClass('active');
        firstItem.find('.tab-content').css('opacity', '1');
        firstItem.siblings().removeClass('active');
        firstItem.siblings().find('.tab-content').fadeOut(800);
    }
    if(windowWidth > 991) {
        activateFirstTab();
    }

    //tabs & accordion
    $('a.tab-header').click(function(e){
        e.preventDefault();
        activeBlock = $(this).closest('.tab-item');
        others = activeBlock.siblings();
        //hide all blocks
        others.removeClass('active');
        if(windowWidth > 991) {
            others.find('.tab-content').fadeOut(800);
        }
        //show active block
        if(windowWidth > 991) {
            activeBlock.addClass('active');
            activeBlock.find('.tab-content').fadeIn(800);
        } else{
            activeBlock.toggleClass('active');
        }
    });
    //refresh tabs on window resize
     $(window).resize(function(){
        clearTimeout(window.resizedFinished);
        window.resizedFinished = setTimeout(function(){
            $('.tab-item').removeClass('active');
            $('.tab-content').removeAttr('style');
            if($(window).width() > 991) {
                activateFirstTab();
            }
        }, 250);
     });

});