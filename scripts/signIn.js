


document.querySelectorAll(".changer").addEventListener("click", () => {
  visibleText();
});



const visibleText = () => {
  let text = document.querySelector(".input-for-eye");

  if (text.type === "password") {
    text.type = "text";
  } else {
    text.type = "password";
  }
};

console.log(document.querySelector(".input-for-eye").type);

const changingTitle = setInterval(() => {
  if (document.title === "Muhktar's sign-in page") {
    document.title = "Rahba Products";
  } else {
    document.title = "Muhktar's sign-in page";
  }
}, 3000);

changingTitle();

document.querySelector(".js-reg").addEventListener("click", () => {});

document.querySelector('.js-mainDiv') = `
           <div class="mainBody">


        <div class="top-section">
          <div style="width: 100%; display: inline-flex; align-items: center; justify-content: center; flex-direction: column;box-shadow:0px 0px 0px rgba(0,0,0,1); line-height: 8px; cursor: pointer;"> <div style="display: inline-flex;">Sign In</div> 
            <hr class="line21"></hr>
          </div>
          
          <div style="width: 100%; box-shadow:0px 0px 0px rgba(0,0,0,1); justify-content: center; display:inline-flex;
          align-items: center; flex-direction: column; line-height: 8px; cursor: pointer;" class="js-reg"> <div>Register</div> 
          <hr class="line22"></hr>

          </div>
        </div>
        

        <div class="inputs">
          <div>
            <input placeholder="Email Address Or Member ID">
          </div>
          
          <div>
            <input type="password" placeholder="Your Password" class="input-for-eye" >

            <div class="changer">
              <svg viewBox="0 0 30.5 16.5" xmlns="http://www.w3.org/2000/svg" ><path d="M15.3 0C8.9 0 3.3 3.3 0 8.3c3.3 5 8.9 8.3 15.3 8.3s12-3.3 15.3-8.3C27.3 3.3 21.7 0 15.3 0zm0 14.5c-3.4 0-6.2-2.8-6.2-6.2C9 4.8 11.8 2 15.3 2c3.4 0 6.2 2.8 6.2 6.2 0 3.5-2.8 6.3-6.2 6.3z"></path></svg>
            </div>
            
          </div>
          
        </div>

        <div class="check">
          <div style="display: inline-flex; flex-direction: row; justify-content: center;
          align-items: center;">
            <input type="checkbox" style="cursor: pointer;">
            <div style="display: inline-flex;">Stay Signed in</div>
          </div>

          <div style="text-decoration: underline; cursor: pointer; display: inline-flex;">
            Forget Password
          </div>
        </div>

        <div class="signIn js-sign">
          <button>Sign In</button>
        </div>

        <div class="Orcontinue">
          <hr class="line3">
          <div style="display:inline-flex;"> Or Continue With</div>
          <hr class="line3">
        </div>

        <div class="meta">
          <div class="facebook">
            <svg class="svg" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 509 509"><g fill-rule="nonzero"><path fill="#0866FF" d="M509 254.5C509 113.94 395.06 0 254.5 0S0 113.94 0 254.5C0 373.86 82.17 474 193.02 501.51V332.27h-52.48V254.5h52.48v-33.51c0-86.63 39.2-126.78 124.24-126.78 16.13 0 43.95 3.17 55.33 6.33v70.5c-6.01-.63-16.44-.95-29.4-.95-41.73 0-57.86 15.81-57.86 56.91v27.5h83.13l-14.28 77.77h-68.85v174.87C411.35 491.92 509 384.62 509 254.5z"/><path fill="#fff" d="M354.18 332.27l14.28-77.77h-83.13V227c0-41.1 16.13-56.91 57.86-56.91 12.96 0 23.39.32 29.4.95v-70.5c-11.38-3.16-39.2-6.33-55.33-6.33-85.04 0-124.24 40.16-124.24 126.78v33.51h-52.48v77.77h52.48v169.24c19.69 4.88 40.28 7.49 61.48 7.49 10.44 0 20.72-.64 30.83-1.86V332.27h68.85z"/></g></svg>
          </div>

          <div class="google">
            <svg xmlns="http://www.w3.org/2000/svg" class="svg" viewBox="0 0 326667 333333" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><path d="M326667 170370c0-13704-1112-23704-3518-34074H166667v61851h91851c-1851 15371-11851 38519-34074 54074l-311 2071 49476 38329 3428 342c31481-29074 49630-71852 49630-122593m0 0z" fill="#4285f4"/><path d="M166667 333333c44999 0 82776-14815 110370-40370l-52593-40742c-14074 9815-32963 16667-57777 16667-44074 0-81481-29073-94816-69258l-1954 166-51447 39815-673 1870c27407 54444 83704 91852 148890 91852z" fill="#34a853"/><path d="M71851 199630c-3518-10370-5555-21482-5555-32963 0-11482 2036-22593 5370-32963l-93-2209-52091-40455-1704 811C6482 114444 1 139814 1 166666s6482 52221 17777 74814l54074-41851m0 0z" fill="#fbbc04"/><path d="M166667 64444c31296 0 52406 13519 64444 24816l47037-45926C249260 16482 211666 1 166667 1 101481 1 45185 37408 17777 91852l53889 41853c13520-40185 50927-69260 95001-69260m0 0z" fill="#ea4335"/></svg>
          </div>

          <div class="twitter">
            <svg xmlns="http://www.w3.org/2000/svg"  class="svg"viewBox="0 0 333333 333333" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><path d="M333328 63295c-12254 5480-25456 9122-39241 10745 14123-8458 24924-21861 30080-37819-13200 7807-27871 13533-43416 16596-12499-13281-30252-21537-49919-21537-37762 0-68336 30591-68336 68330 0 5326 591 10537 1748 15562-56820-2880-107194-30081-140915-71467-6049 10435-9250 22300-9250 34367v8c0 23696 12031 44654 30389 56876-11202-333-21739-3457-30991-8519v854c0 33138 23554 60789 54852 67039-5734 1557-11787 2417-18023 2417-4417 0-8673-455-12905-1224 8742 27139 33975 46923 63857 47500-23430 18356-52858 29286-84939 29286-5537 0-10931-339-16318-984 30326 19458 66251 30727 104844 30727 125735 0 194551-104198 194551-194543 0-3002-67-5911-191-8852 13354-9553 24932-21609 34097-35333l31-31-6 4z" fill="white"/></svg>
          </div>

          <div class="apple">
            <svg class="svg" fill="white"xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 640 640"><path d="M494.782 340.02c-.803-81.025 66.084-119.907 69.072-121.832-37.595-54.993-96.167-62.552-117.037-63.402-49.843-5.032-97.242 29.362-122.565 29.362-25.253 0-64.277-28.607-105.604-27.85-54.32.803-104.4 31.594-132.403 80.245C29.81 334.457 71.81 479.58 126.816 558.976c26.87 38.882 58.914 82.56 100.997 81 40.512-1.594 55.843-26.244 104.848-26.244 48.993 0 62.753 26.245 105.64 25.406 43.606-.803 71.232-39.638 97.925-78.65 30.887-45.12 43.548-88.75 44.316-90.994-.969-.437-85.029-32.634-85.879-129.439l.118-.035zM414.23 102.178C436.553 75.095 451.636 37.5 447.514-.024c-32.162 1.311-71.163 21.437-94.253 48.485-20.729 24.012-38.836 62.28-33.993 99.036 35.918 2.8 72.591-18.248 94.926-45.272l.036-.047z"/></svg>
          </div>
        </div>

        <div class="textBelow">
          <div>By Continuing You Agree To Mom Stores </div>&#160;<div style="font-weight: bold;"> Conditions Of Use</div> &#160;And&#160;<div style="font-weight: bold;">Privacy Notice</div>.
        </div>


    </div>
    <div class="bottomDiv">

      <div class="bottomText">
        <div> Return Policy</div>
        <div>Shipping Policy</div>
        <div>Privacy Policy</div>
        <div>Terms of Service</div>
      </div>
     

      <hr class="line"></hr>

      <div style="margin: 10px 0px 0px 0px;"> Copyright &#169; 2022 Ghiz Online Store</div>
    </div>
`;

