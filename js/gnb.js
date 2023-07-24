$(function(){
 var gnbM = $('.gnb>ul>li>a'); //주메뉴
 var subM = $('.gnb>ul>li>ul');//서브메뉴
  
 var min = $('.gnb').height(); //??px
 var max = subM.innerHeight()+min; //320px

 gnbM.on('mouseenter focus',function(){
  $('.gnb').css({height:min});
  $('.gnb>ul').stop().animate({height:"300px"},
  "fast","swing",function(){   subM.stop().slideDown('fast'); });
  // 내부 function end
  
  subM.removeClass('on');
  $(this).find('ul').addClass('on');
 
 }); //onEvent end

  $('.gnb').mouseleave(function(){
   subM.stop().slideUp(100,function(){
    $('.gnb>ul').stop().animate({height:0},'50');
   });
  });

});