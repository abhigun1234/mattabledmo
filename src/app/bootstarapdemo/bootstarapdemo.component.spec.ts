import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstarapdemoComponent } from './bootstarapdemo.component';

describe('BootstarapdemoComponent', () => {
  let component: BootstarapdemoComponent;
  let fixture: ComponentFixture<BootstarapdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstarapdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstarapdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
