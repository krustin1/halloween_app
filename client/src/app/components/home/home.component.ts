import { Component, OnInit, ViewChild } from '@angular/core';
import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dataSource: any = [];
  displayedColumns: string[] = ['name', 'food', 'quantity'];

  rsvpSelected = false;
  faqSelected = false;
  qrCodeSelected = false;

  constructor() { }

  ngOnInit(): void {
  }

  rsvp() {
    this.faqSelected = false;
    this.qrCodeSelected = false;
    this.rsvpSelected = true;
  }

  faq() {
    this.rsvpSelected = false;
    this.qrCodeSelected = false;
    this.faqSelected = true;
  }

  addFood() {
    this.dataSource.data[this.dataSource.length] = {name: "heidi", food: "mashed potatoes", quantity: "one bowl"};
    this.dataSource.data = this.dataSource.data;
  }

}
