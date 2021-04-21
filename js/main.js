  $(document).ready(function(){

    //product slider
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

    //banner slider
    if($('#owl-demo').length > 0) {
      $("#owl-demo").owlCarousel({
        navigation : true, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        loop:false,
        navText:["<div class='prev-slide'><i class='fas fa-chevron-circle-left'></i></div>","<div class='next-slide'><i class='fas fa-chevron-circle-right'></i></div>"],
        items: 1,
        nav:true
    });
    }

    //isotop call
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


    //search bar expand
    $('#search').on("click",(function(e){
    $(".searchbar--icon").addClass("sb-search-open");
      e.stopPropagation()
    }));
     $(document).on("click", function(e) {
      if ($(e.target).is("#search") === false && $(".form-control").val().length == 0) {
        $(".searchbar--icon").removeClass("sb-search-open");
      }
    });
      $(".form-control-submit").click(function(e){
        $(".form-control").each(function(){
          if($(".form-control").val().length == 0){
            e.preventDefault();
            $(this).css('background', '#fff');
          }
      })
    })

    //multilevel dropdown js
    $(".dropdown-menu a.dropdown-toggle").on("click",function(o){var s=$(this);s.toggleClass("active-dropdown");var n=$(this).offsetParent(".dropdown-menu");$(this).next().hasClass("show")||$(this).parents(".dropdown-menu").first().find(".show").removeClass("show");var e=$(this).next(".dropdown-menu");return e.toggleClass("show"),$(this).parent("li").toggleClass("show"),$(this).parents("li.nav-item.dropdown.show").on("hidden.bs.dropdown",function(o){$(".dropdown-menu .show").removeClass("show"),s.removeClass("active-dropdown")}),n.parent().hasClass("navbar-nav")||s.next().css({top:s[0].offsetTop,left:n.outerWidth()-4}),!1})

    //overlay toggle show
    $(".overlaytoggle").click(function(){
      $(".overlay").toggleClass("show");
      $("body").toggleClass("overflow-hidden");
    });
  });


  //dropdown window size adjust
  (function () { 
    var dd_obj = {
      jq_win :jQuery(window),
      jq_doc :jQuery(document),
    }
    function selfCalc(ele) {
      var $this = jQuery(ele),
          $dd_menu = $this.children(".dropdown-menu"), 
          ddOffset = $this.offset(),
          ddMenu_posTop = dd_obj.jq_win.outerHeight() - (($this.outerHeight() + ddOffset.top + $dd_menu.outerHeight()) - dd_obj.jq_doc.scrollTop());
          ddMenu_posRight = dd_obj.jq_win.outerWidth() - (($this.outerWidth() + ddOffset.left + $dd_menu.outerWidth()) - dd_obj.jq_doc.scrollLeft());
  
      (ddMenu_posTop <= 0) ? $this.addClass("dropup") : $this.removeClass("dropup"); 
      (ddMenu_posRight <= 0) ? $this.find('.dropdown-menu').addClass("dropdown-menu-right") : $this.find('.dropdown-menu').removeClass("dropdown-menu-right");
    }
    jQuery('body').on("shown.bs.dropdown", ".dropdown", function () {
      var self = this;
      selfCalc(self)
      dd_obj.jq_win.on('resize.custDd scroll.custDd mousewheel.custDd',function() {
        selfCalc(self)
      })
    }).on("hidden.bs.dropdown", ".dropdown", function() {
        // there is no need to keep the window event after dropdown has closed, 
        // still if we keep the event then there is no use
        dd_obj.jq_win.off('resize.custDd scroll.custDd mousewheel.custDd')
    });
  })();

  






  // $(window).on('beforeunload', function(){
  //   $(window).scrollTop(0);
  // });


