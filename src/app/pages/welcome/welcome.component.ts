import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  dateRange = [new Date(), new Date()];

  dateRangeControl = new FormControl();

  constructor() { }

  ngOnInit() {
    this.dateRangeControl.setValue(this.dateRange);
  }

  submit(): void {
    console.log(this.dateRangeControl.value);
  }

  setThisMonth(): void {
    const date = new Date();
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    this.dateRangeControl.setValue([firstDay, lastDay]);
  }
}
