'use strict';

    
    $(document).ready(function(){
$.fn.goTop=function(){ //Создаем функцию goTop()
var upT=$(this);
$(window).scroll(function(){
if($(window).scrollTop()<="300")$(upT).fadeOut("slow")
else $(upT).fadeIn("slow")});
$(this).click(function(){$("html, body").animate({scrollTop:0},"slow")})};
$(function(){$("#go_top").goTop();}); //Объявляем функцию goTop()

})