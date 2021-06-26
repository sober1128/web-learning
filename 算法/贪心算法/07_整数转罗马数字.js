//  12
var intToRoman = function(num) {
  const valueSymbols = [
    [1000, "M"], 
    [900, "CM"], 
    [500, "D"], 
    [400, "CD"], 
    [100, "C"], 
    [90, "XC"], 
    [50, "L"], 
    [40, "XL"], 
    [10, "X"], 
    [9, "IX"], 
    [5, "V"], 
    [4, "IV"], 
    [1, "I"]
  ];
  const res = [];
  for(const valueSymbol of valueSymbols) {
    const [value, symbol] = valueSymbol;
    while(num >= value) {
      num -= value;
      res.push(symbol);
    }
    if(num == 0) break;
  }
  return res;
}

// 时间复杂度为 O(logN)  空间复杂度O(1)