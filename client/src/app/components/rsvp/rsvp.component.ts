import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})
export class RsvpComponent implements OnInit {

  attending = ['Yes', 'No'];

  constructor() { }

  ngOnInit(): void {
  }

}
