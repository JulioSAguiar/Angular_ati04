import { Component, ElementRef, ViewChild, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Projeto Lista';
  
  afazeres: Array<string> = ['Levar o doguinho no médico' , 'Levar filha no médico' , 'deixar a familia em casa antes da reunião', 'Revisão do carro']

  mostrarParagrafo: boolean= false
 

  @ViewChild('inputAtividade')
  input!: ElementRef

  addAfazer(valor:string): void {
    this.afazeres.push(valor)
    this.input.nativeElement.value =''
    localStorage.setItem('chave', JSON.stringify(this.afazeres))   
  }

  delAfazer(valor:number, remove:number): void {
    this.afazeres.splice(valor, remove)
  }

  delTudo(valor:number, remove:number): void {
    this.afazeres.splice(valor, remove)
  }  
}