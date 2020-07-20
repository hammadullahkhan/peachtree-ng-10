import { Component, OnInit } from '@angular/core';

import { DataService } from "./shared//services/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = 'peachtree-bank';
  isPreview: boolean = false;

  constructor(private dataService: DataService) {     
  }

  ngOnInit(): void {    
    this.listenMessages();  
  }

  listenMessages() {
    this.dataService.currentMessage.subscribe(message => {
      this.isPreview = (message) ? message.isPreview : false;
    });
  }

}
