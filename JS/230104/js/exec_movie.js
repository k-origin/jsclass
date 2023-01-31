

let n = 1;

const img_list = document.querySelectorAll('.lnb > li');

const left_btn = document.querySelector('i.fa-angle-left');

const right_btn = document.querySelector('i.fa-angle-right');

document.getElementById('page').innerHTML = n + '/ 14';

img_list.forEach((el, index) => {
  el.onclick=()=>{
    console.log(index + 1);
    n = index + 1; //인덱스 번호에 1을 더해 1부터 숫자가 나오게 함

    document.getElementById('page').innerHTML = n + '/ 16';

    document.getElementById('photo').src="./img/movie"+n+".jpg"
  } 
});

left_btn.addEventListener('click', function(){
  if(n == 1) {
    n = 14;
  }else{
    n--;
  }
  console.log(n);
  document.getElementById('page').innerHTML = n + '/ 16';

    document.getElementById('photo').src="./img/movie"+n+".jpg"

})


right_btn.addEventListener('click', function(){
  if(n == 14) {
    n = 1;
  }else{
    n++;
  }
  console.log(n);
  document.getElementById('page').innerHTML = n + '/ 16';

    document.getElementById('photo').src="./img/movie"+n+".jpg"
})