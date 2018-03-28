//
//  AddItemViewControllerDelegate.swift
//  Beast Belt Sections
//
//  Created by Cesar Casil on 3/26/18.
//  Copyright © 2018 Cesar Casil. All rights reserved.
//

import Foundation

protocol AddItemViewControllerDelegate: class {
    func addItem(by controller: AddItemViewController, title: String, date: Date, desc: String, at: IndexPath?)
}
