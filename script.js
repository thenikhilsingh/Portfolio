let modebtn = document.getElementById("modebtn");
let modebtnImg = document.getElementById("modebtnImg");
modebtn.addEventListener("click", function () {
 /* modebtnImg.src = "Assets/Light Mode.png";
  body.style.backgroundColor = "black";*/
  if (modebtnImg.src == "Assets/Dark Mode.png") {
    modebtnImg.src = "Assets/Light Mode.png";
    body.style.backgroundColor = "black";
  }
  else{
    modebtnImg.src = "Assets/Dark Mode.png";
    body.style.backgroundColor = "white";
  }
});