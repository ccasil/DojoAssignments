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
    weak var delegate: AddWordViewControllerDelegate?
    
    @IBAction func submitButtonPressed(_ sender: UIButton) {
//        dismiss(animated: true, completion: nil)
        delegate?.changeWords(by: self, adjective: adjectiveTextField.text! , verb1: verb1TextField.text!, verb2: verb2TextField.text!, noun: nounTextField.text!)
//        performSegue(withIdentifier: "unwindToMadLib", sender: self)
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        let destination = segue.destination as! MadLibViewController
    }

}
