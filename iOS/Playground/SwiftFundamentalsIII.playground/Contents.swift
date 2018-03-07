//: Playground - noun: a place where people can play

import UIKit

var arr: [UInt32] = []
    for i in 1...255{
        arr.append(UInt32(i))
}

for z in 1...100{
    let rand1 = Int(arc4random_uniform(255))
    let rand2 = Int(arc4random_uniform(255))
    let temp: UInt32 = arr[rand1]
    arr[rand1] = arr[rand2]
    arr[rand2] = temp
}

for x in 0..<arr.count{
    if arr[x] == 42 {
        let number = arr.remove(at: x)
        print ("We found the answer to the Ultimate Question of Life, the Universe, and Everything at index \(x)")
        break
    }
}

