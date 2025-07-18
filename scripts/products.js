<<<<<<< HEAD
export function formatCurrency(priceCents) {
  return (Math.round(priceCents) / 100).toFixed(2);
}

export const productsCompoundedList = [
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c7",
    image: "pictures/ingredientsAndItems/365-flour-front.png",
    name: "365 flour - 1kg",
    rating: {
      stars: 3,
      count: 10,
    },
    priceCents: 100000,
    type: ["trim"],
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
    type: ["trim"],
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
    type: ["trim"],
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
    type: ["trim"],
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
    type: ["trim"],
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
    type: ["trim"],
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
    type: ["trim"],
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
    type: ["trim"],
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
    type: ["trim"],
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
    type: ["trim"],
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
    type: ["trim"],
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
    type: ["clothing"],
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
    type: ["trim"],
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
    type: ["trim"],
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
    type: ["trim"],
  },
  {
    id: "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",
    image: "pictures/ingredientsAndItems/Rectangle248.png",
    name: "Runmo Pasta Mista N75-500Gr",
    rating: {
      stars: 4,
      count: 160,
    },
    priceCents: 1699,
    type: ["trim"],
  },
  {
    id: "c2a82c5e-aff4-435f-9975-517cfaba2ecf",
    image: "pictures/ingredientsAndItems/italian-looking.png",
    name: "Legumi-Cannelini-1Box 180",
    rating: {
      stars: 5,
      count: 846,
    },
    priceCents: 3074,
    type: ["trim"],
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
    type: ["trim"],
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
    type: ["trim"],
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
    type: ["trim"],
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
    type: ["trim"],
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
    type: ["food"],
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
    type: ["trim"],
  },
  {
    id: "4f4fbcc2-4e72-45cc-935c-9e13d79cc57f",
    image: "pictures/ingredientsAndItems/bionna.png",
    name: "Biona Italian Wholegrain Pasta - 500g",
    rating: {
      stars: 4,
      count: 326,
    },
    priceCents: 2640,
    type: "bestsellers",
  },
  {
    id: "8b5a2ee1-6055-422a-a666-b34ba28b76d4",
    image: "pictures/ingredientsAndItems/clearspring.png",
    name: "Clearspring Gluten Free Green Peas & Pasta - 250g",
    rating: {
      stars: 4.5,
      count: 2556,
    },
    priceCents: 1599,
    type: "bestsellers",
  },
  {
    id: "b86ddc8b-3501-4b17-9889-a3bad6fb585f",
    image: "pictures/ingredientsAndItems/tahiini-cereal.png",
    name: "Cereal Bar With Tahini & Cacao - 60g",
    rating: {
      stars: 4.5,
      count: 2286,
    },
    priceCents: 8300,
    type: "bestsellers",
  },
  {
    id: "19c6a64a-5463-4d45-9af8-e41140a4100c",
    image: "pictures/ingredientsAndItems/doves.png",
    name: "Doves Farm Organic Plain White Flour - 1kg",
    rating: {
      stars: 4,
      count: 456,
    },
    priceCents: 2399,
    type: "bestsellers",
  },
  {
    id: "d2785924-743d-49b3-8f03-ec258e640503",
    image: "pictures/ingredientsAndItems/organic-raw-cocoa.png",
    name: "Organic Raw Cacao Powder - 227g",
    rating: {
      stars: 5,
      count: 83,
    },
    priceCents: 1250,
    type: "bestsellers",
  },
  {
    id: "ee1f7c56-f977-40a4-9642-12ba5072e2b0",
    image: "pictures/ingredientsAndItems/free-gummy-bears.png",
    name: "Free Sugar, Gummy Bears - 100g",
    rating: {
      stars: 4.5,
      count: 9017,
    },
    priceCents: 2290,
    type: "bestsellers",
  },
  {
    id: "1c079479-8586-494f-ab53-219325432536",
    image: "pictures/ingredientsAndItems/Organic-cinnamon.png",
    name: "Organic Ceylon Cinnamon Powder - 100g",
    rating: {
      stars: 4,
      count: 229,
    },
    priceCents: 3890,
    type: "bestsellers",
  },
];
=======
export function formatCurrency(priceCents) {
  return (Math.round(priceCents) / 100).toFixed(2);
}

