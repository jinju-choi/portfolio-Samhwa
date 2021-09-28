
$("body").prepend("<ul class='body_bg'></ul>");
$(".body_bg").append("<li></li><li></li><li></li><li></li>");

titleSlide();

function titleSlide() {
  //var slide_index = $("#service .sevice_slide .number li.active").index();
  var $indecater = $("#title .fade_list li");
  var $slide_bg = $(".body_bg li");
  var $slide =  $("#title .fade li");
  var slide_length = $("#title .fade li").length;
  var auto = 0; 
  var now_num = 0;

  autoPlay();
  autoPlayRestart();
  autoStop();

  $indecater.click(function() {
    now_num = $(this).index();
    showSlide();
  });

  function showSlide() {
    $indecater.removeClass("current_list");
    $indecater.eq(now_num).addClass("current_list");
    $slide_bg.css({"opacity": "0"});
    $slide_bg.eq(now_num).css({"opacity": "1"});
    $slide.css({"opacity": "0"});
    $slide.eq(now_num).css({"opacity": "1"});
  }
  

  function autoPlay() {
    auto = setInterval(function(){
      nextSlide();
    },3000);
  }

  function autoStop() {
    $indecater.mouseenter(function() {
      clearInterval(auto);
    });
  }

  function autoPlayRestart() {
    $indecater.mouseleave(function(){
      auto = setInterval(function() {
        nextSlide();
      }, 3000);
    });
  }

  function nextSlide() {
    if(now_num == slide_length - 1 ) {
      now_num = 0;
    } else {
      now_num++;
    }
    showSlide();
  }

  $indecater.append("<span class='mask'></span>");
  $indecater.find("span.mask").append("<span class='right'></span><span class='left'></span>");
}