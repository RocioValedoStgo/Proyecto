import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroCaseroComponent } from './registro-casero.component';

describe('RegistroCaseroComponent', () => {
  let component: RegistroCaseroComponent;
  let fixture: ComponentFixture<RegistroCaseroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroCaseroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroCaseroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
