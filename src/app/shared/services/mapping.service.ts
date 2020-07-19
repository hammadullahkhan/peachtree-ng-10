import { Injectable } from '@angular/core';

import MockedTransactions from '../../../assets/mock/transactions.json';
import { DataService } from "./data.service";

import { ITransaction } from '../models/transaction.model';
import { ITransfer } from '../models/transfer.model';

@Injectable({
  providedIn: 'root',
})
export class MappingService {

  constructor(private dataService: DataService) { }

  loadMockedData() {
    // console.log(MockedTransactions.data)
    let transactions:ITransaction[] = Object.assign([], MockedTransactions.data);
    transactions.forEach( item => item.amount *= -1);
    return transactions;
  }

  mapTransferToTransactions(message): ITransaction {

    const trans: ITransaction = {
        // amount: message.amount,
        amount:  message.amount * -1,
        categoryCode: "#d51271",
        transactionType: 'Transfer',
        merchant: message.toAccount,
        merchantLogo: '',
        transactionDate: Date.now()
      };
    return trans;
  }

  initTransfer(): ITransfer {

    const transfer: ITransfer = {    
      fromAccountBalance: 5824.76,
      fromAccount: 'Free Checking(4692) - $',
      toAccount: 'Georgia Power Electric Company',
      amount: 0.00,
      isPreview: false
    };
    return transfer;
  }

  transferMoney(transfer: ITransfer) {

    transfer.isPreview = false;
    const dif = +(transfer.fromAccountBalance - transfer.amount).toFixed(2);
    transfer.fromAccountBalance = dif >= 500 ? dif : transfer.fromAccountBalance;
    this.dataService.changeMessage(transfer);

  }

}
