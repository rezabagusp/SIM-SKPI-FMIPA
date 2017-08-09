import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifikasiDetailComponent } from './verifikasi-detail.component';

describe('VerifikasiDetailComponent', () => {
  let component: VerifikasiDetailComponent;
  let fixture: ComponentFixture<VerifikasiDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifikasiDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifikasiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
