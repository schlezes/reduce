/*
  get slope
  where slope changes each tick of time
  so,
  const y = [0,1,0,1]
  y = ax + b
  b = 0
  y = ax
  dy/dt = a

*/

// const y = [0,4,1,1,-2] works good
// const y = [0,4,5,0,1,2,0] works good
// const y = [0,4,5,4, 3] works
// const y = [4,2,1] works 
const y = [4,2,-1]  //works

// indexOf will always be the value = [1 - 0], [2 - 1], [3 - 2]

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

  /*
  dist = slope x t + slope * t
  */