const ratings = document.querySelectorAll("button");
const ratingDiv = document.querySelector("#rating-modal");
const thankYouDiv = document.querySelector("#thank-you-modal");
const submitButton = document.querySelector("#submit-button");
const actualRating = document.getElementById("score");

submitButton.addEventListener("click", () => {
  ratingDiv.style.display = "none";
  thankYouDiv.classList.remove("hidden");

  ratings.forEach((rating) => {
    rating.addEventListener("click", () => {
      const score = rating.value;
      const scoreNum = Number(score);

      actualRating.innerText = scoreNum;
    });
  });
});
