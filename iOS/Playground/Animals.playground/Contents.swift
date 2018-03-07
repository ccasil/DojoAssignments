//: Playground - noun: a place where people can play

import UIKit

class Animal {
    var name: String
    var health: Int = 100
    init(name: String) {
        self.name = name
    }
    func displayHealth () -> Int{
        return health
    }
}

class Cat: Animal {
    override init(name: String){
        super.init(name: name)
        health = 150
    }
    func growl () {
        print ("Rawr!")
    }
    func run () {
        print ("Running")
        health -= 10
        print (health)
    }
}

class Lion: Cat {
    override init(name: String){
        super.init(name: name)
        health = 200
    }
    override func growl() {
        print("ROAR!!!!! I am rhe King of the Jungle")
    }
}

class Cheetah: Cat {
    override init(name: String){
        super.init(name:name)
    }
    override func run () {
        if (health < 50){
            print ("Cheetah is too tired to run")
        }else{
        print ("Running Fast")
        health -= 50
        print (health)
        }
    }
    func sleep () {
        if (health > 149){
            print("Cheetah is healthy af")
        }else{
        health += 50
        }
    }
}

//let animal: Animal = Animal(name: "Kyle")
//print (animal.displayHealth())
//let cat: Cat = Cat(name: "Kat")
//print (cat.displayHealth())
//cat.growl()
//cat.run()

let cheetah: Cheetah = Cheetah(name: "Chris")
cheetah.run()
cheetah.run()
cheetah.run()
cheetah.growl()
cheetah.displayHealth()


