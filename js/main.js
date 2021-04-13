  if($('#productOwl').length > 0) {
    $('#productOwl').owlCarousel({
      loop:true,
      margin:30,
      nav:false,
      dots: true,
      navText:["<div class='prev-slide'><i class='fas fa-angle-left'></i></div>","<div class='next-slide'><i class='fas fa-angle-right'></i></div>"],
      dots: false,
      responsive:{
          0:{
              items:1,
              dots: true
          },
          600:{
              items:3,
              dots: true
          },
          992:{
              items:3.7,
              nav:true,
              dots: true
          },
          1600:{
            items:4.6,
            nav:true,
              dots: true
        }
      }
    });
  }

  if($('.grid').length > 0) {
      $('.grid').isotope({
        layoutMode: 'masonry',
        itemSelector: '.grid-item',
        masonry: {
            // use outer width of grid-sizer for columnWidth
            // columnWidth: 40,
            isFitWidth: true,
            gutter: 30
    
        }
    });
  }


  var screenWidthAos = jQuery(window).width();
  if(screenWidthAos>1199) {
    $( ".translating-boxes" ).mouseover(function()
      {
        $(this).addClass("viewport-width");
      });
 
    $( ".translating-boxes" ).mouseout(function()
      {
        $(this).removeClass("viewport-width");
      });
  }



  






  // $(window).on('beforeunload', function(){
  //   $(window).scrollTop(0);
  // });


