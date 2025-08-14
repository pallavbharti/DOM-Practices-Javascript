let s1 = document.getElementById("sq1");
let s2 = document.getElementById("sq2");
let s3 = document.getElementById("sq3");
let s4 = document.getElementById("sq4");

s1.addEventListener("mouseenter",function(){
    s1.style.background = "red";
    let r=Math.floor(Math.random()*100) ;  //1 to 100 numbers 
    s1.innerHTML = `<h1>${r}</h1>`;

});
s1.addEventListener("mouseleave",function(){
    s1.style.background = "white";
    s1.innerHTML = `<h1> 1 </h1>`;
});


s2.addEventListener("mouseenter",function(){
    s2.style.background = "green";
    let r=Math.floor(Math.random()*100) ;  //1 to 100 numbers 
    s2.innerHTML = `<h1>${r}</h1>`;

});
s2.addEventListener("mouseleave",function(){
    s2.style.background = "white";
    s2.innerHTML = `<h1> 2 </h1>`;
});


s3.addEventListener("mouseenter",function(){
    
    let r1=Math.floor(Math.random()*256) ;  
    let r2=Math.floor(Math.random()*256) ;  
    let r3=Math.floor(Math.random()*256) ; 
    s3.style.backgroundColor = `rgb(${r1},${r2},${r3})`; 
});

s3.addEventListener("mouseleave",function(){
    s3.style.background = "white";
    s3.innerHTML = `<h1> 3 </h1>`;
});






s4.addEventListener("mouseenter",function(){
    
    let r1=Math.floor(Math.random()*256) ;  
    let r2=Math.floor(Math.random()*256) ;  
    let r3=Math.floor(Math.random()*256) ; 
    s4.style.backgroundColor = "orange";
    s1.style.backgroundColor = `rgb(${r1},${r2},${r3})`;
    s2.style.backgroundColor = `rgb(${r2},${r1},${r3})`;
    s3.style.backgroundColor = `rgb(${r3},${r2},${r1})`; 
});

s4.addEventListener("mouseleave",function(){
    s4.style.background = "white";
    s4.innerHTML = `<h1> 4 </h1>`;
});



let main =document.getElementById("main");
let crsr =document.getElementById("crsr");

main.addEventListener("mousemove",function(dets){
    let r1=Math.floor(Math.random()*256) ;  
    let r2=Math.floor(Math.random()*256) ;  
    let r3=Math.floor(Math.random()*256) ; 
    crsr.style.backgroundColor = `rgb(${r1},${r2},${r3})`; 
    
    crsr.style.left=dets.x+"px";
    crsr.style.top=dets.y+"px";
});