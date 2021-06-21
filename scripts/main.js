let srp = document.getElementsByClassName("srp");
let eng = document.getElementsByClassName("eng");
let btn = document.getElementById("lang")

function changeLanguage() {
  for(let i = 0; i < srp.length; i++) {
    if(eng[i].style.display === "none" || eng[i].style.display === "") {
      srp[i].style.display = "none";
      eng[i].style.display = "block";
      btn.innerHTML = "srp";
    } else {
      eng[i].style.display = "none";
      srp[i].style.display = "block";
      btn.innerHTML = "eng";
    }
  }
}

let srGreeting = document.getElementById("sr-greeting");
let enGreeting = document.getElementById("en-greeting");
let d = new Date();
let h = d.getHours()

function greeting() {
    if(h > 2 && h <= 11) {
      srGreeting.innerHTML = "Dobro jutro.";
      enGreeting.innerHTML = "Good morning.";
    } else if (h > 11 && h <= 17) {
      srGreeting.innerHTML = "Dobar dan.";
      enGreeting.innerHTML = "Good afternoon.";
    } else {
      srGreeting.innerHTML = "Dobro veče.";
      enGreeting.innerHTML = "Good evening.";
    }
}

greeting();
