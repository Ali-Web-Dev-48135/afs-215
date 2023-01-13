import pytest

from lib.Number import printOne, printTwo, printPepsi, printCoke

class Test_Code:
    def test_printOne(self):
        # Assigning the functions below.
        printOneTest = printOne(1)
        printTwoTest = printTwo(2)
        printThree = printPepsi(3)
        printPepsiFromMultipleOfSix = printPepsi(12)
        printPepsiTest = printPepsi(30)
        printCokeTest = printCoke(5)
        printCokeFromMultipleOfTen = printPepsi(10)

        #Validation lines below.
        #Test 1
        assert printOneTest == "1"
        #Test 2
        assert printTwoTest == "2"
        #Test 3
        assert printThree == "Pepsi"
        #Test 4
        assert printCokeTest == "Coke"
        #Test 5
        assert printPepsiFromMultipleOfSix == "Pepsi"
        #Test 6 
        assert printCokeFromMultipleOfTen == "Coke"
        #Test 7
        assert printPepsiTest == "PepsiCoke"
        
    





