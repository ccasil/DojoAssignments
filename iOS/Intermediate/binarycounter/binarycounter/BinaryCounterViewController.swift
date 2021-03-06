//
//  BinaryCounterViewController.swift
//  binarycounter
//
//  Created by Cesar Casil on 3/15/18.
//  Copyright © 2018 Cesar Casil. All rights reserved.
//

import UIKit

class BinaryCounterViewController: UIViewController, CustomCellDelegate {
    
    @IBOutlet weak var BinaryCounterTableView: UITableView!
    @IBOutlet weak var totalLabel: UILabel!
    
    var total = 0
    
    override func viewDidLoad() {
        super.viewDidLoad()
        BinaryCounterTableView.dataSource = self
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    func sub(by controller: CustomCell, numpower: Int) {
        total -= numpower
        totalLabel.text = "Total: " +  String(total)
    }
    func add(by controller: CustomCell, numpower: Int) {
        total += numpower
        totalLabel.text = "Total: " +   String(total)
    }
    
}

extension BinaryCounterViewController: UITableViewDelegate, UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return 16
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "CustomCell", for: indexPath) as! CustomCell
        cell.powerLabel.text = String(describing: pow(10,indexPath.row))
        cell.delegate = self
        return cell
    }
    
}
