$(document).ready(function(){
    $('a.tab-header').click(function(e){
        e.preventDefault();
        activeBlock = $(this).closest('.tab-item');
        activeBlock.siblings().removeClass('active');
        $('.tab-header, .tab-content').removeClass('active');
        activeBlock.addClass('active');
        activeBlock.find('.tab-header').addClass('active');
        activeBlock.find('.tab-content').addClass('active');
    });
});