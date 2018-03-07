//: Playground - noun: a place where people can play

import UIKit

enum Color {
    case Blue, Red, Green
}

struct Card {
    var roll: Int
    var color: Color
    init (color:Color){
        self.color = color
        switch color {
        case .Blue:
            roll = Int(arc4random_uniform(2) + 1)
        case .Red:
            roll = Int(arc4random_uniform(2) + 3)
        case .Green:
            roll = Int(arc4random_uniform(3) + 4)
        }
    }
}
class Deck {
    var cards: [Card] = []
    init(){
        for color in [Color.Blue, Color.Red, Color.Green] {
            for _ in 0..<10 {
                self.cards.append(Card(color:color))
            }
        }
//        public var description: String { return "<Card: \(color) \(roll)>" }
    }
    func deal () -> Card {
        let topcard = cards.popLast()!
        return topcard
    }
    func isEmpty () -> Bool {
        if cards.count < 1 {
            return true
        }else{
            return false
        }
    }
    func shuffle () -> [Card]{
        for _ in 1...30{
            let rand1 = Int(arc4random_uniform(30))
            let rand2 = Int(arc4random_uniform(30))
            let temp: Card = cards[rand1]
            cards[rand1] = cards[rand2]
            cards[rand2] = temp
        }
        return cards
    }
}
let deck = Deck()
//print (deck.cards)
//print (deck.deal())
//print (deck.isEmpty())
//print (deck.shuffle())

class Player {
    var name: String
    var hand: [Card] = []
    init(name: String) {
        self.name = name
    }
    func draw (deck: Deck) -> Card {
        let top = deck.deal()
        self.hand.append(top)
        return top
    }
    func rollDice () -> Int {
        let rand = Int(arc4random_uniform(6))
        return rand
    }
    func matchingCards (color: Color, roll: Int) -> Int{
        var counter: Int = 0
        for card in self.hand {
            if card.color == color && card.roll == roll {
                counter += 1
            }else{
                continue
            }
        }
        return counter
    }
}

var player1:Player = Player(name: "Kyle")
print(deck.shuffle())
print(player1.draw(deck: deck))
print(player1.draw(deck: deck))
print(player1.draw(deck: deck))
print(player1.draw(deck: deck))
print(player1.matchingCards(color: .Green, roll: 5))
