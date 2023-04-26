let menuModal = document.querySelector(".menu-container");
let menuBtn = document.querySelector("#menuBtn");


menuBtn.onclick = () =>{
  menuModal.classList.toggle("display");
  menuBtn.textContent = menuBtn.textContent == "menu" ? "close" : "menu";
}

window.onclick = (e) =>{
  if(e.target == menuModal){
    menuModal.classList.toggle("display");
    menuBtn.textContent = menuBtn.textContent == "menu" ? "close" : "menu";
  }
}

export default menuBtn;