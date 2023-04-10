/*
  find works
  find Index works
  findLast does notwork
  findLastIndex does not work
*/
const ray = [
    { letter: 'a', integer: 1 },
    { letter: 'c', integer: 2 },
    { letter: 'c', integer: 3 },
    { letter: 'd', integer: 4 },
  ]
  console.log(ray.find(el => el.integer === 3))
  console.log(ray.findIndex(el => el.integer === 3))

  /*
    add property more = {}
    more now becomes a key in the array
    with value = {} empty object
    add property = []
    and now becomes a key in the array
    with value = [] enpty array
  */
 ray.more = {}
 ray.and = []

 console.log(Object.keys(ray))
 console.log(ray)
