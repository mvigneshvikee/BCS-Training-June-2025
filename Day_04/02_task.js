// Output
// Case 1
// Please enter your fav 🍧?: vanilla
// Yes, we have vanilla in stock

// Case 2
// Please enter your fav 🍧?: strawberry
// We ran out of strawberryvar stock1 = "vanila"

var stock1 = "vanilla";
var stock2 = "chocolate";
var stock3 = "butterscotch";
var stock4 = "cottoncandy";

var iceCream = window
  .prompt("Please enter your fav 🍧?: ")
  .trim()
  .toLowerCase();

// if (stock1 == iceCream) {
//   console.log(`Yes, we have ${iceCream} in stock`);
// } else if (stock2 == iceCream) {
//   console.log(`Yes, we have ${iceCream} in stock`);
// } else if (stock3 == iceCream) {
//   console.log(`Yes, we have ${iceCream} in stock`);
// } else if (stock3 == iceCream) {
//   console.log(`Yes, we have ${iceCream} in stock`);
// } else {
//   console.log(`We ran out of ${iceCream} in stock`);
// }

//-----------------------------------------------------------------------------------------------------------------------------------
// iceCream = iceCream.trim().toLowerCase();

if (
  stock1 == iceCream ||
  stock3 == iceCream ||
  stock2 == iceCream ||
  stock4 == iceCream
) {
  console.log(`Yes, we have ${iceCream} in stock`);
} else {
  console.log(`We ran out of ${iceCream} in stock`);
}

// if (stock1 == iceCream) {
//   console.log("Yes, we have vanilla in stock");
// } else if (stock2 == trimIce) {
//   console.log("Yes, we have chocolate in stock");
// } else if (stock3 == trimIce) {
//   console.log("Yes, we have butterscotch in stock");
// } else if (stock3 == trimIce) {
//   console.log("Yes, we have cotton candy in stock");
// } else {
//   console.log(`We ran out of ${trimIce} in stock`);
// }
