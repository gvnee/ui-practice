const minus = document.querySelector(".minus-button");
const plus = document.querySelector(".plus-button");

const quantity = document.querySelector(".quantity");

//quantity button
minus.addEventListener("click", e => {
    if(quantity.textContent > 0){
        quantity.textContent--;
    }
});
plus.addEventListener("click", e => {
        quantity.textContent++;
});


//gallery
const bigImages = document.querySelectorAll(".main-image");
const smollImages = document.querySelectorAll(".preview");

let previousImage = 0;

for(let i = 0;i<smollImages.length;i++){
    smollImages[i].addEventListener("click", e => {
        bigImages[previousImage].classList.add("hidden");
        previousImage = i;
        bigImages[i].classList.remove("hidden");

        const formerActiveTumbnail = document.getElementById("selectedTumbnail");
        formerActiveTumbnail.removeAttribute("id");
        smollImages[i].setAttribute("id", "selectedTumbnail");
    });
}

// console.log(bigImages);