//
//  BeastViewController.swift
//  Beast Belt
//
//  Created by Cesar Casil on 3/25/18.
//  Copyright © 2018 Cesar Casil. All rights reserved.
//

import UIKit
import CoreData

class BeastViewController: UIViewController, AddItemViewControllerDelegate, CustomCellTableViewCellDelegate {

    @IBOutlet weak var tableView: UITableView!
    var tableData = [BeastListItem]()
    
    let appDelegate = (UIApplication.shared.delegate as! AppDelegate)
    let managedObjectContext = (UIApplication.shared.delegate as! AppDelegate).persistentContainer.viewContext
    
    override func viewDidLoad() {
        super.viewDidLoad()
        tableView.dataSource = self
        tableView.delegate = self
        fetchAllItems()
        tableView.reloadData()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    func fetchAllItems() {
        let request = NSFetchRequest<NSFetchRequestResult>(entityName: "BeastListItem")
        let mypredicate = NSPredicate(format: "beasted == %@", false as CVarArg)
        request.predicate = mypredicate
        do{
            let result = try managedObjectContext.fetch(request)
            tableData = result as! [BeastListItem]
        } catch {
            print("\(error)")
        }
    }
    
    func addItem(by controller: AddItemViewController, with text: String, at indexPath: IndexPath?) {
        if let ip = indexPath {
            let item = tableData[ip.row]
            item.text = text
        } else {
            let item = NSEntityDescription.insertNewObject(forEntityName: "BeastListItem", into: managedObjectContext) as! BeastListItem
            item.text = text
            item.beasted = false
            tableData.append(item)
        }
        appDelegate.saveContext()
        tableView.reloadData()
        dismiss(animated: true, completion: nil)
    }
    
    func beastButtonPressed(_ indexPath: IndexPath) {
            tableData[indexPath.row].beasted = true
            tableData[indexPath.row].date = Date()
            appDelegate.saveContext()
            fetchAllItems()
            tableView.reloadData()
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        let navigationController = segue.destination as! UINavigationController
        let addItemTableViewController = navigationController.topViewController as! AddItemViewController
        addItemTableViewController.delegate = self
        if let indexPath = sender as? IndexPath {
            let item = tableData[indexPath.row]
            addItemTableViewController.text = item.text
            addItemTableViewController.indexPath = indexPath
        }
    }
}


extension BeastViewController: UITableViewDelegate, UITableViewDataSource {
    
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        performSegue(withIdentifier: "EditSegue", sender: indexPath)
    }
    
//    func tableView(_ tableView: UITableView, editActionsForRowAt indexPath: IndexPath) -> [UITableViewRowAction]? {
//        let delete = UITableViewRowAction(style: .destructive, title: "Delete") {_,_ in
//            let item = self.tableData[indexPath.row]
//            self.managedObjectContext.delete(item)
//            self.appDelegate.saveContext()
//            self.tableData.remove(at: indexPath.row)
//            tableView.deleteRows(at: [indexPath], with: .automatic)
//        }
//        return [delete]
//    }
    
    func tableView(_ tableView: UITableView, commit editingStyle: UITableViewCellEditingStyle, forRowAt indexPath: IndexPath) {
        let item = tableData[indexPath.row]
        managedObjectContext.delete(item)
        appDelegate.saveContext()
        tableData.remove(at: indexPath.row)
        tableView.reloadData()
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return tableData.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "CustomCell", for: indexPath) as! CustomCellTableViewCell
        let data = tableData[indexPath.row]
        cell.titleLabel.text = data.text
        cell.delegate = self
        cell.indexPath = indexPath
        return cell
    }
    
    
}
