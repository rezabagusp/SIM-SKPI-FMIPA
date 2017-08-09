var express = require('express'),
    multer = require('multer'),
	departemen = require('./../controller/departemen.controller'),
    router = express.Router();  


//routing departemen
router.post('/verifikasiekskul', function(req, res, next){
    departemen.verifikasiEkskul(req, res)
});
router.get('/getallpresma/:id_departemen', function(req, res, next){
    departemen.getAllpresma(req, res)
});

router.get('/detilprestasi/:id_ekskul', function(req, res, next){
    departemen.getPresmaById(req, res);
});

//routing fakultas : departemen ke 9
router.get('/getallmahasiswa', function(req, res, next){
    departemen.getAllMahasiswa(req, res);
});



module.exports = router;