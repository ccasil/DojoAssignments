//
//  AddItemViewController.swift
//  Beast Belt Search
//
//  Created by Cesar Casil on 3/26/18.
//  Copyright © 2018 Cesar Casil. All rights reserved.
//

import UIKit

class AddItemViewController: UIViewController {
    @IBOutlet weak var textField: UITextField!
    
    weak var delegate: AddItemViewControllerDelegate?
    var indexPath: IndexPath?
    var t: String?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        textField.text = t
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    @IBAction func saveButtonPressed(_ sender: Any) {
        delegate?.addItem(by: self, text: textField.text!, at: indexPath)
    }
    
    @IBAction func cancelButtonPressed(_ sender: UIBarButtonItem) {
        dismiss(animated: true, completion: nil)
    }
    
}
