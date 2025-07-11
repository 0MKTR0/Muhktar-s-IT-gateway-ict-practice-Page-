<<<<<<< HEAD
export const appImages = [
  "pictures/ingredientsAndItems/apple-image.png",

  "pictures/ingredientsAndItems/facebook.png",

  "pictures/ingredientsAndItems/snapchat.png",

  "pictures/ingredientsAndItems/gmail.png",

  "pictures/ingredientsAndItems/Instagram.png",
];

export function runTopDiv(topDivClass) {
  document.querySelector(topDivClass).innerHTML = `
  <div class="top-section">
    <div>
      <div>$USD</div>
        <div> &#160; </div>
      <div class="angledDraw">
        <img src="pictures/ingredientsAndItems/dropDownVector.png">
      </div>

      &#160;

    </div>

   <div>
      &#160;
      <div>English</div> 
      &#160;
        <div class="angledDraw">
          <img src="pictures/ingredientsAndItems/dropDownVector.png">
        </div>
        &#160;
    </div>

    <div>
      &#160;
      <img src="pictures/morocco.png" style="width: 20px;, height: 20px;">
      &#160;
      <div>Morocco</div>
      &#160;
      <div class="angledDraw">
         <img src="pictures/ingredientsAndItems/dropDownVector.png">
      </div>
      &#160;
    </div>
  </div>


  <div class="middle-section">
        <div class=" rahba-icons">
          <img src="pictures/rahbaLogo.png">
        </div>

    <div class="search-bar">

      <div class="three-line-div">    
        <img src="pictures/ingredientsAndItems/threeeLineVector.png">
      </div>

          <input placeholder="Search" style="
            color: black;
          ">

        <div class="search-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
          <!-- Circle for the magnifying  glass -->
          <circle cx="10" cy="10" r="6" stroke="black" stroke-width="2" fill="none" />
          <!-- Handle of the magnifying glass -->
          <line x1="14" y1="14" x2="20" y2="20" stroke="black"    stroke-width="2" />
          </svg>
        </div>

    </div>

    <div class="icons rahba-icons">

      <div>     
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </div>

      <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" fill="black">
          <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2zM7.16 14h9.68c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.3.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7.16l1.1-2z"/>
          </svg>
      </div>

      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" fill="transparent" >
         <circle cx="12" cy="8" r="4" fill="transparent" /> <!-- Head -->
         <path d="M12 14c-4 0-7 3-7 5v1h14v-1c0-2-3-5-7-5z" fill="transparent" /><!-- Body -->
        </svg>
      </div>

    </div>
    
  </div>
     
  <div class="bottom-section">
         
    <div> Home </div>

    <div> 
      <div> Our Product </div>
      &#160;
      <div class="angledDraw">
        <img src="pictures/ingredientsAndItems/dropDownVector.png">
      </div>
    </div>

    <div> 
      <div>Trending</div> 
      &#160;
      <div class="angledDraw">
        <img src="pictures/ingredientsAndItems/dropDownVector.png">
      </div>
    </div>

        

    <div> 
      <div>Sell</div> 
      &#160;
      <div class="angledDraw">
        <img src="pictures/ingredientsAndItems/dropDownVector.png">
      </div>
    </div>

    <a href="#theAboutDescription"> About Us </a>

    <div> Customer Service </div>

  </div> 

      `;
}

