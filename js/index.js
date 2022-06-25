// header start
$(window).on('load',function(){
    $(".loader").fadeOut();
    $("#preloder").delay(200).fadeOut("slow");
});

$(document).ready(function(){
  var selector = '.header__pro__link';
  $(selector).on('click', function(){
     $(selector).removeClass('active');
     $(this).addClass('active');
  });
});


  $(document).ready(function(){
  $('.header__top').slick({
    dots: true,
    arrows:true,
    autoplaySpeed:3000,
    infinite: true,
    speed: 1500,
    autoplay:true,
    fade: true,
});


$('.about__top').slick({
    dots: false,
    arrows:false,
    autoplaySpeed:3000,
    infinite: true,
    autoplay:true,
    speed: 1500,
    slidesToShow: 10,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1460,
        settings: {
          slidesToShow: 9,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
});  


$('.product_slik__top').slick({
  dots: true,
  arrows:false,
  autoplaySpeed:3000,
  infinite: true,
  autoplay:true,
  speed: 1500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1355,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 951,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}); 


});


$(document).ready(function(){
    $('.header__menu__button').click(function(){
      $('.header__menu__input').fadeTo(500,1);
      $('.header__menu__input').css('display','block');
    });
});


$(document).ready(function(){
    $('.header__pro__max___button').click(function(){
      $('.header__menu__input').fadeTo(500,1);
      $('.header__menu__input').css('display','none');
    });
});

$(document).ready(function(){
  var selector = '.header__pro__menu__ul li';
  $(selector).on('click', function(){
  $(selector).removeClass('active');
  $(this).addClass('active');
});
});


$(document).ready(function(){
  $('.header__burger__menu').click(function(){
    $('.header__pro__menu').fadeTo(500,1);
    $('.header__pro__menu').css('display','block');
  });
});

$(document).ready(function(){
  $('.header__burger__end').click(function(){
    $('.header__pro__menu').fadeTo(500,1);
    $('.header__pro__menu').css('display','none');
  });
});


// header end


// Category start

// $(document).ready(function(){
//   var selector = '.Category__top__item';
//   $(selector).on('click', function(){
//   $(selector).removeClass('active');
//   $(this).addClass('active');
// });
// });


$(document).ready(function(){
$( function() {
  $( "#accordion" ).accordion({
    heightStyle: "content",
  });
} );
});

// Category end

// Product Pay start

$(document).ready(function(){
  $('.Product_Pay__pro__button').click(function(){
    $('.Product_Pay__pro__Checkout').fadeTo(500,1);
    $('.Product_Pay__pro__Checkout').css('display','block');
  });
});

$(document).ready(function(){
  $('.Product_Pay__pro__Checkout__x').click(function(){
    $('.Product_Pay__pro__Checkout').fadeTo(500,1);
    $('.Product_Pay__pro__Checkout').css('display','none');
  });
});

// =======------------------------------Accordion------------------------=======

$(document).ready(function(){
  $(function() {
    $('.Flugger_map__top__item__Accordion li').click(function(){
      $(this).toggleClass(' active ');
      $(this).siblings().removeClass(' active '); 
      $('.Flugger_map__top__item__Accordion__internally').stop().slideUp();
      $('.active .Flugger_map__top__item__Accordion__internally').stop().slideDown();
      return false;
    });
  });
});

// =======------------------------------инкремент------------------------=======

const internalProductTopWrapper_ui = document.querySelector('#internalProductTopWrapper')
if (internalProductTopWrapper_ui) {
  const internalProductTopItems = internalProductTopWrapper_ui.querySelectorAll('.internalProductTopItem')
  internalProductTopItems.forEach(el => {
    const minusItem = el.querySelector('.internalProductTopItem_minus')
    const plusItem = el.querySelector('.internalProductTopItem_plus')
    const value = el.querySelector('.internalProductTopItem_value')
    minusItem.addEventListener('click', () => {
      if (Number(value.textContent) > 0) {
        value.textContent--
      }
    })
    plusItem.addEventListener('click', () => {
      value.textContent++
    })
  })
}

// $(document).ready(function(){
//   $('#minus').click(function(){
//     var count = document.getElementById('max');
//     if(count.textContent>0)count.textContent--;
//   });
// });


// =======------------------------------=======------------------------=======

$(document).ready(function(){
  $('.Flugger_map__top__item__Accordion__internally__link').click(function(){
    $('.Flugger_map__item__cart').fadeTo(500,1);
    $('.Flugger_map__item__cart').css('z-index','0');
  })
});

// =======------------------------------=======------------------------=======

$(document).ready(function(){
  var selector = '.Flugger_map__top__item__Accordion__internally__link';
  $(selector).on('click', function(){
  $(selector).removeClass('active');
  $(this).addClass('active');
});
});

// =======------------------------------=======------------------------=======

$('.Flugger_map__slaeder').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
});

// =======------------------------------=======------------------------=======

$('a[data-slide]').click(function(e) {
  e.preventDefault();
  var slideno = $(this).data('slide');
  $('.Flugger_map__slaeder').slick('slickGoTo', slideno - 1);
});
// Product Pay end




// header menu max start

$(document).ready(function(){
  $('.header__pro__inside__button_x').click(function(){
     var selector = '.header__pro__menu__ul li';
        $(selector).on('click', function(){
      $(selector).removeClass('active');
    this.selector='active__max'; 
  $(this).addClass('active__max');

    $('.header__pro__menu__ul li').click(function(){
       $(selector).on('click', function(){
         $(selector).removeClass('active');
       this.selector=this.selector;
    $(this).addClass('active');
});
});
});
});
});

// header menu max end