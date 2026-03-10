const menu=document.getElementById("menu")
const links=document.getElementById("links")

menu.onclick=function(){
links.classList.toggle("active")
}

const sections=document.querySelectorAll(".section")

function reveal(){

let h=window.innerHeight*0.85

sections.forEach(sec=>{

let top=sec.getBoundingClientRect().top

if(top<h){
sec.style.opacity=1
sec.style.transform="translateY(0)"
}

})

}

sections.forEach(sec=>{
sec.style.opacity=0
sec.style.transform="translateY(40px)"
sec.style.transition="0.6s"
})

window.addEventListener("scroll",reveal)

reveal()