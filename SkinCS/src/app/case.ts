import { Weapon } from "./weapon";

export class Case {
    id: string;
    name: string;
    image: string;
    contains: Weapon[];

    constructor(caseData: any) {
        this.id = caseData.id;
        this.name = caseData.name;
        this.image = caseData.image;
        this.contains = caseData.contains;
    }
}
