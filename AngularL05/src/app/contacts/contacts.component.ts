import { Component, Injectable, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts: Contact[];
  contactDataService: ContactsService;

  constructor(private contactsService:ContactsService) {
    this.contactDataService=contactsService;
   }

  ngOnInit() {
    this.contacts=this.contactDataService.contacts;
  }

}
