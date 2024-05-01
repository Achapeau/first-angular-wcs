import { Skill } from "./skill.model";

export class Developer {
    lastname: string;
    firstname: string;
    age: number;
    gender: string;
    bio: string;
    skills: Skill[] = [];

    constructor(lastname: string, firstname: string, age: number, gender: string, bio: string, skills: Skill[]) {
        this.lastname = lastname;
        this.firstname = firstname;
        this.age = age;
        this.gender = gender;
        this.bio = bio;
        this.skills = skills;
    }
}