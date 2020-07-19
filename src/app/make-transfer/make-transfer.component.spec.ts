import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';

import { ITransfer } from '../shared/models/transfer.model';
import { DataService } from "../shared/services/data.service";
import { MappingService } from "../shared/services/mapping.service";

import { MakeTransferComponent } from './make-transfer.component';

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

describe('MakeTransferComponent', () => {
  let component: MakeTransferComponent;
  let fixture: ComponentFixture<MakeTransferComponent>;  
  let dataService: DataService;
  let mappingService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeTransferComponent ],
      providers: [
        MakeTransferComponent,
        { provide: DataService, useClass: MockDataService },
        { provide: MappingService, useClass: MockMappingService }
      ]
    })
    .compileComponents();

    component = TestBed.inject(MakeTransferComponent);
    dataService = TestBed.inject(DataService);
    mappingService = TestBed.inject(MappingService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call ngOnInit', () => {
    component.ngOnInit();    
    expect(component.transfer).toBeTruthy();
  });

  it('should call initProperties', () => {
    component.initProperties();    
    expect(component.transfer).toBeTruthy();
  });

  it('should call submit', () => {
    component.transfer.amount = 0;
    component.submit();    
    expect(component.transfer.isPreview).toBeFalsy();

    component.transfer.amount = 1;
    component.submit();    
    expect(component.transfer.isPreview).toEqual(true);
  });

});
