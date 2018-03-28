//
//  CustomTableViewCellDelegate.swift
//  Beast Belt
//
//  Created by Cesar Casil on 3/25/18.
//  Copyright © 2018 Cesar Casil. All rights reserved.
//

import UIKit

protocol CustomCellTableViewCellDelegate: class {
//    func beastButtonPressed(_ controller: CustomCellTableViewCell)
    func beastButtonPressed(_ indexPath: IndexPath)
}
