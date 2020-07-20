import { Component, OnInit } from '@angular/core';

import { ITransfer } from '../shared/models/transfer.model';
import { DataService } from "../shared/services/data.service";
import { MappingService } from "../shared/services/mapping.service";

@Component({
  selector: 'app-preview-transfer',
  templateUrl: './preview-transfer.component.html',
  styleUrls: ['./preview-transfer.component.css']
})
export class PreviewTransferComponent implements OnInit {

  transfer: ITransfer;

  constructor(private dataService: DataService, private mappingService: MappingService) {     
  }

  ngOnInit(): void {    
    this.listenTransfers();
  }

  listenTransfers(): void {
    this.dataService.currentMessage.subscribe(message => {
      this.transfer = message;
      // console.log('preview', this.transfer)
    });
  }

  transferMoney(): void {
    this.mappingService.transferMoney(this.transfer);
  }

}
