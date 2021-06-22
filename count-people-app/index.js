// INCREMENTATION
// with function and onclick html property
let countPeople = document.getElementById("count-el") 
let count = 0
const increment = () => {
    count += 1;
    countPeople.innerText = count;
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

// SAVE
let savedEntries = document.getElementById("save-el");
let save = () => {
    let previousCount = count + " - "; 
    savedEntries.innerText += " " + previousCount; 
    count = 0;
    countPeople.innerText = count;
}

// let totalCapacity = document.getElementById("total-capacity").value;
let totalCapacityBtn = document.getElementById("capacity-btn");
let totalCapacityDiv = document.getElementById("total-capacity-div");
let totalCapacityDivAnswer = document.getElementById("total-capacity-div-answer");
let totalCapacityNumber = document.getElementById("total-capacity-number");
totalCapacityBtn.addEventListener("click", () => {
    let totalCapacity = document.getElementById("total-capacity").value;
    totalCapacityDiv.style.display="none";
    totalCapacityNumber.innerHTML = totalCapacity;
    console.log(totalCapacity)
    totalCapacityDivAnswer.style.display="block";
})
