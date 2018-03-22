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
    let appDelegate = (UIApplication.shared.delegate as! AppDelegate)

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
    
    func itemAdded(by controller: AddItemViewController, title: String, desc: String, date: Date, check: Bool, at indexPath: NSIndexPath?) {
        if let ip = indexPath {
            let item = tableData[ip.row]
            item.title = title
            item.desc = desc
            if let udate = date as? Date {
                item.date = udate
            }
        }else{
        let item = NSEntityDescription.insertNewObject(forEntityName: "ToDoListItem", into: managedObjectContext) as! ToDoListItem
            item.title = title
            item.desc = desc
            if let udate = date as? Date {
                item.date = udate
            }
            tableData.append(item)
            appDelegate.saveContext()
        }
        toDoTableView.reloadData()
        dismiss(animated: true, completion: nil)
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        let destination = segue.destination as! AddItemViewController
        destination.delegate = self
        if let indexPath = sender as? NSIndexPath {
            let item = tableData[indexPath.row]
            destination.tit = item.title
            destination.desc = item.desc
            destination.date = item.date
            destination.indexPath = indexPath
            destination.updateText = "Update"
        }
    }
}

extension ToDoViewController: UITableViewDelegate, UITableViewDataSource {
    
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
    func tableView(_ tableView: UITableView, editActionsForRowAt indexPath: IndexPath) -> [UITableViewRowAction]? {
        let delete = UITableViewRowAction(style: .destructive, title: "Delete") {_,_ in
            let item = self.tableData[indexPath.row]
            self.managedObjectContext.delete(item)
            do {
                try self.managedObjectContext.save()
            } catch {
                print ("\(error)")
            }
            self.tableData.remove(at: indexPath.row)
            tableView.reloadData()
        }
        let edit = UITableViewRowAction(style: .normal, title: "Edit") {_,_ in
            self.performSegue(withIdentifier: "AddSegue", sender: indexPath)
        }
        edit.backgroundColor = UIColor.blue
        return [delete, edit]
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return tableData.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "CustomCell", for: indexPath) as! CustomCell
        
        let data = tableData[indexPath.row]
        
        cell.itemTitleLabel.text = data.title
        cell.itemDescriptionLabel.text = data.desc
        
        let dateFormatter = DateFormatter()
        dateFormatter.dateFormat = "MM/dd/yyyy"
        // dateFormatter.dateFormat = .medium
        cell.dateLabel.text = dateFormatter.string(from: data.date!)
        
        if data.check {
            cell.accessoryType = .checkmark
        } else {
            cell.accessoryType = .none
        }
        return cell
    }
}
