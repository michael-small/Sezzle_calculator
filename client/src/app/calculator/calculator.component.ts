import { Component, OnInit } from '@angular/core';

export interface CalcButton {
  color: string;
  cols: number;
  rows: number;
  text: string;
  size?: string;
}

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent implements OnInit {

  calcButton: CalcButton[] = [
    {text: 'C', cols: 1, rows: 1, color: 'lightgreen', size: "300%"},
    {text: '??', cols: 1, rows: 1, color: 'lightblue'},
    {text: '???', cols: 1, rows: 1, color: 'lightblue'},
    {text: '????', cols: 1, rows: 1, color: 'lightblue'},
    {text: '7', cols: 1, rows: 1, color: 'lightblue'},
    {text: '8', cols: 1, rows: 1, color: 'lightblue'},
    {text: '9', cols: 1, rows: 1, color: 'lightblue'},
    {text: '÷', cols: 1, rows: 1, color: 'lightgreen', size: "300%"},
    {text: '4', cols: 1, rows: 1, color: 'lightblue'},
    {text: '5', cols: 1, rows: 1, color: 'lightblue'},
    {text: '6', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'x', cols: 1, rows: 1, color: 'lightgreen', size: "300%"},
    {text: '1', cols: 1, rows: 1, color: 'lightblue'},
    {text: '2', cols: 1, rows: 1, color: 'lightblue'},
    {text: '3', cols: 1, rows: 1, color: 'lightblue'},
    {text: '-', cols: 1, rows: 1, color: 'lightgreen', size: "300%"},
    {text: '0', cols: 1, rows: 1, color: 'lightblue'},
    {text: '.', cols: 1, rows: 1, color: 'lightblue'},
    {text: '=', cols: 1, rows: 1, color: 'lightgreen', size: "300%"},
    {text: '+', cols: 1, rows: 1, color: 'red', size: "300%"},
  ];

  constructor() { }

  private buttons: string = "";
  private buttonNumsString: string[];
  private buttonNumsNumber: number[];

  buttonClick(buttonText: string) {
    if(buttonText == "+"){
      this.buttons = this.buttons + " + ";
    } else if(buttonText == "=") {
      this.buttonNumsString = this.buttons.split("+");
      for(let i of this.buttonNumsString){
        i.trim();
        this.buttonNumsNumber.push(parseInt(i));
      }
      console.log(this.buttonNumsNumber);
    } else {
      this.buttons = this.buttons + buttonText;
    }

    console.log(buttonText);
    console.log("Qued operation: " + this.buttons);
  }

  ngOnInit() {
  }

}
