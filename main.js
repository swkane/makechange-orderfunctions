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

function waysToOrder(value) {
  let numberOfWays = 0;
  let larges = 0;
  while (larges <= value/20) {
    let mediums = 0;
    while (mediums <= (value-larges*20)/9) {
      let smalls = 1;
      while (smalls <= (value-larges*20-mediums*9)/6) {
        // make sure that there is no remainder in order to increment, x%y === 0
        if (value-larges*20-mediums*9-smalls*6 === 0) {
          console.log("larges: ", larges, "mediums: ", mediums, "smalls: ", smalls);
          numberOfWays++;
        } else {
          console.log("Cannot reach number");
        }
        smalls++;
      }
      mediums++;
    }
    larges++;
  }
  return numberOfWays;
}
