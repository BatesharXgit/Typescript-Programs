import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'First';
  item: string = '';
  totalAmount: number = 0;
  amount: number = 100;
  num1: number = 0;
  num2: number = 0;
  addition: number = 0;
  substraction: number = 0;
  multipication: number = 0;
  division: number = 0;

  addExpense():void {
    this.item = 'CAP 489';
    this.totalAmount = this.totalAmount + this.amount;
  }
  arithmeticCalculator():void{
    this.addition = this.num1 + this.num2;
    this.substraction = this.num1 - this.num2;
    this.multipication = this.num1 * this.num2;
    this.division = this.num1 / this.num2;
  }
}