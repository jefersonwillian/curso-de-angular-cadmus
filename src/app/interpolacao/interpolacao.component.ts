import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'teste-jeferson',
  templateUrl: './interpolacao.component.html',
  styleUrls: ['./interpolacao.component.scss']
})
export class InterpolacaoComponent implements OnInit {

  nome = "jeferson";

  idade = 30;

  infos = {
    nome: "Jeferson",
    sobrenome: "carvalho"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
