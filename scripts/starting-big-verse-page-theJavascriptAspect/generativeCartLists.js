import { formatCurrency, productsCompoundedList } from "../products.js";

export const ingredientsRowProduct = [
  {
    name: "Flour",
    image: "pictures/ingredientsAndItems/types-of-flour.png",
  },
  {
    name: "Cereal",
    image: "pictures/ingredientsAndItems/cereal.png",
  },
  {
    name: "Pasta",
    image: "pictures/ingredientsAndItems/pasta.png",
  },
  {
    name: "Spices",
    image: "pictures/ingredientsAndItems/spices.png",
  },
  {
    name: "Legumes",
    image: "pictures/ingredientsAndItems/legumes.png",
  },
  {
    name: "Dry-Fruites",
    image: "pictures/ingredientsAndItems/dry-fruites.png",
  },
];

export const brandImages = [
  { image: "pictures/ingredientsAndItems/brand-image2.png" },

  { image: "pictures/ingredientsAndItems/brand-image3.png" },

  { image: "pictures/ingredientsAndItems/brand-image4.png" },

  { image: "pictures/ingredientsAndItems/brand-image5.png" },
];

export const bottomOARightProduct = [
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c7",
    image: "pictures/ingredientsAndItems/365-flour-front.png",
    name: "365 flour - 1kg",
    rating: {
      stars: 3,
      count: 10,
    },
    priceCents: 100000,
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image: "pictures/ingredientsAndItems/natural-mulky-jar.png",
    name: "Natural Mulled Wine Spice - 40g",
    rating: {
      stars: 4,
      count: 127,
    },
    priceCents: 2095,
  },
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "pictures/ingredientsAndItems/spice-box.png",
    name: "Spice Box Brown Basmati Rice - 1kg",
    rating: {
      stars: 4.5,
      count: 87,
    },
    priceCents: 1090,
  },
  {
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    image: "pictures/ingredientsAndItems/renature.png",
    name: "Renature Pasta Elbows(Homechain) - 500g",
    rating: {
      stars: 4.5,
      count: 56,
    },
    priceCents: 799,
    type: "clothing",
  },
];

export const newReleaseBottom = [
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c7",
    image: "pictures/ingredientsAndItems/365-flour-front.png",
    name: "365 flour - 1kg",
    rating: {
      stars: 3,
      count: 10,
    },
    priceCents: 100000,
  },
  {
    id: "54e0eccd-8f36-462b-b68a-8182611d9add",
    image: "pictures/ingredientsAndItems/brown-bread.png",
    name: "Free Brown Bread Flour - 1kg",
    rating: {
      stars: 5,
      count: 2197,
    },
    priceCents: 1899,
    type: "appliance",
  },
  {
    id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
    image: "pictures/ingredientsAndItems/renature-slim.png",
    name: "Renature Organic Split Flakes - 500g",
    rating: {
      stars: 4,
      count: 37,
    },
    priceCents: 2067,
  },
  {
    id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
    image: "pictures/ingredientsAndItems/renature-pink.png",
    name: "Renature Organic Split  Bran (Dinkelkleie) - 250g",
    rating: {
      stars: 4.5,
      count: 175,
    },
    priceCents: 3499,
  },
  {
    id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
    image: "pictures/ingredientsAndItems/organic-raw-spread.png",
    name: "Organic Raw Sprouted Walnuts - 400g",
    rating: {
      stars: 4.5,
      count: 317,
    },
    priceCents: 2400,
  },
  {
    id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
    image: "pictures/ingredientsAndItems/vegan-corn-flour.png",
    name: "Vegan Corn Flour",
    rating: {
      stars: 4.5,
      count: 144,
    },
    priceCents: 3599,
  },
  {
    id: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
    image: "pictures/ingredientsAndItems/freee-white-flour.png",
    name: "Freee By Doves Farm Glutten-Free Self-Raising Product",
    rating: {
      stars: 4.5,
      count: 305,
    },
    priceCents: 2899,
  },
];

