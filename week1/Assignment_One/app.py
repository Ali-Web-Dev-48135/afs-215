import code

AssignmentObject = code.Assignment()

AssignmentObject.addANumber(2)
AssignmentObject.addAString("Hello World")
AssignmentObject.addADictionary({"gender": "male"})
AssignmentObject.addATuple((1, 2))

#Transforming the list to a tuple.
listToTuple = tuple(AssignmentObject.myList)

# Print the list defined in the Assignment Clasds.
print(AssignmentObject.myList)

#Prints the list to a tuple
print(listToTuple)

