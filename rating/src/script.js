const activeRating = document.getElementsByClassName("rating");
// activeRating[0].onClick = a;
// function a(){
//     console.log('hello');
// }
console.log(activeRating);
let numb = activeRating.length;
console.log(numb);
for (let i = 0; i < activeRating.length; i++) {
    activeRating[i].style.backgroundColor = "red";
  }