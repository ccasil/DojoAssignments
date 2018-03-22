//
//  DatePickerViewController.swift
//  tabbarcontroller
//
//  Created by Cesar Casil on 3/17/18.
//  Copyright © 2018 Cesar Casil. All rights reserved.
//

import UIKit

class DatePickerViewController: UIViewController {
    @IBOutlet weak var shortLabel: UILabel!
    @IBOutlet weak var mediumLabel: UILabel!
    @IBOutlet weak var longLabel: UILabel!
    @IBOutlet weak var datePicker: UIDatePicker!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        print("DatePickerViewController viewDidLoad")
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        print("DatePickerViewController viewWillAppear")
    }
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    @IBAction func myDate(_ sender: UIDatePicker) {
        
        let dateFormatters = DateFormatter()
        dateFormatters.dateStyle = .short
        shortLabel.text = dateFormatters.string(from: datePicker.date)
        
        let dateFormatterm = DateFormatter()
        dateFormatterm.dateStyle = .medium
        mediumLabel.text = dateFormatterm.string(from: datePicker.date)
        
        let dateFormatterl = DateFormatter()
        dateFormatterl.dateStyle = .long
        longLabel.text = dateFormatterl.string(from: datePicker.date)
    }
    

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destinationViewController.
        // Pass the selected object to the new view controller.
    }
    */

}
