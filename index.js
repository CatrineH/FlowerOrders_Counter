let saveEl = document.getElementById("save-el")
let canceledEl = document.getElementById("canceled-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function decrement() {
    count -= 1
    canceledEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    canceledEl.textContent -= countStr
    countEl.textContent = 0
    count = 0
}
