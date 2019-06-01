import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursedailogComponent } from './coursedailog.component';

describe('CoursedailogComponent', () => {
  let component: CoursedailogComponent;
  let fixture: ComponentFixture<CoursedailogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursedailogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursedailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
