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
    
    @IBAction func subButtonPressed(_ sender: UIButton) {
    }
    @IBAction func addButtonPressed(_ sender: UIButton) {
    }
    
    override func awakeFromNib() {
        super.awakeFromNib()
        // Initialization code
    }

    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)

        // Configure the view for the selected state
    }

}
