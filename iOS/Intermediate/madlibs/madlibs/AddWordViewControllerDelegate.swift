//
//  AddWordViewControllerDelegate.swift
//  madlibs
//
//  Created by Cesar Casil on 3/14/18.
//  Copyright © 2018 Cesar Casil. All rights reserved.
//

import UIKit

protocol AddWordViewControllerDelegate: class {
    func changeWords(by controller: AddWordViewController, adjective: String, verb1: String, verb2: String, noun: String)
}
