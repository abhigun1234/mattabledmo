import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcteamComponent } from './wcteam.component';

describe('WcteamComponent', () => {
  let component: WcteamComponent;
  let fixture: ComponentFixture<WcteamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcteamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
