// Image switcher code

let myImage = document.querySelector("img");
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
let otsikko = "";
let myName = "";

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/brave.png");
    otsikko = "Is Brave even cooler?";
    myHeading.innerHTML = otsikko;
    document.body.style.backgroundColor = "white";
    if (myName) {
      myHeading.innerHTML = otsikko + ", " + myName;
    }
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
    otsikko = "Mozilla is cool";
    myHeading.innerHTML = otsikko;
    document.body.style.backgroundColor = "#ff9500";
    if (myName) {
      myHeading.innerHTML = otsikko + ", " + myName;
    }
  }
};

// Personalized welcome message code

function setUserName() {
  myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.innerHTML = otsikko + ", " + myName;
  }
}

myButton.onclick = function () {
  setUserName();
};
