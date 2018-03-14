//
//  MadLibViewController.swift
//  madlibs
//
//  Created by Cesar Casil on 3/13/18.
//  Copyright © 2018 Cesar Casil. All rights reserved.
//

import UIKit

class MadLibViewController: UIViewController, AddWordViewControllerDelegate {
        
    @IBOutlet weak var madLibLabel: UILabel!
    
    func changeWords(by controller: AddWordViewController, adjective: String, verb1: String, verb2: String, noun: String) {
        madLibLabel.text = "We are having a perfectly \(adjective) time now. Later we will \(verb1) and \(verb2) in the \(noun)."
        dismiss(animated: true, completion: nil)
    }
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    @IBAction func unwindToMadLib (segue: UIStoryboardSegue) { }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        let destination = segue.destination as! AddWordViewController
        destination.delegate = self
    }
    
    @IBAction func composeButtonPressed(_ sender: UIBarButtonItem) {
        performSegue(withIdentifier: "AddWordViewController", sender: sender)
    }
}
