//
//  CustomCell.swift
//  binarycounter
//
//  Created by Cesar Casil on 3/15/18.
//  Copyright © 2018 Cesar Casil. All rights reserved.
//

import UIKit

class CustomCell: UITableViewCell {
    
    @IBOutlet weak var powerLabel: UILabel!
    @IBOutlet weak var subButton: UIButton!
    @IBOutlet weak var addButton: UIButton!
    weak var delegate: CustomCellDelegate?
    
    @IBAction func subButtonPressed(_ sender: UIButton) {
        let numpower = Int(powerLabel.text!)!
        delegate?.sub(by: self, numpower: numpower)
    }
    @IBAction func addButtonPressed(_ sender: UIButton) {
        let numpower = Int(powerLabel.text!)!
        delegate?.add(by: self, numpower: numpower)
    }
    
//    override func awakeFromNib() {
//        super.awakeFromNib()
//        // Initialization code
//    }
//
//    override func setSelected(_ selected: Bool, animated: Bool) {
//        super.setSelected(selected, animated: animated)
//
//        // Configure the view for the selected state
//    }

}
