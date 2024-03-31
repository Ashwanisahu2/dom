const container=document.querySelector(".container");
const button=document.querySelector("button");

function getrandom(){
    return Math.floor(Math.random()* 255 +1);
}
button.addEventListener("click",function(event){
    const colorcode=`rgb(${getrandom()},${getrandom()},${getrandom()})`;
    container.style.backgroundColor = colorcode;
    button.innerHTML = colorcode;
})