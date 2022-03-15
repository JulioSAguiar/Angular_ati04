import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})
export class CompComponent {

  @Output()
  eventoDelete: EventEmitter<any> = new EventEmitter<any>()

  criarEventoDel(): void{
    this.eventoDelete.emit()
}
}