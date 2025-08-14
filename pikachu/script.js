let main = document.getElementById("main");
let s = "";

let arr =["https://i.pinimg.com/736x/e7/69/a2/e769a266ff49fcca07ee75066ed53dc3.jpg",
    "https://i.pinimg.com/736x/45/ab/b3/45abb3b3572efa7baf647e817b439282.jpg",
    "https://i.pinimg.com/736x/b3/3e/3a/b33e3afd033ad1e9d6edd5b01b717e62.jpg",
    "https://i.pinimg.com/736x/ee/5a/13/ee5a13c994917c35e92ca251b11ff12e.jpg",
    "https://i.pinimg.com/736x/cb/89/7a/cb897adb58f27edac0f1e83ddcc7e8b0.jpg"];
for(let i = 0;i<28;i++){
    let r =Math.floor(Math.random()*arr.length);
    s+=`<div class="card">
            <img src=${arr[r]}></div>`;
}

main.innerHTML=s;

