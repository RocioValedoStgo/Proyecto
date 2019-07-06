import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistacaseroComponent } from './vistacasero.component';

describe('VistacaseroComponent', () => {
  let component: VistacaseroComponent;
  let fixture: ComponentFixture<VistacaseroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistacaseroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistacaseroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
