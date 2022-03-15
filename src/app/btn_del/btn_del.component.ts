import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-btn_del',
  templateUrl: './btn_del.component.html',
  styleUrls: ['./btn_del.component.css']
})
export class Btn_delComponent {

  @Output()
  eventDeleteAll: EventEmitter<any> = new EventEmitter<any>()

  criarEventoPers(): void{
    this.eventDeleteAll.emit()
}
}