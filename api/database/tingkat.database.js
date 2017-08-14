var sequelize = require('./../dbsequelize');
var tingkat = sequelize.import(__dirname + '/../models/tingkat.model');
tingkat.sync().then(()=>{
	tingkat.bulkCreate([{
        value:1,
        nama_tingkat:'Internasional',
    },
    {
        tingkat:2,
        nama_tingkat:'Nasional',
    },    
    {
        tingkat:3,
        nama_tingkat:'Lokal',
    },        
	]);
});