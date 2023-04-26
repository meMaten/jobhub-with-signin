import fetchData from "./fetch-data.js";

let jobData = await fetchData();

jobData.forEach(i => {
  let jobResult = document.querySelector(".job-cards-container");
  let jobFullDes = document.querySelector(".job-fulldes-container");
  let fullDesModal = document.querySelector("#fullDesModal")
  let fullDesBody = document.querySelector(".fulldes-body")
  let jobCard = document.createElement("li");
  jobCard.classList.add("job-card","flex-c","relative");
  jobResult.appendChild(jobCard);

  let bookmarkBtn = document.createElement("span")
  bookmarkBtn.classList.add("bookmark-btn","absolute","material-symbols-outlined");
  bookmarkBtn.textContent = "bookmark";
  jobCard.appendChild(bookmarkBtn);

  let jobSource = document.createElement("div");
  jobSource.classList.add("job-result-source","flex-c");
  jobSource.innerHTML = 
  `
  <h3 class="job-title">${i.jobTitle}</h3>
  <span class="job-company">${i.company}</span>
  <span class="job-location">${i.location}</span>
  `;
  jobCard.appendChild(jobSource);

  let jobOtherDetails = document.createElement("div");
  jobOtherDetails.classList.add("job-other-details", "flex-c");
  jobOtherDetails.innerHTML = 
  `
  <span class="job-salary">${i.salary}</span>
  <span class="work-type">${i.workType[0]}</span>
  <span class="work-type">${i.workType[1]}</span>
  `;
  jobCard.appendChild(jobOtherDetails);

  let reqText = document.createElement("small");
  reqText.classList.add("job-requirements");
  reqText.textContent = "requirements";

  let jobReq = document.createElement("span");
  jobReq.classList.add("required-experience");
  jobReq.textContent = i.requiredExperience;

  let jobDate = document.createElement("small");
  jobDate.classList.add("date");
  jobDate.textContent = new Date(i.date);

  jobCard.appendChild(reqText);
  jobCard.appendChild(jobReq);
  jobCard.appendChild(jobDate);
  jobCard.setAttribute("value", i.jobTitle + " " + i.company);

  jobCard.addEventListener("click", () => {

    if(getComputedStyle(jobFullDes).display !== "none"){

      let array1 = Array.from(jobFullDes.children);
      array1.forEach(i =>{
        i.remove();
      })
      
      let skills = i.skillsRequired.join("<br>");
      let jobType = i.workType.join(" | ")
  
      let fullDesContainer = document.createElement("div")
      fullDesContainer.classList.add("flex-c", "full-des")
      jobFullDes.appendChild(fullDesContainer);
      let applyDiv = document.createElement("div");
      applyDiv.classList.add("flex-c","apply-div", "relative")
      applyDiv.innerHTML = 
      `
      <h3 class="job-title">${i.jobTitle}</h3>
      <span class="job-company">${i.company}</span>
      <span class="job-location">${i.location}</span>
      <span class="date"><b>Date posted: </b> ${new Date(i.date)}</span>
      <button class="apply-btn">Apply Now</button>
      `;
      fullDesContainer.appendChild(applyDiv);
      let desDiv = document.createElement("div");
      desDiv.classList.add("flex-c", "des-div")
      desDiv.innerHTML =
      `
      <h1 class="full-des-title">Job Description:</h1>
      <p>${i.description}</p>
      <h3 class="full-des-experience">Required Experience:</h3>
      <span>${i.requiredExperience}</span>
      <h3 class="full-des-experience">Required Skills:</h3>
      <span>${skills}</span>
      <h3 class="full-des-jobtype">Job Type:</h3>
      <span>${jobType}</span>
      <h3 class="full-des-salary">Salary:</h3>
      <span>${i.salary}</span>
      <h3 class="full-des-category">Category:</h3>
      <span>${i.category}</span>
      `;
      fullDesContainer.appendChild(desDiv);
    } else{
      fullDesModal.classList.remove("hide");
      let array1 = Array.from(fullDesBody.children);
      array1.forEach(i =>{
        i.remove();
      })
      let skills = i.skillsRequired.join("<br>");
      let jobType = i.workType.join(" | ")
  
      let fullDesContainer = document.createElement("div")
      fullDesContainer.classList.add("flex-c", "full-des")
      fullDesBody.innerHTML =
      `
      <span class="material-symbols-outlined absolute" id="closeBtn">close</span>
      `;
      fullDesBody.appendChild(fullDesContainer);
      let applyDiv = document.createElement("div");
      applyDiv.classList.add("flex-c","apply-div", "relative")
      applyDiv.innerHTML = 
      `
      <h3 class="job-title">${i.jobTitle}</h3>
      <span class="job-company">${i.company}</span>
      <span class="job-location">${i.location}</span>
      <span class="date"><b>Date posted: </b> ${new Date(i.date)}</span>
      <button class="apply-btn">Apply Now</button>
      `;
      fullDesContainer.appendChild(applyDiv);
      let desDiv = document.createElement("div");
      desDiv.classList.add("flex-c", "des-div")
      desDiv.innerHTML =
      `
      <h1 class="full-des-title">Job Description:</h1>
      <p>${i.description}</p>
      <h3 class="full-des-experience">Required Experience:</h3>
      <span>${i.requiredExperience}</span>
      <h3 class="full-des-skills">Required Skills:</h3>
      <span>${skills}</span>
      <h3 class="full-des-jobtype">Job Type:</h3>
      <span>${jobType}</span>
      <h3 class="full-des-salary">Salary:</h3>
      <span>${i.salary}</span>
      <h3 class="full-des-category">Category:</h3>
      <span>${i.category}</span>
      `;
      fullDesBody.appendChild(desDiv);

      let closeBtn = document.querySelector("#closeBtn");
      closeBtn.onclick = () => {
        fullDesModal.classList.add("hide");
      };

      window.onclick = (e) => {
        if(e.target == fullDesModal){
          fullDesModal.classList.add("hide");
        }
      }
    }
  });
})

export default jobData;