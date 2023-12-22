let expencesExamples = [
  {
    yearlyExpences: [
      2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390,
    ],
  },
  {
    yearlyExpences: [
      500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200,
    ],
  },
  {
    yearlyExpences: [
      20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000,
    ],
  },
];

         expencesExamples.forEach(exp => {
            sum = 0
            exp.yearlyExpences.forEach((value) => {
                if (value > 1000) 
                sum += value
              });
              console.log(` sum: ${sum}`);
            });
        
   
    testFn(sum, 15000)
    testFn(sum, 12000)
    testFn(sum, 14000)

    
    function testFn(s, n) {
    if (s === n) {
    console.log("тут тест будет выполнен если сумма совпадает с той которую предали в вызов")
    } else {
    console.log("а тут тест упадет в зависимости от переданной суммы")
    }
    }



// const filteredExpencesExamples = expencesExamples.filter((expencesExample)=>{
//     return expencesExample <= 1000
// })
// console.log(filteredExpencesExamples)

expencesExamples.forEach((exp) => {
    exp.yearlyExpences.forEach((element,index) => {
      //if (element <= 1000) {
        return element<=1000, index
       //console.log(`element ${element}, index: ${index}, index: ${array}`);
      })
    });
    console.log(`element: ${value}, index: ${index}, array: ${yearlyExpences}`)
    //console.log(`sum = ${sum}`);
  //});








//console.log(expencesExamples[0].yearlyExpences.length);

// sum = 0;

// for (let i = expencesExamples.length - 1; i >= 0; i--) {
//   console.log(expencesExamples[i])}
//     for (let j = expencesExamples.yearlyExpences.length - 1; j >= 0; j--);{
//         console.log(expencesExamples[i].yearlyExpences[j])
//     }
  //   {
  //     if (expencesExamples[i].yearlyExpences[j] > 1000) {
  //       sum += expencesExamples[i].yearlyExpences[j];
  //       return sum;
  //     }
  //     console.log(sum);
  //   }
  // }
  //   expencesExamples.yearlyExpences[i].forEach(function(expencesExample, index, expencesExamples) {
  //         console.log(`element ${expencesExamples.yearlyExpence}, index ${index}, length ${expencesExamples.yearlyExpences.length}`)
  //     })
  //       if (exp > 1000) {
  //         sum += exp;

  //       console.log(sum);
  //     }})

  //console.log(sum);
  sum = 0;
  for (let j = expencesExamples[i].length - 1; j >= 0; j--);
  {
    if (expencesExamples[i][j] > 1000) {
      //console.log(expencesExamples[i][j])
      //   sum += expencesExamples[i][j];
      //   return sum;
    }
  }
  console.log(expencesExamples[i]);
}
console.log(`sum = ${sum}`);

// //           if expencesExamples[i][j] > 1000
// //           sum += expencesExamples[i].yearlyExpences[j];
// //       }
// //   console.log(expencesExamples[i]);
// //   sum += yearlyExpences[j];
// //   console.log(expencesExamples[i][j]);}

// console.log(`index is ` + [i] + ` value is ` + expencesExamples[i]);

// //console.log(expencesExamples[i]);





// expencesExamples.forEach((exp) => {
//   exp.yearlyExpences.forEach((element, index) => {
//     if (element <= 1000) {
//       const elementArray = (element, index);
//       console.log(elementArray);
//     }
//     getElementArray();
//     {
//       return this.elementArray;
//     }
//   });
// });
// console.log(getElementArray());

// далее прокидываем функцию прям в цикл, чтобы предать в нее динамические параметры.

// expencesExamples.forEach((exp) => {
//   testCalc(exp, 15000);
// });