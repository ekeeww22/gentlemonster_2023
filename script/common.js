// header, footer js
// header 전체메뉴 스크립트 flow
// 1. open-nav 초기 숨기기
// 2. 햄버거메뉴(nav) 클릭 시 open-nav 출력
// 3. open-nav 안 x버튼(nav_close) 클릭시 open-nav 숨기기
const nav = document.querySelector('#nav')
const open_nav = document.querySelector('#open_nav')
const nav_close = document.querySelector('#nav_close') 
console.log(open_nav, nav, nav_close)
// 1. open-nav 초기 숨기기 css = #open_nav {transform:translateX()}
open_nav.style.transform = 'translateX(100%)';
// css값 상태에 따라 변경이 일어날 경우 애니메이션 transition
open_nav.style.transition = 'transform 1s ease';
// 2. 햄버거메뉴(nav) 클릭 시 open-nav 출력
nav.addEventListener('click',function(){
    open_nav.style.transform = 'translateX(0)'; 
})
// 3. open-nav 안 x버튼(nav_close) 클릭시 open-nav 숨기기
nav_close.addEventListener('click',function(){
    open_nav.style.transform = 'translateX(100%)';
})
// swiper-slide open-nav 광고영역
const nav_adver = new Swiper('#nav_adver',{
    direction:'horizontal',
    autoplay:{delay:1000},
    loop:true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});