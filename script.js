let modebtnCont = document.querySelector(".ballCont");
let modebtnball = document.querySelector(".ball");
let ballImg = document.querySelector("#ballImg");
let myImage = document.querySelector("#myImage");
// let dynamicTxt = document.querySelector(".dynamictxtli");
let education = document.querySelector("#education");
let skills1 = document.querySelector(".skills1");
let skills2 = document.querySelector(".skills2");
let skills3 = document.querySelector(".skills3");
let skills4 = document.querySelector(".skills4");
let skillbar1 = document.querySelector(".skillbar1");
let skillbar2 = document.querySelector(".skillbar2");
let skillbar3 = document.querySelector(".skillbar3");
let skillbar4 = document.querySelector(".skillbar4");

let modebtnContflag = false;
modebtnCont.addEventListener("click", function () {
  if (modebtnContflag == false) {
    modebtnContflag = true;
    document.body.style.color = "white";
    document.body.classList.add("dark");
    modebtnCont.style.backgroundColor = "white";
    modebtnball.style.cssText =
      " transform: translateX(50px);background-color: black;";
    ballImg.src = "Assets/light mode.png";
    myImage.src = "Assets/My Image dark.png";
    // dynamicTxt.style.background = "var(--darkmode-color)";
    education.style.color = "rgb(201 200 200)";
    document.body.style.background = "black";
    skills1.style.background = "black";
    skills2.style.background = "black";
    skills3.style.background = "white";
    skills4.style.background = "white";
    skills1.src = "Assets/Skill HTMLlogo.png";
    skills2.src = "Assets/Skill CSS logo.png";
    skills3.src = "Assets/Skill javaScript logo dark.png";
    skills4.src = "Assets/Skill XML logo dark.png";
    skillbar1.src = "Assets/Skill HTMLlogo.png";
    skillbar2.src = "Assets/Skill CSS logo.png";
    skillbar3.src = "Assets/Skill javaScript logo.png";
    skillbar4.src = "Assets/Skill XML logo.png";
  } else {
    modebtnContflag = false;
    document.body.style.color = "black";
    document.body.classList.remove("dark");

    modebtnCont.style.backgroundColor = "black";
    modebtnball.style.cssText =
      " transform: translateX(0);background-color: white;";
    ballImg.src = "Assets/dark mode.png";
    myImage.src = "Assets/My Image.png";
    education.style.color = "rgb(70, 66, 66)";
    document.body.style.background = "white";
  }
});
