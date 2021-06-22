// javascript
let addPersonButton = document.getElementById("increment-btn")
let countPerson = document.getElementById("count-el")

// with function and onclick html property 
let people = 0
const increment = () => {
    people += 1;
    countPerson.innerText = people;
};

// with event listener 
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