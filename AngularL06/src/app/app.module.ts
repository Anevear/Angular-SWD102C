import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';

import { SkillsService } from './services/skills.service';
import { GreetingComponent } from './greeting/greeting.component';
import { MessageFormComponent } from './message-form/message-form.component';

@NgModule({
    declarations: [AppComponent, SkillsComponent, GreetingComponent, MessageFormComponent],
    imports: [BrowserModule, FormsModule],
    providers: [SkillsService],
    bootstrap: [AppComponent]
})
export class AppModule {}