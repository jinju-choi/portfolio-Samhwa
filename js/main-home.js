$(document).ready(function(){
  headerFixedAndGnbHover();

   //스크롤 이벤트
  $(window).scroll(function(){
    headerFixedAndGnbHover();
  });

  var wTop;
  var searchTop;
  //스크롤시 해더 배경and
  function headerFixedAndGnbHover(){
    wTop = $(window).scrollTop();
    searchTop = $("#search").offset().top;
    if(wTop <= searchTop){
      $("header").removeClass("fixed-gnb");
      $("header nav .gnb").hover(function(){
        $("header").addClass("fixed-gnb");
      },function(){
        $("header").removeClass("fixed-gnb");
      });
    }else{
      $("header").addClass("fixed-gnb");
      $("header nav .gnb").hover(function(){
        $("header").addClass("fixed-gnb");
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
  

  //color 줌 버튼클릭시
  $("button.full").click(function(){
    colorZoomPopup(this);
    
    $(".color_popup .copy").click(function(){
      var copyCode = $(this).siblings(".copy_code").text();
      clipBoardCopy(copyCode);
    });
    $("#color .close").click(function(){
      $(".color_popup").fadeOut();
    });
  });

  //zoom버튼 클릭시 풀 화면 contents생성
  var colorListidx;
  var colorpop = ["#005171","#7e9aaa","#98b2c6","#bdc8d2"];
  function colorZoomPopup(thisEl) {
    $("#color").prepend("<div class='color_popup'></div>");
    $(".color_popup").append("<button class='close' type='button'></button>");
    $(".color_popup").append("<div class='text-contents'></div>");
    $(thisEl).parent().parent().siblings("p").clone().appendTo(".color_popup div");
    $(".color_popup div").append("<button type='button' class='copy'></button><button type='button'></button>");

    colorListidx = $(thisEl).parent().parent().parent("li").index();
    $(".color_popup").css("background-color",colorpop[colorListidx]);
  }

  //컬러코드 복사
  $("body").append("<input class='clip_target' type='text'/>");
  $("#color button.copy").click(function(){
    var $copybtn = $(this).parent().parent();
    var copyText = $copybtn.siblings(".copy_code").text();
    clipBoardCopy(copyText);
  });

  //클립보드 복사 함수
  function clipBoardCopy(copyEl) {
    $(".clip_target").attr('value',copyEl);
    $(".clip_target").select();
    console.log( $(".clip_target").val());
    try{
      var success = document.execCommand('copy');

      if(success) alert("컬러코드가 복사되었습니다.");
      else alert("복사된 값이 없습니다.");
    } catch (error) {
      alert("해당 브라우저는 지원하지 않습니다.");
    }
  }

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