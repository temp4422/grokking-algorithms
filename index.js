// Binary Search, O(log n)
//*****************************************************************************
// Variant 1 - myself, Variant 2 https://stackoverflow.com/a/42778677
// let arrX = []
// for (let i = 1; i < 101; i++) arrX.push(i) // Arr with max number 4,294,967,295 ???
// let numX = 1 // Number to find

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
// Create array of random digits
// let arrY = []
// while (arrY.length < 100) {
//   let random = Math.round(Math.random() * 100)
//   arrY.includes(random) ? null : arrY.push(random)
// }

// Sort array by creating new array and deleting items from initial array
function selectionSort(arr) {
  console.log(`Sorting: ${arr}`)
  let newArr = []

  function findSmallest(arr) {
    let smallest = arr[0]
    let smallestIndex = 0
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < smallest) {
        smallest = arr[i]
        smallestIndex = i
      }
    }
    return smallest
  }

  // for loop from nth arr to arr of only 1 elemnt at index 0
  for (let i = 0; i <= arr.length; i++) {
    smallest = findSmallest(arr)
    newArr.push(smallest) // add element to newArr
    arr.splice(arr.indexOf(smallest), 1) // remove 1 element from old arr on index, thus only numbers that left should be sorted and pushed to newArr
    i = 0 // reset iterator, because length of arr changes on each iteration
  }
  console.log(`Sorted: ${newArr}`)
  return
}
// selectionSort(arrY)

// Sort array in-place
// https://dev.to/seanwelshbrown/implementing-a-selection-sort-algorithm-in-javascript-9of
function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j
      }
    }
    ;[array[i], array[minIndex]] = [array[minIndex], array[i]]
  }
  return array
}
// selectionSort(arrY)

// Recursion
//*****************************************************************************
// Factorial x!
function fact(x) {
  if (x == 1) {
    return 1
  } else {
    return x * fact(x - 1)
  }
}
// fact(3)

// Divide and Conquer
//*****************************************************************************
// For arr [2, 4, 6]
// base case sum(6)
// recurisve: sum(2,4,6) -> 2 + sum(4,6) -> 4 + sum(6) -> sum(6)
// Pop last (first) value from arr and add it to arr that remained, until only 1 element lefts in arr.
let arrX = [2, 4, 6]

function sum(arr) {
  if (arr.length == 1) {
    return arr[0]
  } else {
    return arr.pop() + sum(arr)
  }
}
// sum(arrX)
