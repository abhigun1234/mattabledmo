import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailogdemoComponent } from './dailogdemo.component';

describe('DailogdemoComponent', () => {
  let component: DailogdemoComponent;
  let fixture: ComponentFixture<DailogdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailogdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailogdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
