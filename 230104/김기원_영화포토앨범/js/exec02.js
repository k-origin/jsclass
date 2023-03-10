//main.js

//큰 사진 변수에 저장
let b_img = document.querySelector('big_img');

//작은 사진 변수에 저장
let s_img = document.querySelectorAll('.s_img');

//반복문을 통해 목록 안에 썸네일 이미지 클릭 시 해당 이미지 파일명이 나오도록 한다
for(let i=0; i<s_img.length; i++){
  console.log(s_img[i]); //이미지 태그 목록 출력

  s_img[i].addEventListener('click', imgChange);
}

function imgChange(){
  let url = this.src;
  console.log(url); //이미지 전체 경로

  let big_url = './images/img_main_banner_160110.jpg';
  
  url= url.replace(big_url, url);
  //변경된 값을 이미지 속성 src에 대입하여 변경
  
  document.getElementById('photo').src=url;

}