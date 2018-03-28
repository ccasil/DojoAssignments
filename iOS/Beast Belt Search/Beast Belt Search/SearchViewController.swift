//
//  SearchViewController.swift
//  Beast Belt Search
//
//  Created by Cesar Casil on 3/26/18.
//  Copyright © 2018 Cesar Casil. All rights reserved.
//

import UIKit
import CoreData

class SearchViewController: UIViewController, AddItemViewControllerDelegate {
    
    @IBOutlet weak var searchBar: UISearchBar!
    @IBOutlet weak var tableView: UITableView!
    
    let appDelegate = (UIApplication.shared.delegate as! AppDelegate)
    let managedObjectContext = (UIApplication.shared.delegate as! AppDelegate).persistentContainer.viewContext
    
    var tableData = [BeastListItem]()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        tableView.dataSource = self
        tableView.delegate = self
        searchBar.delegate = self
        fetchAllItems()
        tableView.reloadData()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    func fetchAllItems() {
        let request = NSFetchRequest<NSFetchRequestResult>(entityName: "BeastListItem")
        do{
            let result = try managedObjectContext.fetch(request)
            tableData = result as! [BeastListItem]
        } catch {
            print("\(error)")
        }
    }

    func addItem(by controller: AddItemViewController, text: String, at indexPath: IndexPath?) {
        if let ip = indexPath {
            let item = tableData[ip.row]
            item.text = text
        } else {
            let item = NSEntityDescription.insertNewObject(forEntityName: "BeastListItem", into: managedObjectContext) as! BeastListItem
            item.text = text
            tableData.append(item)
        }
        appDelegate.saveContext()
        tableView.reloadData()
        dismiss(animated: true, completion: nil)
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        let navigationController = segue.destination as! UINavigationController
        let addItemTableViewController = navigationController.topViewController as! AddItemViewController
        addItemTableViewController.delegate = self
        if let indexPath = sender as? IndexPath {
            let item = tableData[indexPath.row]
            print (item)
            addItemTableViewController.t = item.text!
            addItemTableViewController.indexPath = indexPath
        }
    }
}

extension SearchViewController: UITableViewDelegate, UITableViewDataSource, UISearchBarDelegate {
    
    func searchBarShouldBeginEditing(_ searchBar: UISearchBar) -> Bool {
        searchBar.showsCancelButton = true
        return true
    }
    func searchBarCancelButtonClicked(_ searchBar: UISearchBar) {
        searchBar.showsCancelButton = false
        view.endEditing(true)
    }
    
    func searchBarSearchButtonClicked(_ searchBar: UISearchBar) {
        searchBar.showsCancelButton = false
        view.endEditing(true)
    }
    
    func searchBar(_ searchBar: UISearchBar, textDidChange searchText: String) {
        if searchText == "" {
            fetchAllItems()
            tableView.reloadData()
        } else {
            let request = NSFetchRequest<NSFetchRequestResult>(entityName: "BeastListItem")
            let mypredicate = NSPredicate(format: "text CONTAINS[cd] %@", searchText)
            request.predicate = mypredicate
            do{
                let result = try managedObjectContext.fetch(request)
                tableData = result as! [BeastListItem]
            } catch {
                print("\(error)")
            }
        }
        self.tableView.reloadData()
    }
    
    func tableView(_ tableView: UITableView, editActionsForRowAt indexPath: IndexPath) -> [UITableViewRowAction]? {
        let edit = UITableViewRowAction(style: .destructive, title: "Edit") {_,_ in
            self.performSegue(withIdentifier: "EditSegue", sender: indexPath)
        }
        let delete = UITableViewRowAction(style: .destructive, title: "Delete") {_,_ in
            let item = self.tableData[indexPath.row]
            self.managedObjectContext.delete(item)
            self.appDelegate.saveContext()
            self.tableData.remove(at: indexPath.row)
            tableView.reloadData()
        }
        edit.backgroundColor = UIColor.blue
        return [edit, delete]
    }
    
    func tableView(_ tableView: UITableView, commit editingStyle: UITableViewCellEditingStyle, forRowAt indexPath: IndexPath) {
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return tableData.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "myCell", for: indexPath)
        cell.textLabel?.text = tableData[indexPath.row].text
        return cell
    }
}
