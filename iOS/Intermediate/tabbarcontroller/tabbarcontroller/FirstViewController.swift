//
//  FirstViewController.swift
//  tabbarcontroller
//
//  Created by Cesar Casil on 3/17/18.
//  Copyright © 2018 Cesar Casil. All rights reserved.
//

import UIKit

class FirstViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        print ("FirstViewController viewDidLoad")
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        print ("FirstViewController viewWillAppear")
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

