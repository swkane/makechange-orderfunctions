console.assert(waysToChange(12) === 4, "ways to change should be 4");
console.assert(waysToChange(17) === 6, "ways to change should be 6");
console.assert(waysToChange(35) === 24, "ways to change should be 24");




function waysToChange(value) {
  let numberOfWays = 0;
  let quarters = 0;
  while (quarters <= value/25) {
    let dimes = 0;
    while (dimes <= (value-quarters*25)/10) {
      let nickels = 0;
      while (nickels <= (value-quarters*25-dimes*10)/5) {
        console.log("quarters: ", quarters, "dimes: ", dimes, "nickels: ", nickels, "the rest are pennies");
        numberOfWays ++;
        nickels ++;
      }
      dimes++;
    }
    quarters++;
  }
  return numberOfWays;
}

// 20 larges
// 9 mediums
// 6 smalls


console.assert(waysToOrder(5) === 0, "ways to order should be 0");
console.assert(waysToOrder(12) === 1, "ways to order should be 1");
console.assert(waysToOrder(18) === 2, "ways to order should be 2");
console.assert(waysToOrder(30) === 2, "ways to order should be 2");
console.assert(waysToOrder(5) === 0, "ways to order should be 0");


function waysToOrder(value) {
  let numberOfWays = 0;
  let larges = 0;
  while (larges <= value/20) {
    let mediums = 0;
    while (mediums <= (value-larges*20)/9) {
      let smalls = 0;
      while (smalls <= (value-larges*20-mediums*9)/6) {
        if (value-larges*20-mediums*9-smalls*6 === 0) {
          // console.log("larges: ", larges, "mediums: ", mediums, "smalls: ", smalls);
          numberOfWays++;
        } else {
          // console.log("Cannot reach number");
        }
        smalls++;
      }
      mediums++;
    }
    larges++;
  }
  return numberOfWays;
}

// Check for the highest number that would return 0 , => 43
// let array = [];
// for (var i = 0; i < 1000; i++) {
//   array.push(waysToOrder(i));
// }
// console.log(array);
