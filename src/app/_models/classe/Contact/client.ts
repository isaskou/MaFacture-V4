import { IClient } from "../../interface/Contact/i-client";
import { IContact } from "../../interface/Contact/i-contact";

export class Client implements IClient {
    clientId: number;
    societe: string;
    numTVA: string;
    contactId: IContact;
}
