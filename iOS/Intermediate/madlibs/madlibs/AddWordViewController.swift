//
//  AddWordViewController.swift
//  madlibs
//
//  Created by Cesar Casil on 3/13/18.
//  Copyright © 2018 Cesar Casil. All rights reserved.
//

import UIKit

class AddWordViewController: UIViewController {
    @IBOutlet weak var adjectiveTextField: UITextField!
    @IBOutlet weak var verb1TextField: UITextField!
    @IBOutlet weak var verb2TextField: UITextField!
    @IBOutlet weak var nounTextField: UITextField!
    
    @IBAction func submitButtonPressed(_ sender: UIButton) {
//        dismiss(animated: true, completion: nil)
        performSegue(withIdentifier: "unwindToMadLib", sender: self)
    }
    override func viewDidLoad() {
        super.viewDidLoad()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        let destination = segue.destination as! MadLibViewController
        if let adjectives = adjectiveTextField.text {
            destination.adjective = adjectives
        }
        if let verbs1 = verb1TextField.text {
            destination.verb1 = verbs1
        }
        if let verbs2 = verb2TextField.text {
            destination.verb2 =  verbs2
        }
        if let nouns = nounTextField.text {
            destination.noun = nouns
        }
    }

}
