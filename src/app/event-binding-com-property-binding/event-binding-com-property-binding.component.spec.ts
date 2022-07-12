import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBindingComPropertyBindingComponent } from './event-binding-com-property-binding.component';

describe('EventBindingComPropertyBindingComponent', () => {
  let component: EventBindingComPropertyBindingComponent;
  let fixture: ComponentFixture<EventBindingComPropertyBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventBindingComPropertyBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBindingComPropertyBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
