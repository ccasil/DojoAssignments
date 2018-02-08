import random
class Card(object):
    def __init__(self, suit,value):
        self.suit = suit
        self.value = value
        self.face = 'down'
    def face_up(self):
        self.face = 'up'
        return self
class Deck(object):
    def __init__(self):
        self.deck = []
        for i in range(1,5):
            if i == 1:
                i = 'hearts'
            elif i == 2:
                i = 'spades'
            elif i == 3:
                i = 'clubs'
            elif i == 4:
                i = 'diamonds'
            for j in range(1,14):
                cards = Card(i,j)
                self.deck.append(cards)
        # shuffle()
    def shuffle(self):
        for i in self.deck:
            place = random.randint(1,52)
            temp = i
            i = self.deck[place]
            self.deck[place] = temp
            return deck
    def deal(self):
        v = self.deck.pop()
        return v


class Player(object):
    def __init__(self, name):
        self.name = name
        self.hand = []

    def show_hand(self):
        for i in self.hand:
            i.face = 'up'        
        return self
    def sort(self):
            if self.hand[1].value < self.hand[0].value:
                temp = self.hand[0]
                self.hand[0] = self.hand[1]
                self.hand[1] = temp
            return self

deck = Deck()
players = []
player1 = Player("Bo")
player2 = Player("Bob")
deck.shuffle().deal()
player1.hand.append(deck.deal())
player1.hand.append(deck.deal())
print player1.hand[0].value
print player1.hand[1].value
player1.sort()
print player1.hand[0].value
print player1.hand[1].value