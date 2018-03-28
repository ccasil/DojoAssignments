//
//  AddItemViewControllerDdelegate.swift
//  Beast Belt
//
//  Created by Cesar Casil on 3/25/18.
//  Copyright © 2018 Cesar Casil. All rights reserved.
//

import UIKit

protocol AddItemViewControllerDelegate: class {
    func addItem (by controller: AddItemViewController, with text: String, at indexPath: IndexPath?)
}
