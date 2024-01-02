const submitBtn = document.querySelector("button");
const input_mail = document.querySelector("#inp");
const successMessage = document.querySelector("#success-message");
const data = document.querySelector(".data");
const imgContainer = document.querySelector(".img-container");
const notValidInp = document.querySelector("#noValidInp");
const dismissBtn = document.querySelector("#dismiss");

submitBtn.addEventListener("click", () => {
  let format = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;

  if (input_mail.value && format.test(input_mail.value)) {
    successMessage.classList.remove("hidden");
    data.classList.add("hidden");
    imgContainer.classList.add("hidden");
    successMessage.children[2].children[0].innerHTML = input_mail.value;
  } else {
    input_mail.classList.add("error");
    notValidInp.classList.remove("hidden");
  }
});

dismissBtn.addEventListener("click", () => {
  setTimeout(() => {
    window.location.reload();
  }, 1000);
});
