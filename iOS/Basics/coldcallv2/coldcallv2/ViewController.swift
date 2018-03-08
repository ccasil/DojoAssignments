//
//  ViewController.swift
//  coldcallv2
//
//  Created by Cesar Casil on 3/7/18.
//  Copyright © 2018 Cesar Casil. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    @IBOutlet weak var nameLabel: UILabel!
    @IBOutlet weak var numberLabel: UILabel!
    
    let nameBank = ["Vince", "Robert", "In Soo", "Johnnie", "Wiseman"]
    
    var currentName = 0
    
    @IBAction func coldcallPressed(_ sender: Any) {
        currentName = Int(arc4random_uniform(5))
        var currentNumber = Int(arc4random_uniform(5) + 1)
        numberLabel.text = String(currentNumber)
        if (currentNumber == 1 || currentNumber == 2) {
            numberLabel.textColor = UIColor.red
        }
        else if (currentNumber == 3 || currentNumber == 4) {
            numberLabel.textColor = UIColor.orange
        }else{
            numberLabel.textColor = UIColor.green
        }
        updateUI()
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        updateUI()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    func updateUI(){
        nameLabel.text = nameBank[currentName]
    }


}

