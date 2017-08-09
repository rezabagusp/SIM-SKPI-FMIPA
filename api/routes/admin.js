var express = require('express'),
    multer = require('multer'),
	admin = require('./../controller/admin.controller'),
    router = express.Router();  


//routing mahasiswa

router.get('/getallkategori', function(req, res, next){
    admin.getAllKategori(req, res);
});
router.get('/getallsubkategori', function(req, res, next){
    admin.getAllSubKategori(req, res);
});
router.get('/getallskor', function(req, res, next){
    admin.getAllSkor(req, res);
});
router.get('/getalluser', function(req, res, next){
    admin.getAllUser(req, res);
});


router.post('/addkategori', function(req, res, next){
    admin.addKategori(req, res);
});
router.post('/updatekategori', function(req, res, next){
    admin.updateKategori(req, res);
});
router.post('/deletekategori', function(req, res, next){
    admin.deleteKategori(req, res);
});

router.post('/addsubkategori', function(req, res, next){
    admin.addSubKategori(req, res);
});
router.post('/updatesubkategori', function(req, res, next){
    admin.updateSubKategori(req, res);
});
router.post('/deletesubkategori', function(req, res, next){
    admin.deleteSubKategori(req, res);
});

router.post('/getSkor', function(req, res, next){
    admin.getSkor(req, res);
});
router.post('/addskor', function(req, res, next){
    admin.addSkor(req, res);
});
router.post('/updateskor', function(req, res, next){
    admin.updateSkor(req, res);
});
router.post('/deleteskor', function(req, res, next){
    admin.deleteSkor(req, res);
});

router.post('/adduser', function(req, res, next){
    admin.addUser(req, res);
});
router.post('/updateuser', function(req, res, next){
    admin.updateUser(req, res);
});
router.post('/deleteuser', function(req, res, next){
    admin.deleteUser(req, res);
});

module.exports = router;