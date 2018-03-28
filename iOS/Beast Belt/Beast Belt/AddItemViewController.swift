//
//  AddItemViewController.swift
//  Beast Belt
//
//  Created by Cesar Casil on 3/25/18.
//  Copyright © 2018 Cesar Casil. All rights reserved.
//

import UIKit

class AddItemViewController: UIViewController {

    @IBOutlet weak var textField: UITextField!
    
    var indexPath: IndexPath?
    var text: String?
    
    weak var delegate: AddItemViewControllerDelegate?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        textField.text = text
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    @IBAction func cancelButtonPressed(_ sender: UIBarButtonItem) {
        dismiss(animated: true, completion: nil)
    }
    
    @IBAction func doneButtonPressed(_ sender: UIBarButtonItem) {
        delegate?.addItem(by: self, with: textField.text!, at: indexPath)
    }
    

}
