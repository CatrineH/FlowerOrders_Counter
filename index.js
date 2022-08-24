
let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")
let canceledEl = document.getElementById("canceled-el")
let ordersTotal = document.getElementById("orders")

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
    canceledEl.textContent -= countStrDe
    countEl.textContent = 0
    count = 0
}

function Orders(increment, decrement) {
    this.orderIncrement = increment;
    this.orderDecrement = decrement;  
}

let totalOrders = new Orders(increment + decrement);
document.getElementById("orders".innerHTML = "Total Flower orders for today is " totalOrders.orderIncrement + totalOrders.orderDecrement " . "

