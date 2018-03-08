//
//  ViewController.swift
//  coldcall
//
//  Created by Cesar Casil on 3/7/18.
//  Copyright © 2018 Cesar Casil. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    @IBOutlet weak var nameLabel: UILabel!
    
    let nameBank = ["Vince", "Robert", "In Soo", "Johnnie", "Wiseman"]
    
    var currentName = 0
    
    @IBAction func coldcallPressed(_ sender: Any) {
        currentName = Int(arc4random_uniform(5))
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

