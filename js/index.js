



let beginbar=document.querySelector(".menu .begin");
let beginsec=document.querySelector(".beginsec");
let aboutbar=document.querySelector(".menu .about");
let aboutsec=document.querySelector(".aboutsec");
let experiancebar=document.querySelector(".menu .experiance");
let experiancesec=document.querySelector(".experiancesec");
let workbar=document.querySelector(".menu .work");
let worksec=document.querySelector(".worksec");
let contactbar=document.querySelector(".menu .contact");
let contactsec=document.querySelector(".contactsec");
let menubar=document.querySelectorAll(".menu li")
window.onscroll=function(){
    if(window.scrollY>=beginsec.offsetTop){
        menubar.forEach(bar=>{
            bar.classList.remove("active")
            beginbar.classList.add("active")
        })
    }
    if(window.scrollY>=aboutsec.offsetTop-30){
        menubar.forEach(bar=>{
            bar.classList.remove("active")
            aboutbar.classList.add("active")
        })
    }
    if(window.scrollY>=experiancesec.offsetTop-100){
        menubar.forEach(bar=>{
            bar.classList.remove("active")
            experiancebar.classList.add("active")
        })
    }
    if(window.scrollY>=worksec.offsetTop-30){
        menubar.forEach(bar=>{
            bar.classList.remove("active")
            workbar.classList.add("active")
        })
    }
    if(window.scrollY>=contactsec.offsetTop-30){
        menubar.forEach(bar=>{
            bar.classList.remove("active")
            contactbar.classList.add("active")
        })
    }
}

AOS.init({
    delay:0,
    duration:1000
})
var swipertest = new Swiper(".test-container", {
    spaceBetween:60,
    loop:true,
    grabCursor:true,
    pagination: {
      el: ".swiper-pagination",
      clickable:true
    },
    breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 2,
        },
      },
  });
let tabs=document.querySelectorAll(".tabs .tab");
let boxes=document.querySelectorAll(".box-container .box");
tabs.forEach(tab=>{
    tab.addEventListener("click",function(e){
        tabs.forEach(t=>{
            t.classList.remove("active")
        })
        this.classList.add("active")
        boxes.forEach(box=>{
            box.style.display="none";
            if(box.dataset.box===e.target.dataset.tab){
                box.style.display="block";
                box.style.animation="scale 0.5s linear"
            }
            if(e.target.dataset.tab===".all"){
                box.style.display="block";
                box.style.animation="scale 1s linear"
            }
        })
    })
})

let sunicon=document.querySelector(".modeicon .sun");
let moonicon=document.querySelector(".modeicon .moon");
sunicon.addEventListener("click",function(){
    sunicon.style.display="none";
    moonicon.style.display="block";
    document.body.classList.add("darkmode")
})
moonicon.addEventListener("click",function(){
    sunicon.style.display="block";
    moonicon.style.display="none";
    document.body.classList.remove("darkmode")
})
