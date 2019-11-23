import { User } from "./user";

export class Assistance {
    latitude: number;
    longitude: number;
    creator: User;
    assistant: User;
    assistanceStatus: string;
}