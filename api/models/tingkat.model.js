var sequelize = require('./../dbsequelize');
module.exports = function(sequelize, DataType){
	return sequelize.define('tingkat',{
        value: DataType.INTEGER,
        nama_tingkat: DataType.STRING
    });
}