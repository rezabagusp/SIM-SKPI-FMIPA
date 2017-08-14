var express = require('express'),
    sequelize = require('../dbsequelize'),
    multer = require('multer'),
    path = require('path'),
    ekskul = sequelize.import('../models/ekstrakurikuler.model.js'),
    storage = multer.diskStorage({
	    destination: function (req, file, callback) {
	        callback(null, 'public/images');
	    },
	    filename: function (req, file, callback) {
	    let ext = path.extname(file.originalname);
	        callback(null, `${Math.random().toString(36).substring(7)}${ext}`);
	    }
	}),
	upload = multer({ storage : storage, 
		fileFilter: function (req, file, callback) {
			var ext = path.extname(file.originalname);
			if(ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg' && ext !== '.pdf' && ext !== '.PDF') {
				return callback(new Error('file not allowed'));
			}
			callback(null, true);
		}
	}).any();

var tingkat = sequelize.import('../models/tingkat.model.js');
var sub_kategori = sequelize.import('../models/sub_kategori.model.js');
var kategori = sequelize.import('../models/kategori.model.js');
var mahasiswa = sequelize.import('../models/mahasiswa.model.js');
ekskul.belongsTo(tingkat, {foreignKey:'fk_tingkat_id'})
ekskul.belongsTo(sub_kategori, {foreignKey:'fk_sub_kategori_id'})

class Mahasiswa {
    constructor(){}

    fileUpload(data,res){
        upload(data, res, function(err){
            console.log(data.files)
            if(err) res.json({status:false, message:'error saat upload'})
            else res.json({status:true, message:'Berhasil upload', nama: data.files[0].filename})
        });
    }
    addEkskul(data, res){
        console.log('yang diterima: ', data.body)
        var nama_ekstrakurikuler = data.body.nama_ekstrakurikuler,
            fk_sub_kategori_id = data.body.fk_sub_kategori_id,
            fk_tingkat_id = data.body.fk_tingkat_id,
            kota = data.body.kota,
            negara = data.body.negara,
            tanggal_mulai = data.body.tanggal_mulai,
            tanggal_selesai = data.body.tanggal_selesai,
            bukti = data.body.bukti,
            id_mahasiswa = data.body.id_mahasiswa;
        ekskul.create({
            nama_ekstrakurikuler:nama_ekstrakurikuler,
            fk_sub_kategori_id:fk_sub_kategori_id,
            fk_tingkat_id:fk_tingkat_id,
            kota:kota,
            negara:negara,
            tanggal_mulai:tanggal_mulai,
            tanggal_selesai:tanggal_selesai,
            fk_mahasiswa_id: id_mahasiswa,
            bukti_ekstrakurikuler: bukti
        }).then(()=>{
            res.json({status:true, message:'berhasil menambahkan ekskul'})
        }).catch((err)=>{
            res.json({status:false, message:'gagal menambahkan ekskul'})
        })
    }
    updateEkskul(data, res){
        console.log('bodynya: ', data.body)
        var id = data.body.id,
            nama_ekstrakurikuler = data.body.nama_ekstrakurikuler,
            fk_sub_kategori_id = data.body.fk_sub_kategori_id,
            fk_tingkat_id = data.body.fk_tingkat_id,
            kota = data.body.kota,
            negara = data.body.negara,
            tanggal_mulai = data.body.tanggal_mulai,
            tanggal_selesai = data.body.tanggal_selesai,
            bukti = data.body.bukti,
            id_mahasiswa = data.body.id_mahasiswa;
            console.log('buktinyta njayy', bukti)

        ekskul.findOne({
            where: {
                id:id
            }
        }).then((hasil)=>{
            if(hasil==null){
                console.log('ekskulnya', hasil)
                res.json({status:false, message: 'ekskul tidak ditemukan'})}
            else{
                console.log('hasilbro ',hasil)
                ekskul.update({
                    nama_ekstrakurikuler:nama_ekstrakurikuler,
                    fk_sub_kategori_id:fk_sub_kategori_id,
                    fk_tingkat_id:fk_tingkat_id,
                    kota:kota,
                    negara:negara,
                    tanggal_mulai:tanggal_mulai,
                    tanggal_selesai:tanggal_selesai,
                    bukti_ekstrakurikuler: bukti              
                },
                {
                    where:{
                        id:id,
                        fk_mahasiswa_id:id_mahasiswa
                    }
                }).then(()=>{
                    res.json({status:true, message:'update berhasil'})
                }).catch(()=>{
                    res.json('error saat update')
                })

            }
        }).catch((err)=>{
            res.json(err)
        })
    }
    deleteEkskul(data,res){
        var id = data.body.id;
        var id_mahasiswa = data.body.id_mahasiswa;

        ekskul.findOne({
            where:{
                id: id
            }
        }).then((hasil)=>{
            if (hasil==null)
                res.json({status:false, message:'ekskul tidak ditemukan'})
            else {
                ekskul.destroy({
                    where:{
                        id:id,
                        fk_mahasiswa_id:id_mahasiswa
                    }
                }).then((hasil)=>{
                    console.log('ini hasilnya: ' ,hasil)
                    res.json({status:true, message:'mengahapus ekskul berhasil'})
                }).catch(()=>{
                    res.send({status:0, message:'error saat menghapus'})
                })
            }
        }).catch(()=>{
            res.json({status:false, message:'error saat menemukan'})
        })

    }
    getAllEkskul(data, res){
        // menerima id mahasiswa
        var id_mahasiswa = data.params.id_mahasiswa;
        ekskul.findAll({         
            include:[{
                model: tingkat
            },{
                model: sub_kategori
            }],
            where: {
                fk_mahasiswa_id:id_mahasiswa
            }

        }).then((hasil)=>{
            if(hasil.length==0 || hasil==null)
                res.json({status:false, message:'mahasiswa tidak memilki prestasi'})
            else
                res.json({status:true, message: 'berhasil get all ekskul', result: hasil});
        }).catch(()=>{
            res.json('error saat pencarian')
        })
    }
    getSubKategori(data, res){
        sub_kategori.findAll({
            include:[{
                model: kategori
            }]
        }).then((hasil)=>{
            res.json({status:true, message:'berhasil get Sub kategori', result:hasil});
        }).catch((err)=>{
            res.json({status:false, message:'gagal get Sub kategori'})
        })
    
    }
    getKategori(data, res){
        kategori.findAll({
        }).then((hasil)=>{
            res.json({status:true, message:'berhasil get Kategori', result:hasil})

        }).catch((err)=>{
            res.json({status:false, message:'gagal get kategori'})
        })
    }
    getTingkat(data, res){
        tingkat.findAll({
        }).then((hasil)=>{
            res.json({status:true, message:'berhasil get tingkat', result:hasil})
        }).catch((err)=>{
            res.json({status:false, message:'gagal get tingkat'});
        })
    }
    getEkskulByID(data, res){
        // menerima id ekskul
        var id_ekskul = data.body.id_ekskul;

        ekskul.findOne({
            include:[{
                model:tingkat
            },{
                model: sub_kategori
            }],
            where:{
                id: id_ekskul
            },
        }).then((hasil)=>{
            res.json(hasil);
        }).catch((err)=>{
            res.json(err);
        })
    }
}

module.exports = new Mahasiswa;