export const productsCompoundedList = [
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c7",
    image: "pictures/ingredientsAndItems/365-flour-front.png",
    name: "365 flour - 1kg",
    rating: {
      stars: 3,
      count: 10,
    },
    priceCents: 100000,
    type: ["trim"],
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
    type: ["trim"],
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
    type: ["trim"],
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
    type: ["trim"],
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
    type: ["trim"],
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
    type: ["trim"],
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
    type: ["trim"],
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
    type: ["trim"],
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
    type: ["trim"],
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
    type: ["trim"],
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
    type: ["trim"],
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
    type: ["clothing"],
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
    type: ["trim"],
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
    type: ["trim"],
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
    type: ["trim"],
  },
  {
    id: "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",
    image: "pictures/ingredientsAndItems/Rectangle248.png",
    name: "Runmo Pasta Mista N75-500Gr",
    rating: {
      stars: 4,
      count: 160,
    },
    priceCents: 1699,
    type: ["trim"],
  },
  {
    id: "c2a82c5e-aff4-435f-9975-517cfaba2ecf",
    image: "pictures/ingredientsAndItems/italian-looking.png",
    name: "Legumi-Cannelini-1Box 180",
    rating: {
      stars: 5,
      count: 846,
    },
    priceCents: 3074,
    type: ["trim"],
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
    type: ["trim"],
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
    type: ["trim"],
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
    type: ["trim"],
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
    type: ["trim"],
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
    type: ["food"],
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
    type: ["trim"],
  },
  {
    id: "4f4fbcc2-4e72-45cc-935c-9e13d79cc57f",
    image: "pictures/ingredientsAndItems/bionna.png",
    name: "Biona Italian Wholegrain Pasta - 500g",
    rating: {
      stars: 4,
      count: 326,
    },
    priceCents: 2640,
    type: "bestsellers",
  },
  {
    id: "8b5a2ee1-6055-422a-a666-b34ba28b76d4",
    image: "pictures/ingredientsAndItems/clearspring.png",
    name: "Clearspring Gluten Free Green Peas & Pasta - 250g",
    rating: {
      stars: 4.5,
      count: 2556,
    },
    priceCents: 1599,
    type: "bestsellers",
  },
  {
    id: "b86ddc8b-3501-4b17-9889-a3bad6fb585f",
    image: "pictures/ingredientsAndItems/tahiini-cereal.png",
    name: "Cereal Bar With Tahini & Cacao - 60g",
    rating: {
      stars: 4.5,
      count: 2286,
    },
    priceCents: 8300,
    type: "bestsellers",
  },
  {
    id: "19c6a64a-5463-4d45-9af8-e41140a4100c",
    image: "pictures/ingredientsAndItems/doves.png",
    name: "Doves Farm Organic Plain White Flour - 1kg",
    rating: {
      stars: 4,
      count: 456,
    },
    priceCents: 2399,
    type: "bestsellers",
  },
  {
    id: "d2785924-743d-49b3-8f03-ec258e640503",
    image: "pictures/ingredientsAndItems/organic-raw-cocoa.png",
    name: "Organic Raw Cacao Powder - 227g",
    rating: {
      stars: 5,
      count: 83,
    },
    priceCents: 1250,
    type: "bestsellers",
  },
  {
    id: "ee1f7c56-f977-40a4-9642-12ba5072e2b0",
    image: "pictures/ingredientsAndItems/free-gummy-bears.png",
    name: "Free Sugar, Gummy Bears - 100g",
    rating: {
      stars: 4.5,
      count: 9017,
    },
    priceCents: 2290,
    type: "bestsellers",
  },
  {
    id: "1c079479-8586-494f-ab53-219325432536",
    image: "pictures/ingredientsAndItems/Organic-cinnamon.png",
    name: "Organic Ceylon Cinnamon Powder - 100g",
    rating: {
      stars: 4,
      count: 229,
    },
    priceCents: 3890,
    type: "bestsellers",
  },
];
>>>>>>> c567e1f2b29106e040a68be4aa52925831e7a4ed
