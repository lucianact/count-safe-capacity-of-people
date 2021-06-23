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

// let totalCapacity = document.getElementById("total-capacity").value;
let capacityBtn = document.getElementById("capacity-btn");
let capacityDivs = document.getElementById("capacity-divs");
let capacityAnswers = document.getElementById("capacity-answers");
let peopleCountDiv = document.getElementById("people-count");
let totalCapacityNumber = document.getElementById("total-capacity-number");
let capacityPercentageNumber = document.getElementById("percentage-capacity-number");
let safeAmountOfPeople = document.getElementById("amount-people");
capacityBtn.addEventListener("click", () => {
    let totalCapacity = document.getElementById("total-capacity").value;
    let percentageCapacity = document.getElementById("capacity-percentage").value;
    let checkTotalCapacity = parseInt(totalCapacity);
    let checkPercentageCapacity = parseInt(percentageCapacity);
    if (isNaN(checkTotalCapacity) || (isNaN(checkPercentageCapacity))) {
        alert("Please provide a valid number!")
    }
    else {
        percentageCount = checkTotalCapacity * checkPercentageCapacity / 100;
        console.log(percentageCount);
        capacityDivs.style.display="none";
        totalCapacityNumber.innerHTML = totalCapacity;
        capacityPercentageNumber.innerHTML = percentageCapacity + "%";
        safeAmountOfPeople.innerHTML = percentageCount;
        capacityAnswers.style.display="block";
    }
})

// INCREMENTATION
// with function and onclick html property
let countPeople = document.getElementById("count-el") 
let count = 0
const increment = () => {
    count += 1;
    countPeople.innerText = count;
    if (count === percentageCount) {
        alert("stop!")
    }
};

// SAVE
let savedEntries = document.getElementById("save-el");
let save = () => {
    let previousCount = count + " - "; 
    savedEntries.innerText += " " + previousCount; 
    count = 0;
    countPeople.innerText = count;
}