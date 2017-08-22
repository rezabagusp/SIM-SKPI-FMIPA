import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JenisKegiatanComponent } from './jenis-kegiatan.component';

describe('JenisKegiatanComponent', () => {
  let component: JenisKegiatanComponent;
  let fixture: ComponentFixture<JenisKegiatanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JenisKegiatanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JenisKegiatanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
