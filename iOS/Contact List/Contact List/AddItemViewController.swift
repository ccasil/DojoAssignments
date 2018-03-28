//
//  AddItemViewController.swift
//  Contact List
//
//  Created by Cesar Casil on 3/27/18.
//  Copyright © 2018 Cesar Casil. All rights reserved.
//

import UIKit

class AddItemViewController: UIViewController {
    @IBOutlet weak var firstNameTextField: UITextField!
    @IBOutlet weak var lastNameTextField: UITextField!
    @IBOutlet weak var numberTextField: UITextField!
    
    weak var delegate: AddItemViewControllerDelegate?
    
    var indexPath: IndexPath?
    var fname: String?
    var lname: String?
    var num: String?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        firstNameTextField.text = fname
        lastNameTextField.text = lname
        numberTextField.text = num
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    @IBAction func saveButtonPresed(_ sender: Any) {
        delegate?.addItem(by: self, firstname: firstNameTextField.text!, lastname: lastNameTextField.text!, number: numberTextField.text!, at: indexPath)
    }
    
    @IBAction func cancelButtonPressed(_ sender: UIBarButtonItem) {
        dismiss(animated: true, completion: nil)
    }

}
