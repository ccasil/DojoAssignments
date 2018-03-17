//
//  CustomCellDelegate.swift
//  binarycounter
//
//  Created by Cesar Casil on 3/16/18.
//  Copyright © 2018 Cesar Casil. All rights reserved.
//

import UIKit

protocol CustomCellDelegate: class {
    func sub(by controller: CustomCell, numpower: Int)
    func add(by controller: CustomCell, numpower: Int)
}
