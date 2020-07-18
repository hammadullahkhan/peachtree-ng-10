import { Component, OnInit, OnChanges } from '@angular/core';

import { ITransaction } from '../shared/models/transaction.model';
import { DataService } from "../shared/services/data.service";
import { MappingService } from "../shared/services/mapping.service";

@Component({
  selector: 'app-recent-transactions',
  templateUrl: './recent-transactions.component.html',
  styleUrls: ['./recent-transactions.component.css']
})
export class RecentTransactionsComponent implements OnInit {

  transactions: ITransaction[];
  search: string;
  isDesc: boolean = true;
  sortColumn: string = 'transactionDate';
  
  constructor(private data: DataService, private mapService: MappingService) { }

  ngOnInit(): void {
    this.loadData();
    this.listenTransfers();
  }

  loadData(): void {
    this.transactions = this.mapService.loadMockedData();
    // console.log(this.transactions);
  }

  listenTransfers(): void {
    this.data.currentMessage.subscribe(message => {
      if (message && !message.isPreview) {
        const trans = this.mapService.mapTransferToTransactions(message);
        this.transactions.unshift(trans);
        // console.log('transactions', this.transactions)
      }      
    });
  }

  setSortColumn(colName: string): void {
    this.sortColumn = colName;
    this.isDesc = !this.isDesc;
  }
}
