//
//  ViewController.swift
//  tipster
//
//  Created by Cesar Casil on 3/9/18.
//  Copyright © 2018 Cesar Casil. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    @IBOutlet weak var amountTotalLabel: UILabel!
    @IBOutlet weak var percentLabel0: UILabel!
    @IBOutlet weak var percentLabel1: UILabel!
    @IBOutlet weak var percentLabel2: UILabel!
    @IBOutlet weak var amountLabel0: UILabel!
    @IBOutlet weak var amountLabel1: UILabel!
    @IBOutlet weak var amountLabel2: UILabel!
    @IBOutlet weak var totalLabel0: UILabel!
    @IBOutlet weak var totalLabel1: UILabel!
    @IBOutlet weak var totalLabel2: UILabel!
    @IBOutlet weak var groupsizeLabel: UILabel!
    
    var amount = ""
    
    @IBAction func button9(_ sender: UIButton) {
        amount += "9"
        new()
    }
    @IBAction func button8(_ sender: UIButton) {
        amount += "8"
        new()
    }
    @IBAction func button7(_ sender: UIButton) {
        amount += "7"
        new()
    }
    @IBAction func button6(_ sender: UIButton) {
        amount += "6"
        new()
    }
    @IBAction func button5(_ sender: UIButton) {
        amount += "5"
        new()
    }
    @IBAction func button4(_ sender: UIButton) {
        amount += "4"
        new()
    }
    @IBAction func button3(_ sender: UIButton) {
        amount += "3"
        new()
    }
    @IBAction func button2(_ sender: UIButton) {
        amount += "2"
        new()
    }
    @IBAction func button1(_ sender: UIButton) {
        amount += "1"
        new()
    }
    @IBAction func button0(_ sender: UIButton) {
        if amount != "" {
            amount += "0"
            new()
        }
    }
    
    var count: Int = 0
    @IBAction func buttondec(_ sender: UIButton) {
        count += 1
        if count == 1{
            amount += "."
            new()
        }
    }
    @IBAction func buttonclear(_ sender: UIButton) {
        amount = ""
        count = 0
        amountTotalLabel.text = "0"
        percentLabel0.text = "0%"
        amountLabel0.text = "0.00"
        totalLabel0.text = "0.00"
        percentLabel1.text = "5%"
        amountLabel1.text = "0.00"
        totalLabel1.text = "0.00"
        percentLabel2.text = "10%"
        amountLabel2.text = "0.00"
        totalLabel2.text = "0.00"
    }
    
    var percent = 0
    @IBAction func tipSlider(_ sender: UISlider) {
        let slidep: Int = Int(sender.value)
        percent = slidep
        new()
    }
    var group: Int = 1
    @IBAction func groupSlider(_ sender: UISlider) {
        let slideg = Int(sender.value)
        group = slideg
        new()
    }
    
    func new(){
        amountTotalLabel.text = amount
        
        percentLabel0.text = String(percent) + "%"
        percentLabel1.text = String(percent + 5) + "%"
        percentLabel2.text = String(percent + 10) + "%"
        let amounts: String? = amount
        if let unwrappedamount = amounts {
            
            let amountd = Double(unwrappedamount)!
            
            let beforetotal0 = Double(amountd) * (Double(percent) * 0.01)
            amountLabel0.text = String(format: "%.2f", beforetotal0 / Double(group))
            totalLabel0.text = String(format: "%.2f", (amountd + beforetotal0) / Double(group))
            
            let beforetotal1 = Double(amountd) * (Double(percent + 5) * 0.01)
            amountLabel1.text = String(format: "%.2f", beforetotal1 / Double(group))
            totalLabel1.text = String(format: "%.2f", (amountd + beforetotal1) / Double(group))
            
            let beforetotal2 = Double(amountd) * (Double(percent + 10) * 0.01)
            amountLabel2.text = String(format: "%.2f", beforetotal2 / Double(group))
            totalLabel2.text = String(format: "%.2f", (amountd + beforetotal2) / Double(group))
            
            groupsizeLabel.text = String(group)
        }
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
    }
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }

}
