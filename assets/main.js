//   saf text animation
var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };
  //nav menu
$(document).ready(function(){
    $('.bi-list').click(function(){
        $('#list').slideToggle("slow ease-in");
    });
});

// ///// main body fixed/////////
$(document).ready(function(){
  $(window).scroll(function(){
    if($(window).scrollTop()>150){
      $("#main-body1").css({
        "opacity": "50%",
        "transition": "ease-in .5s",
      });
    }
  
    else
    {
      $("#main-body1").css({
        "opacity": "100%",
      });
    } 
  });
});


// //aside bar fixed
// $(document).ready(function(){
//   $(window).scroll(function(){
//    if($(window).scrollTop()>606){
//      $("#aside").css({
//        "position": "fixed",
//        "top": "0",
//        "left": "0",
//        "width": "20%",
//        "height": "1630px",
//        "z-index": "999",
//        "background-color":"#B58988",
//        "padding-left": "4%",
//      });
//    } 
//    else {
//      $("#aside").css({
//        "position": "relative",
//       //  "top": "600px",
//        "width": "20%",
//        "height": "1630px",
//        "background-color": "#B58988",
//        "z-index": "999",
//        "color": "black",
//         "padding-left": "4%",
//         "top": "0px",
//      });
//    }  
//   });
// });
////////////// soft skill ball animations //////////
$(document).ready(function(){
  $(window).scroll(function(){
    if($(window).scrollTop()>1830){
      $(".ball1").css({
        "opacity": "100%",
        "transition": "ease-in .5s",
        "transform": "translateX(-100%) translateY(-70%)",
        "display": "show",
        "color":"#1D1D1D",
        "background-color":" #dca8a8",

      });
    }
  
    else
    {
      $(".ball1").css({
        "opacity": "0%",
        "transition": "ease-in .5s",
        "transform": "translateX(0px) translateY(0px)",
        "display": "hidden",
        "background-color":"white",
      });
    } 
  });
  $(window).scroll(function(){
    if($(window).scrollTop()>1830){
      $(".ball2").css({
        "opacity": "100%",
        "transition": "ease-in .5s",
        "transform": "translateX(0%) translateY(-90%)",
        "display": "show",
        "color":"#1D1D1D",
        "background-color":" #dca8a8",


      });
    }
  
    else
    {
      $(".ball2").css({
        "opacity": "0%",
        "transition": "ease-in .5s",
        "transform": "translateX(0px) translateY(0px)",
        "display": "hidden",
        "background-color":"white",

      });
    } 
  });
  $(window).scroll(function(){
    if($(window).scrollTop()>1830){
      $(".ball3").css({
        "opacity": "100%",
        "transition": "ease-in .5s",
        "transform": "translateX(95%) translateY(-70%)",
        "display": "show",
        "color":"#1D1D1D",
        "background-color":" #dca8a8",

      });
    }
  
    else
    {
      $(".ball3").css({
        "opacity": "0%",
        "transition": "ease-in .5s",
        "transform": "translateX(0px) translateY(0px)",
        "display": "hidden",
        "background-color":"white",

      });
    } 
  });
  $(window).scroll(function(){
    if($(window).scrollTop()>1830){
      $(".ball4").css({
        "opacity": "100%",
        "transition": "ease-in .5s",
        "transform": "translateX(-135%) translateY(150%)",
        "display": "show",
        "color":"#1D1D1D",
        "background-color":" #dca8a8",

      });
    }
  
    else
    {
      $(".ball4").css({
        "opacity": "0%",
        "transition": "ease-in .5s",
        "transform": "translateX(0px) translateY(0px)",
        "display": "hidden",
        "background-color":"white",

      });
    } 
  });
  $(window).scroll(function(){
    if($(window).scrollTop()>1830){
      $(".ball5").css({
        "opacity": "100%",
        "transition": "ease-in .5s",
        "transform": "translateX(25%) translateY(195%)",
        "display": "show",
        "color":"#1D1D1D",
        "background-color":" #dca8a8",

      });
    }
   
    else
    {
      $(".ball5").css({
        "opacity": "0%",
        "transition": "ease-in .5s",
        "transform": "translateX(0px) translateY(0px)",
        "display": "hidden",
        "background-color":"white",

      });
    } 
  });
  $(window).scroll(function(){
    if($(window).scrollTop()>1830){
      $(".ball6").css({
        "opacity": "100%",
        "transition": "ease-in .5s",
        "transform": "translateX(105%) translateY(170%)",
        "display": "show",
        "color":"#1D1D1D",
        "background-color":" #dca8a8",

      });
    }
    else
    {
      $(".ball6").css({
        "opacity": "0%",
        "transition": "ease-in .5s",
        "transform": "translateX(0px) translateY(0px)",
        "display": "hidden",
        "background-color":"white",

      });
    } 
  });
  

});
////////// soft skills ball hover //////////

