import { IContact } from "../../interface/Contact/i-contact";

export class Contact implements IContact {
    contactId: number;
    prenom: string;
    nom: string;
    surnom: string;
    tel: string;
    email: string;
    rue: string;
    num: string;
    codePostal: string;
    ville: string;
    pays: string;
    societe: any;
    numTVA: any;
}
