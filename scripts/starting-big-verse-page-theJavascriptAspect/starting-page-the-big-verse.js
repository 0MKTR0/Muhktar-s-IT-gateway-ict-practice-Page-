import { runTopDiv, runLastDiv, hidesFixedBar } from "../reusable-variables.js";
import "../starting-big-verse-page-theJavascriptAspect/timeCountDown.js";
import {
  fillsIngredientsRow,
  fillsBottomOARight,
  fillsNewReleaseBottom,
  fillsFeaturedProductsBottom,
  fillsBestSellers,
  fillsBrandImages,
  fillsBrandFeatures,
  fillsMobileApps,
} from "./generativeCartLists.js";

runTopDiv(".topDiv");
hidesFixedBar();
runLastDiv(".lastDiv");

fillsIngredientsRow();
fillsBottomOARight();
fillsNewReleaseBottom();
fillsFeaturedProductsBottom();
fillsBestSellers();
fillsBrandImages();
fillsBrandFeatures();
fillsMobileApps();

/*const anArray = [{ treesh: [0, "treesh"] }, { treesh: [1, "treesh2"] }].map(
  (product) => {
    console.log(product.treesh[1]);
  }
);*/
