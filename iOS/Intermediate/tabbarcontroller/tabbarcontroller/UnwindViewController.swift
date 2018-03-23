//
//  UnwindViewController.swift
//  tabbarcontroller
//
//  Created by Cesar Casil on 3/22/18.
//  Copyright © 2018 Cesar Casil. All rights reserved.
//

import UIKit
import CoreData

class UnwindViewController: UIViewController {
    
    @IBOutlet weak var animalTableView: UITableView!
    var animals = [Animal]()
    var reptile: [String] = ["Chameleon", "Crocodile", "Hawk", "Hawksbill Turtle", "Iguana"]
    var mammal: [String] = ["Dolphin", "Fox", "Mountain Lion", "Otter"]
    let managedObjectContext = (UIApplication.shared.delegate as! AppDelegate).persistentContainer.viewContext
    let appDelegate = (UIApplication.shared.delegate as! AppDelegate)
    
    func insertData () {
        for z in 0..<reptile.count {
            let animal = NSEntityDescription.insertNewObject(forEntityName: "Animal", into: managedObjectContext) as! Animal
            animal.name = reptile[z]
            animal.type = "reptile"
            appDelegate.saveContext()
        }
        for x in 0..<mammal.count {
            let animal = NSEntityDescription.insertNewObject(forEntityName: "Animal", into: managedObjectContext) as! Animal
            animal.name = mammal[x]
            animal.type = "mammal"
            appDelegate.saveContext()
        }
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        animalTableView.delegate = self
        animalTableView.dataSource = self
        fetchAllItems()
//        insertData ()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    func fetchAllItems() {
        let request = NSFetchRequest<NSFetchRequestResult>(entityName: "Animal")
        do {
            let result = try managedObjectContext.fetch(request)
            animals = result as! [Animal]
        } catch {
            print ("\(error)")
        }
    }
    func fetchAllReptiles() {
        let request = NSFetchRequest<NSFetchRequestResult>(entityName: "Animal")
        let filter = "reptile"
        request.predicate = NSPredicate(format: "type = %@", filter)
        do {
            let result = try managedObjectContext.fetch(request)
            animals = result as! [Animal]
        } catch {
            print ("\(error)")
        }
    }
    func fetchAllMammals() {
        let request = NSFetchRequest<NSFetchRequestResult>(entityName: "Animal")
        let filter = "mammal"
        request.predicate = NSPredicate(format: "type = %@", filter)
        do {
            let result = try managedObjectContext.fetch(request)
            animals = result as! [Animal]
        } catch {
            print ("\(error)")
        }
    }
    
    @IBAction func unwindToSwitch(_ sender: UIButton) {
        performSegue(withIdentifier: "unwindToSwitch", sender: self)
    }
    @IBAction func showAllButton(_ sender: UIButton) {
        fetchAllItems()
        animalTableView.reloadData()
    }
    @IBAction func showReptileButton(_ sender: UIButton) {
        fetchAllReptiles()
        animalTableView.reloadData()
    }
    @IBAction func showMammalButton(_ sender: UIButton) {
        fetchAllMammals()
        animalTableView.reloadData()
    }
    
    
}

extension UnwindViewController: UITableViewDelegate, UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return animals.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = animalTableView.dequeueReusableCell(withIdentifier: "animalCell", for: indexPath)
        let data = animals[indexPath.row]
        cell.textLabel?.text = data.name
        return cell
    }
    
    
}
