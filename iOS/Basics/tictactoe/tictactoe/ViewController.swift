//
//  ViewController.swift
//  tictactoe
//
//  Created by Cesar Casil on 3/7/18.
//  Copyright © 2018 Cesar Casil. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    @IBOutlet weak var button1: UIButton!
    @IBOutlet weak var button2: UIButton!
    @IBOutlet weak var button3: UIButton!
    @IBOutlet weak var button4: UIButton!
    @IBOutlet weak var button5: UIButton!
    @IBOutlet weak var button6: UIButton!
    @IBOutlet weak var button7: UIButton!
    @IBOutlet weak var button8: UIButton!
    @IBOutlet weak var button9: UIButton!
    @IBOutlet weak var winnerLabel: UILabel!
    
    func winnerRed() {
        winnerLabel.text = "Congrats Red Won"
    }
    func winnerBlue() {
        winnerLabel.text = "Congrats Blue Won"
    }
    
    func redWinCheck() {
        if (button1.backgroundColor == UIColor.red && button2.backgroundColor == UIColor.red && button3.backgroundColor == UIColor.red){
            winnerRed()
        }
        if (button4.backgroundColor == UIColor.red && button5.backgroundColor == UIColor.red && button6.backgroundColor == UIColor.red){
            winnerRed()
        }
        if (button7.backgroundColor == UIColor.red && button8.backgroundColor == UIColor.red && button9.backgroundColor == UIColor.red){
            winnerRed()
        }
        if (button1.backgroundColor == UIColor.red && button4.backgroundColor == UIColor.red && button7.backgroundColor == UIColor.red){
            winnerRed()
        }
        if (button2.backgroundColor == UIColor.red && button5.backgroundColor == UIColor.red && button8.backgroundColor == UIColor.red){
            winnerRed()
        }
        if (button3.backgroundColor == UIColor.red && button6.backgroundColor == UIColor.red && button9.backgroundColor == UIColor.red){
            winnerRed()
        }
        if (button1.backgroundColor == UIColor.red && button5.backgroundColor == UIColor.red && button9.backgroundColor == UIColor.red){
            winnerRed()
        }
        if (button3.backgroundColor == UIColor.red && button5.backgroundColor == UIColor.red && button7.backgroundColor == UIColor.red){
            winnerRed()
        }
    }
    func blueWinCheck() {
        if (button1.backgroundColor == UIColor.blue && button2.backgroundColor == UIColor.blue && button3.backgroundColor == UIColor.blue){
            winnerBlue()
        }
        if (button4.backgroundColor == UIColor.blue && button5.backgroundColor == UIColor.blue && button6.backgroundColor == UIColor.blue){
            winnerBlue()
        }
        if (button7.backgroundColor == UIColor.blue && button8.backgroundColor == UIColor.blue && button9.backgroundColor == UIColor.blue){
            winnerBlue()
        }
        if (button1.backgroundColor == UIColor.blue && button4.backgroundColor == UIColor.blue && button7.backgroundColor == UIColor.blue){
            winnerBlue()
        }
        if (button2.backgroundColor == UIColor.blue && button5.backgroundColor == UIColor.blue && button8.backgroundColor == UIColor.blue){
            winnerBlue()
        }
        if (button3.backgroundColor == UIColor.blue && button6.backgroundColor == UIColor.blue && button9.backgroundColor == UIColor.blue){
            winnerBlue()
        }
        if (button1.backgroundColor == UIColor.blue && button5.backgroundColor == UIColor.blue && button9.backgroundColor == UIColor.blue){
            winnerBlue()
        }
        if (button3.backgroundColor == UIColor.blue && button5.backgroundColor == UIColor.blue && button7.backgroundColor == UIColor.blue){
            winnerBlue()
        }
    }
    
    var count = true
    
    @IBAction func resetButton(_ sender: UIButton) {
        button1.backgroundColor = UIColor.black
        button2.backgroundColor = UIColor.black
        button3.backgroundColor = UIColor.black
        button4.backgroundColor = UIColor.black
        button5.backgroundColor = UIColor.black
        button6.backgroundColor = UIColor.black
        button7.backgroundColor = UIColor.black
        button8.backgroundColor = UIColor.black
        button9.backgroundColor = UIColor.black
        winnerLabel.text = ""
    }
    
    @IBAction func button1(_ sender: UIButton) {
        if button1.backgroundColor == UIColor.black {
            if count == true{
                button1.backgroundColor = UIColor.red
                count = false
            }else{
                button1.backgroundColor = UIColor.blue
                count = true
            }
            redWinCheck()
            blueWinCheck()
        }
    }
    @IBAction func button2(_ sender: UIButton) {
        if button2.backgroundColor == UIColor.black {
            if count == true{
                button2.backgroundColor = UIColor.red
                count = false
            }else{
                button2.backgroundColor = UIColor.blue
                count = true
            }
            redWinCheck()
            blueWinCheck()
        }
    }
    @IBAction func button3(_ sender: UIButton) {
        if button3.backgroundColor == UIColor.black {
            if count == true{
                button3.backgroundColor = UIColor.red
                count = false
            }else{
                button3.backgroundColor = UIColor.blue
                count = true
            }
            redWinCheck()
            blueWinCheck()
        }
    }
    @IBAction func button4(_ sender: UIButton) {
        if button4.backgroundColor == UIColor.black {
            if count == true{
                button4.backgroundColor = UIColor.red
                count = false
            }else{
                button4.backgroundColor = UIColor.blue
                count = true
            }
            redWinCheck()
            blueWinCheck()
        }
    }
    @IBAction func button5(_ sender: UIButton) {
        if button5.backgroundColor == UIColor.black {
            if count == true{
                button5.backgroundColor = UIColor.red
                count = false
            }else{
                button5.backgroundColor = UIColor.blue
                count = true
            }
            redWinCheck()
            blueWinCheck()
        }
    }
    @IBAction func button6(_ sender: UIButton) {
        if button6.backgroundColor == UIColor.black {
            if count == true{
                button6.backgroundColor = UIColor.red
                count = false
            }else{
                button6.backgroundColor = UIColor.blue
                count = true
            }
            redWinCheck()
            blueWinCheck()
        }
    }
    @IBAction func button7(_ sender: UIButton) {
        if button7.backgroundColor == UIColor.black {
            if count == true{
                button7.backgroundColor = UIColor.red
                count = false
            }else{
                button7.backgroundColor = UIColor.blue
                count = true
            }
            redWinCheck()
            blueWinCheck()
        }
    }
    @IBAction func button8(_ sender: UIButton) {
        if button8.backgroundColor == UIColor.black {
            if count == true{
                button8.backgroundColor = UIColor.red
                count = false
            }else{
                button8.backgroundColor = UIColor.blue
                count = true
            }
            redWinCheck()
            blueWinCheck()
        }
    }
    @IBAction func button9(_ sender: UIButton) {
        if button9.backgroundColor == UIColor.black {
            if count == true{
                button9.backgroundColor = UIColor.red
                count = false
            }else{
                button9.backgroundColor = UIColor.blue
                count = true
            }
            redWinCheck()
            blueWinCheck()
        }
    }
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
}
