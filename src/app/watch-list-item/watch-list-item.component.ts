import { Component, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-watch-list-item',
  templateUrl: './watch-list-item.component.html',
  styles: [ 'i {cursor:pointer}' ]
})
export class WatchListItemComponent  {
  @Input() items;
  limit = 4;

  ngOnInit() {
  }
  showAll(){
    this.limit = this.items.length;
  }
  moveUp(index){
    this.items.splice(index-1,2,this.items[index],this.items[index-1])
  }
  moveDown(index){
    this.items.splice(index,2,this.items[index+1],this.items[index])
  }

}