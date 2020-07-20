import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'transactionsFilter', pure: false})
export class TransactionsFilterPipe implements PipeTransform {

  transform(transactions: any, searchText: any): any {
    
    if(searchText == null) return transactions;

    return transactions.filter(function(item){
      return item.merchant.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    })
  }
}