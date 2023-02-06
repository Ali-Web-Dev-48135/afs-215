class StringList:
    def __init__(self):
        self.stringarray = []
    
    def addStringToArrayMethod(self, string):
        self.stringarray.append(string)
        return self.stringarray
    
    def searchStringArray(self, stringToSearch):
        if(stringToSearch in self.stringarray):
            return stringToSearch
