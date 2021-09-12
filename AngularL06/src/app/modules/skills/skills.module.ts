import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsComponent } from './components/skills/skills.component';
import { SkillsService } from './services/skills.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SkillsComponent],
  providers: [SkillsService],
  exports: [SkillsComponent]
})
export class SkillsModule { }
