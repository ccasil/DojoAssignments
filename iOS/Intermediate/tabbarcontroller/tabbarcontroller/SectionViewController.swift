//
//  SectionViewController.swift
//  tabbarcontroller
//
//  Created by Cesar Casil on 3/22/18.
//  Copyright © 2018 Cesar Casil. All rights reserved.
//

import UIKit

class SectionViewController: UIViewController {
    @IBOutlet weak var countLabel: UIButton!
    @IBOutlet weak var sectionTableView: UITableView!
    
    let headers = ["First", "Second"]
    var sectionData: [String: [String]] = [
        "First": ["Robert", "Johnnie", "Ian", "Vince", "Kyle"],
        "Second": []]
    
    var count: Int = 0
    
    override func viewDidLoad() {
        super.viewDidLoad()
        sectionTableView.dataSource = self
        sectionTableView.delegate = self
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
}

extension SectionViewController: UITableViewDataSource, UITableViewDelegate {
    
    func tableView(_ tableView: UITableView, titleForHeaderInSection section: Int) -> String? {
        return headers[section]
    }
    
    func numberOfSections(in tableView: UITableView) -> Int {
        return headers.count
    }

    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        let header = headers[section]
        return sectionData[header]!.count
    }

    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "myCell", for: indexPath)
        let header = headers[indexPath.section]
        
        cell.textLabel?.text = sectionData[header]![indexPath.row]
        
        return cell
    }
    
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
//        print("Section: \(indexPath.section) and Row: \(indexPath.row)")
        if indexPath.section == 0 {
            sectionData["Second"]!.append(sectionData["First"]![indexPath.row])
            sectionData["First"]?.remove(at: indexPath.row)
            tableView.reloadData()
        } else {
            sectionData["First"]!.append(sectionData["Second"]![indexPath.row])
            sectionData["Second"]?.remove(at: indexPath.row)
            tableView.reloadData()
        }
        count += 1
        print (count)
        countLabel.titleLabel!.text = String(count)
    }
}
