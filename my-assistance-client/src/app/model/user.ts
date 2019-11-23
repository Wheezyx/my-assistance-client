import { Assistance } from "./assistance";

export class User {
    id: number;
    username: string;
    firstname: string;
    lastname: string;
    notCompletedAssistances: Assistance[];
}