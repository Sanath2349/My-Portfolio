let lead = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
//console.log(ulEl);
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("lead"));

if (leadsFromLocalStorage) {
  lead = leadsFromLocalStorage;
  render(lead);
}

tabBtn.addEventListener("click", function () {
  //console.log(tabs[0].url);
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    console.log(tabs);
    lead.push(tabs[0].url);
    localStorage.setItem("lead", JSON.stringify(lead));
    render(lead);
  });
});

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
    <li>
      <a target='_blank' href='${leads[i]}'>
        ${leads[i]} 
      </a>
    </li>`;
  }
  ulEl.innerHTML = listItems;
}

//const tabs = [{ url: "www.google.com" }];

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  lead = [];
  render(lead);
  console.log("double clicked");
});

inputBtn.addEventListener("click", function () {
  lead.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("lead", JSON.stringify(lead));

  render(lead);
  console.log(localStorage.getItem("lead"));
});
