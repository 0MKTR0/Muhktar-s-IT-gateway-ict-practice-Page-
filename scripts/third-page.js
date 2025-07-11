document.querySelector(".rahba").innerHTML = `
  <div style="color: rgb(217, 185, 0); font-size: 1.5rem; font-weight:bold;">Rahba</div>
    <div style="font-size: 0.8rem;">Choose Your Products</div>
`;

document.querySelector(".bottomDiv").innerHTML = `
  <div class="bottomText">
      <div> Return Policy</div>
      <div>Shipping Policy</div>
      <div>Privacy Policy</div>
      <div>Terms of Service</div>
    </div>
     

  <hr class="line"></hr>

  <div style="margin: 4px 0px 0px 0px;"> Copyright &#169; 2022 Ghiz Online Store</div>
`;

document.querySelector(".top").innerHTML = `
        <div class="cartRow">
          <div>Cart</div>
          <div class="angledDraw"></div>
        </div>

        <div class="cartRow">
          <div>Information</div>
          <div class="angledDraw"></div>
        </div>

        <div class="cartRow">
          <div>Shipping</div>
          <div class="angledDraw"></div>
        </div>

        <div class="cartRow">
          <div>Payment</div>
          <div class="angledDraw"></div>
        </div>

        <div class="review">
          <div>Review</div>
          <hr class="line2">
        </div>
`;

let threeHTML = "";

entry.forEach((entrys) => {
  if (entrys.fifth === undefined) {
    entrys.fifth = "";
  }

  threeHTML += `
  <div class="theFirst">
    <div class="theFirst-top">
      <div>${entrys.first}</div>
      <div>Change</div>
    </div>

    <div class="theFirst-bottom">
      <div> ${entrys.second}</div>
      <div style="font-weight: 600;"> ${entrys.third}</div>
      <div> ${entrys.fourth}</div>
      <div> ${entrys.fifth}</div>
    </div>
  </div>
  `;
});

document.querySelector(".theThrees").innerHTML = threeHTML;

document.querySelector(".checkArea").innerHTML = `

<div>
<input type="checkbox" > 
</div>

<div class="textCheck">
  By Clicking The
  "Place Order"
   action ,You Agree To Our Terms Of Use, Privacy Policy, Return Policy.
</div>

`;

document.querySelector(".placeArea").innerHTML = `
<div>
<div class="angledDraw2"> </div>

<div>
  Return To Payment
</div>
</div>

<a href="second-page.html">
<button style="
    font-size: 11px;
  ">
  Place Order
</button>
</a>
`;

document.querySelector(".side-div").innerHTML = `
  <div class="sideDiv-inner">
        <div class="sideDiv-top">

            <div style="
              display: flex;
              flex-direction: row;
              justify-content: center;
              font-size: 11px;
              box-shadow: 0px 0px 0px rgb(153, 9, 9);
            ">
              <div style="
                font-weight: 700;
                font-size: 0.8rem;
              ">
                  Order Summary
              </div>
                <div style="
                  color: grey;
                  font-size: 0.8rem;
                ">
                  (1 items)
                </div>
            </div>
        
            <div>
              <hr class="lines">
            </div>
        </div>

        <div class="sideDiv-flour">
          <div>
            <img src="pictures/ingredientsAndItems/Rectangle 176.png" class="liveImages">
          </div>


          <div style="
            display: flex;
            flex-direction: column;
            row-gap: 20px;
          ">
            <div style="
              display: flex;
              flex-direction: row;
            ">
              <div style="
                display: flex;
                flex-direction: column;
                row-gap: 15px;
              ">
                <div class="W365"> 365 By Whole Foods Market Flour All Purpose Baking, 80 Ounce</div>
                <div style="
                  color: rgb(79, 79, 79);
                "> Quantity 1</div>
              </div>



              <div style="
                 display: flex;
                 justify-content: flex-end;
                 padding: 0px 5px 0px 0px;
                 box-shadow: 0px 0px 0px rgba(0,0,0,1);
              " class="more js-more">
                  <svg viewBox="0 0 24 24" aria-hidden="true" fill="rgb(79,79,79)"class="icon" style="transform: rotate(90deg);"><g><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></g></svg>


                  <div class="more-select js-more2">
                    More
                  </div>

              </div>
            </div>


            <div class="zero"> $00.00</div>
          </div>
        </div>


        <div class="sideDiv-7">

          <div>

            <div> Items Total(1)</div>
            <div> $00.00</div>

          </div>

          <div>

            <div> Discounts</div>
            <div> $00.00</div>

          </div>
          <div>

            <div>Subtotal</div>
            <div>$00.00</div>

          </div>
          <div>

            <div>Shipping</div>
            <div>$00.00</div>

          </div>
          <div>

            <div>Duties & Taxes</div>
            <div>$00.00</div>

          </div>
          <div style="
            width: 95%;
          ">

            <hr class="lines" >

          </div>
          <div style="
            padding: 0px 0px 0px 35px;
            display: flex;
            width: 48%;
            font-weight: 700;
          ">

            <div>Total</div>
            <div>$00.00</div>

          </div>

        </div>

        <div class="sideDiv-safesec">

          <div>
            <div>
              <img src="pictures/safeIcon.png" class="icon">
            </div>
            <div> 
              Buyer Protection
            </div>
          </div>
          <div>
            We Keep Your Information And Payment Safe.
          </div>

        </div>
        
        <div class="sideDiv-lastpart" style="
          row-gap: 5px;
          margin: 0px 0px 0px 0px;
        ">

          <div style="
             display: flex;
             flex-direction: row;
             column-gap: 7px;<
             align-items: center;
            ">
              <div> <img src="pictures/ingredientsAndItems/question.png" class="icon"></div>
              <div style="
                font-weight: 700;
              "> Help</div>
          </div>
          <div style="
            display: flex;
            row-gap: 3px;
            flex-direction: column;
          ">
            <div> Help Center, Disputes & Repeats, Buyer Protection,</div>
            <div> Report IPR Infringement, Regulated Information.</div>
          </div>
          
        </div>

      </div>

      
`;

document.querySelector(".js-more").addEventListener("mouseover", () => {
  furtherOptions();
});

document.querySelector(".js-more").addEventListener("mouseout", () => {
  backwardOptions();
});

const toggle = document.querySelector(".js-more2");

function furtherOptions() {
  setTimeout(() => {
    toggle.classList.add("options");
    toggle.classList.remove("more-select");
  }, 2700);
}

function backwardOptions() {
  setTimeout(() => {
    toggle.classList.remove("options");
    toggle.classList.add("more-select");
  }, 150);
}
