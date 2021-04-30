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
      btn.innerHTML = "eng"
    }
  }
}