$(document).ready(function() {
  $(".ball1").mouseover(function (){
    $(".ball1").css({
      "box-shadow": "2px 2px 10px  #dca8a8 ",
      

    });   
  });
  $(".ball1").mouseleave(function (){
    $(".ball1").css({
      "box-shadow": "none",

    });
  });
});
$(document).ready(function() {
  $(".ball2").mouseover(function (){
    $(".ball2").css({
      "box-shadow": "2px 2px 10px  #dca8a8 ",
      

    });   
  });
  $(".ball2").mouseleave(function (){
    $(".ball2").css({
      "box-shadow": "none",

    });
  });
});
$(document).ready(function() {
  $(".ball3").mouseover(function (){
    $(".ball3").css({
      "box-shadow": "2px 2px 10px  #dca8a8 ",
      

    });   
  });
  $(".ball3").mouseleave(function (){
    $(".ball3").css({
      "box-shadow": "none",

    });
  });
});
$(document).ready(function() {
  $(".ball4").mouseover(function (){
    $(".ball4").css({
      "box-shadow": "2px 2px 10px  #dca8a8 ",
      

    });   
  });
  $(".ball4").mouseleave(function (){
    $(".ball4").css({
      "box-shadow": "none",

    });
  });
});
$(document).ready(function() {
  $(".ball5").mouseover(function (){
    $(".ball5").css({
      "box-shadow": "2px 2px 10px  #dca8a8 ",
      

    });   
  });
  $(".ball5").mouseleave(function (){
    $(".ball5").css({
      "box-shadow": "none",

    });
  });
});
$(document).ready(function() {
  $(".ball6").mouseover(function (){
    $(".ball6").css({
      "box-shadow": "2px 2px 10px  #dca8a8 ",
      

    });   
  });
  $(".ball6").mouseleave(function (){
    $(".ball6").css({
      "box-shadow": "none",

    });
  });
});
// //// works softwares//////
$(document).ready(function () {
  $(".work-box").find(".photo").hover(function () {
  $(".phot").animate({
      "opacity":"1",
      "duration":"2000",
  });
  $(".work-box").find(".photo").mouseleave(function () {
      $(".phot").animate({
          "opacity":"0",
          "duration":"0",
      });
      });
  });
  $(".work-box").find(".illu").hover(function () {
      $(".ill").animate({
          "opacity":"1",
          "duration":"2000",
      });
      $(".work-box").find(".illu").mouseleave(function () {
          $(".ill").animate({
              "opacity":"0",
              "duration":"0",
          });
          });
      });
  $(".work-box").children(".dream").hover(function () {
      $(".dr").animate({
          "opacity":"1",
          "duration":"2000",
      });
      $(".work-box").children(".dream").mouseleave(function () {
          $(".dr").animate({
              "opacity":"0",
              "duration":"0",
          });
          });
      });    
  $(".work-box").children(".pre").hover(function () {
      $(".pro").animate({
          "opacity":"1",
          "duration":"2000",
      });
  $(".work-box").children(".pre").mouseleave(function () {
      $(".pro").animate({
          "opacity":"0",
          "duration":"0",
      });
      });
  });
  $(".work-box").find(".blender").hover(function () {
  $(".ble").animate({
      "opacity":"1",
      "duration":"2000",
  });
  $(".work-box").find(".blender").mouseleave(function () {
      $(".ble").animate({
          "opacity":"0",
          "duration":"0",
      });
      });
  });
  $(".work-box").children(".figma").hover(function () {
  $(".fig").animate({
      "opacity":"1",
      "duration":"2000",
  });
  $(".work-box").children(".figma").mouseleave(function () {
      $(".fig").animate({
          "opacity":"0",
          "duration":"0",
      });
      });
  });
});