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
    
    func itemAdded(by controller: AddItemViewController, title: String, desc: String, at indexPath: NSIndexPath?) {
        let item = NSEntityDescription.insertNewObject(forEntityName: "ToDoListItem", into: managedObjectContext) as! ToDoListItem
        item.title = title
        item.desc = desc
        tableData.append(item)
        
        do {
            try managedObjectContext.save()
        } catch {
            print ("\(error)")
        }
        toDoTableView.reloadData()
        dismiss(animated: true, completion: nil)
    }

}

extension ToDoViewController: UITableViewDelegate, UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return tableData.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "CustomCell", for: indexPath) as! CustomCell
        cell.itemTitleLabel.text = tableData[indexPath.row].title
        cell.itemDescriptionLabel.text = tableData[indexPath.row].desc
        return cell
    }
}
