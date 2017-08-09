import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ModalDirective } from 'ng2-bootstrap/modal/modal.component';
import { SelectModule } from 'ng2-select';

@Component({
  selector: 'app-ekstrakurikuler',
  templateUrl: './ekstrakurikuler.component.html',
  styleUrls: ['./ekstrakurikuler.component.scss']
})
export class EkstrakurikulerComponent implements OnInit {

  constructor() { }

  public tambahEkstrakurikulerModal;
  public value = {};
  public jenis;
  public jenis_kegiatan: Array<string> = ["Kegiatan kemahasiswaan", "Himpunan/organisasi profesi kemahasiswaan"];
  public tingkat_kegiatan: Array<string> = ["Lokal", "Nasional", "Internasional"];
  public sub_jenis_kegiatan;
  public sub_jenis_kegiatan1: Array<string> = [
  											"Kompetisi ilmiah/kewirausahaan/kebudayaan/seni/olahraga",
  											"Magang/kerja praktek/mengajar/asistensi di luar kegiatan kurikuler", "Presentasi dalam seminar/lokakarya/konferensi",
	              				"Tampil dalam kebudayaan/seni/olahraga",
	              				"Ketua panitia dalam kegiatan kemahasiswaan",
	             					"Anggota panitia/peserta seminar/lokakarya/konferensi"
	              							];
  public sub_jenis_kegiatan2: Array<string> = ["Sebagai ketua", "Sebagai wakil ketua", "Sebagai ketua seksi", "Sebagai anggota"]

  ngOnInit() {
  }

  public pilihJenis(jenis) {
  	if (jenis == "Kegiatan kemahasiswaan") {
  		console.log(jenis);
  		this.sub_jenis_kegiatan = this.sub_jenis_kegiatan1;
  	} else if (jenis == "Himpunan/organisasi profesi kemahasiswaan") {
  		console.log(jenis);
  		this.sub_jenis_kegiatan = this.sub_jenis_kegiatan2;
  	}
  }
}
