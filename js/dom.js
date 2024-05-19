var bgYellow = document.getElementById("bg-yallow");
console.log(bgYellow);
bgYellow.style.backgroundColor = "yellow";
bgYellow.style.border = "1px solid red";
bgYellow.style.width = "100px";
bgYellow.style.height = "100px";

var objeBox = document.getElementById("el");
var div = document.createElement("div");
console.log(div);
    textNode =document.createTextNode(" Here is text node");
    div.appendChild(textNode);
    //Table Form

    var btn = document.getElementById("btn");
    btn.addEventListener("click",function(){
        var fullname = document.getElementById("name").value;
        var gender = document.getElementById("gender").value;
        var bio = document.getElementById("bio").value;
        console.log(fullname + " " + gender + " " + bio);
    })
    