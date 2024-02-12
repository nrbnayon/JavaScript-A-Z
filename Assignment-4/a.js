function monthlySavings(allPayment, livingCost) {
  if (
    Array.isArray(allPayment) &&
    !isNaN(livingCost) &&
    typeof livingCost === "number"
  ) {
    let lowEarn = 0;
    let bigEran = [];
    for (let i = 0; i < allPayment.length; i++) {
      if (allPayment[i] >= 3000) {
        bigEran.push(allPayment[i]);
      } else {
        lowEarn += allPayment[i];
      }
    }
    let bankTaxMoney = 0;
    for (let i = 0; i < bigEran.length; i++) {
      bankTaxMoney = bankTaxMoney + bigEran[i];
    }
    let eachMonthSavings =
      bankTaxMoney - (bankTaxMoney * 20) / 100 + lowEarn - livingCost;
    if (eachMonthSavings < 0) {
      return "Please Earn More";
    }
    {
      return eachMonthSavings;
    }
  } else {
    return "Sorry!, Invalid Input try again";
  }
}
const taka = monthlySavings(100, [900, 2700, 3400]);
console.log(taka);
