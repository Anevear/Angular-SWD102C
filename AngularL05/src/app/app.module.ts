import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillsService } from './services/skills.service';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsService } from './services/contacts.service';


@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SkillsService, ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
