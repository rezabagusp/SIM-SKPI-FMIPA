import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkpiComponent } from './skpi.component';

describe('SkpiComponent', () => {
  let component: SkpiComponent;
  let fixture: ComponentFixture<SkpiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkpiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
