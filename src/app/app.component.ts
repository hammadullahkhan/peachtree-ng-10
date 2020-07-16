import { Component, OnInit } from '@angular/core';

import { ITransfer } from './models/transfer.model';
import { DataService } from "./services/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'peachtree-bank';

  isPreview: boolean = false;

  constructor(private data: DataService) {     
  }

  ngOnInit(): void {    
    this.data.currentMessage.subscribe(message => {
      // console.log('app', message);
      this.isPreview = (message) ? message.isPreview : false;
    })
  }

}
