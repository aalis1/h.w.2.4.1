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

expencesExamples.forEach((exp) => {
  sum = 0;
  exp.yearlyExpences.forEach((element) => {
    if (element > 1000) {
      sum += element;
      return sum;
    }
  });
  console.log(`sum = ${sum}`);
});

// далее прокидываем функцию прям в цикл, чтобы предать в нее динамические параметры.

// expencesExamples.forEach((exp) => {
//   testCalc(exp, 15000);
// });

// function testCalc(value, expectedValue) {
//   if (value === expectedValue) {
//     console.log("test done");
//   } else {
//     console.log("test failed");
//   }
// }

//или вот так на каждый массив. Но есть наверное возможность написать код, чтоб сразу считался каждый массив
