
let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")
let canceledEl = document.getElementById("canceled-el")
let ordersEl = document.getElementById("orders-el");

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

function orders(){
    let countEl = -Infinity;
    saveEl.textContent += countStr
    canceledEl.textContent -= countStrDe
    countEl.textContent = 0
    count = 0
    for (let i = 0; i < count.length; i++) {
        if ( count[i] > max) {
            max = count[i];
        }
    }
    return count;
    

}

    

