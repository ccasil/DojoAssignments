//
//  AddItemViewControllerDelegate.swift
//  todolist
//
//  Created by Cesar Casil on 3/18/18.
//  Copyright © 2018 Cesar Casil. All rights reserved.
//

import UIKit

protocol AddItemViewControllerDelegate: class {
    func itemAdded(by controller: AddItemViewController, title: String, desc: String, at indexPath: NSIndexPath?)
}
