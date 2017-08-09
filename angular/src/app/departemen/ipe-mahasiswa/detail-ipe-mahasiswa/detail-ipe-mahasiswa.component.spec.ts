import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailIpeMahasiswaComponent } from './detail-ipe-mahasiswa.component';

describe('DetailIpeMahasiswaComponent', () => {
  let component: DetailIpeMahasiswaComponent;
  let fixture: ComponentFixture<DetailIpeMahasiswaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailIpeMahasiswaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailIpeMahasiswaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
