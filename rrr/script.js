document.querySelector("#btn-sign in")
addEventListener('click',function(){
    document.querySelector(".popup")
    .className.add("active");
});
document.querySelector(".popup.close-btn")
.addEventListener('click',function(){
    document.querySelector(".popup")
    .classList.remove("active")
});