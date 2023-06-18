# Adapted for python3
# Binary Search
###############################################################################
'''
#my_list = [0,1,2,3,4,5,6,7,8,9]
arrX = []
for i in range(1, 101):
	arrX.append(i)

def binary_search(list, item):
	low = 0
	high = len(list)-1

	while low <= high:
		mid = round((low + high) / 2)
		guess = list[mid]
		if guess == item:
			return mid
		if guess > item:
			high = mid - 1
		else:
			low = mid + 1
	return None

# print(binary_search(arrX, 100))
'''

# Selection sort
###############################################################################
'''
def findSmallest(arr):
    smallest = arr[0]
    smallest_index = 0
    for i in range(1, len(arr)):
        if arr[i] < smallest:
            smallest = arr[i]
            smallest_index = i
    return smallest_index

def selectionSort(arr):
    newArr = []
    for i in range(len(arr)):
        smallest = findSmallest(arr)
        newArr.append(arr.pop(smallest))
    return newArr

# print(selectionSort([5, 3, 6, 2, 10]))
'''

# Recursion
###############################################################################
'''
def fact(x):
  if x == 1:
    return 1
  else:
    return x * fact(x-1)

print(fact(3))
'''

# Divide and Conquer
###############################################################################
'''
list = [2,4,6]

# SUM
# # My code
# def sum(list):
#   if len(list) == 1:
#     return list[0]
#   else:
#     return list.pop() + sum(list)

# # Book code
# def sum(list):
#   if list == []:
#     return 0
#   return list[0] + sum(list[1:])

# # print(sum(list))

# COUNT
# My code
def count(list):
  if len(list) == 1:
    return 1
  else:
    list.pop()
    return count(list) + count(list)

# Book code
def count(list):
  if list == []:
    return 0
  return 1 + count(list[1:])

# print(count(list))

# MAX
# Book code
def max(list):
  if len(list) == 2:
    return list[0] if list[0] > list[1] else list[1]
  sub_max = max(list[1:])
  return list[0] if list[0] > sub_max else sub_max

# print(max(list))

# RECURSIVE BINARY SEARCH
'''

# Quicsort
###############################################################################
'''
def quicksort(array):
  if len(array) < 2:
    return array # Base case: arrays with 0 or 1 element are already "sorted".
  else:
    pivot = array[0] # Recursive case
    less = [i for i in array[1:] if i <= pivot] # Sub-array of all the elements less than the pivot
    greater = [i for i in array[1:] if i > pivot] # Sub-array of all the elements greater than the pivot
  return quicksort(less) + [pivot] + quicksort(greater)

#print(quicksort([10, 5, 2, 3]))
'''

# Hash Tables
###############################################################################
'''
# Preventing duplicate entries
voted = {}
def check_voter(name):
  if voted.get(name):
    print("kick them out!")
  else:
    voted[name] = True
    print("let them vote!")

#check_voter('tom')
#check_voter('tom')

# Caching
cache = {}
def get_page(url):
  if cache.get(url):
    return cache[url] # Returns cached data
  else:
    data = get_data_from_server(url)
    cache[url] = data # Saves this data in your cache first
    return data
'''

# Breadth-first search
###############################################################################
'''
# Implement graph with hash tables
graph = {}
graph["you"] = ["alice", "bob", "claire"]
graph["bob"] = ["anuj", "peggy"]
graph["alice"] = ["peggy"]
graph["claire"] = ["thom", "jonny"]
graph["anuj"] = []
graph["peggy"] = []
graph["thom"] = []
graph["jonny"] = []

# Implement BFS on graph
from collections import deque # python library has a queue function

def is_seller(person):
	return person[-1] == "m"

def search(name):
	# initialize queue
	search_queue = deque()
	search_queue += graph[name]
	# keep track of people already searched
	searched = []

	# BFS
	while search_queue:
		person = search_queue.popleft() # (pop first item i.e. JS shift)
		if not person in searched:
			if is_seller(person):
				print(person + " is a mango seller!")
				return True
			else:
				search_queue += graph[person]
				searched.append(person)
	return False

search("you")
'''