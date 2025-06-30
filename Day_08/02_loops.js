var x = "hi"

// for(let i = 1; i <= 10; i++ ){
//     console.log("Hi")
// }

const codes = ["alpha", "beta","gamma", "delta"]

// for (let i = 0; i < 4; i++){
//     console.log(codes[i])
// }

// Task 01

const avengers = ["Hulk", "Iron man", "Blac widow", "Captain ameria", "Spider man", "Thor"]

function countLetter(countLetterobj){
    for (let avenger of countLetterobj){
        console.log(`${avenger} contains ${avenger.length} letters`)
    }
    // return `${avenger} contains ${avenger.length} letters`}

}
// for (let avenger of avengers){
//     console.log(`${avenger} contains ${avenger.length} letters`)
// }
// countLetter(avengers)

//======================================

// Task 02   

function printPattern1(heart,num){
    for(let i = 1; i <= num; i++){
        console.log(i)
        for(let j = 1; j <=i; j++ ){
            console.log(heart)
        }
    }
}

function printPattern1(heart,num){
    for(let i= 1; i<=num; i++){
        console.log(heart.repeat(i))
    }
}

function printPattern(heart = "❤",num = 5){
    for(let i= 1; i<=num; i++){
        console.log(heart.repeat(i))
    }
}
printPattern("😁",5)
printPattern("💚",5)
printPattern("💔",5)
printPattern("🧡",5)
printPattern();

//==========================================================================

// Task 03
const nums = [80,43,72,47,20,21]
function getEvenNumbers(num){
     var evenNum = []
    for(let even of num){
        if(even % 2 == 0){           
            evenNum.push(even)            
        }
    }
    console.log(evenNum)
}
getEvenNumbers(nums)