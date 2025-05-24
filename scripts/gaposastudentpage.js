let listingHTML = "";

dataSection.forEach((entrys) => {
  listingHTML += `
  <div>
      
    <div style="padding: 0px 0px 0px 5px;" class="text-div">
      ${entrys.name}
    </div>

    <div class="input-div">
      <input placeholder="${entrys.pHolder}">
    </div>

  </div>
  `;
});

document.querySelector(".js-listing").innerHTML = listingHTML;
