// Binary Search, O(log n)
/*****************************************************************************/
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
/*****************************************************************************/
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
/*****************************************************************************/
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
/*****************************************************************************/
// For arr [2, 4, 6]
// base case sum(6)
// recurisve: sum(2,4,6) -> 2 + sum(4,6) -> 4 + sum(6) -> sum(6)
// Pop last (first) value from arr and add it to arr that remained, until only 1 element lefts in arr.

// let arrX = [2, 4, 6]

function sum(arr) {
  if (arr.length == 1) {
    return arr[0]
  } else {
    return arr.pop() + sum(arr)
  }
}
// sum(arrX)

function count(arr) {
  if (arr.length == 1) {
    return 1
  } else {
    // Decrement array with each cycle
    arr.length--
    // Add array with length of 1 to array with length of 2, to length of 3, etc
    return count(arr) + count(arr)
  }
}
// count(arrX)

function max(arr) {
  let maxVar = 0
  function maxLocal(arr) {
    if (arr.length == 0) {
      return maxVar
    } else {
      if (maxVar < arr.at(-1)) maxVar = arr.at(-1)
      arr.pop()
      return maxLocal(arr)
    }
  }
  maxLocal(arr)
  return maxVar
}
// max(arrX)

// Example https://646634.medium.com/how-to-write-a-recursive-binary-search-algorithm-in-javascript-ecadb5e51022
// let arrX = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let numX = 1

function binarySearchRecursive(arr, num) {
  let mid = Math.floor(arr.length / 2)
  if (arr.length === 1 && arr[0] != num) {
    return false
  }
  if (num === arr[mid]) {
    return true
  } else if (num < arr[mid]) {
    return binarySearchRecursive(arr.slice(0, mid), num)
  } else if (num > arr[mid]) {
    return binarySearchRecursive(arr.slice(mid), num)
  }
}
// binarySearchRecursive(arrX, numX)

// Quicksort
/*****************************************************************************/
// let arrX = [4, 2, 5, 8, 1, 3, 6]

function quicksort(arr) {
  if (arr.length < 2) return arr

  let pivot = arr[0]
  let less = []
  let greater = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      less.push(arr[i])
    } else if (arr[i] > pivot) {
      greater.push(arr[i])
    }
  }

  return [...quicksort(less), pivot, ...quicksort(greater)]
}
// console.log(quicksort(arrX))

// Hash Tables
/*****************************************************************************/
async function getCache() {
  // const fs = require('fs')
  let cache = new Map()

  if (cache.get('lorem') == undefined) {
    console.log('Fetching data')
    let data = await fetch(`https://dummyjson.com/products/1`).then((rawData) => rawData.json())
    await cache.set('lorem', data)
    // let cacheData = fs.readFileSync('/tmp/data.txt', 'utf8')
  } else {
    console.log(cache.get('lorem'))
    // await fs.writeFileSync('/tmp/data.txt', JSON.stringify(data))
  }
}
// getCache()

// Breadth-first search
/*****************************************************************************/
// Implement graph with hash tables
let graph = new Map()
graph.set('you', ['alice', 'bob', 'claire'])
graph.set('bob', ['anuj', 'peggy', 'you'])
graph.set('alice', ['peggy'])
graph.set('claire', ['thom', 'jonny'])
graph.set('anuj', [])
graph.set('peggy', [])
graph.set('thom', [])
graph.set('jonny', [])

// Implement BFS on graph
function bfs(name) {
  let arr = graph.get(name)
  let searched = []

  for (let i = 0; i < arr.length; i++) {
    // If searched doesn't includes current name
    if (!searched.includes(arr[i])) {
      // If last letter of current name ends with 'm' - we found mango seller
      if (arr[i].at(-1) == 'm') {
        return `Found: ${arr[i]}`
      } else {
        // Add name to searched items
        searched.push(arr[i])
        // Add neighbor nodes (friends of current name) to array with spread operator
        arr.push(...graph.get(arr[i]))
      }
    }
  }
  return `NOT found!`
}
// console.log(bfs('you'))

// Alternative https://dev.to/mattedwards/grokking-algorithms-in-javascript-part-2-213o
// Representing the graph as a JavaScript Map() object
const graph2 = new Map()
graph2.set('you', [
  { name: 'peter', job: 'bricklayer' },
  { name: 'dimitrios', job: 'chef' },
  { name: 'katie', job: 'architect' },
])
graph2.set('peter', [
  { name: 'dean', job: 'solicitor' },
  { name: 'aleksandra', job: 'doctor' },
])
graph2.set('dimitrios', [
  { name: 'sam', job: 'heating engineer' },
  { name: 'shefali', job: 'driving instructor' },
])
graph2.set('katie', [{ name: 'shefali', job: 'driving instructor' }])
graph2.set('dean', [{ name: 'james', job: 'graphic designer' }])
graph2.set('aleksandra', [])
graph2.set('sam', [{ name: 'molly', job: 'software engineerr' }])
graph2.set('shefali', [
  { name: 'andrew', job: 'heating engineer' },
  { name: 'amy', job: 'barrister' },
])
graph2.set('james', [])
graph2.set('molly', [])
graph2.set('andrew', [])
graph2.set('amy', [])

// BFS search
function bfs2(name, job) {
  let searchQueue = graph2.get(name)
  const searched = []
  while (searchQueue.length > 0) {
    const person = searchQueue.shift()
    if (!searched.includes(person)) {
      if (person.job === job) {
        console.log(`${person.name} is a ${job}`)
        return true
      } else {
        searchQueue = searchQueue.concat(graph2.get(person.name))
        searched.push(person)
      }
    }
  }
  console.log(`Nobody in your social network is a ${job}`)
  return false
}
// bfs2('you', 'heating engineer') // "sam is a heating engineer"
// bfs2('you', 'police officer') // "Nobody in your social network is a police officer"