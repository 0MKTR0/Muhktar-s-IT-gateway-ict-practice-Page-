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

console.log(document.querySelector(".input-for-eye").type);

const changingTitle = setInterval(() => {
  if (document.title === "Muhktar's sign-in page") {
    document.title = "Rahba Products";
  } else {
    document.title = "Muhktar's sign-in page";
  }
}, 3000);

changingTitle();
