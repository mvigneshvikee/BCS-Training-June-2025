
const orders = [
  {
    id: 1,
    dishName: "Burger",
    category: "Fast Food",
    chef: "John Doe",
    ratings: [5, 4, 5, 5, 4,5],
  },
  {
    id: 2,
    dishName: "Pizza",
    category: "Italian",
    chef: "Jane Smith",
    ratings: [4, 3, 5],
  },
  {
    id: 3,
    dishName: "Sushi",
    category: "Japanese",
    chef: "Tom Brown",
    ratings: [5, 5, 4],
  },
  {
    id: 4,
    dishName: "Salad",
    category: "Healthy",
    chef: "Alice Green",
    ratings: [3, 4, 5],
  },
  {
    id: 5,
    dishName: "Pasta",
    category: "Italian",
    chef: "Gowtam Tinnanuri",
    ratings: [4, 4, 5],
  },
];

const getDishNamesByIds1 = (orders, ...ids) => {
  return orders
    .filter(order => ids.includes(order.id))
    .map(order => order.dishName) 
   .join(", ")
}

const getDishNamesByIds2 = (orders, ...ids) => {
  return ids
    .map(id => orders.find(order => order.id == id) ? orders.find(order => order.id == id).dishName : "Unknown Dish" )
    .join(", ")
}


const getDishNamesByIds5 = (orders, ...ids) => {
  return ids
    .map(id => orders.find(order => order.id == id)?.dishName ?? "Unknown Dish" )
    .join(", ")
}


const getDishNamesByIds4 = (orders, ...ids) => {
  return ids
    .map(id => orders.filter(order => order.id == id)[0]?.dishName ?? "Unknown Dish" )
    .join(", ")
}


const getDishNamesByIds = (orders, ...ids) =>  ids
    .map(id => orders.find(order => order.id == id)?.dishName ?? "Unknown Dish" )
    .join(", ")

  console.log(getDishNamesByIds(orders, 1, 3, 5, 8, 2));



const listOrders = (...orders) =>  
    orders
    .map(order => `${order?.dishName ?? 'Unknown Dish'} (${order?.category ?? 'Unknown Category'})`  )
    .join(", ");

   console.log(listOrders(...orders));

   console.log(listOrders(orders[0], orders[1], orders[111]));

let student = {};

// student.age = 20;

// let key = 'name'
// student[key] = "Vikki";


const getTotalRatingsForChefs1 = (orders)=> {
   let acc = {};
    for(let order of orders){
    let key = order.chef // "John Doe"
    //   Dynamic - Growing {}
    acc[key] = order.ratings.length
  }
  
  return acc
}

const getTotalRatingsForChefs = (orders)=> 
  orders.reduce((acc, order) => ({...acc, [order.chef]: order.ratings.length }), {})



 console.log(getTotalRatingsForChefs(orders));



