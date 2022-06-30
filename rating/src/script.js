const ratings = document.querySelectorAll(".rating");
let ratingNumber;

for(let i = 0;i<ratings.length;i++){

  ratings[i].addEventListener("click", e => {

    const formerActive = document.getElementById("active");
    if(formerActive !== null) formerActive.removeAttribute("id");
    ratings[i].setAttribute("id", "active");
    ratingNumber = i+1;

  });
}

const submit = document.querySelector("#submit");

submit.addEventListener("click", e => {

  document.querySelector(".rate").classList.add("none");
  document.querySelector(".thanks").classList.remove("none");

  const a = document.querySelector(".final-rating");
  a.textContent = "You selected " + ratingNumber + " out of 5";

});