export function runLastDiv(lastDivClass) {
  document.querySelector(lastDivClass).innerHTML = `
  
    <div class="lD-first">

      <div class="lDF-top"> Sign Up For Our Newsletter :</div>

      <div class="lDF-input">
        <input type="text" placeholder="Email-Address">
      </div>

      <div class="lDF-button">
        <button> Sign-Up</button>
      </div>

    </div>

        <hr class="linee">

    <div class="lD-second">

      <div class="lDS-left">
        
        <div class="lDSL-top">

          <div class="lDSLT-top">
            Follow Us
          </div>

          <div class="lDSLT-bottom"></div>

        </div>

        <div class="lDSL-bottom">

          <div class="lDSLB-top">Mobile Apps</div>

          <div class="lDSLB-bottom">

            <div class="lDSLBB-left">
              <img src="pictures/ingredientsAndItems/QR-code.png">
            </div>

            <div class="lDSLBB-right">
              
              <div class="google">
                <img src="pictures/ingredientsAndItems/google-text.png">
              </div>

              <div class="apple">

                <img class="apple1"src="pictures/ingredientsAndItems/appleCongestion.png">

              </div>

            </div>

          </div>

        </div>

      </div>



      <div class="lDS-right">

        <div class="lDSR-fColumn">
          <div class="colDiv">About</div>

          <div class="colUl">
            <div>About Us</div>

          <div>Terms & Conditions</div>

          <div>Loyalty & Referral Program</div>

          <div>Privacy Policy</div>

          <div>Shipping Policy</div>

          <div>Refund Policy</div>

          <div>Terms Of Service</div>

          <div>Where To Buy</div>
          </div>

        </div>

        <div class="lDSR-sColumn">
          <div class="colDiv"> Customer Service</div>

          <div class="colUl">
            
            <div>Contact Us</div>

            <div>Delivery</div>

            <div>Frequently Asked Questions</div>
          </div>

        </div>

        <div class="lDSR-tColumn">

          <div class="colDiv"> Resources</div>

          <div class="colUl">
            
            <div>Blog</div>

            <div>Community</div>

            <div>Accessibility</div>

            <div>Sales & Offers</div>

          </div>


        </div>

      </div>

    </div>
        <hr class="linee">
    <div class="lD-third">
      Copyright &#169; 2022 Ghiz Online Store
    </div>
  `;
}

export function formatTwoDigits(num) {
  return num.toString().padStart(2, "0");
}

export function fillsMobileApps() {
  let html = "";

  appImages.forEach((image) => {
    html += `
    <div class="lDSLTB-image">
        <img src=${image}>
      </div>
    `;

    document.querySelector(".lDSLT-bottom").innerHTML = html;
  });
}

export function hidesFixedBar() {
  let scrollPos = window.pageYOffset;

  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;

    if (scrollPos > currentScrollPos) {
      document.getElementById("topDivId").style.top = "0";
    } else {
      document.getElementById("topDivId").style.top = "-120px";
    }

    scrollPos = currentScrollPos;
    console.log();
  };
}

export const appImages = [
  "pictures/ingredientsAndItems/apple-image.png",

  "pictures/ingredientsAndItems/facebook.png",

  "pictures/ingredientsAndItems/snapchat.png",

  "pictures/ingredientsAndItems/gmail.png",

  "pictures/ingredientsAndItems/Instagram.png",
];

export function runTopDiv(topDivClass) {
  document.querySelector(topDivClass).innerHTML = `
  <div class="top-section">
    <div>
      <div>$USD</div>
        <div> &#160; </div>
      <div class="angledDraw">
        <img src="pictures/ingredientsAndItems/dropDownVector.png">
      </div>

      &#160;

    </div>

   <div>
      &#160;
      <div>English</div> 
      &#160;
        <div class="angledDraw">
          <img src="pictures/ingredientsAndItems/dropDownVector.png">
        </div>
        &#160;
    </div>

    <div>
      &#160;
      <img src="pictures/morocco.png" style="width: 20px;, height: 20px;">
      &#160;
      <div>Morocco</div>
      &#160;
      <div class="angledDraw">
         <img src="pictures/ingredientsAndItems/dropDownVector.png">
      </div>
      &#160;
    </div>
  </div>


  <div class="middle-section">
        <div class=" rahba-icons">
          <img src="pictures/rahbaLogo.png">
        </div>

    <div class="search-bar">

      <div class="three-line-div">    
        <img src="pictures/ingredientsAndItems/threeeLineVector.png">
      </div>

          <input placeholder="Search" style="
            color: black;
          ">

        <div class="search-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
          <!-- Circle for the magnifying  glass -->
          <circle cx="10" cy="10" r="6" stroke="black" stroke-width="2" fill="none" />
          <!-- Handle of the magnifying glass -->
          <line x1="14" y1="14" x2="20" y2="20" stroke="black"    stroke-width="2" />
          </svg>
        </div>

    </div>

    <div class="icons rahba-icons">

      <div>     
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </div>

      <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" fill="black">
          <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2zM7.16 14h9.68c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.3.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7.16l1.1-2z"/>
          </svg>
      </div>

      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" fill="transparent" >
         <circle cx="12" cy="8" r="4" fill="transparent" /> <!-- Head -->
         <path d="M12 14c-4 0-7 3-7 5v1h14v-1c0-2-3-5-7-5z" fill="transparent" /><!-- Body -->
        </svg>
      </div>

    </div>
    
  </div>
     
  <div class="bottom-section">
         
    <div> Home </div>

    <div> 
      <div> Our Product </div>
      &#160;
      <div class="angledDraw">
        <img src="pictures/ingredientsAndItems/dropDownVector.png">
      </div>
    </div>

    <div> 
      <div>Trending</div> 
      &#160;
      <div class="angledDraw">
        <img src="pictures/ingredientsAndItems/dropDownVector.png">
      </div>
    </div>

        

    <div> 
      <div>Sell</div> 
      &#160;
      <div class="angledDraw">
        <img src="pictures/ingredientsAndItems/dropDownVector.png">
      </div>
    </div>

    <a href="#theAboutDescription"> About Us </a>

    <div> Customer Service </div>

  </div> 

      `;
}

