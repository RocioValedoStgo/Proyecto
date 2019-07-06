import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarDepaComponent } from './buscar-depa.component';

describe('BuscarDepaComponent', () => {
  let component: BuscarDepaComponent;
  let fixture: ComponentFixture<BuscarDepaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarDepaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarDepaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
