import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: string[] = ['apple', 'cleanHome', 'homework', 'cook'];

  getData(): string[]{
    return this.data;
  }

  addData(){
    
  }
  constructor() { }
}
