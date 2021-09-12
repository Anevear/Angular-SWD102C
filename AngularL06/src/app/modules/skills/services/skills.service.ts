import { Injectable } from '@angular/core';

    import { Skill } from 'src/app/shared/models/skill';
    import { Level } from 'src/app/shared/types/level.enum';
    import { Observable, of } from 'rxjs';

    @Injectable({
        providedIn: 'root'
    })
    export class SkillsService {
        skills: Skill[] = [
            {
                id: 0,
                name: 'Abstract Mathematics',
                level: Level.Expert
            },
            {
                id: 1,
                name: 'Philosophy',
                level: Level.Advanced
            },
            {
                id: 2,
                name: 'Developing Software',
                level: Level.Expert
            }
        ];

        getSkills = (): Observable<Skill[]> => {
            return of(this.skills);
        };
    }