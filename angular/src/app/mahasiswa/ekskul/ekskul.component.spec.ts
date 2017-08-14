import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EkskulComponent } from './ekskul.component';

describe('EkskulComponent', () => {
  let component: EkskulComponent;
  let fixture: ComponentFixture<EkskulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EkskulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EkskulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
