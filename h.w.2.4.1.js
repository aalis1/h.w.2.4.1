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

console.log(expencesExamples);

// сумма всех 3 массивов сразу выводится

sum = 0;
expencesExamples.forEach((exp) => {
  exp.yearlyExpences.forEach((element) => {
    if (element > 1000) {
      sum += element;
      return sum;
    }
  });
});
console.log(`sum all 3 = ${sum}`);

//или вот так на каждый массив. Но есть наверное возможность написать код, чтоб сразу считался каждый массив

sum = 0;
expencesExamples[0].yearlyExpences.forEach((element) => {
  if (element > 1000) {
    sum += element;
    return sum;
  }
});
console.log(`sum first = ${sum}`);

sum = 0;
expencesExamples[1].yearlyExpences.forEach((element) => {
  if (element > 1000) {
    sum += element;
    return sum;
  }
});
console.log(`sum second = ${sum}`);

sum = 0;
expencesExamples[2].yearlyExpences.forEach((element) => {
  if (element > 1000) {
    sum += element;
    return sum;
  }
});
console.log(`sum third = ${sum}`);
