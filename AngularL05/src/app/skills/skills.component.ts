import { Component, Injectable, OnInit } from '@angular/core';
import { Skill } from '../models/skill';
import { SkillsService } from '../services/skills.service';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills:Skill[];
  dataService:SkillsService;
    
  constructor(private skillsService:SkillsService) {
    this.dataService=skillsService;
   }

  ngOnInit() {
   this.dataService.getSkills().subscribe(skills=>this.skills=skills);
  }

}
