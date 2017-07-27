var sequelize = require('./../dbsequelize');
var sub_kategori = sequelize.import('sub_kategori.model.js');
module.exports = function(sequelize, DataType){
	return sequelize.define('ekstrakulikuler',{
        nama_ekstrakulikuler: DataType.STRING,
        waktu_mulai: DataType.DATE,
        waktu_selesai: DataType.DATE,
        bukti_ekstrakulikuler: DataType.STRING,
        fk_sub_kategori_id:{
			type: DataType.INTEGER,
			references: {
				model: sub_kategori,
				key: 'id'
			}
		}
    });
}