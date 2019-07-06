import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogincaseroComponent } from './logincasero.component';

describe('LogincaseroComponent', () => {
  let component: LogincaseroComponent;
  let fixture: ComponentFixture<LogincaseroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogincaseroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogincaseroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
