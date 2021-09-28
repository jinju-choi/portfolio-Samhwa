$(document).ready(function(){
  //비즈니스 사이즈

  //슬라이드 복제 & wrap
  $("#business .business_slide").wrap("<div class='slide_wrap'></div>");
  $("#business .slide_wrap").wrap("<div class='slide_list'></div>");
  $("#business .slide_wrap").clone().appendTo("#business .slide_list");
  $("#business .slide_wrap:eq(0)").clone().appendTo("#business .slide_list");
  $("#business .slide_wrap:eq(1) .business_slide li:eq(0)").appendTo("#business .slide_wrap:eq(1) .business_slide");
  $("#business .slide_wrap:eq(2) .business_slide li:eq(0)").appendTo("#business .slide_wrap:eq(2) .business_slide");
  $("#business .slide_wrap:eq(2) .business_slide li:eq(0)").appendTo("#business .slide_wrap:eq(2) .business_slide");

  if($(window).width() > 1200){
    var winWidth = $(window).width();
    var busWidth = $("#business .inner").width(); 
    console.log("winWidth"+winWidth);
    console.log("ulWidth"+busWidth);
    var sum = winWidth-busWidth/2;

    sum=sum+$("#business .slide_list .slide_wrap:nth-child(3)").width()/2;
    $("#business .slide_list").css({"width":"calc("+busWidth+"px + "+sum+"px)"});

  }
  // sum=sum+$("#business .slide_list .slide_wrap:nth-child(3)").width()/2;
  // $("#business .slide_list").css({"width":"calc("+busWidth+"px + "+sum+"px)"});

  
  var busIdx =$("#business .slide_wrap:eq(0) .business_slide li").index;

  //비즈니스 무한 슬라이드 
  var total = $("#business .slide_wrap:eq(0) .business_slide li").length;
  $("#business .business_btn").append("<p class='count'></p>")
  $("#business .count").text(1+"/"+total);
  var $slideUl =  $("#business .business_slide");
  var n=1;
  $("#business .business_btn button").click(function(){
    if($(this).hasClass("prev")){
      prevSlide();
      if(n==1){
        n=total;
      }
      else{
        n--;
      }
    }else{
      nextSlide();
      if(n < total){
        n++;
      }else if(n == total){
        n=1;
      }
    }
    $("#business .count").text(n+"/"+total);
  });

   function prevSlide(){
    $slideUl.stop().animate({}, function(){
      $(this).children("li").last().prependTo(this);
    });
    $slideUl.css({"left":-100+"%"});
    $slideUl.stop().animate({"left":0});
  }
  function nextSlide(){
    $slideUl.stop().animate({"left":-100+"%"}, function(){
      $(this).children("li").first().appendTo(this);
      $slideUl.css({"left":0});
    })
  }
  


});