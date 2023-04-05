/*
  get slope
  where slope changes each tick of time
  so, in the equation:
  y = ax + b
  b = 0
  y = ax
  const y would always be an array of 2 elements
  const y = [0,ele], where ele is type number
  dy/dt = y[index + 1] - y[index]] =  slope

 const y = [0,1]: (or) [0,20] (or) [0, -10] 

*/

// const y = [0,4,1,1,-2] works good
// const y = [0,4,5,0,1,2,0] works good
// const y = [0,4,5,4, 3] works
// const y = [4,2,1] works 
const y = [4,2,-1]  //works

// (index +1 -index) will always be the value = 1: ie,  [1 - 0], [2 - 1], [3 - 2] = 1 (always)

const dist = y.reduce((a, b, index) => {
    const slope = y[index + 1] - y[index]
    if (slope <= 0) {
      // console.log(a, index, slope, y[index + 1])
      // console.log(a, b)
       a = slope
       console.log(a, b, a + b)
      return a + b
    }
    // console.log(a, index, index + 1, y[index + 1])
    console.log("+", a, b, a + b)
      return  b
  }, 0);
  
  console.log("dist =", dist)
