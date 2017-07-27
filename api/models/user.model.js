var sequelize = require('./../dbsequelize');
module.exports = function(sequelize, DataType){
	return sequelize.define('user',{
        nama_user: DataType.STRING,
        email_user: DataType.STRING,
        password_user: DataType.STRING,
    });
}