import { Injectable } from '@angular/core';

import MockedTransactions from '../../../assets/mock/transactions.json';
import { ITransaction } from '../models/transaction.model';

@Injectable({
  providedIn: 'root',
})
export class MappingService {

  constructor() { }

  loadMockedData() {
    console.log(MockedTransactions.data)
    let transactions:ITransaction[] = Object.assign([], MockedTransactions.data);
    transactions.forEach( item => item.amount *= 1);
    return transactions;
  }

  mapTransferToTransactions(message) {
    const trans: ITransaction = {
        amount: message.amount, // * -1,
        categoryCode: "#d51271",
        transactionType: 'Transfer',
        merchant: message.toAccount,
        merchantLogo: '',
        transactionDate: Date.now()
      };
    return trans;
  }

}
