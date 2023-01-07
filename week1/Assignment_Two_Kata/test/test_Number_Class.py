import pytest

from lib.Number_Class import printOne, printTwo, printPepsi, printCOke

class Test_Code:
    def test_printOne(self):
        # Assigning the functions below.
        printOneTest = printOne(1)
        printTwoTest = printTwo(2)
        printPepsiTest = printPepsi(15)
        printCokeTest = printCOke(5)

        #Validation lines below.
        assert printOneTest == "1"
        assert printTwoTest == "2"
        assert printPepsiTest == "PepsiCoke"
        assert printCokeTest == "5"
    





