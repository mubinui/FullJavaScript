let count = 0
let countEl = document.getElementById("count-el")
let welcomeEl = document.getElementById("welcome-el")

function increment(){
    count+=1
    countEl.innerText = count
}

function countdown(){
    for (let i=0; i<10; i++){
        console.log(i)
    }
}

var kount = " "
function save (){
    kount += count + " "
    count = 0
    welcomeEl.textContent = kount

}

console.log("4"+"5")
console.log("5"+2)



