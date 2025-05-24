const store = [
  {
    wording: "Name",
    name: "ADEDAYO YEMISI GBEMIGA",
  },
  {
    wording: "Grade Point",
    name: "FIRST CLASS",
  },
];

let downpart = "";

store.forEach((entry) => {
  downpart += `
 <div>

    <div> ${entry.wording} </div>
    <div style="font-weight: bold;">   ${entry.name} </div>

 </div>
  `;
});

document.querySelector(".section").innerHTML = downpart;
