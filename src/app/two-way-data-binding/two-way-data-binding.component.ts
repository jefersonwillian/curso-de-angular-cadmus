import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.scss'],
})
export class TwoWayDataBindingComponent implements OnInit {
  nome1 = '';
  nome2 = '';

  endereco = {
    rua: '',
    numero: '',
    cidade: 'Sorocaba',
  }
  constructor() {}

  ngOnInit(): void {}
}
