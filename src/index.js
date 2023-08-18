module.exports = function toReadable (number) {
  const numsObj = { 
    "0": "zero",
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eight",
    "9": "nine",
    "10": "ten",
    "11": "eleven",
    "12": "twelve",
    "13": "thirteen",
    "14": "fourteen",
    "15": "fifteen",
    "16": "sixteen",
    "17": "seventeen",
    "18": "eighteen",
    "19": "nineteen",
    "20": "twenty",
    "30": "thirty",
    "40": "forty",
    "50": "fifty",
    "60": "sixty",
    "70": "seventy",
    "80": "eighty",
    "90": "ninety",
    "100" : "one hundred",
    "200" : "two hundred",
    "300" : "three hundred",
    "400" : "four hundred",
    "500" : "five hundred",
    "600" : "six hundred",
    "700" : "seven hundred",
    "800" : "eight hundred",
    "900" : "nine hundred",
  }
  if (number in numsObj) {
    return numsObj[number]
  }else if (number<100) {
        const tens = (Math.floor(number/10))*10
        const ones = number%10;
        return `${numsObj[tens]} ${numsObj[ones]}`
    }else if (number<1000) {
        const hundreds = (Math.floor(number/100))*100;
        const tens = Math.floor((number%100)/10)*10
        const teens = number%100
        const ones = number%10
        if (tens ===0 && ones  ===0 ) {
            return numsObj[hundreds]
        }else if (tens ===0) {
            return `${numsObj[hundreds]} ${numsObj[ones]}`
        }else if(teens >10 && teens<20) {
            return `${numsObj[hundreds]} ${numsObj[teens]}`
        }
        else if (ones ===0) {
            return `${numsObj[hundreds]} ${numsObj[tens]}`
        }
        else {
            return `${numsObj[hundreds]} ${numsObj[tens]} ${numsObj[ones]}`
        }
        
    }
  }
