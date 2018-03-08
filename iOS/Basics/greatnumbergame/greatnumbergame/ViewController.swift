//
//  ViewController.swift
//  greatnumbergame
//
//  Created by Cesar Casil on 3/7/18.
//  Copyright © 2018 Cesar Casil. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    @IBOutlet weak var titleLabel: UILabel!
    @IBOutlet weak var descLabel: UILabel!
    @IBOutlet weak var guessLabel: UILabel!
    @IBOutlet weak var guessNumText: UITextField!
    
    @IBAction func newRandButton(_ sender: UIButton) {
    rand = Int(arc4random_uniform(100))
    print(rand)
    }
    
    var rand = Int(arc4random_uniform(100))
    
    @IBAction func submitButtonPressed(_ sender: UIButton) {
        print(rand)
        let guess: String? = guessNumText.text
        if let unwrappedguess = guess {
            let guessed = Int(unwrappedguess)!
            
            if guessed > rand {
                let alertController = UIAlertController(title: "Incorrect", message:
                    "\(guessed) was too high!!!", preferredStyle: UIAlertControllerStyle.alert)
                alertController.addAction(UIAlertAction(title: "Play Again", style: UIAlertActionStyle.default,handler: nil))
                self.present(alertController, animated: true, completion: nil)
            }
            else if guessed < rand {
                let alertController = UIAlertController(title: "Incorrect", message:
                    "\(guessed) was too low!!!", preferredStyle: UIAlertControllerStyle.alert)
                alertController.addAction(UIAlertAction(title: "Play Again", style: UIAlertActionStyle.default,handler: nil))
                self.present(alertController, animated: true, completion: nil)
            }else{
                let alertController = UIAlertController(title: "Correct", message:
                    "\(guessed) was Correct!!!", preferredStyle: UIAlertControllerStyle.alert)
                alertController.addAction(UIAlertAction(title: "Play Again", style: UIAlertActionStyle.default,handler: nil))
                self.present(alertController, animated: true, completion: nil)
                rand = Int(arc4random_uniform(100))
            }
        }
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
}

