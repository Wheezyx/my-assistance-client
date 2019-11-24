import { User } from "./user";

export class Assistance {
    id: String;
    latitude: string;
    longitude: string;
    creatorName: string;
    creator: User;
    assistant: User;
    assistanceStatus: string;
    disabilityType: string;
    helpType: string;
}