export function runLastDiv(lastDivClass) {
  document.querySelector(lastDivClass).innerHTML = `
  
    <div class="lD-first">

      <div class="lDF-top"> Sign Up For Our Newsletter :</div>

      <div class="lDF-input">
        <input type="text" placeholder="Email-Address">
      </div>

      <div class="lDF-button">
        <button> Sign-Up</button>
      </div>

    </div>

        <hr class="linee">

    <div class="lD-second">

      <div class="lDS-left">
        
        <div class="lDSL-top">

          <div class="lDSLT-top">
            Follow Us
          </div>

          <div class="lDSLT-bottom"></div>

        </div>

        <div class="lDSL-bottom">

          <div class="lDSLB-top">Mobile Apps</div>

          <div class="lDSLB-bottom">

            <div class="lDSLBB-left">
              <img src="pictures/ingredientsAndItems/QR-code.png">
            </div>

            <div class="lDSLBB-right">
              
              <div class="google">
                <img src="pictures/ingredientsAndItems/google-text.png">
              </div>

              <div class="apple">

                <img class="apple1"src="pictures/ingredientsAndItems/appleCongestion.png">

              </div>

            </div>

          </div>

        </div>

      </div>



      <div class="lDS-right">

        <div class="lDSR-fColumn">
          <div class="colDiv">About</div>

          <div class="colUl">
            <div>About Us</div>

          <div>Terms & Conditions</div>

          <div>Loyalty & Referral Program</div>

          <div>Privacy Policy</div>

          <div>Shipping Policy</div>

          <div>Refund Policy</div>

          <div>Terms Of Service</div>

          <div>Where To Buy</div>
          </div>

        </div>

        <div class="lDSR-sColumn">
          <div class="colDiv"> Customer Service</div>

          <div class="colUl">
            
            <div>Contact Us</div>

            <div>Delivery</div>

            <div>Frequently Asked Questions</div>
          </div>

        </div>

        <div class="lDSR-tColumn">

          <div class="colDiv"> Resources</div>

          <div class="colUl">
            
            <div>Blog</div>

            <div>Community</div>

            <div>Accessibility</div>

            <div>Sales & Offers</div>

          </div>


        </div>

      </div>

    </div>
        <hr class="linee">
    <div class="lD-third">
      Copyright &#169; 2022 Ghiz Online Store
    </div>
  `;
}

export function formatTwoDigits(num) {
  return num.toString().padStart(2, "0");
}

export function fillsMobileApps() {
  let html = "";

  appImages.forEach((image) => {
    html += `
    <div class="lDSLTB-image">
        <img src=${image}>
      </div>
    `;

    document.querySelector(".lDSLT-bottom").innerHTML = html;
  });
}

export function hidesFixedBar() {
  let scrollPos = window.pageYOffset;

  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;

    if (scrollPos > currentScrollPos) {
      document.getElementById("topDivId").style.top = "0";
    } else {
      document.getElementById("topDivId").style.top = "-120px";
    }

    scrollPos = currentScrollPos;
    console.log();
  };
}
>>>>>>> c567e1f2b29106e040a68be4aa52925831e7a4ed
