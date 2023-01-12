// $(document).ready(function () {
//비즈니스 사이즈

//슬라이드 복제 & wrap
// $("#business .business_slide").wrap("<div class='slide_wrap'></div>");
// $("#business .slide_wrap").wrap("<div class='slide_list'></div>");
// $("#business .slide_wrap").clone().appendTo("#business .slide_list");
// $("#business .slide_wrap:eq(0)").clone().appendTo("#business .slide_list");
// $("#business .slide_wrap:eq(1) .business_slide li:eq(0)").appendTo("#business .slide_wrap:eq(1) .business_slide");
// $("#business .slide_wrap:eq(2) .business_slide li:eq(0)").appendTo("#business .slide_wrap:eq(2) .business_slide");
// $("#business .slide_wrap:eq(2) .business_slide li:eq(0)").appendTo("#business .slide_wrap:eq(2) .business_slide");


//슬라이드 복제 & wrap
let businessSlideWrap = document.querySelector('#business .slide_wrap');
let businessSlideList = document.querySelector('#business .slide_list');

let slideItem1 = businessSlideWrap.cloneNode(true);
let slideItem2 = businessSlideWrap.cloneNode(true);

businessSlideList.appendChild(slideItem1);
businessSlideList.appendChild(slideItem2);

let busInner = document.querySelector(".inner");
let winWidth = window.innerWidth;
let busWidth = busInner.clientWidth;

if (window.innerWidth > 1200) {
  console.log("winWidth," + winWidth);
  console.log("ulWidth," + busWidth);
  let sum = winWidth - busWidth / 2;

  sum = sum + businessSlideWrap.clientWidth / 2;
  businessSlideList.style.width = "calc(" + busWidth + "px + " + sum + "px)";

}

//비즈니스 무한 슬라이드 
let slideItemLength = businessSlideWrap.querySelectorAll('li');
// let total = $("#business .slide_wrap:eq(0) .business_slide li").length;

let total;

slideItemLength.forEach((el)=> {
  total = el.index;
});
let busBtn = document.querySelector('#business .business_btn');
let countText = busBtn.querySelector('.count');

countText.innerText = 1 + "/" + total;

let businessSlideAll = document.querySelectorAll('#business .business_slide');
let businessSlide;
businessSlideAll.forEach((el)=> {
  businessSlide = el;
});

let n = 1;

let busCountBtn = document.querySelectorAll('#business .business_btn button');

busCountBtn.forEach((item) => {
  item.addEventListener('click',() => {
    if (item.className == 'prev') {
      prevSlide();
      if (n == 1) {
        n = total;
      } else {
        n--;
      }
    } else {
      nextSlide();
      if (n < total) {
        n++;
      } else if (n == total) {
        n = 1;
      }
    }

    console.log("클릭")
    countText.innerText = n + "/" + total;
  });
})

// $("#business .business_btn button").click(function () {
//   if ($(this).hasClass("prev")) {
//     prevSlide();
//     if (n == 1) {
//       n = total;
//     } else {
//       n--;
//     }
//   } else {
//     nextSlide();
//     if (n < total) {
//       n++;
//     } else if (n == total) {
//       n = 1;
//     }
//   }
//   $("#business .count").text(n + "/" + total);
// });

let slideItem = document.querySelectorAll('#business .business_slide li');

slideItem.forEach((el)=> {
  slideItem = el;
});

function prevSlide() {
  let lastSlide = businessSlide.lastChild;

  businessSlide.prependChild(lastSlide);

  businessSlide.style.left = 0+'%';

}

function nextSlide() {
  let firstSlide = businessSlide.firstChild;
  businessSlide.appendChild(firstSlide);
  businessSlide.style.left =  -100+'%';
}

// function prevSlide() {
//   $slideUl.stop().animate({}, function () {
//     $(this).children("li").last().prependTo(this);
//   });
//   $slideUl.css({
//     "left": -100 + "%"
//   });
//   $slideUl.stop().animate({
//     "left": 0
//   });
// }

// function nextSlide() {
//   $slideUl.stop().animate({
//     "left": -100 + "%"
//   }, function () {
//     $(this).children("li").first().appendTo(this);
//     $slideUl.css({
//       "left": 0
//     });
//   })
// }



// });