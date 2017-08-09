import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EkstrakurikulerComponent } from './ekstrakurikuler.component';

describe('EkstrakurikulerComponent', () => {
  let component: EkstrakurikulerComponent;
  let fixture: ComponentFixture<EkstrakurikulerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EkstrakurikulerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EkstrakurikulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
