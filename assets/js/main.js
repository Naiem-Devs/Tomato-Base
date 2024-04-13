(function($) {
  "use strict";
  
 // menu 
 $('.siteBar-btn').click( function (event){ 
    event.preventDefault()
    $(this).toggleClass('active');   
    $('.mobile-menu').toggleClass('siteBar');   
  }); 

 // menu 
 $('.mobile-menu .siteBar-btn').click( function (event){ 
    event.preventDefault()
    $(".humbergar").toggleClass('active');    
  }); 




  // page Animation
  AOS.init({
    mirror: true,
    duration: 1500,
    initClassName: 'aos-init',
    once: true,
  });

  // data-aos="fade-up" 
  // data-aos-delay="300" 

 
})(jQuery);
