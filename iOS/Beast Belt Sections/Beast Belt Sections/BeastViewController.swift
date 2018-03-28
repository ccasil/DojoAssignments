//
//  BeastViewController.swift
//  Beast Belt Sections
//
//  Created by Cesar Casil on 3/26/18.
//  Copyright © 2018 Cesar Casil. All rights reserved.
//

import UIKit
import CoreData

class BeastViewController: UIViewController, AddItemViewControllerDelegate {
    
    @IBOutlet weak var tableView: UITableView!
    
    
    let headers = ["Beast", "Beasted"]
    var tableData: [String: [BeastListItem]] = ["Beast": [], "Beasted": []]
    
    let appDelegate = (UIApplication.shared.delegate as! AppDelegate)
    let managedObjectContext = (UIApplication.shared.delegate as! AppDelegate).persistentContainer.viewContext
    
    override func viewDidLoad() {
        super.viewDidLoad()
        tableView.delegate = self
        tableView.dataSource = self
        fetchAllItems()
        tableView.reloadData()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    func fetchAllItems() {
        let request = NSFetchRequest<NSFetchRequestResult>(entityName: "BeastListItem")
        do{
            tableData["Beast"] = []
            tableData["Beasted"] = []
            let result = try managedObjectContext.fetch(request)
            let items = result as! [BeastListItem]
            for item in items {
                if item.beasted {
                    tableData["Beasted"]!.append(item)
                } else {
                    tableData["Beast"]!.append(item)
                }
            }
        } catch {
            print (error)
        }
    }
    
    func addItem(by controller: AddItemViewController, title: String, date: Date, desc: String, at indexPath: IndexPath?) {
        if let ip = indexPath {
            let header = headers[(ip.section)]
            let item = tableData[header]![ip.row]
            item.title = title
            item.date = date
            item.desc = desc
        } else {
            let item = NSEntityDescription.insertNewObject(forEntityName: "BeastListItem", into: managedObjectContext) as! BeastListItem
            let header = headers[0]
            item.title = title
            item.date = date
            item.desc = desc
            tableData[header]!.append(item)
        }
        appDelegate.saveContext()
        tableView.reloadData()
        dismiss(animated: true, completion: nil)
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {

        let navigationController = segue.destination as! AddItemViewController
        navigationController.delegate = self

        if let indexPath = sender as? IndexPath {
            let header = headers[indexPath.section]
            let item = tableData[header]![indexPath.row]
            navigationController.title = item.title
            navigationController.desc = item.desc
            navigationController.date = item.date
            navigationController.indexPath = indexPath
        }
    }

}

extension BeastViewController: UITableViewDelegate, UITableViewDataSource {
    
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        let header = headers[indexPath.section]
        if header == "Beast" {
            tableData["Beasted"]!.append(tableData["Beast"]![indexPath.row])
            tableData[header]![indexPath.row].beasted = true
            tableData["Beast"]?.remove(at: indexPath.row)
        } else {
            tableData["Beast"]!.append(tableData["Beasted"]![indexPath.row])
            tableData[header]![indexPath.row].beasted = false
            tableData["Beasted"]?.remove(at: indexPath.row)
        }
        appDelegate.saveContext()
        fetchAllItems()
        tableView.reloadData()
    }
    
    func tableView(_ tableView: UITableView, editActionsForRowAt indexPath: IndexPath) -> [UITableViewRowAction]? {
        let edit = UITableViewRowAction(style: .destructive, title: "Edit") {_,_ in
            self.performSegue(withIdentifier: "EditSegue", sender: indexPath)
        }
        let delete = UITableViewRowAction(style: .destructive, title: "Delete") {_,_ in
            let header = self.headers[indexPath.section]
            let item = self.tableData[header]![indexPath.row]
            self.managedObjectContext.delete(item)
            self.appDelegate.saveContext()
            self.tableData[header]?.remove(at: indexPath.row)
            tableView.deleteRows(at: [indexPath], with: .automatic)
        }
        edit.backgroundColor = UIColor.blue
        return [edit, delete]
    }
    
    func tableView(_ tableView: UITableView, titleForHeaderInSection section: Int) -> String? {
        return headers[section]
    }
    
    func numberOfSections(in tableView: UITableView) -> Int {
        return headers.count
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        let header = headers[section]
        return tableData[header]!.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "CustomCell", for: indexPath) as! CustomTableViewCell
        let header = headers[indexPath.section]

        cell.titleLabel.text = tableData[header]![indexPath.row].title
        cell.descLabel.text = tableData[header]![indexPath.row].desc

        let dateFormatter = DateFormatter()
        dateFormatter.dateStyle = .medium
        dateFormatter.timeStyle = .none
        cell.dateLabel.text = dateFormatter.string(from: tableData[header]![indexPath.row].date!)

        return cell
    }
    
}
