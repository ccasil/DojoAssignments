//
//  FilmViewController.swift
//  Star Wars Encyclopedia
//
//  Created by Cesar Casil on 3/19/18.
//  Copyright © 2018 Cesar Casil. All rights reserved.
//

import UIKit

class FilmViewController: UITableViewController {

    // Hardcoded data for now
    var film: [String] = []
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // specify the url that we will be sending the GET request to
            let url = URL(string: "https://swapi.co/api/films/")
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
                            for f in results {
                                let fil = f as! NSDictionary
                                if let title = fil["title"] as? String {
                                    self.film.append(title)
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
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    override func numberOfSections(in tableView: UITableView) -> Int {
        // if we return - sections we won't have any sections to put our rows in
        return 1
    }
    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        // return the count of film in our data array
        return film.count
    }
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        // Create a generic cell
        let cell = UITableViewCell()
        // set the default cell label to the corresponding element in the film array
        cell.textLabel?.text = film[indexPath.row]
        // return the cell so that it can be rendered
        return cell
    }
}
