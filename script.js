$('nav > ul > li > a').on('click', function(){
    $('html, body').animate({
       scrollTop: $($(this).attr('href')).offset().top
   });
});