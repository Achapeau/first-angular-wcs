import { Component } from '@angular/core';
import { SkillComponent } from "../skill/skill.component";
import { Developer } from '../models/developer.model';
import { Skill } from '../models/skill.model';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-developer',
    standalone: true,
    templateUrl: './developer.component.html',
    styleUrl: './developer.component.css',
    imports: [SkillComponent, NgFor]
})
export class DeveloperComponent {
    skill!: Skill
    currentUser = new Developer(
        "Doe", 
        "John", 
        25, 
        "male", 
        "I am a developer.", 
        [new Skill(
            "Angular", 
            "../assets/angular.png", 
            "https://angular.io"
        ), 
        new Skill(
            "Java", 
            "../assets/java.svg", 
            "https://www.java.com/fr/"
        ),
        new Skill(
            "C#", 
            "../assets/csharp.png", 
            "https://learn.microsoft.com/fr-fr/dotnet/csharp/"
        )])
}
