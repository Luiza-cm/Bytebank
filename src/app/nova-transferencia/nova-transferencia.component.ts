import { Transferencia } from './../models/transferencia.model';
import { TransferenceService } from './../services/transference.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

  @Output() toTransfer = new EventEmitter<any>();

  value: number;
  destiny: number;

  constructor(private service: TransferenceService){

  }

  homeTransfer(){
    const valueEmitter: Transferencia = { valor: this.value, destino: this.destiny };
    console.log("Nova transferência solicitada.");

    this.service.add(valueEmitter).subscribe(
      (result) => {
        console.log(result);
        this.cleanForm();
      },
      (error) => { console.error(error) }
    );
  }

  cleanForm() {
    this.value = 0;
    this.destiny = 0;
  }

}
