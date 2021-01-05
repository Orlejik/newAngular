import { Component, OnInit } from '@angular/core';

class Item{
  task: string;
  time: number;
  done: boolean;
constructor(name: string, time: number) {
    this.task = name;
    this.time = time;
    this.done = false;
  }
}
@Component({
  selector: 'app-new-comp',
  templateUrl: './new-comp.component.html',
  styleUrls: ['./new-comp.component.css']
})
export class NewCompComponent implements OnInit {
  task: any = ' ';
  time: any = ' ';
  items: Item[] = [
    // {task: 'clean Home', time: 90, done: false}
  ];
  constructor() {}
  addItem(task: string, time: number): void{
    if (task == null || time == null || task.trim() === ''){
      return;
    }
  else{
      this.task = ' ';
      this.time = ' ';
      this.items.unshift(new Item(task, time));
    }
  }
  removeItem(i): void{
    this.items.splice(i, 1 );
  }
  // clearFields(): void{
  // }
  ngOnInit(): void {
  }
}
