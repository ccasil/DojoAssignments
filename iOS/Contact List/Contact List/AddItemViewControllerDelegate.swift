//
//  AddItemViewControllerDelegate.swift
//  Contact List
//
//  Created by Cesar Casil on 3/27/18.
//  Copyright © 2018 Cesar Casil. All rights reserved.
//

import UIKit

protocol AddItemViewControllerDelegate: class {
    func addItem (by controller: AddItemViewController, firstname: String, lastname: String, number: String, at indexPath: IndexPath?)
}
