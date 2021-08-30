document.getElementById("products").onclick=function(){
    var scroll=document.querySelector(".Products").getBoundingClientRect().top
    window.scrollTo({
        top:scroll,
        behavior:"smooth",
    })
}
document.getElementById("explore").addEventListener("click",function(){
    var scroll=document.querySelector(".page").getBoundingClientRect().top
    window.scrollTo({
        behavior:"smooth",
        top:scroll,
    })
})
window.addEventListener("scroll",function(){
    var scroll=window.scrollY
    if(scroll>=document.querySelector(".page").getBoundingClientRect().top){
        document.querySelector(".comeback-btn").style.display="unset"
    }else{
        document.querySelector(".comeback-btn").style.display="none"
    }
})
document.querySelector(".comeback-btn").onclick=function(){
    window.scrollTo({
        behavior:"smooth",
        top:0,
    })
}
var aList=document.querySelectorAll(".products-img").forEach(function(a){
    a.onclick=function(){
        navigator.clipboard.writeText(a.src)
        a.style.border="3px solid #5F7A61"
        setTimeout(function(){
            a.style.border="3px solid #5c527f"
        },2000)
    }
})