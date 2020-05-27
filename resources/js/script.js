$(document).ready(function () {
    // for sticky nav
    var waypoints = $('.js--section-features').waypoint(function(direction) {
        if(direction=="down")
        {
            $('nav').addClass('sticky');
        }
        else{
            $('nav').removeClass('sticky');
        }
      }, {
        offset: '60px;'
      });

      // Scroll effect for button
      $('.js--scroll-to-plans').click(function()
      {
          console.log("imhere");
            $('html,body').animate({scrollTop: $('.js--section-plans').offset().top},1000);
      });
      $('.js--scroll-to-start').click(function()
      {
            $('html,body').animate({scrollTop: $('.js--section-features').offset().top},1000);
      });

});

