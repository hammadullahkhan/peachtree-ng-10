import { Component, OnInit } from '@angular/core';

import MockedTransactions from '../../assets/mock/transactions.json';
import { ITransaction } from '../models/transaction.model';

import { ITransfer } from '../models/transfer.model';
import { DataService } from "../services/data.service";

@Component({
  selector: 'app-recent-transactions',
  templateUrl: './recent-transactions.component.html',
  styleUrls: ['./recent-transactions.component.css']
})
export class RecentTransactionsComponent implements OnInit {

  transactions: ITransaction[];
  transfer: ITransfer;
  
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.cloneData();
    this.data.currentMessage.subscribe(message => {
      if (message && !message.isPreview) {
        this.transfer = message; 
        console.log('trans', this.transfer)
        const trans: ITransaction = {
          amount: this.transfer.amount.toString(),
          categoryCode: "Transfer",
          merchant: this.transfer.toAccount,
          merchantLogo: '',
          transactionDate: Date.now()
        };

        this.transactions.unshift(trans);

      }
      
    });
  }

  cloneData() {
    this.transactions = JSON.parse(JSON.stringify(MockedTransactions.data));
    console.log(this.transactions)
  }

}