export const featuredProductsBottom = [
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c7",
    image: "pictures/ingredientsAndItems/365-flour-front.png",
    name: "365 flour - 1kg",
    rating: {
      stars: 3,
      count: 10,
    },
    priceCents: 100000,
  },
  {
    id: "58b4fc92-e98c-42aa-8c55-b6b79996769a",
    image: "pictures/ingredientsAndItems/white-blue-flour.png",
    name: "White Blue Flour - 1kg",
    rating: {
      stars: 3,
      count: 89,
    },
    priceCents: 3390,
    keywords: ["shoes", "running shoes", "footwear"],
  },
  {
    id: "5968897c-4d27-4872-89f6-5bcb052746d7",
    image: "pictures/ingredientsAndItems/divell.png",
    name: "Divella Pasta Mista N.41 - 500gr",
    rating: {
      stars: 3,
      count: 235,
    },
    priceCents: 2070,
    type: "clothing",
  },
  {
    id: "aad29d11-ea98-41ee-9285-b916638cac4a",
    image: "pictures/ingredientsAndItems/bottle1.png",
    name: "La Drogheria 1880 Grounded Chilly 35 Gr",
    rating: {
      stars: 3,
      count: 30,
    },
    priceCents: 1560,
  },
  {
    id: "04701903-bc79-49c6-bc11-1af7e3651358",
    image: "pictures/ingredientsAndItems/name-of-product-bottle.png",
    name: "La Drogheria 1881 Grounded Peppers & Spices",
    rating: {
      stars: 3,
      count: 562,
    },
    priceCents: 2499,
  },
  {
    id: "901eb2ca-386d-432e-82f0-6fb1ee7bf969",
    image: "pictures/ingredientsAndItems/name-of-product-bottle-large.png",
    name: "La drogheria 1882 Grounded grains 45 Gr",
    rating: {
      stars: 3,
      count: 232,
    },
    priceCents: 4599,
  },
  {
    id: "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",
    image: "pictures/ingredientsAndItems/Rumo.png",
    name: "Runmo Pasta Mista N75-500Gr",
    rating: {
      stars: 4,
      count: 160,
    },
    priceCents: 1699,
    keywords: ["shorts", "apparel", "mens"],
  },
  {
    id: "c2a82c5e-aff4-435f-9975-517cfaba2ecf",
    image: "pictures/ingredientsAndItems/italian-looking.png",
    name: "Legumi-Cannelini-1Box",
    rating: {
      stars: 5,
      count: 846,
    },
    priceCents: 3074,
  },
  {
    id: "c2a82c5e-aff4-435f-9975-517cfaba2ece",
    image: "pictures/ingredientsAndItems/italian-looking.png",
    name: "Italian Flour",
    rating: {
      stars: 5,
      count: 846,
    },
    priceCents: 3074,
  },
  {
    id: "6b07d4e7-f540-454e-8a1e-363f25dbae7d",
    image: "pictures/ingredientsAndItems/nesquit.png",
    name: "Nestle-Nesquik Chocolate Cereals 375 Gr",
    rating: {
      stars: 4,
      count: 99,
    },
    priceCents: 2374,
  },
  {
    id: "a82c6bac-3067-4e68-a5ba-d827ac0be010",
    image: "pictures/ingredientsAndItems/ballior-flour.png",
    name: "Barilla Flour 1kg",
    rating: {
      stars: 4,
      count: 215,
    },
    priceCents: 2200,
  },
  {
    id: "e4f64a65-1377-42bc-89a5-e572d19252e2",
    image: "pictures/ingredientsAndItems/gariolla.png",
    name: "Garofalo-Pasta Di Semola",
    rating: {
      stars: 4.5,
      count: 52,
    },
    priceCents: 1799,
  },
  {
    id: "b0f17cc5-8b40-4ca5-9142-b61fe3d98c85",
    image: "pictures/ingredientsAndItems/misuralla.png",
    name: "Misuralla-Multigrain & Crunchy Cereals 330Gr",
    rating: {
      stars: 3,
      count: 2465,
    },
    priceCents: 1374,
    type: "food",
  },
  {
    id: "a93a101d-79ef-4cf3-a6cf-6dbe532a1b4a",
    image: "pictures/ingredientsAndItems/organic-chicken-peas.png",
    name: "Organic Chickenpeas - 1kg",
    rating: {
      stars: 3,
      count: 119,
    },
    priceCents: 1250,
  },
];

