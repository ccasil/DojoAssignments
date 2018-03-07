//: Playground - noun: a place where people can play

import UIKit

func tossCoin() -> String {
    print ("Tossing a Coin!")
    let hot: [String] = ["Heads", "Tails"]
    let rand = Int(arc4random_uniform(2))
    let temp = hot[rand]
    if ( temp == "Heads") {
        print ("Heads")
        return temp
    } else {
        print ("Tails")
        return temp
    }
}

tossCoin()
