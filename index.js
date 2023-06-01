// Binary Search, O(log n)
//*****************************************************************************
// Variant 1 - myself, Variant 2 https://stackoverflow.com/a/42778677
let arrX = []
for (let i = 1; i < 101; i++) {
  arrX.push(i)
} // Arr with max number 4,294,967,295 ???
let numX = 1 // Number to find

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
      console.log(
        `Found: ${numX} at index ${mid} in ${step} steps, spend ${Date.now() - startTime} ms`
      )
      return mid
    } else if (numX > arrX[mid]) {
      console.log(`${numX} higher then ${arrX[mid]}`)
      low = mid + 1
    } else if (numX < arrX[mid]) {
      console.log(`${numX} lower then ${arrX[mid]}`)
      high = mid - 1
    }
  }
  console.log(`${numX} not found`)
  return -1
}
// binarySearch(arrX, numX)

// Selection sort, O(n²)
//*****************************************************************************
// let arrY = [5, 1, 9, 3, 7, 6, 8, 4, 2, 10]
let arrY = []
while (arrY.length < 100) {
  let random = Math.round(Math.random() * 100)
  if (!arrY.includes(random)) {
    arrY.push(random)
  }
}

let startTime = Date.now()

function findSmallest(arr) {
  smallest = arr[0]
  smallestIndex = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i]
      smallestIndex = i
    }
  }
  return smallest
}

function selectionSort(arr) {
  newArr = []
  // for loop from nth arr to arr of only 1 elemnt at index 0
  for (let i = 0; i <= arr.length; i++) {
    smallest = findSmallest(arr)
    newArr.push(smallest) // add element to newArr
    arr.splice(arr.indexOf(smallest), 1) // remove 1 element on index
    i = 0 // reset iterator, because length of arr changes on each iteration
  }
  console.log(`Sorted arr: ${newArr} in ${Date.now() - startTime} ms`)
  return newArr.length
}
// selectionSort(arrY)
