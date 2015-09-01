//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// JavaScript Document
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// For the sticky navigation. 
$(document).ready(function() {
 
        //Calculate the height of <header>
        //Use outerHeight() instead of height() if have padding
        var aboveHeight = $('').outerHeight();
 
	//when scroll
        $(window).scroll(function(){
 
	        //if scrolled down more than the headerâ€™s height
                if ($(window).scrollTop() > aboveHeight){
 
	        // if yes, add â€œfixedâ€ class to the <nav>
	        // add padding top to the #content 
            //  (value is same as the height of the nav)
                $('nav').addClass('navbar-fixed-top').css('top','0').next()
                .css('padding-top','60px');
 
                } else {
 
	        // when scroll up or less than aboveHeight,
             //   remove the â€œfixedâ€ class, and the padding-top
                $('nav').removeClass('navbar-fixed-top').next()
                .css('padding-top','0');
                }
        });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// For profile image change.
function onHover()
{
    $("#pro-img").attr('src', 'http://web9.uits.uconn.edu/wdlmika/mks/img/profile-06.jpg');

}

function offHover()
{
    $("#pro-img").attr('src', 'http://web9.uits.uconn.edu/wdlmika/mks/img/profile-05.jpg').fadeIn('slow');
}
