import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'transactionsSort', pure: false})
export class TransactionsSortPipe implements PipeTransform {

  transform(value: any[], sortKey: string, orderType: boolean): any {

    let sortOrder = orderType ? 'desc' : 'asc';
    sortOrder = sortOrder && (sortOrder.toLowerCase() as any);

    if (!value || (sortOrder !== 'asc' && sortOrder !== 'desc')) return value;

    let numberArray = [];
    let stringArray = [];

    if (!sortKey) {
      numberArray = value.filter(item => typeof item === 'number').sort();
      stringArray = value.filter(item => typeof item === 'string').sort();
    } else {
      numberArray = value.filter(item => typeof item[sortKey] === 'number').sort((a, b) => a[sortKey] - b[sortKey]);
      stringArray = value
        .filter(item => typeof item[sortKey] === 'string')
        .sort((a, b) => {
          if (a[sortKey] < b[sortKey]) return -1;
          else if (a[sortKey] > b[sortKey]) return 1;
          else return 0;
        });
    }
    const sorted = numberArray.concat(stringArray);
    return sortOrder === 'asc' ? sorted : sorted.reverse();
  }

}