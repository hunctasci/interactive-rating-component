const ratings = document.querySelectorAll("#rate");
const ratingDiv = document.querySelector("#rating-modal");
const thankYouDiv = document.querySelector("#thank-you-modal");
const submitButton = document.querySelector("#submit-button");
const span = document.getElementById("score");

let number = "";
ratings.forEach((rating) => {
  rating.addEventListener("click", (e) => {
    rating.classList.replace("bg-gray-500", "bg-neutral-100");
    number = e.target.innerText;
    span.innerText = number;
  });
});

submitButton.addEventListener("click", () => {
  ratingDiv.style.display = "none";
  thankYouDiv.classList.remove("hidden");
});
