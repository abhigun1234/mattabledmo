import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowdailogComponent } from './showdailog.component';

describe('ShowdailogComponent', () => {
  let component: ShowdailogComponent;
  let fixture: ComponentFixture<ShowdailogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowdailogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowdailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
