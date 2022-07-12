import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'meu-componente-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss'],
})
export class PropertyBindingComponent implements OnInit {
  // primary
  // warn
  // aceent
  color = 'aceent';

  disabledButton = false;

  colors = ['primary', 'warn', 'aceent', ''];

  index = 0;

  // primeiroa ser executado no componnte
  constructor() {}

  // ciclo de vida do nosso componente
  ngOnInit(): void {
    setInterval(() => {
      this.disabledButton = !this.disabledButton;
      this.index = (this.index + 1) % this.colors.length;
    }, 3000);
  }
}
