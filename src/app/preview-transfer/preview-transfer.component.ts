import { Component, OnInit } from '@angular/core';

import { ITransfer } from '../shared/models/transfer.model';
import { DataService } from "../shared/services/data.service";

@Component({
  selector: 'app-preview-transfer',
  templateUrl: './preview-transfer.component.html',
  styleUrls: ['./preview-transfer.component.css']
})
export class PreviewTransferComponent implements OnInit {

  transfer: ITransfer;

  constructor(private data: DataService) {     
  }

  ngOnInit(): void {    
    this.listenTransfers();
  }

  listenTransfers(): void {
    this.data.currentMessage.subscribe(message => {
      this.transfer = message; 
      // console.log('preview', this.transfer)
    });
  }

  transferMoney(): void {
    this.transfer.isPreview = false;
    const dif = +(this.transfer.fromAccountBalance - this.transfer.amount).toFixed(2);
    this.transfer.fromAccountBalance = dif >= 500 ? dif : this.transfer.fromAccountBalance;
    this.data.changeMessage(this.transfer);
  }

}
