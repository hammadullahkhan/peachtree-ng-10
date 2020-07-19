import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';

import { RecentTransactionsComponent } from './recent-transactions.component';
import { ITransfer } from '../shared/models/transfer.model';
import { ITransaction } from '../shared/models/transaction.model';
import { DataService } from "../shared/services/data.service";
import { MappingService } from "../shared/services/mapping.service";

import { TransactionsFilterPipe } from '../shared/pipes/transactions-filter.pipe';
import { TransactionsSortPipe } from '../shared/pipes/transactions-sort.pipe';


class MockDataService {
  transfer: ITransfer;
  private messageSource = new BehaviorSubject(this.transfer);    
  currentMessage = this.messageSource.asObservable();
  changeMessage(message: ITransfer) {}
};

class MockMappingService {
  loadMockedData() {}
  mapTransferToTransactions() {}
  initTransfer() {
    const transfer: ITransfer = {    
      fromAccountBalance: 5824.76,
      fromAccount: 'Free Checking(4692) - $',
      toAccount: 'Georgia Power Electric Company',
      amount: 0.00,
      isPreview: false
    };
    return transfer;
  }
};

class MockTransactionsSortPipe {
  transform() {}
}

class MockTransactionsFilterPipe {
  transform() {}
}

fdescribe('RecentTransactionsComponent', () => {
  let component: RecentTransactionsComponent;
  let fixture: ComponentFixture<RecentTransactionsComponent>;
  let dataService: DataService;
  let mappingService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentTransactionsComponent, TransactionsSortPipe, TransactionsFilterPipe ],
      providers: [
        RecentTransactionsComponent,
        { provide: DataService, useClass: MockDataService },
        { provide: MappingService, useClass: MockMappingService },
        { provide: TransactionsSortPipe, useClass: MockTransactionsSortPipe },
        { provide: TransactionsFilterPipe, useClass: MockTransactionsFilterPipe }
      ]
    })
    .compileComponents();

    component = TestBed.inject(RecentTransactionsComponent);
    dataService = TestBed.inject(DataService);
    mappingService = TestBed.inject(MappingService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
