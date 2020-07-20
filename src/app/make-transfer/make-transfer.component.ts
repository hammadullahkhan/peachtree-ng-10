import { Component, OnInit } from '@angular/core';

import { ITransfer } from '../shared/models/transfer.model';
import { DataService } from "../shared/services/data.service";
import { MappingService } from "../shared/services/mapping.service";

@Component({
  selector: 'app-make-transfer',
  templateUrl: './make-transfer.component.html',
  styleUrls: ['./make-transfer.component.css']
})
export class MakeTransferComponent implements OnInit {

  transfer: ITransfer;

  constructor(private dataService: DataService, private mappingService: MappingService) {         
  }

  ngOnInit(): void {
    this.initProperties();
    this.listenTransfers();
  }

  listenTransfers(): void {
    this.dataService.currentMessage.subscribe(message => {
      if (message && !message.isPreview)   {
        // this.initProperties();  
        this.transfer = message;
        this.transfer.amount = "0.00";
      }
    });
  }

  initProperties(): void {
    this.transfer = this.mappingService.initProperties();
  }

  submit(): void {
    const amount = +this.transfer.amount;
    if ( amount > 0 ) {
      this.transfer.isPreview = true;
      this.dataService.changeMessage(this.transfer);
    }    
  }

}
