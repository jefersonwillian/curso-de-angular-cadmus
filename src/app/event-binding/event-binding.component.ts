import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss'],
})
export class EventBindingComponent implements OnInit {
  public myButton = 'Clique aqui';

  public i = 0;

  constructor() {}

  ngOnInit(): void {}

  salvar(event: any) {
    console.log('botão salvar', event);
  }

  cliqueAqui() {
    this.i++;
    this.myButton = 'Você clicou ' + this.i + ' vezes nesse botão';
  }

  itemSelecionado(event: any) {
    console.log(
      'EventBindingComponent ~ event',
      event
    );
  }
}
