import { Email } from "./email.model";
import { Room } from "./room.model";

export class Rent{
    name: string;
    max_participants: number;
    start_date: string;
    end_date: string;
    rooms: Array<Room>
}



