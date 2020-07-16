import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ITransfer } from '../models/transfer.model';

@Injectable()
export class DataService {

    transfer: ITransfer;
    private messageSource = new BehaviorSubject(this.transfer);
    currentMessage = this.messageSource.asObservable();

    constructor() { }

    changeMessage(message: ITransfer) {
        this.messageSource.next(message);
        console.log('message', message)
    }

}