//
//  ViewController.swift
//  calculator
//
//  Created by Cesar Casil on 3/11/18.
//  Copyright © 2018 Cesar Casil. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    @IBOutlet weak var totalLabel: UILabel!
    
    var total1: String = ""
    var total2: String = ""
    var operation: Bool = false
    
    @IBAction func clearButton(_ sender: UIButton) {
        total1 = ""
        total2 = ""
        operation = false
        totalLabel.text = ""
        grandtotal = 0
    }
    @IBAction func button9(_ sender: UIButton) {
        if operation == false {
            total1 += "9"
            new()
        }else{
            total2 += "9"
            new()
        }
    }
    @IBAction func button8(_ sender: UIButton) {
        if operation == false {
            total1 += "8"
            new()
        }else{
            total2 += "8"
            new()
        }
    }
    @IBAction func button7(_ sender: UIButton) {
        if operation == false {
            total1 += "7"
            new()
        }else{
            total2 += "7"
            new()
        }
    }
    @IBAction func button6(_ sender: UIButton) {
        if operation == false {
            total1 += "6"
            new()
        }else{
            total2 += "6"
            new()
        }
    }
    @IBAction func button5(_ sender: UIButton) {
        if operation == false {
            total1 += "5"
            new()
        }else{
            total2 += "5"
            new()
        }
    }
    @IBAction func button4(_ sender: UIButton) {
        if operation == false {
            total1 += "4"
            new()
        }else{
            total2 += "4"
            new()
        }
    }
    @IBAction func button3(_ sender: UIButton) {
        if operation == false {
            total1 += "3"
            new()
        }else{
            total2 += "3"
            new()
        }
    }
    @IBAction func button2(_ sender: UIButton) {
        if operation == false {
            total1 += "2"
            new()
        }else{
            total2 += "2"
            new()
        }
    }
    @IBAction func button1(_ sender: UIButton) {
        if operation == false {
            total1 += "1"
            new()
        }else{
            total2 += "1"
            new()
        }
    }
    @IBAction func button0(_ sender: UIButton) {
        if operation == false {
            total1 += "0"
            new()
        }else{
            total2 += "0"
            new()
        }
    }
    
    var grandtotal: Int = 0
    
    @IBAction func divideButton(_ sender: UIButton) {
        if operation == false{
            operation = true
        }else{
            grandtotal = Int(total1)! / Int(total2)!
        }
    }
    @IBAction func multiplyButton(_ sender: UIButton) {
        if operation == false{
            operation = true
        }else{
            grandtotal = Int(total1)! * Int(total2)!
        }
    }
    @IBAction func subtractButton(_ sender: UIButton) {
        if operation == false{
            operation = true
        }else{
            grandtotal = Int(total1)! - Int(total2)!
        }
    }
    @IBAction func addButton(_ sender: UIButton) {
        if operation == false{
            operation = true
        }else{
            grandtotal = Int(total1)! + Int(total2)!
        }
    }
    @IBAction func equalsButton(_ sender: UIButton) {
        if operation == true{
            totalLabel.text = String(grandtotal)
            total1 = String(grandtotal)
            total2 = ""
            operation = false
        }
    }
    
    func new() {
        if operation == false{
            totalLabel.text = total1
        }
        if operation == true{
            totalLabel.text = total2
        }
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        totalLabel.text = "0"
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }


}

