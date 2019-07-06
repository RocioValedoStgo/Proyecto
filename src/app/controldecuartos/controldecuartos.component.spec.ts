import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControldecuartosComponent } from './controldecuartos.component';

describe('ControldecuartosComponent', () => {
  let component: ControldecuartosComponent;
  let fixture: ComponentFixture<ControldecuartosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControldecuartosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControldecuartosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
