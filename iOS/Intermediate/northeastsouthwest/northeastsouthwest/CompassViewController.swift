//
//  ViewController.swift
//  northeastsouthwest
//
//  Created by Cesar Casil on 3/13/18.
//  Copyright © 2018 Cesar Casil. All rights reserved.
//

import UIKit

class CompassViewController: UIViewController {
    
    @IBAction func unwindToCompass(segue:UIStoryboardSegue){}
    
    @IBAction func northButtonPressed(_ sender: UIButton) {
        performSegue(withIdentifier: "GoToViewController", sender: sender.currentTitle)
    }
    @IBAction func eastButtonPressed(_ sender: UIButton) {
        performSegue(withIdentifier: "GoToViewController", sender: sender.currentTitle)
    }
    @IBAction func southButtonPressed(_ sender: UIButton) {
        performSegue(withIdentifier: "GoToViewController", sender: sender.currentTitle)
    }
    @IBAction func westButtonPressed(_ sender: UIButton) {
        performSegue(withIdentifier: "GoToViewController", sender: sender.currentTitle)
    }
    override func viewDidLoad() {
        super.viewDidLoad()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        let destination = segue.destination as! DirectionViewController
        if let string = sender as? String {
            destination.output = string
        }
        
    }

}

