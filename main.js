const mainContainer = document.querySelector(".main-container");
const thanksContainer = document.querySelector(".thank-you");

const submitBtn = document.getElementById("submit");
const rateAgainBtn = document.getElementById("rate-again");

const rating = document.getElementById("rating");
const ratesBtn = document.querySelectorAll(".btn");

submitBtn.addEventListener("click", () => {
  thanksContainer.classList.toggle("hidden")
  mainContainer.classList.toggle("hidden")
})

rateAgainBtn.addEventListener("click", () => {
  thanksContainer.classList.toggle("hidden")
  mainContainer.classList.toggle("hidden")
})

ratesBtn.forEach((rate) => {
  rate.addEventListener("click", () => {
    // console.log(rate.innerHTML)
    rating.innerHTML = rate.innerHTML
  })
})

