// create a prompt to inform user of froyo flavors
// allow the user to enter the list of flavors they want with correct quantity of scoops
// define a variable called flavorList that is made by what user enters
// This variable is then split with string.split method (,)
// call the function
// use a for ... in loop (can iterate through an object) for each quantity to count user's selection
// return a table listing the flavor they selected with the correct quantity of scoops
// return 3 vanilla, 2 coffee, 1 strawberry (what user inputs)

let flavors = prompt("Please enter froyo flavors you would like using commas to separate them");
const flavorList = flavors.split(",");

const flavorCount = (orderList) => {
let froyo = {};
//for (let i in flavorList) {
  for (let i = 0; i < flavorList.length; i++) {
    if (froyo[flavorList[i]]) {
      froyo[flavorList[i]]++;
    } else {
      froyo[flavorList[i]] = 1;
    }
  }
  return froyo;
}

console.log(flavorCount());
//console.table(flavorList);