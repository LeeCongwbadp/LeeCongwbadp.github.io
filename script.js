let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');
  }

}

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.addEventListener('resize', function() {
  var windowHeight = window.innerHeight;
  var element = document.querySelector('.step');
  element.style.height = windowHeight + 'px';
});

// 页面加载时初始化一次高度
var windowHeight = window.innerHeight;
var element = document.querySelector('.step');
element.style.height = windowHeight + 'px';

function showAlert() {
  window.alert("欢迎你！你已成为大家族中的一员！");
  window.location.href = "#step";
}

window.onload = fadeOut();