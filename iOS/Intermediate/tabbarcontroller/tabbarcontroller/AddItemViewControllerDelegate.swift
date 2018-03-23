//
//  AddItemViewControllerDelegate.swift
//  tabbarcontroller
//
//  Created by Cesar Casil on 3/22/18.
//  Copyright © 2018 Cesar Casil. All rights reserved.
//

import UIKit

protocol AddItemViewControllerDelegate: class {
    func itemAdded(by controller: AddItemViewController, title: String, desc: String, date: Date, check: Bool, at indexPath: NSIndexPath?)
}
