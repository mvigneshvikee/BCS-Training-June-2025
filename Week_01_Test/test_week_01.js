// Task 1       Hero ID Formatter 

// const heroName = prompt("Enter a Hero name: ")

// console.log(heroName.toLowerCase())
// console.log(heroName.toUpperCase())

//==============================================

// Task 02      Suit Version Type Check


// const suitVersion = prompt("Enter a Iron Man Suit Version:")
// const typeChange = parseInt(suitVersion)
// console.log(typeof(suitVersion))
// console.log(typeof(typeChange))

//  ===============================================

// TAsk 03      Hulk Smash Echo

// var soundEffect = prompt("Enter a Sound Effect:")
// console.log(soundEffect.repeat(3))

//=============================================================


//  Task 04                 Stark Credits Calculator


// const wallet1 = +prompt("Enter a First Stark Balance Value:")
// const wallet2 = +prompt("Enter a Second Stark Balance Value:")

// const result = wallet1 + wallet2

// console.log(`Your total balance is ${result} credits.`)

//==============================================================


// Task 05          Shield Temperature Scanner


// var celsius = + prompt("Enter a Shield Surface temperature:")
// if (celsius > 120){
//     console.log("🔥 Overheated!")
// }else if (celsius < 10){
//     console.log("❄️ Frozen!")
// }else{
//     console.log("🛡️ Stable.")
// }

//================================================================

// Task 06          Infinity Stone Energy Rank


// var powerLevel = +prompt("Enter a Power level of Infinity Stone:")
// if (powerLevel > 90){
//     console.log("Legendary 💎")
// }else if (powerLevel < 60){
//     console.log("Weak 🪨")
// }else{
//     console.log("Potent ⚡")
// }

//=================================================

// Task 07          Stark Email Generator

// var mail = prompt("Enter a Name:").toLowerCase().trim()
// console.log(`${mail}@starkindustries.com`)

//=================================

// Task 08          Jarvis Access Gate

var num = +prompt("Enter a Access code:")

if (num == 1700){
    console.log("⚠️ Override mode activated")
}else if (num >= 1000 && num <=1999){
    console.log("Access granted")
}else{
    console.log("Access denied")
}


// ==============================

// Task 09              Speed Duel – Quicksilver vs Hawkeye

// var quicksilverSpeed = +prompt("Enter a Quiksilver speed:")
// var hawkeyeSpeed = +prompt("Enter a Hawkeye speed:")

// var result = Math.abs(quicksilverSpeed - hawkeyeSpeed)
// if (quicksilverSpeed > hawkeyeSpeed){
//     console.log(`Quicksilver is faster than Hawkeye by ${result} km/h.`)
// }else{
//     console.log(`Hawkeye is faster than Quicksilver by ${result} km/h.`)
// }


//================================================

// Task 10               S.H.I.E.L.D. Agent Validation 

// var agentName = prompt("Enter a Agent Name:").trim().toLowerCase()

// if (agentName == "natasha" || agentName =="clint" || agentName == "nick"){
//     console.log("🛡️ Access granted")
// }else{
//     console.log("⛔ Unauthorized")
// }
 