var sequelize = require('./../dbsequelize');
var sub_kategori = sequelize.import('sub_kategori.model.js');
var tingkat = sequelize.import('tingkat.model.js');

var mahasiswa = sequelize.import('mahasiswa.model.js');

module.exports = function(sequelize, DataType){
	return sequelize.define('ekstrakurikuler',{
        nama_ekstrakurikuler: DataType.STRING,
        tanggal_mulai: DataType.DATE,
		tanggal_selesai: DataType.DATE,
		kota:DataType.STRING,
		negara:DataType.STRING,
		bukti_ekstrakurikuler: DataType.STRING,
		keterangan:DataType.STRING,
		status_verifikasi_ekstrakurikuler: {
			type: DataType.INTEGER, 
			defaultValue: 0
		},
        fk_mahasiswa_id:{
			type: DataType.INTEGER,
			references: {
				model: mahasiswa,
				key: 'id'
			}
		},
        fk_tingkat_id:{
			type: DataType.INTEGER,
			references: {
				model: tingkat,
				key: 'id'
			}
		},		
		fk_sub_kategori_id:{
			type: DataType.INTEGER,
			references: {
				model: sub_kategori,
				key: 'id'
			}
		}
    });
}