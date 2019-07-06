import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltadepartamentoComponent } from './altadepartamento.component';

describe('AltadepartamentoComponent', () => {
  let component: AltadepartamentoComponent;
  let fixture: ComponentFixture<AltadepartamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltadepartamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltadepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
