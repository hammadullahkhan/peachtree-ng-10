import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MakeTransferComponent } from './make-transfer/make-transfer.component';
import { RecentTransactionsComponent } from './recent-transactions/recent-transactions.component';
import { PreviewTransferComponent } from './preview-transfer/preview-transfer.component';
import { DataService } from './services/data.service';
import { TransactionsPipe } from './pipes/transactions.pipe';
import { MappingService } from './services/mapping.service';

@NgModule({
  declarations: [
    AppComponent,
    MakeTransferComponent,
    RecentTransactionsComponent,
    PreviewTransferComponent,
    TransactionsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [DataService, MappingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
