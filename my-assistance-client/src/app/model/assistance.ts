import { User } from "./user";

export class Assistance {
    latitude: string;
    longitude: string;
    creator: User;
    assistant: User;
    assistanceStatus: string;
    typeOfDisability: string;
    typeOfHelp: string;
}
