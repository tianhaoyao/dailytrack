MAX = 2679


class Arc:

    def __init__(self, level, exp, gain, name):
        self.level = level
        self.exp = exp
        self.gain = gain
        self.name = name

    def getTotalXP(self, inputLevel=None, inputExp=None):
        exp = 0
        if (inputLevel is None):
            for i in range(1, self.level):
                exp += (i ** 2) + 11
            exp += self.exp
            return exp
        else:
            for i in range(1, inputLevel):
                exp += (i ** 2) + 11
            exp += inputExp
            return exp

    def getRemainingXP(self):
        remaining = MAX - self.getTotalXP()
        return remaining

    def getRemainingToLevel(self):
        nextLevel = self.level + 1
        xpGoal = self.getTotalXP(nextLevel, 0)
        difference = xpGoal - self.getTotalXP()
        return difference

    def addXP(self, amount):
        if (self.level < 20):
            if (amount >= self.getRemainingToLevel()):
                newXP = amount - self.getRemainingToLevel()
                self.level += 1
                self.exp = 0

                # cap otherwise recursively call
                if (self.level < 20):
                    self.addXP(newXP)
            else:
                self.exp += amount

    def finishDailies(self):
        self.addXP(self.gain)

    def __str__(self):
        return "level: " + str(self.level) + "\nexp: " + str(
            self.exp) + "\ngain: " + str(self.gain) + "\nname: " + str(
            self.name)


test = Arc(13, 179, 1, "vanishing journey")
print(test.getTotalXP())
print(test.getRemainingXP())
print(test.getRemainingToLevel())
print(test)

test.finishDailies()
print(test.getTotalXP())
print(test.getRemainingXP())
print(test.getRemainingToLevel())
print(test)
