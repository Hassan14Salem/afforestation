import { Component, OnInit } from '@angular/core';
import { NgbAlert, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  displayMonths = 2;
	navigation = 'select';
	showWeekNumbers = false;
	outsideDays = 'visible';
  constructor() { }

  ngOnInit(): void {
  }

}
