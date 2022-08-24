let saveEl = document.getElementById("save-el")
let ordersEl = document.getElementById("orders-el")
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
    let countStr = count + " , "
    let countStrDe = count - " , "
    saveEl.textContent += countStr
    ordersEl.textContent -= countStrDe
    countEl.textContent = 0
    count = 0
}

function orders() {
 let ordersEl = increment + decrement   
}
