var sequelize = require('./../dbsequelize');
module.exports = function(sequelize, DataType){
	return sequelize.define('mahasiswa',{
        nama_mahasiwa: DataType.STRING,
        nim_mahasiwa: DataType.STRING
    });
}