import fetchData from "./fetch-data.js"
import jobData from "./job-list.js"

const searchInput = document.querySelector("#searchInput");
const locationInput = document.querySelector("#locInput");

searchInput.addEventListener('input', () => {
  document.querySelector("#locInput").value = "";
  let filteredValue = searchInput.value.toLowerCase();
  let jobCard = document.querySelectorAll(".job-card");


  jobCard.forEach(x => {
    let text = x.getAttribute("value");
    if(text.toLowerCase().includes(filteredValue.toLowerCase())){
      x.classList.remove("hide");
    } else{
      x.classList.add("hide");
    }
  })
});

locationInput.addEventListener('input', () => {
  document.querySelector("#searchInput").value = "";
  let filteredValue = locationInput.value.toLowerCase();
  let locSource = document.querySelectorAll(".job-location");
  locSource.forEach(x =>{
    let text = x.textContent;

    if(text.toLowerCase().includes(filteredValue.toLowerCase())){
      x.parentElement.parentElement.classList.remove("hide");
    } else{
      x.parentElement.parentElement.classList.add("hide");
    }
  })
})

export {searchInput, locationInput};
