const deepClone = (arr) => {
  let copy = []
  arr.forEach(elem => {
    if(Array.isArray(elem)){
      copy.push(deepClone(elem))
    } else {
      if (typeof elem === 'object') {
        copy.push(deepCloneObject(elem))
    } else {
        copy.push(elem)
      }
    }
  })
  return copy
}

const deepCloneObject = (obj) => {
  let tempObj = {}
  for (let [key, value] of Object.entries(obj)) {
    if (Array.isArray(value)) {
      tempObj[key] = deepClone(value)
    } else {
      if (typeof value === 'object') {
        tempObj[key] = deepCloneObject(value)
      } else {
        tempObj[key] = value
      }
    }
  }
  return tempObj
}

module.exports = {
  deepClone,
  deepCloneObject,
}
