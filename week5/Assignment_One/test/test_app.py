import pytest
from lib.app import StringList

#Using pytest.fixture.
@pytest.fixture()
def addStringToArray():
    stringArray = StringList()
    stringArray.addStringToArrayMethod("String1")
    stringArray.addStringToArrayMethod("String2")
    return stringArray

@pytest.fixture()
def searchStringArray():
    stringArray = StringList()
    stringArray.addStringToArrayMethod("apple")
    return stringArray

#Test function to add multiple strings to the array.
def testStringsAreAdded(addStringToArray):
    assert addStringToArray.addStringToArrayMethod("String3") == ["String1","String2","String3"]

def testSearchingForAString(searchStringArray):
    assert searchStringArray.searchStringArray("apple") == "apple"
