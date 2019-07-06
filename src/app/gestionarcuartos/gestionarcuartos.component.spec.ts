import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarcuartosComponent } from './gestionarcuartos.component';

describe('GestionarcuartosComponent', () => {
  let component: GestionarcuartosComponent;
  let fixture: ComponentFixture<GestionarcuartosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionarcuartosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarcuartosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
