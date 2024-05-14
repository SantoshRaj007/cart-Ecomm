import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  onAddToCarts: Subject<any> = new Subject();

  constructor() { }
}
