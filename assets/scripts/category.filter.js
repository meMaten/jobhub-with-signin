
// variables
const dropdownBtn = document.querySelector("#dropdownBtn");
let jobFilter = document.querySelector(".job-filter-list");

dropdownBtn.onclick = () => {
  dropdownBtn.classList.toggle("display");
};


const jobCategories = [
  "Accounting/Finance",
  "Admin/Human Resource",
  "Sales/Marketing",
  "Arts/Media/Communications",
  "Services",
  "Hotel/Restaurant",
  "Education/Training",
  "Computer/Information Technology",
  "Engineering",
  "Manufacturing",
  "Building/Construction",
  "Sciences",
  "Healthcare",
  "Others"
];

jobCategories.forEach(i => {
  let item = document.createElement("li");
  item.classList.add("item");
  item.classList.add("flex-r");
  let checkBox = document.createElement("div");
  checkBox.classList.add("check-box-outline", "flex-c");
  checkBox.innerHTML = `<span class="material-symbols-outlined checkmark">check</span>`;
  jobFilter.appendChild(item);
  item.appendChild(checkBox);
  let jobText = document.createElement("span");
  jobText.textContent = i;
  item.appendChild(jobText);
});

export default dropdownBtn;