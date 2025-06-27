const csk1 = {
  captain: "MSD",
  color: "yellow",
  stats: {
    win: 5,
    loss: 11,
  },
};

const csk2 = {
  captain: "MSD",
  color: "yellow",
  stats: {
    loss: 11,
  },
};

// console.log(csk2.stats.win);

const csk3 = {
  captain: "MSD",
  color: "yellow",
};

const csk = null;

function getWinStat1(winobj) {
    if (winobj == null){
        return "Data not found"
    }else if (winobj.stats == undefined){
        return "Data not found"
    }else if (winobj.stats.win == undefined){
        return "Data not found"
    }
        return `${winobj.stats.win}`

}

function getWinStat2(team) {
    if (!team || !team.stats || !team.stats.win){
        return "Data not found" 
    }
     return team.stats.win
}
// Defensive code
function getWinStat3(team) {
    // Truthy
    if (team && team.stats && team.stats.win){
        return  team.stats.win
    }
     return "Data not found"
}

function getWinStat4(team) {
    return team && team.stats && team.stats.win ? team.stats.win :  "Data not found"
}

// Ternary Operator  ==> A shorthand for if...else.
// condition ? expressionIfTrue : expressionIfFalse;

function getWinStat5(team) {
    return team?.stats?.win ? team.stats.win :  "Data not found"
}

// nullish coalescing
function getWinStat6(team) {
    return team?.stats?.win ??  "Data not found"
}
// Optional Chaining ?.
function getWinStat(team) {
    if (team?.stats?.win){  // truthy   ==> 
        return  team.stats.win
    }
     return "Data not found"
}

const getWinStat = (team) => team?.stats?.win ??  "Data not found" 

console.log(getWinStat(csk1));
console.log(getWinStat(csk2));
console.log(getWinStat(csk3));
console.log(getWinStat(csk));