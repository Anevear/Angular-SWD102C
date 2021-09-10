import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillsService } from './services/skills.service';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsService } from './services/contacts.service';
import { GreetingComponent } from './greeting/greeting.component';
import { MessageFormComponent } from './message-form/message-form.component';


@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    ContactsComponent,
    GreetingComponent,
    MessageFormComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [SkillsService, ContactsService, GreetingComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
