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

# Dijkstra's algorithm
###############################################################################
'''
          A
       /  |  \
start     |     fin
       \  |  /
          B

Hash tables x 3
-------------------   -----------   ---------------
|     Graph       |   |  Costs  |   |   Parents   |
|-------+-----+---|   |-----+---|   |-----+-------|
| start |  a  | 6 |   |  a  | 6 |   |  a  | start |
|       |  b  | 2 |   |  b  | 2 |   |  b  | start |
|  a    | fin | 1 |   | fin | ∞ |   | fin |  -    |
|  b    | a   | 3 |   +-----+---+   +-----+-------+
|       | fin | 5 |
| fin   |    -    |
+-------+---------+
'''

'''
# Implementation
# init graph
graph = {}
graph["start"] = {} # init start node
graph["start"]["a"] = 6 # edge from start to a, cost of 6
graph["start"]["b"] = 2
graph["a"] = {}
graph["a"]["fin"] = 1
graph["b"] = {}
graph["b"]["a"] = 3
graph["b"]["fin"] = 5
graph["fin"] = {}

# init costs table
# tracks the lowest cost to reach each node
# if unknown, use infinity
infinity = float("inf") # infinity in python
costs = {}
costs["a"] = 6
costs["b"] = 2
costs ["fin"] = infinity

# init parents table
# used to find the final route backwards
parents = {}
parents["a"] = "start"
parents["b"] = "start"
parents["fin"] = None

# init array to keep track of processed nodes
processed = []

# function to find lowest cost node
def find_lowest_cost_node(costs):
	lowest_cost = float("inf")
	lowest_cost_node = None
	for node in costs:
		cost = costs[node]
		if cost < lowest_cost and node not in processed:
			lowest_cost = cost
			lowest_cost_node = node
	return lowest_cost_node

# Djikstra's Algorithm
node = find_lowest_cost_node(costs) # find the lowest cost node not in processed --> b
while node is not None: # while there is a remaining node to be processed
	cost = costs[node] # costs["b"] = 2
	neighbours = graph[node] # graph["b"].keys() --> ["a", "fin]
	for n in neighbours.keys():
		# add cost of getting to b (2)
		# and cost of getting from b to neighbour (fin)
		# e.g. 2 + graph["b"]["fin"] = 5
		new_cost = cost + neighbours[n]
		if costs[n] > new_cost: # if existing cost of getting to fin > new cost
			costs[n] = new_cost # replace new cost
			parents[n] = node # update parent node
	processed.append(node) # add node to processed list
	node = find_lowest_cost_node(costs) # find the next lowest cost node

print (costs["fin"])
'''