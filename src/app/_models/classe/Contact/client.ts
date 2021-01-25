import { IClient } from "../../interface/Contact/i-client";
import { Contact } from "./contact";

export class Client implements IClient {
    clientId: number;
    societe: string;
    numTVA: string;
    contactId: Contact;
}
