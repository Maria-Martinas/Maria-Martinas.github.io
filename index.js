
const navLink = document.querySelectorAll("nav a");
const main = document.querySelectorAll("#main ~ section");
const menuHide = document.getElementById("menuHide");
const nav = document.getElementsByTagName("nav")[0];
const ul = document.querySelector("#contact ul");
const header = document.getElementsByTagName("header")[0];

//displays/hide navigation bar on scroll
window.onscroll = function() {
    if(document.documentElement.scrollTop>100 && document.documentElement.scrollTop<300){
        header.style.opacity = 0;
    }else{
        header.style.opacity = 1; 
    }  
    if(document.documentElement.scrollTop>3700){
        ul.style.animation = "contact 2s forwards";
    } 
}

//displays navigation section on small devices
function showMobileMenu() {
    if(nav.style.display === "flex"){
   nav.style.display = "none"; 
   menuHide.innerHTML = "&#9776;";
   menuHide.style.color = "";

   for(let r=0;r<main.length;r++){
    main[r].style.marginLeft = "";
    }
    }else{
        nav.style.display = "flex";  
        menuHide.innerHTML = "x";
        menuHide.style.color = "red";
        nav.className = "responsive";
       
        for(let r=0;r<main.length;r++){
        main[r].style.marginLeft = "15%";
        }
    }
}

//media queries on  devices smaller than 900px
function match(e) {
    if(e.matches){
        for(let a=0;a<navLink.length;a++){
            navLink[a].onclick = (event)=>{
            event.target.parentNode.style.display = "none";
            menuHide.innerHTML = "&#9776;";
            menuHide.style.color = "";
            for(let r=0;r<main.length;r++){
                main[r].style.marginLeft = "";
            }
          }
        } 
    }
}
const matchM = window.matchMedia("(max-width:900px)");
match(matchM);
matchM.addEventListener("change",match);

//changes navigation links' color on scroll
window.addEventListener("scroll",function(){
    let nr = 1;
    for(let a=0;a<main.length;a++){
        let bounding = main[a].getBoundingClientRect();
        if(bounding.top<=300){
            navLink[nr++].style.color="rgba(220, 227, 124, 0.8)";
        }else{
            navLink[nr++].style.color=""; 
        }
    }
});