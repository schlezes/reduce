/*
  Take any array

  we just want the final value of the array

    we do not care about slope
    we do not care about any sub array
    we do not care about any duplicate values
    we do not care about the sum of the values of the array

  we can use reduce and just return the final b

  y.reduce((a,b) => {return b}, 0)
*/


const y = [4, 2, -1, 24, 10, 9]

console.log(y.reduce((a, b) => {return b}, 0));

/*
  if we want the sum of values
  use: y.reduce((a,b) => (a + b), 0)
*/


console.log(y.reduce((a,b) => a + b), 0)

