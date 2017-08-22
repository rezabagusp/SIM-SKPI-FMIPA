import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkorComponent } from './skor.component';

describe('SkorComponent', () => {
  let component: SkorComponent;
  let fixture: ComponentFixture<SkorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
