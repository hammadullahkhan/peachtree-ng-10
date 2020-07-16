import { Component, OnInit, OnChanges } from '@angular/core';

// import MockedTransactions from '../../assets/mock/transactions.json';
import { ITransaction } from '../models/transaction.model';

import { DataService } from "../services/data.service";
import { MappingService } from "../services/mapping.service";

@Component({
  selector: 'app-recent-transactions',
  templateUrl: './recent-transactions.component.html',
  styleUrls: ['./recent-transactions.component.css']
})
export class RecentTransactionsComponent implements OnInit {

  transactions: ITransaction[];
  searchMerchant: string;
  
  constructor(private data: DataService, private mapService: MappingService) { }

  ngOnInit(): void {
    this.loadData();
    this.listenTransfers();
  }

  loadData() {
    this.transactions = this.mapService.loadMockedData();
  }

  listenTransfers() {
    this.data.currentMessage.subscribe(message => {
      if (message && !message.isPreview) {
        const trans = this.mapService.mapTransferToTransactions(message);
        this.transactions.unshift(trans);
        console.log(this.transactions)
      }      
    });
  }
}
