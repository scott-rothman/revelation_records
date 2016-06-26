$(function(){
    var $toggle = $('.hamburger');
    var $nav = $('.main_nav');
    $toggle.on('click', function(){
        if ($nav.hasClass('open')) {
            $nav.removeClass('open');
        } else {
            $nav.addClass('open');
        }
    });
});