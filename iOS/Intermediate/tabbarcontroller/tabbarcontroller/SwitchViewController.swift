//
//  SwitchViewController.swift
//  tabbarcontroller
//
//  Created by Cesar Casil on 3/17/18.
//  Copyright © 2018 Cesar Casil. All rights reserved.
//

import UIKit

class SwitchViewController: UIViewController {
    
    @IBOutlet weak var switchLabel: UILabel!
    @IBOutlet weak var mySwitch: UISwitch!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        print ("SwitchViewController viewDidLoad")
        textChange()
        mySwitch.addTarget(self, action: #selector(switchSwitch(_:)), for: UIControlEvents.valueChanged)
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        print ("SwitchViewController viewWillAppear")
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    } 
    @IBAction func unwindToSwitch(segue: UIStoryboardSegue) {}
    
    @IBAction func switchSwitch(_ sender: UISwitch) {
        textChange()
    }
    
    func textChange() {
        if mySwitch.isOn {
            switchLabel.text = "Switch is on"
        } else {
            switchLabel.text = "Switch is off"
        }
    }
}

