import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fc-get-all',
  templateUrl: './fc-get-all.component.html',
  styleUrls: ['./fc-get-all.component.scss']
})
export class FcGetAllComponent implements OnInit {
  facture:Array<any>=[
    {
      id: 1,
      date:'21/01/2021',
      client: 'ISASKOU',
      htva:12,
      tva:1.21,
      status:'Payée'
    },
    {
      id: 2,
      date:'21/01/2021',
      client: 'ISASKOU',
      htva:13,
      tva:1.21,
      status:'Validée'
    },
    {
      id: 3,
      date:'21/01/2021',
      client: 'ISASKOU',
      htva:15,
      tva:1.21,
      status:'Brouillon'
    },
    {
      id: 4,
      date:'21/01/2021',
      client: 'Test',
      htva:15,
      tva:1.21,
      status:'Brouillon'
    },
    {
      id: 5,
      date:'21/01/2021',
      client: 'Test2',
      htva:15,
      tva:1.21,
      status:'Brouillon'
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
