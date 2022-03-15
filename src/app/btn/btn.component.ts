import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})
export class BtnComponent {

  @Output()
  eventoPersonalizado: EventEmitter<any> = new EventEmitter<any>()

  criarEventoPers(): void{
    this.eventoPersonalizado.emit()
}

}