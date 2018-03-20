//
//  ToDoViewController.swift
//  todolist
//
//  Created by Cesar Casil on 3/18/18.
//  Copyright © 2018 Cesar Casil. All rights reserved.
//

import UIKit
import CoreData

class ToDoViewController: UIViewController, AddItemViewControllerDelegate {
    
    
    @IBOutlet weak var toDoTableView: UITableView!
    
    var tableData = [ToDoListItem]()
    
    let managedObjectContext = (UIApplication.shared.delegate as! AppDelegate).persistentContainer.viewContext

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        toDoTableView.delegate = self
        toDoTableView.dataSource = self
        fetchAllItems()
    }
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    func fetchAllItems() {
        
        let request = NSFetchRequest<NSFetchRequestResult>(entityName: "ToDoListItem")
        do {
            let result = try managedObjectContext.fetch(request)
            tableData = result as! [ToDoListItem]
        } catch {
            print ("\(error)")
        }
    }
    
    func itemAdded(by controller: AddItemViewController, title: String, desc: String, date: String, check: Bool, at indexPath: NSIndexPath?) {
        let item = NSEntityDescription.insertNewObject(forEntityName: "ToDoListItem", into: managedObjectContext) as! ToDoListItem
        item.title = title
        item.desc = desc
        item.date = date
        item.check = check
        tableData.append(item)
        print (tableData)
        
        do {
            try managedObjectContext.save()
        } catch {
            print ("\(error)")
        }
        dismiss(animated: true, completion: nil)
        toDoTableView.reloadData()
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        let destination = segue.destination as! AddItemViewController
        destination.delegate = self
        if let indexPath = sender as? NSIndexPath {
            let item = tableData[indexPath.row]
        }
    }

}

extension ToDoViewController: UITableViewDelegate, UITableViewDataSource {
    
//    func tableView(_ tableView: UITableView, didDeselectRowAt indexPath: IndexPath) {
//        if let cell = tableView.cellForRow(at: indexPath) {
//            cell.accessoryType = .none
//        }
//    }
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        if let cell = tableView.cellForRow(at: indexPath) {
            if cell.accessoryType == .checkmark {
                cell.accessoryType = .none
                tableData[indexPath.row].check = false
            } else {
                cell.accessoryType = .checkmark
                tableData[indexPath.row].check = true
            }
        }
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return tableData.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "CustomCell", for: indexPath) as! CustomCell
        cell.itemTitleLabel.text = tableData[indexPath.row].title
        cell.itemDescriptionLabel.text = tableData[indexPath.row].desc
        cell.dateLabel.text = tableData[indexPath.row].date
        if tableData[indexPath.row].check {
            cell.accessoryType = .checkmark
        } else {
            cell.accessoryType = .none
        }
        return cell
    }
}
