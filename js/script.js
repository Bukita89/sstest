$(document).ready(function(){
    $('a.tab-header').click(function(e){
        e.preventDefault();
        activeBlock = $(this).closest('.tab-item');
        //hide all blocks
        activeBlock.siblings().removeClass('active');
        activeBlock.siblings().find('.tab-content').fadeOut(1000);
        //show active block
        activeBlock.addClass('active');
        activeBlock.find('.tab-content').fadeIn(1000);
    });
});