//
//  ContactViewController.swift
//  Contact List
//
//  Created by Cesar Casil on 3/27/18.
//  Copyright © 2018 Cesar Casil. All rights reserved.
//

import UIKit
import CoreData

class ContactViewController: UIViewController, AddItemViewControllerDelegate {
    
    @IBOutlet weak var tableView: UITableView!
    
    var tableData = [Contact]()
    
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
        let request = NSFetchRequest<NSFetchRequestResult>(entityName: "Contact")
        do{
            let result = try managedObjectContext.fetch(request)
            tableData = result as! [Contact]
        } catch {
            print(error)
        }
    }
    
    func addItem(by controller: AddItemViewController, firstname: String, lastname: String, number: String, at indexPath: IndexPath?) {
        if let ip = indexPath {
            let item = tableData[ip.row]
            item.firstname = firstname
            item.lastname = lastname
            item.number = number
        } else {
            let item = NSEntityDescription.insertNewObject(forEntityName: "Contact", into: managedObjectContext) as! Contact
            item.firstname = firstname
            item.lastname = lastname
            item.number = number
            tableData.append(item)
        }
        appDelegate.saveContext()
        tableView.reloadData()
        dismiss(animated: true, completion: nil)
    }

    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {

        if segue.identifier == "EditSegue"{
            let navigationController = segue.destination as! UINavigationController
            let addItemTableViewController = navigationController.topViewController as! AddItemViewController
            addItemTableViewController.delegate = self
                if let indexPath = sender as? IndexPath {
                    let item = tableData[indexPath.row]
                    addItemTableViewController.title = "Edit Contact"
                    addItemTableViewController.fname = item.firstname
                    addItemTableViewController.lname = item.lastname
                    addItemTableViewController.num = item.number
                    addItemTableViewController.indexPath = indexPath
                }
        }
        if segue.identifier == "ViewSegue"{
            let navigationController = segue.destination as! UINavigationController
            let viewviewcontroller = navigationController.topViewController as! ViewViewController
            if let indexPath = sender as? IndexPath {
                let item = tableData[indexPath.row]
                viewviewcontroller.title = item.firstname
                viewviewcontroller.fname = item.firstname
                viewviewcontroller.lname = item.lastname
                viewviewcontroller.num = item.number
                viewviewcontroller.indexPath = indexPath
            }
        }
    }
}

extension ContactViewController: UITableViewDelegate, UITableViewDataSource {
    
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        let alertController = UIAlertController(title: "Contact List", message: "What would you like to do?", preferredStyle: .actionSheet)
        
        let viewButton = UIAlertAction(title: "View", style: .default, handler: { (action) -> Void in
            self.performSegue(withIdentifier: "ViewSegue", sender: indexPath)
        })
        
        let  editButton = UIAlertAction(title: "Edit", style: .default, handler: { (action) -> Void in
            self.performSegue(withIdentifier: "EditSegue", sender: indexPath)
        })
        
        let  deleteButton = UIAlertAction(title: "Delete", style: .destructive, handler: { (action) -> Void in
            let item = self.tableData[indexPath.row]
            self.managedObjectContext.delete(item)
            self.appDelegate.saveContext()
            self.tableData.remove(at: indexPath.row)
            tableView.reloadData()
        })
        
        let cancelButton = UIAlertAction(title: "Cancel", style: .cancel, handler: { (action) -> Void in
            print("Cancel Button Tapped")
        })
        
        
        alertController.addAction(viewButton)
        alertController.addAction(editButton)
        alertController.addAction(deleteButton)
        alertController.addAction(cancelButton)
        
        self.navigationController!.present(alertController, animated: true, completion: nil)
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return tableData.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "myCell", for: indexPath)
        let data = tableData[indexPath.row]
        let fname = data.firstname
        let lname = data.lastname
        let append = fname!+" "+lname!
        cell.textLabel?.text = append
        cell.detailTextLabel?.text = data.number
        return cell
    }
}
