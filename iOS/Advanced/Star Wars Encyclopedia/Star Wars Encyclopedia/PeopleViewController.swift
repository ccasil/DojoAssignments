//
//  PeopleViewController.swift
//  Star Wars Encyclopedia
//
//  Created by Cesar Casil on 3/19/18.
//  Copyright © 2018 Cesar Casil. All rights reserved.
//

import UIKit

class PeopleViewController: UITableViewController {

    // Hardcoded data for now
    var people: [String] = []
    var apiurl: [String] = []
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // specify the url that we will be sending the GET request to
        swapURL()
        for i in apiurl {
        let url = URL(string: String(i))
        // create a URLSession to handle the request tasks
        let session = URLSession.shared
        // create a "data task" to make the request and run completion handler
        let task = session.dataTask(with: url!, completionHandler: {
            // see: Swift closure expression syntax
            data, response, error in
            // data -> JSON data, response -> headers and other meta-information, error-> if one occurred
            // "do-try-catch" blocks execute a try statement and then use the catch statement for errors
            do {
                // try converting the JSON object to "Foundation Types" (NSDictionary, NSArray, NSString, etc.)
                if let jsonResult = try JSONSerialization.jsonObject(with: data!, options: JSONSerialization.ReadingOptions.mutableContainers) as? NSDictionary {
                    // Why do we need to optionally unwrap jsonResult["results"]
                    // Try it without the optional unwrapping and you'll see that the value is actually an optional
                    if let results = jsonResult["results"] as? NSArray {
                        // coercing the results object as an NSArray and then storing that in resultsArray
                        for person in results {
                            let peep = person as! NSDictionary
                            if let name = peep["name"] as? String {
                                self.people.append(name)
                            }
                        }
                        DispatchQueue.main.async(execute: {
                            self.tableView.reloadData()
                        })
                        // now we can run NSArray methods like count and firstObject
                    }
                }
            } catch {
                print(error)
            }
        })
        // execute the task and then wait for the response
        // to run the completion handler. This is async!
        task.resume()
        }
    }
    func swapURL() {
        for i in 1...9 {
            apiurl.append("https://swapi.co/api/people/?page=\(i)")
        }
    }
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    override func numberOfSections(in tableView: UITableView) -> Int {
        // if we return - sections we won't have any sections to put our rows in
        return 1
    }
    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        // return the count of people in our data array
        return people.count
    }
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        // Create a generic cell
        let cell = UITableViewCell()
        // set the default cell label to the corresponding element in the people array
        cell.textLabel?.text = people[indexPath.row]
        // return the cell so that it can be rendered
        return cell
    }

}

