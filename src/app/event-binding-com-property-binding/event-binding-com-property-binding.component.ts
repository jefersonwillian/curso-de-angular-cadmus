import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding-com-property-binding',
  templateUrl: './event-binding-com-property-binding.component.html',
  styleUrls: ['./event-binding-com-property-binding.component.scss'],
})
export class EventBindingComPropertyBindingComponent implements OnInit {
  public nome = '';
  constructor() {}

  ngOnInit(): void {}

  setValue(event: any) {
    console.log('setValue ~ event', event);
    this.nome = event.target.value;
  }
}
