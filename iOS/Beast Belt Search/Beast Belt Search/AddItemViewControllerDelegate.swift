//
//  AddItemViewControllerDelegate.swift
//  Beast Belt Search
//
//  Created by Cesar Casil on 3/26/18.
//  Copyright © 2018 Cesar Casil. All rights reserved.
//

import Foundation

protocol AddItemViewControllerDelegate: class {
    func addItem(by controller: AddItemViewController, text: String, at indexPath: IndexPath?)
}
