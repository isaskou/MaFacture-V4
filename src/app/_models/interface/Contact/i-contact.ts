export interface IContact {
    contactId: number;
    prenom: string;
    nom:string;
    surnom:string;
    tel:string;
    email:string;
    rue:string;
    num:string;
    codePostal:string;
    ville:string;
    pays:string;
    societe?:string;
    numTVA?:string;
}
