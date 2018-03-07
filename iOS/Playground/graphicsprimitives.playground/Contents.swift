//: Playground - noun: a place where people can play

import UIKit

struct Point {
    var x: Double
    var y: Double
}

struct Line {
    var start: Point
    var end: Point
    func Length (_ :Point,_ :Point) -> Double{
        let p1: Double = end.x - start.x
        let p2: Double = end.y - start.y
        let length = sqrt(pow(p1, 2) + pow(p2, 2))
        return length
    }
}

let point1 = Point(x:1, y:2)
let point2 = Point(x:4, y:6)
let line = Line(start:point1, end:point2)

let myLine = Line(start:Point(x:3, y:4), end:Point(x:6, y:8))

struct Triangle {
    var Points: [Point]
    func Area () -> Double{
        let area = (Points[0].x*(Points[1].y-Points[2].y)+Points[1].x*(Points[2].y-Points[0].y)+Points[2].x*(Points[0].y-Points[1].y))/2
        return area
    }
}
var tri = Triangle(Points: [Point(x:10, y:5), Point(x:15, y:20), Point(x:45, y:10)])
var triarea = tri.Area()
print (triarea)
