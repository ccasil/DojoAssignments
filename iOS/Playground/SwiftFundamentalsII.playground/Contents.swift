//: Playground - noun: a place where people can play

import UIKit

//var number = 2
//if number % 2 == 0 {
//    print("Number is even")
//} else {
//    print("Number is odd")
//}

//for i in 1...255{
//    print(i)
//}

for i in 1...100{
    if i % 15 == 0 {
        print ("FizzBuzz")
    }
    else if i % 5 == 0 {
        print ("Buzz")
    }
    else if i % 3 == 0 {
        print("Fizz")
    }
    else{
        print (i)
    }
}
