// function moodReport(n1 = "🙂", n2 = " morning 🌅") {
//   return `Feeling ${n1} this ${n2}`;
// }

// //  Feeling 😎 this afternoon ☀️.

// console.log(moodReport());
// console.log(moodReport("😎", "afternoon ☀️"));

//=============================================================

// Task 02

// function checkAgeCategory(age = 18) {
//   var ans;
//   if (age < 18) {
//     ans = `🧒 Minor`;
//   } else if (age >= 60) {
//     ans = `🧓 Senior`;
//   } else {
//     ans = `👨 Adult`;
//   }
//   return ans;
// }
// console.log(checkAgeCategory());
// console.log(checkAgeCategory(17));
// console.log(checkAgeCategory(65));

//=================================================================

// Task 03        Wizard Intro

// const wizard = { name: "Merlin", title: "Archmage",
//   wand: {
//     core: "Phoenix Feather"
//    } };

// function introduceWizard(wizardObj){
//   const {name, title, wand:{core}} = wizardObj
//   return `${title} ${name} wields a wand with ${core} core.`

// }

// console.log(introduceWizard(wizard));

// ===============================================================

// Task 04      Combine & Add

// const shelf = ["🍎", "🥪"];
// const delivery = ["🍫", "🍇"];

// function mergeInventory(existing, incoming){
//   return [...existing, ...incoming]
// }

// console.log(mergeInventory(shelf, delivery));

//==================================================================

// Task 05      🎒 Bag Check

// function packBag(owner = "Anon", ...items) {
//   var res
//   if (items.length === 0) {
//     return `🎒 ${owner}'s bag is empty.`;
//   } else {
//     return `🎒 ${owner}'s bag contains: ${items} `;
//   }
// }

// console.log(packBag("Natasha", "💄", "🔫"));
// console.log(packBag());

// 🎒 Natasha's bag contains: 💄, 🔫
// 🎒 Anon's bag is empty.
//================================================================

// Task 06        📍Where Are You?

function whereAreYou(personObj) {
  const {
    user = "Someone",
    location = {}
  } = personObj;
  const {city = "Unknown", planet = "Earth"} = location

  return `${user} is currently in ${city}, ${planet} 🌍`;
}

console.log(
  whereAreYou({
    user: "Thor",
    location: { city: "Asgard", planet: "Yggdrasil" },
  })
);
console.log(whereAreYou({}));

// Thor is currently in Asgard, Yggdrasil 🌍
// Someone is currently in Unknown, Earth 🌍
