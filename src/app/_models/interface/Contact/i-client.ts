import { IContact } from "./i-contact";

export interface IClient {
    clientId:number;
    societe:string;
    numTVA:string;
    contactId: IContact;    
    // [ClientId] INT NOT NULL IDENTITY,
	// NomSociete nvarchar(50) null,
	// numTVA nvarchar(50) NULL UNIQUE,
	// ContactId INT NOT NULL,
    
}
