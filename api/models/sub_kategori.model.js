var sequelize = require('./../dbsequelize');
var kategori = sequelize.import('kategori.model.js');
module.exports = function(sequelize, DataType){
	return sequelize.define('sub_kategori',{
        nama_kategori: DataType.STRING,
        bobot: DataType.STRING,
        fk_kategori_id:{
			type: DataType.INTEGER,
			references: {
				model: kategori,
				key: 'id'
			}
		}
    });
}