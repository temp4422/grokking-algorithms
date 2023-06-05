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

print(count(list))

# MAX