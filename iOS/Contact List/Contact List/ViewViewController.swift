//
//  ViewViewController.swift
//  Contact List
//
//  Created by Cesar Casil on 3/27/18.
//  Copyright © 2018 Cesar Casil. All rights reserved.
//

import UIKit

class ViewViewController: UIViewController {
    @IBOutlet weak var nameLabel: UILabel!
    @IBOutlet weak var numberLabel: UILabel!
    
    var indexPath: IndexPath?
    var fname: String?
    var lname: String?
    var num: String?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        let f = fname
        let l = lname
        nameLabel.text = "Name: " + f!+" "+l!
        numberLabel.text = "Number: " + num!
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    @IBAction func doneButtonPressed(_ sender: UIBarButtonItem) {
        dismiss(animated: true, completion: nil)
    }
    
}
