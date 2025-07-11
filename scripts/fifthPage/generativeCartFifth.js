import { fillsMobileApps } from "../reusable-variables.js";
import { formatCurrency } from "../products.js";

export const featuredProdBottom = [
  {
    id: "36c64692-677f-4f58-b5ec-0dc2cf109e27",
    image: "pictures/primaCakeGreen.png",
    name: "Prima Cake Flour 1kg",
    rating: {
      stars: 5,
      count: 679,
    },
    priceCents: 3899,
    keywords: ["mixing bowls", "baking", "cookware", "kitchen"],
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
];

export function fillsFPBottom() {
  let html = "";

  featuredProdBottom.forEach((product) => {
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

  document.querySelector(".fP-bottom").innerHTML = html;
}
