//
//  BeastedViewController.swift
//  Beast Belt
//
//  Created by Cesar Casil on 3/25/18.
//  Copyright © 2018 Cesar Casil. All rights reserved.
//

import UIKit
import CoreData

class BeastedViewController: UIViewController {
    
    @IBOutlet weak var tableView: UITableView!
    
    var tableData = [BeastListItem]()
    
    let appDelegate = (UIApplication.shared.delegate as! AppDelegate)
    let managedObjectContext = (UIApplication.shared.delegate as! AppDelegate).persistentContainer.viewContext

    override func viewDidLoad() {
        super.viewDidLoad()
        tableView.delegate = self
        tableView.dataSource = self
        fetchAllItems()
    }
    
    override func viewDidAppear(_ animated: Bool) {
        fetchAllItems()
        tableView.reloadData()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    func fetchAllItems() {
        let request = NSFetchRequest<NSFetchRequestResult>(entityName: "BeastListItem")
        let mypredicate = NSPredicate(format: "beasted == %@", true as CVarArg)
        request.predicate = mypredicate
        do{
            let result = try managedObjectContext.fetch(request)
            tableData = result as! [BeastListItem]
            //print(items)
        } catch {
            print("\(error)")
        }
    }

}

extension BeastedViewController: UITableViewDataSource, UITableViewDelegate {
    
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
        let cell = tableView.dequeueReusableCell(withIdentifier: "BeastedCell", for: indexPath)
        
        let data = tableData[indexPath.row]
        
        let dateFormatter = DateFormatter()
        dateFormatter.dateStyle = .medium
        dateFormatter.timeStyle = .none
        
        cell.textLabel?.text = data.text
        cell.detailTextLabel?.text = dateFormatter.string(from: data.date!)
        
        return cell
    }
}
