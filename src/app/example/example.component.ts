import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatList } from '@angular/material/list';
import {
  CdkDragStart,
  CdkDragMove,
  CdkDragDrop,
  moveItemInArray,
  copyArrayItem,
  CdkDragEnd,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css'],
})
export class ExampleComponent {
  // panelOpenState = false;
  // nilesh: string = `<input type="text">`;

  // @ViewChild('dropZone', { read: ElementRef, static: true })
  // dropZone: ElementRef;

  // _currentIndex;
  // _currentField;
  // _pointerPosition;

  // types: any[] = [{ text: 'text', vv:0 }, { text: 'checkbox', vv:0 }, { text: 'radio', vv:0 }, {text: `<span><b>Nilesh</b></span>`, vv: 1}];

  // fields: any[] = [];

  // moved(event: CdkDragMove) {    
  //   this._pointerPosition = event.pointerPosition;
  // }
  // drop(event: CdkDragDrop<any[]>) {
  //   console.log('7878778');
    
  //   if (event.previousContainer === event.container) {
  //     console.log('nilesh');
      
  //     moveItemInArray(this.fields, event.previousIndex, event.currentIndex);
  //   } else {
  //     event.item.data.top =
  //       this._pointerPosition.y -
  //       this.dropZone.nativeElement.getBoundingClientRect().top +
  //       'px';
  //     event.item.data.left =
  //       this._pointerPosition.x -
  //       this.dropZone.nativeElement.getBoundingClientRect().left +
  //       'px';
  //       console.log('patil');
        
  //     this.addField({ ...event.item.data }, event.currentIndex);
  //   }
  // }

  // addField(fieldType: string, index: number) {
  //   this.fields.splice(index, 0, fieldType);
  // }

  // changePosition(event: CdkDragDrop<any>, field) {
  //   console.log('Nilesh');
    
  //   const rectZone = this.dropZone.nativeElement.getBoundingClientRect();
  //   const rectElement =
  //     event.item.element.nativeElement.getBoundingClientRect();

  //   let top = +field.top.replace('px', '') + event.distance.y;
  //   let left = +field.left.replace('px', '') + event.distance.x;
  //   const out =
  //     top < 0 ||
  //     left < 0 ||
  //     top > rectZone.height - rectElement.height ||
  //     left > rectZone.width - rectElement.width;
  //   // if (!out) {
  //   // alert('baba');
  //   field.top = top + 'px';
  //   field.left = left + 'px';
  //   // } else {
  //   // alert('saba');
  //   // this.fields = this.fields.filter((x) => x != field);
  //   // }
  // }

  todo: any[] = [{ text: 'text', vv:0 }, { text: 'checkbox', vv:0 }, { text: 'radio', vv:0 }, {text: `<span><b>Nilesh</b></span>`, vv: 1}];

  done: any[] = [{ text: 'text', vv:0 }];

   _currentIndex;
  _currentField;
  _pointerPosition;

   @ViewChild('doneList', { read: ElementRef, static: true })
  dropZone: ElementRef;
  moved(event: CdkDragMove) {    
    this._pointerPosition = event.pointerPosition;
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log('ha ksa fire', event, event.previousContainer === event.container);
    
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log(event);
          event.item.data.top =
        this._pointerPosition.y -
        this.dropZone.nativeElement.getBoundingClientRect().top +
        'px';
      event.item.data.left =
        this._pointerPosition.x -
        this.dropZone.nativeElement.getBoundingClientRect().left +
        'px';
        console.log('patil');
        
      this.addField({ ...event.item.data }, event.currentIndex);
    }
  }

   addField(fieldType: any[], index: number) {
    this.done.splice(index, 0, fieldType);
  }
}
