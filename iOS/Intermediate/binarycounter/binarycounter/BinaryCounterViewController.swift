//
//  BinaryCounterViewController.swift
//  binarycounter
//
//  Created by Cesar Casil on 3/15/18.
//  Copyright © 2018 Cesar Casil. All rights reserved.
//

import UIKit

class BinaryCounterViewController: UIViewController {
    @IBOutlet weak var BinaryCounterTableView: UITableView!
    
    let power = 1
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        BinaryCounterTableView.dataSource = self
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

extension BinaryCounterViewController: UITableViewDelegate, UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return 16
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "CustomCell", for: indexPath)
        cell.textLabel?.text = String(power)
        return cell
    }
    
    
    
}
