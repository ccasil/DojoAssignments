//
//  AddItemViewController.swift
//  todolist
//
//  Created by Cesar Casil on 3/18/18.
//  Copyright © 2018 Cesar Casil. All rights reserved.
//

import UIKit

class AddItemViewController: UIViewController {
    @IBOutlet weak var itemTitleLabel: UITextField!
    @IBOutlet weak var itemDescriptionLabel: UITextField!
    @IBOutlet weak var datePicker: UIDatePicker!
    weak var delegate: AddItemViewControllerDelegate?
    
    var indexPath: NSIndexPath?
    
    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    @IBAction func addItemButtonPressed(_ sender: UIButton) {
        
        let dateFormatter = DateFormatter()
        dateFormatter.dateFormat = "dd/MM/yyyy"
        let strDate = dateFormatter.string(from: datePicker.date)
        
        delegate?.itemAdded(by: self, title: itemTitleLabel.text!, desc: itemDescriptionLabel.text!, date: strDate, check: false, at: indexPath)
//        dismiss(animated: true, completion: nil)
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        let destination = segue.destination as! ToDoViewController
    }

}
