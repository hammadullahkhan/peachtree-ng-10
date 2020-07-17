import { Component, OnInit } from '@angular/core';

import { ITransfer } from '../shared/models/transfer.model';
import { DataService } from "../shared/services/data.service";

@Component({
  selector: 'app-make-transfer',
  templateUrl: './make-transfer.component.html',
  styleUrls: ['./make-transfer.component.css']
})
export class MakeTransferComponent implements OnInit {

  transfer: ITransfer;

  constructor(private data: DataService) {         
  }

  ngOnInit(): void {
    this.init();
    this.listenTransfers();
  }

  listenTransfers(): void {
    this.data.currentMessage.subscribe(message => {
      if (message && !message.isPreview){
        this.transfer = message;
        this.transfer.amount = 0;
        // console.log('make', this.transfer)
      }  
      // if (message && !message.isPreview)   {
      //   this.init();  
      // }

    });
  }

  init(): void {
    this.transfer = {    
      fromAccountBalance: 5824.76,
      fromAccount: 'Free Checking(4692) - $',
      toAccount: 'Georgia Power Electric Company',
      amount: 0.00,
      isPreview: false
    }
  }

  submit(): void {
    if ( this.transfer.amount > 0 ) {
      this.transfer.isPreview = true;
      this.data.changeMessage(this.transfer);
    }    
  }

}
