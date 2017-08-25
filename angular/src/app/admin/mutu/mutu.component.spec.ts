import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MutuComponent } from './mutu.component';

describe('MutuComponent', () => {
  let component: MutuComponent;
  let fixture: ComponentFixture<MutuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MutuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MutuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
