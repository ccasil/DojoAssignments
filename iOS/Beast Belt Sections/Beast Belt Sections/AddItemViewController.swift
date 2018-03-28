//
//  AddItemViewController.swift
//  Beast Belt Sections
//
//  Created by Cesar Casil on 3/26/18.
//  Copyright © 2018 Cesar Casil. All rights reserved.
//

import UIKit

class AddItemViewController: UIViewController {
    
    @IBOutlet weak var titleTextField: UITextField!
    @IBOutlet weak var descTextField: UITextField!
    @IBOutlet weak var datePicker: UIDatePicker!
    
    weak var delegate: AddItemViewControllerDelegate?
    var indexPath: IndexPath?
    var t: String?
    var date: Date?
    var desc: String?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        titleTextField.text = title
        descTextField.text = desc
        if let udate = date as? Date {
            datePicker.date = udate
        }
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    @IBAction func saveButtonPressed(_ sender: UIButton) {
        delegate?.addItem(by: self, title: titleTextField.text!, date: datePicker.date, desc: descTextField.text!, at: indexPath)
    }
    
    @IBAction func cancelButtonPressed(_ sender: UIButton) {
        dismiss(animated: true, completion: nil)
    }
    
}
