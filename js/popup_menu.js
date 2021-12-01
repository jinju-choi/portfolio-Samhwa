$(document).ready(function(){

  $(".popup_btn").click(function(e){
    if($(this).hasClass("current_ham")){
      $(".popmenu").fadeOut();
      $(this).removeClass("current_ham");
      $(this).addClass("remove_ham");
      $("header").removeClass("current_gnb");
      $("h1").removeClass("change");
      $("html").css("overflow","");
    }else{
      popmenuAdd();
      sideMenu();
      $("h1").addClass("change");
      $(this).removeClass("remove_ham");
      $(this).addClass("current_ham");  
      $("html").css("overflow","hidden");  
    }
    sideColor();
    sidesubColor();

    //max-width 768일때 
    if($(window).width() < 768 ){
      $(".popmenu .gnb .gnb_list h2 a").click(function(e){
        $(this).parent().siblings("ul").show();
        $(".popmenu .gnb .gnb_list ul").not($(this).parent().siblings("ul")).hide();
        e.preventDefault();
      });

    }
    e.preventDefault();
  });
    
  //큰리스트 호버시 큰 글씨색깔
  function sideColor(){
    $(".popmenu .gnb .gnb_list").hover(function(){
      $(".popmenu .gnb .gnb_list h2 a").css({"color":"#ccc"});
      $(this).children("h2").children("a").css({"color":"#000"});
      //$(this).children("ul").children("li").children("a").css({"color":"#000"}); 
      //$(".gnb_list ul li a").css({"color":"#ccc"});
    },function(){
      $(".popmenu .gnb .gnb_list h2 a").css({"color":"#000"});
    });
  }

  //서브메뉴 호버시 글씨색깔
  function sidesubColor(){
    $(".gnb_list ul li a").hover(function(){
      $(".gnb_list ul li a").css({"color":"#ccc"});
      $(this).css({"color":"#000"}); 
    },function(){
      $(".gnb_list ul li a").css({"color":"#000"});
    });
  }
  //pop메뉴 추가
  function popmenuAdd(){
    $(".popmenu").remove();
    $("header nav").append("<div class='popmenu'></div>");
    $(".popmenu").hide().slideDown();
    $(".gnb").clone().prependTo(".popmenu");//gnb복제
    $("footer .sns").clone().appendTo(".popmenu");
  }
  //메뉴 호버시 이미지,글씨색깔
  function sideMenu(){
    $(".popmenu .gnb_list:eq(0)").addClass("gnb_bg");
    $(".popmenu .gnb_list").hover(function(){
      $(this).addClass("gnb_bg");
      $(this).siblings("li").removeClass("gnb_bg");
      $(this).children().css({"color":"#ccc !important"});
      $(this).parent().siblings().children("h2").find("a").css({"color":"#ccc !important"});
    });
  }  
  // $(".popup_menu").click(
  //   function(){
  //   $(".gnb").clone().prependTo("body");
  //   $("body>.gnb").addClass("gnb_popup");
  //   $(".ham").addClass("current_ham");
  // });
    //max-width 768 
    // $(window).resize(function(){
    //   if($(window).width() < 768 ){
    //     $(".popmenu").css("background","red");
    //   }
    // });


  // SEARCH MENU ========================================

});