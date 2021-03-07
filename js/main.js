$(document).ready(function(){
    $('.slickslider').slick({
      'autoplay': true,
      'dots' : true,
      

    });

    $('.menu-icon i').click(function(){
      $('#mobile-menu .navbar-nav').slideToggle();
    });

    $('#mobile-menu ul li i.pages').click(function(){
      $('#mobile-menu ul li ul.pages-ul').slideToggle();
    });
    $('#mobile-menu ul li i.services').click(function(){
      $('#mobile-menu ul li ul.services-ul').slideToggle();
    });
    $('#mobile-menu ul li i.projects').click(function(){
      $('#mobile-menu ul li ul.projects-ul').slideToggle();
    });
    $('#mobile-menu ul li i.blog').click(function(){
      $('#mobile-menu ul li ul.blog-ul').slideToggle();
    });

    $('.counter').counterUp({
      delay: 10,
      time: 1000
  });


  $('.testimonial-slider').slick({
    'dots': true,
  });

  $('#main-header').sticky({
    topSpacing:0
  });
  

  // call wow plugin
  new WOW().init();
 

    
  });


    
    
