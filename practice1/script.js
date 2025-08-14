/*let x = document.querySelector("h1");
setTimeout(function(){
x.style.color = "red";
x.background.color="blue";
x.innerHTML = " changed text ";
},2000);
*/

let x = document.getElementById("ele1");
let y= document.getElementById("ele2");
let z = document.getElementById("ele3");


x.addEventListener("click",function(){
    x.style.color = "yellow";
    x.style.backgroundColor = "red";
});
x.addEventListener("mouseleave",function(){
    x.style.color = "black";
    x.style.backgroundColor = "white";
});
 

y.addEventListener("mousemove",function(){
    y.style.color = "white";
    y.style.backgroundColor = "orange";
});
y.addEventListener("mouseleave",function(){
    y.style.color = "black";
    y.style.backgroundColor = "white";
});


z.addEventListener("mousemove",function(){
    z.style.color = "black";
    z.style.backgroundColor = "purple";
});

z.addEventListener("mousemove",function(){
    x.innerHTML = "Bulbasaur";
    y.style.backgroundColor = "brown";
});