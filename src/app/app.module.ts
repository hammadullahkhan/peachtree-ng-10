import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MakeTransferComponent } from './make-transfer/make-transfer.component';
import { RecentTransactionsComponent } from './recent-transactions/recent-transactions.component';
import { PreviewTransferComponent } from './preview-transfer/preview-transfer.component';
import { DataService } from './shared/services/data.service';
import { TransactionsFilterPipe } from './shared/pipes/transactions-filter.pipe';
import { TransactionsSortPipe } from './shared/pipes/transactions-sort.pipe';
import { MappingService } from './shared/services/mapping.service';

@NgModule({
  declarations: [
    AppComponent,
    MakeTransferComponent,
    RecentTransactionsComponent,
    PreviewTransferComponent,
    TransactionsFilterPipe,
    TransactionsSortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DataService, MappingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
