import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeticionesCaseroComponent } from './peticiones-casero.component';

describe('PeticionesCaseroComponent', () => {
  let component: PeticionesCaseroComponent;
  let fixture: ComponentFixture<PeticionesCaseroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeticionesCaseroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeticionesCaseroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
