//
//  additemtableviewcontrollerdelegate.swift
//  bucketlist
//
//  Created by Cesar Casil on 3/12/18.
//  Copyright © 2018 Cesar Casil. All rights reserved.
//

import UIKit
protocol AddItemTableViewControllerDelegate: class {
    func itemSaved (by controller: AddItemTableViewController, with text: String, at indexPath: NSIndexPath?)
    func cancelButtonPressed(by controller: AddItemTableViewController)
}
