//
//  DirectionViewController.swift
//  northeastsouthwest
//
//  Created by Cesar Casil on 3/13/18.
//  Copyright © 2018 Cesar Casil. All rights reserved.
//

import UIKit

class DirectionViewController: UIViewController {
    @IBOutlet weak var directionOutlet: UIButton!
    var output: String?
    
//    @IBAction func goBackToCompass(_sender: Any) {
//        performSegue(withIdentifier: "unwindToCompass", sender: self)
//    }
    
    @IBAction func directionButtonPressed(_ sender: UIButton) {
//        dismiss(animated: true, completion: nil)
        performSegue(withIdentifier: "unwindToCompass", sender: self)
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        directionOutlet.setTitle(output, for: .normal)
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
}
