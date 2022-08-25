
let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")
let canceledEl = document.getElementById("canceled-el")

function increment() {
    count += 1
    countEl.textContent = count
}

function decrement() {
    count -= 1
//     canceledEl.textContent = count
    countEl.innerText = count
}

function save() {
    let countStr = count + " , "
    let countStrDe = count - " , "
    saveEl.textContent += countStr
    canceledEl.textContent -= countStrDe
    countEl.textContent = 0
    count = 0
    
 
}
// foreach method
// event listner function
saveEl.array.forEach(countEl => {
    let countEl = countEl.currentCountEl
    
     //condition for counter variable
     if (countEl.innerText == count) {
        count = 0;
     }
     else if (countEl.innerText == countStr) {
        count++;
     }
     else if (countEl.innerText == countStrDe) {
        count--;
     }
})


    

