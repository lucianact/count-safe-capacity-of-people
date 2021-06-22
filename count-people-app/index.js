// with function and onclick html property
let countPerson = document.getElementById("count-el") 
let people = 0
const increment = () => {
    people += 1;
    countPerson.innerText = people;
};

// with event listener 
// let addPersonButton = document.getElementById("increment-btn")
// let countPerson = document.getElementById("count-el")
// let count = 0
// addPersonButton.addEventListener("click", () => {
//     count += 1
//     countPerson.innerHTML = count;
// }); 

// with jQuery:
// let count = 0; 
// $("#increment-btn").click( function() {
//     count += 1;
//     $("#count-el").text = count; 
// });