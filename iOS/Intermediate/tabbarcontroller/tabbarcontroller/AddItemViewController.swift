//
//  AddItemViewController.swift
//  tabbarcontroller
//
//  Created by Cesar Casil on 3/22/18.
//  Copyright © 2018 Cesar Casil. All rights reserved.
//

import UIKit

class AddItemViewController: UIViewController {
    @IBOutlet weak var itemTitleLabel: UITextField!
    @IBOutlet weak var itemDescriptionLabel: UITextField!
    @IBOutlet weak var datePicker: UIDatePicker!
    weak var delegate: AddItemViewControllerDelegate?
    @IBOutlet weak var buttonText: UIButton!
    
    
    var indexPath: NSIndexPath?
    var tit: String?
    var desc: String?
    var date: Date?
    var updateText: String?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        // Do any additional setup after loading the view.
        itemTitleLabel.text = tit
        itemDescriptionLabel.text = desc
        if let udate = date as? Date {
            datePicker.date = udate
        }
        if updateText != nil {
            buttonText.setTitle(updateText, for: .normal)
        }
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    @IBAction func addItemButtonPressed(_ sender: UIButton) {
        delegate?.itemAdded(by: self, title: itemTitleLabel.text!, desc: itemDescriptionLabel.text!, date: datePicker.date, check: false, at: indexPath)
        //        dismiss(animated: true, completion: nil)
    }
    @IBAction func cancelButtonPressed(_ sender: UIButton) {
        dismiss(animated: true, completion: nil)
    }
    
    
}
