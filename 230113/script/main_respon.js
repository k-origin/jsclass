$(function(){
  let gnb = $('.gnb');

  //메인 메뉴에 마우스 오버 시
  gnb.mouseenter(function(){
    $('#h_bottom').stop().animate({'height':'320px'},500, 'easeInExpo');
    $('.sub').fadeIn(1500);
  });

  //메인 메뉴에 마우스 빼면
  gnb.mouseleave(function(){
    $('#h_bottom').stop().animate({'height':'46px'},500,'easeInExpo');

    //.stop() : 사용자가 행동을 몇 번을 반복해도 animate 한 번만 동작하게 / cue : 메모리 공간 / animate는 사용자의 행동을 cue에 기록

    $('.sub').fadeOut(1000);
  });

  //메인 슬라이드
  let l_btn=$('.slide i.fa-angle-left');
  let r_btn=$('.slide i.fa-angle-right');
  let img_w=$('.slide img').width(); //이미지 너비 자동으로 구해줌

  $(window).resize(function(){ //브라우저 창의 크기가 변하면
    //이미지 크기를 다시 계산해 변수에 대입
    img_w=$('.slide img').width(); 
  });
  
  
  //1. 5번 이미지를 1번의 앞쪽으로 자리를 재배치한다
  $('.slide li:last-child').insertBefore('.slide li:first-child');
  $('.slide ul').css('margin-left',-img_w);

  //2. 움직이는 함수 
  function moveLeft(){
    console.log('왼쪽 이동');
    $('.slide ul').animate({'margin-left':-img_w*2}, 500, function(){
      //왼쪽 첫 번째 li 태그를 마지막 li 태그의 뒤쪽에다 자리를 옮긴다
      $('.slide li:first-child').insertAfter('.slide li:last-child');
      $('.slide ul').css('margin-left',-img_w);
    });
  }

  function moveRight(){
    $('.slide ul').animate({'margin-left':'0px'},500,function(){
      //오른쪽 마지막 li 태그를 왼쪽 첫 번째 li 태그의 앞자리에 옮긴다
      $('.slide li:last-child').insertBefore('.slide li:first-child');
      $('.slide ul').css('margin-left',-img_w);
    })
    
  }

  //3. 시간 객체로 3초마다 함수 호출하기
  let Timer = setInterval(moveLeft,3000);

  //4. 좌, 우 버튼 클릭 시 각각 해당하는 함수를 호출하여 움직이게 하기
  l_btn.click(function(){
    moveLeft();
  });

  r_btn.click(function(){
    moveRight();
  });

  $('.slide i.fas').hover(function(){
    // 좌, 우 버튼에 마우스 오버 시 시간을 제거해서 슬라이드를 멈추게 하고
    clearInterval(Timer);
  }),function(){
    //마우스를 빼면 시간을 넣어서 움직이게 함
    Timer = setInterval(moveLeft, 3000);
  }

});