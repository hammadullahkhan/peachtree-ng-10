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

  constructor(private data: DataService, private mappingService: MappingService) {         
  }

  ngOnInit(): void {
    this.initProperties();
    this.listenTransfers();
  }

  listenTransfers(): void {
    this.data.currentMessage.subscribe(message => {
      if (message && !message.isPreview)   {
        this.initProperties();  
      }
    });
  }

  initProperties(): void {
    this.transfer = this.mappingService.initTransfer();
  }

  submit(): void {
    if ( this.transfer.amount > 0 ) {
      this.transfer.isPreview = true;
      this.data.changeMessage(this.transfer);
    }    
  }

}