export const brandFeatures = [
  {
    image: "pictures/ingredientsAndItems/Vector1.png",
    feature: "Quality",
    text: " Incredible and Exquisite, bringing the finest and purest to your everyday online-shopping.",
  },
  {
    image: "pictures/ingredientsAndItems/Vector3.png",
    feature: "Safe Payment",
    text: " high-grade encryption systems, 90% issue free payment system and a smooth barter exchange rate.",
  },
  {
    image: "pictures/ingredientsAndItems/Vector4.png",
    feature: "Confidence",
    text: " our success depends on your trust, ingenuity only harbors evil contempt. We are not like that at our organisation.",
  },
  {
    image: "pictures/ingredientsAndItems/Vector5.png",
    feature: "Customer Service",
    text: " friendly interaction, safe and clear communication, zero unresolved complaints and exceptional problem solving team.",
  },
];

export const appImages = [
  "pictures/ingredientsAndItems/apple-image.png",

  "pictures/ingredientsAndItems/facebook.png",

  "pictures/ingredientsAndItems/snapchat.png",

  "pictures/ingredientsAndItems/gmail.png",

  "pictures/ingredientsAndItems/Instagram.png",
];

export const bestSellers = [];

export function fillsIngredientsRow() {
  let ingredientsRowHTML = "";

  ingredientsRowProduct.forEach((product) => {
    ingredientsRowHTML += `
      <div class="firstIR">
        <div>
          <img src=${product.image}>
        </div>

        <div>
          ${product.name}
        </div>
        
      </div>
    `;
  });

  document.querySelector(".ingredientsRow").innerHTML = ingredientsRowHTML;
}

export function fillsBottomOARight() {
  let bottomOARightHTML = "";

  bottomOARightProduct.forEach((product) => {
    bottomOARightHTML += `
      <div class="bottomOA-RightFirst">

        <div class="bottomOA-RImage">
          <img src=${product.image}>
        </div>
        <div class="bottomOA-RText">
          ${product.name}
        </div>

      </div>
    `;
  });

  document.querySelector(".bottomOA-Right").innerHTML = bottomOARightHTML;
}

export function fillsNewReleaseBottom() {
  let newReleaseBottomHTML = "";

  newReleaseBottom.forEach((product) => {
    newReleaseBottomHTML += `
      <div class="nRB-first">

      <div class="nRB-firstImage">
        <img src=${product.image}>
      </div>
      <div class="nRB-Text">
        ${product.name}
      </div>

    </div>
    `;
  });

  document.querySelector(".newRelease-bottom").innerHTML = newReleaseBottomHTML;
}

export function fillsFeaturedProductsBottom() {
  let html = "";

  featuredProductsBottom.forEach((product) => {
    html += `
      <div class="fPB-first">

        <div class="fPB-Image">
          <img src= ${product.image}>
        </div>

        <div class="fPB-Text">
          ${product.name}
        </div>

        <div class="ratingStars">
          <img src="pictures/ratings/rating-${product.rating.stars * 10}.png">
        </div>

        <div class="price">
          $${formatCurrency(product.priceCents)}
        </div>

      </div>

    `;
  });

  document.querySelector(".featuredProducts-bottom").innerHTML = html;
}

export function fillsBestSellers() {
  let html = "";

  productsCompoundedList.forEach((product) => {
    const typee = product.type;

    if (typee === "bestsellers") {
      bestSellers.push(product);
    }
  });

  bestSellers.forEach((interProduct) => {
    html += `
      <div class="bSB">
        <div class="bSB-image">
          <img src=${interProduct.image}>
        </div>

        <div class="bSB-text">
          ${interProduct.name}
        </div>
      </div>
    `;
  });

  document.querySelector(".bestSellers-bottom").innerHTML = html;
}

export function fillsBrandImages() {
  let html = "";

  brandImages.forEach((brand) => {
    html += `
      <div>
        <img src=${brand.image}>
      </div>
    `;
  });

  document.querySelector(".mA-bottom").innerHTML = html;
}

export function fillsBrandFeatures() {
  let html = "";

  brandFeatures.forEach((brand) => {
    html += `
      <div class="features">

          <div class="f-image">
            <img src=${brand.image}>
          </div>

          <div class="f-feature"> ${brand.feature}</div>

          <div class="f-text"> ${brand.text}</div>

        </div>
    `;
  });

  document.querySelector(".brandFeatures").innerHTML = html;
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
