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

        // bigImages[previousImage].classList.add("hidden");
        // bigImages[i].classList.remove("hidden");

        imageSlide(bigImages, previousImage, i);

        previousImage = i;

        const formerActiveTumbnail = document.getElementById("selectedTumbnail");
        formerActiveTumbnail.removeAttribute("id");
        smollImages[i].setAttribute("id", "selectedTumbnail");
    });
}

//cart dropdown
const cartButton = document.getElementById("cartButton");
const cartDropdown = document.getElementById("cart-dropdown");

cartButton.addEventListener("click", e => {
    cartDropdown.classList.toggle("hidden");
});

//popup
const popup = document.querySelector(".popup-preview");

let previuosPopupImage = 0;

for(let i = 0;i<bigImages.length;i++){
    bigImages[i].addEventListener("click", e => {

        //activate popup
        popup.classList.remove("hidden");
        document.body.classList.add("popup-active");



        const popupImages = document.querySelectorAll(".popup-image");
        imageSlide(popupImages, previuosPopupImage, i);
        previuosPopupImage = i;
        
    });
}

//close button
const closeButton = document.querySelector(".close-button");

closeButton.addEventListener("click", e => {
    popup.classList.add("hidden");
    document.body.classList.remove("popup-active");
});



function imageSlide(images, current, next){
    images[current].classList.add("hidden");
    images[next].classList.remove("hidden");
}