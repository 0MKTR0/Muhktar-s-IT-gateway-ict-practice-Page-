import { runTopDiv } from "./reusable-variables.js";

runTopDiv(".topDiv");

document.querySelector(".changer").addEventListener("click", () => {
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
