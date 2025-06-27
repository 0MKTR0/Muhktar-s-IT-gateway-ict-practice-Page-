export function runTopDiv(topDivClass) {
  document.querySelector(topDivClass).innerHTML = `<div class="top-section">
        <div>
          <div>$USD</div>
            <div>&#160; </div>
          <div class="angledDraw"></div>

          &#160;

        </div>

      <div>
        &#160;
        <div>English</div> 
        &#160;
         <div class="angledDraw"></div>
          &#160;
        </div>

        <div>
          &#160;
          <div>Morocco</div>
          &#160;
          <div class="angledDraw"></div>
          &#160;
        </div>
      </div>


      <div class="middle-section">
        <div>
          Rahba
        </div>

     <div class="search-bar">

     <div class="three-line-div">    
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="10">
        <!-- First line (full width) -->
        <rect x="5" y="0" width="20" height="3" fill="black" />
        <!-- Second line (50% width of the first) -->
        <rect x="7.5" y="4" width="15" height="3" fill="black" />
        <!-- Third line (50% width of the second) -->
        <rect x="11.25" y="8" width="7.5" height="2" fill="black" />
      </svg>

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

    <div class="icons">

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
          <div class="angledDraw"></div>
        </div>

        <div> 
          <div>Trending</div> 
          &#160;
          <div class="angledDraw"></div>
        </div>

        

        <div> 
          <div>Sell</div> 
          &#160;
          <div class="angledDraw"></div>
        </div>

        <div> About Us </div>

        <div> Customer Service </div>

      </div>

      `;
}
