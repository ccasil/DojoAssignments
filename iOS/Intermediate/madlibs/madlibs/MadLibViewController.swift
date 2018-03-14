//
//  MadLibViewController.swift
//  madlibs
//
//  Created by Cesar Casil on 3/13/18.
//  Copyright © 2018 Cesar Casil. All rights reserved.
//

import UIKit

class MadLibViewController: UIViewController {
    @IBOutlet weak var madLibLabel: UILabel!
    
    var adjective: String? = ""
    var verb1: String? = ""
    var verb2: String? = ""
    var noun:String? = ""

    
    override func viewDidLoad() {
        super.viewDidLoad()
        var madlib: String = "We are having a perfectly \(adjective) time now. Later we will \(verb1) and \(verb2) in the \(noun)."
        madLibLabel.text = madlib
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    @IBAction func unwindToMadLib (segue: UIStoryboardSegue) { }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        let destination = segue.destination as! AddWordViewController
    }
    
    @IBAction func composeButtonPressed(_ sender: UIBarButtonItem) {
        performSegue(withIdentifier: "AddWordViewController", sender: sender)
    }
}

