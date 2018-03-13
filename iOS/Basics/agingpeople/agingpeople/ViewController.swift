//
//  ViewController.swift
//  agingpeople
//
//  Created by Cesar Casil on 3/12/18.
//  Copyright © 2018 Cesar Casil. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    @IBOutlet weak var tableView: UITableView!
    
    var names: [String] = ["In Soo", "Wiseman", "Kyle", "Johnnie", "Bryant", "Robert", "Scott", "Nathan", "Vince", "Jonathan", "Andy", "Juan"]
    
    override func viewDidLoad() {
        super.viewDidLoad()
        tableView.dataSource = self
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

extension ViewController: UITableViewDataSource {
    // How many cells are we going to need?
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        // return an integer that indicates how many rows (cells) to draw
        return 12
    }
    // How should I create each cell?
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        // Get the UITableViewCell and create/populate it with data then return it
        let cell = tableView.dequeueReusableCell(withIdentifier: "MyCell", for: indexPath)
        cell.textLabel?.text = names[indexPath.row]
        cell.detailTextLabel?.text = "\(Int(arc4random_uniform(90) + 5)) years old"
        return cell
    }
}
