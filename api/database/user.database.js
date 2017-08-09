var sequelize = require('./../dbsequelize');
var user = sequelize.import(__dirname + '/../models/user.model');
user.sync().then(()=>{
	user.bulkCreate([
    {
		nama_user:'dept1',
        email_user:'dept1@gmail.com',
       	password_user:'dept1', 
		role:'departemen',
		fk_departemen_id: 1
    },
    {
		nama_user:'dept2',
        email_user:'dept2@gmail.com',
       	password_user:'dept2', 
		role:'departemen',
		fk_departemen_id: 2
    },
    {
		nama_user:'dept3',
        email_user:'dept3@gmail.com',
       	password_user:'dept3', 
		role:'departemen',
		fk_departemen_id: 3
    },
]);
});