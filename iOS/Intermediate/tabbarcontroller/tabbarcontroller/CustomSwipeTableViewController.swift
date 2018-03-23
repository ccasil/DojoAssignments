//
//  CustomSwipeTableViewController.swift
//  tabbarcontroller
//
//  Created by Cesar Casil on 3/22/18.
//  Copyright © 2018 Cesar Casil. All rights reserved.
//

import UIKit

class CustomSwipeTableViewController: UITableViewController {
    let name: [String] = ["Batman", "Mario", "Katniss Everdeen", "Thor", "Maggie Simpson", "Peter Griffin"]
    let nemesis: [String] = ["Johnnie", "Nathan","Ian", "Robert", "Vince", "Peter Lin"]
    let world: [String] = ["Got EMMM", "Fettuccine", "Area 51", "Ashtray", "Springfield", "Cool hwhip"]
    
    override func viewDidLoad() {
        super.viewDidLoad()
        tableView.reloadData()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }

    override func numberOfSections(in tableView: UITableView) -> Int {
        return 1
    }

    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return name.count
    }

    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "swipeCell", for: indexPath)
        cell.textLabel?.text = name[indexPath.row]
        return cell
    }
    
    override func tableView(_ tableView: UITableView, editActionsForRowAt indexPath: IndexPath) -> [UITableViewRowAction]? {
        let cell = tableView.cellForRow(at: indexPath)
        let clear = UITableViewRowAction(style: .normal, title: "Clear") {_,_ in
            cell?.detailTextLabel?.text = ""
        }
        let world = UITableViewRowAction(style: .destructive, title: "World") {_,_ in
            cell?.detailTextLabel?.text = self.world[indexPath.row]
        }
        let nemesis = UITableViewRowAction(style: .destructive, title: "Nemesis") {_,_ in
            cell?.detailTextLabel?.text = self.nemesis[indexPath.row]
        }
        nemesis.backgroundColor = UIColor.red
        world.backgroundColor = UIColor.blue
        if cell?.detailTextLabel?.text == self.nemesis[indexPath.row] {
            return [world, clear]
        }
        if cell?.detailTextLabel?.text == self.world[indexPath.row] {
            return [clear, nemesis]
        } else {
            return [world, nemesis]
        }
    }
}
