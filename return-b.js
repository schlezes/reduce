/*
  Take any array

  we just want the final element of the array

    we do not care about slope
    we do not care about any sub elements
    we do not care about any duplicate elements
    we do not care about the sum of the elements of the array

  we can use reduce and just return the final b

  y.reduce((a,b) => {return b}, 0)
*/


const y = [4, 2, -1, 24, 10, 9]

console.log(y.reduce((a, b) => {return b}, 0));

/*
  if we want the sum of elements
  use: y.reduce((a,b) => (a + b), 0)
*/

console.log(y.reduce((a,b) => (a + b), 0))
