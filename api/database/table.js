var sequelize = require('./../dbsequelize');

/* check connection*/
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

var ekstrakulikuler = sequelize.import(__dirname + '/../models/ekstrakulikuler.model.js');
var kategori = sequelize.import(__dirname + '/../models/kategori.model.js');
var mahasiswa = sequelize.import(__dirname + '/../models/mahasiswa.model.js');
var sub_kategori = sequelize.import(__dirname + '/../models/sub_kategori.model.js');
var tingkat = sequelize.import(__dirname + '/../models/tingkat.model.js');
var user = sequelize.import(__dirname + '/../models/user.model.js');

// create table

kategori.sync().then(() => {
    sub_kategori.sync().then(() => {
        ekstrakulikuler.sync().then(() => {
          mahasiswa.sync().then(()=> {
            tingkat.sync().then(()=> {
              user.sync();
            });
          });
        });
    });
});