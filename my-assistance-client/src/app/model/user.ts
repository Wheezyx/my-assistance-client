import { Assistance } from "./assistance";

export class User {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    points: number;
    notCompletedAssistances: Assistance[];
}