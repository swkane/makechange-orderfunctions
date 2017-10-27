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
