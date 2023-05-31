//*****************************************************************************
// Binary Search
//*****************************************************************************
// O(log n) complexity
// Variant 1 - myself
let arrX = []
for (let i = 1; i < 101; i++) {
  arrX.push(i)
} // Arr with max number 4,294,967,295 ???
let numX = 100 // Number to find

function binarySearch(arrX, numX) {
  let startTime = Date.now()
  let step = 0
  let low = 0
  let high = arrX.length - 1 // Number.MAX_VALUE
  let mid

  console.log(`Start searching number: ${numX}`)
  while (low <= high) {
    step++
    mid = Math.floor((low + high) / 2)
    if (numX == arrX[mid]) {
      console.log(`Found: ${numX} at index ${mid} in ${step} steps, spend ${Date.now() - startTime} ms`)
      return
    } else if (numX > arrX[mid]) {
      console.log(`${numX} higher then ${arrX[mid]}`)
      low = mid + 1
    } else if (numX < arrX[mid]) {
      console.log(`${numX} lower then ${arrX[mid]}`)
      high = mid -1
    }
  }
  console.log(`${numX} not found`)
}
// binarySearch(arrX, numX)

// Variant 2 https://stackoverflow.com/a/42778677
function bsearch(Arr, value) {
  var low = 0,
    high = Arr.length - 1,
    mid,
    step = 0

  while (low <= high) {
    step++
    mid = Math.floor((low + high) / 2)
    if (Arr[mid] == value) return console.log(`Found at index ${mid} in ${step} steps`)
    else if (Arr[mid] < value) low = mid + 1
    else high = mid - 1
  }
  return -1
}
// bsearch(arrX, numX)
