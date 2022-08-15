import { Transferencia } from './../models/transferencia.model';
import { TransferenceService } from './../services/transference.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit{

  @Input() transferredData: any[];

  constructor(private service: TransferenceService){}

  ngOnInit() {
    this.service.showAll().subscribe((transferencias: Transferencia[]) => {
      console.table(transferencias);
      this.transferredData = transferencias;
    })

  }

}
