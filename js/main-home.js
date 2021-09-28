$(document).ready(function(){
  // header===========================================================
  //호버시 헤더배경

   //스크롤 이벤트
  $(window).scroll(function(){
    headerFixed ();
    currentGnb();
  });
  headerFixed ();
  currentGnb();
  
  var wTop;
  var searchTop;

  function currentGnb(){
    wTop = $(window).scrollTop();
    searchTop = $("#search").offset().top;
    if(wTop <= searchTop){
      $("header nav .gnb").hover(function(){
        $("header").addClass("current_gnb");
      },function(){
        $("header").removeClass("current_gnb");
      });
    }else{
      $("header nav .gnb").hover(function(){
        $("header").addClass("current_gnb");
      });
    }
  }

  //리스트 호버시 글씨
  var $gnbList = $(".gnb_list ul li a");
  $gnbList.hover(function(){
    $gnbList.css({"color":"#ccc"});
    $(this).css({"color":"#000"}); 
  },function(){
    $gnbList.css({"color":"#000"});
  });
  

  //헤더 픽스

  function headerFixed (){
    wTop = $(window).scrollTop();
    searchTop = $("#search").offset().top;
    if(wTop >= searchTop){
      $("header").addClass("current_gnb");
    }else if(wTop <= searchTop){
      $("header").removeClass("current_gnb");
    }
  }

  //color 줌 버튼클릭시 색상 ===========================
  var colorListidx;
  var colorpop = ["#005171","#7e9aaa","#98b2c6","#bdc8d2"];
  $("button.full").click(function(){
    $("#color").prepend("<div class='color_popup'></div>");
    $(".color_popup").append("<button class='close' type='button'></button>");
    $(".color_popup").append("<div></div>");
    $(this).parent().parent().siblings("p").clone().appendTo(".color_popup div");
    $(".color_popup div").append("<button type='button'></button><button type='button'></button>");

    colorListidx = $(this).parent().parent().parent("li").index();
    $(".color_popup").css("background-color",colorpop[colorListidx]);

    $("#color .close").click(function(){
      $(".color_popup").fadeOut();
    });
  });
  //컬러코드 복사
  $("#color button.copy").click(function(){
    var $copybtn = $(this).parent().parent();
    $copybtn.siblings(".copy_code").select();
    document.execCommand("copy");
    alert("컬러코드가 복사되었습니다.");
  });

  //페밀리사이트===========================================================
  //페밀리사이트 클릭
  var $familySite = $("footer .family div");
  var $familyList = $("footer .family div ul");
  $familySite.click(function(){
    familyOpen();
  });
  function familyOpen(){
    if($familyList.hasClass('hide')){
      $familyList.removeClass('hide');
      $familySite.find("span.arrow").css("transform","rotate(0deg)");
    }else{
      $familyList.addClass('hide');
      $familySite.find("span.arrow").css("transform","rotate(180deg)");
    }
  }
  //facebook===========================================================
  //facebook 클릭
  var $aside = $("aside.facebook");
  var $facebook = $(".facebook h2");
  var $faceLi = $(".facebook ul li");
  $facebook.click(function(){
    $aside.addClass("face-open");
    $facebook.hide();
    $faceLi.addClass("face-ani");
  });
  //facebook close
  $(".facebook button").click(function(){
    faceClose();
  });
  function faceClose(){
    $aside.removeClass("face-open");
    $facebook.show();
    $(".facebook textarea").hide();
    $("button.send").hide();
    $faceLi.removeClass("face-coment");
    $faceLi.removeClass("face-ani");
  }
  //face리스트 클릭시 send버튼추가.
  $faceLi.click(function(){
    $(".facebook textarea").show();
    $aside.append("<button class='send'>send</button>");
    $(this).addClass("face-coment");
    $(this).siblings().removeClass("face-coment");
  });
  //textarea 텍스트 입력시 버튼색상 변경
  $(".facebook textarea").keydown(function(){
    $("button.send").css("background-color","#fd4162");
    if($(".facebook textarea").val() == ""){
      $("button.send").css("background-color","#ccc");
    }
  });

  
});