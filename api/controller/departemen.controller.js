var express = require('express'),
    sequelize = require('../dbsequelize'),
    ekskul = sequelize.import('../models/ekstrakurikuler.model.js');

var tingkat = sequelize.import('../models/tingkat.model.js');
var sub_kategori = sequelize.import('../models/sub_kategori.model.js');
var mahasiswa = sequelize.import('../models/mahasiswa.model.js');
var departemen = sequelize.import('../models/departemen.model.js');
var skor = sequelize.import('../models/skor.model.js');
var mutu = sequelize.import('../models/mutu.model.js');

mahasiswa.belongsTo(departemen, {foreignKey:'fk_departemen_id'})
ekskul.belongsTo(mahasiswa, {foreignKey:'fk_mahasiswa_id'})

class Departemen{
    constructor(){}
    
    getAllpresma(data, res){
        //menerima params id_departemen
        var id_departemen = data.params.id_departemen;
        if(id_departemen == 9){ //fakultas
            ekskul.findAll({
                include:[{
                    model: skor,
                    include: [{
                        model: tingkat
                    },{
                        model: sub_kategori
                    }]
                },{
                    model: mahasiswa,
                    include:[{
                        model:departemen
                    }]
                }]
            }).then((hasil)=>{
                res.json({status:true, message:'berhasil mengambil data presma', result:hasil})
            }).catch((err)=>{
                res.json({status:false, message:'error saat menemukan'})
            })            
        }

        else if (id_departemen != 9){ //departemen
            ekskul.findAll({
                include:[{
                    model: skor,
                    include:[{
                        model: tingkat
                    }, {
                        model: sub_kategori
                    }]
                },{
                    model: mahasiswa,
                    include:[{
                        model:departemen
                    }],
                    where:{
                        fk_departemen_id:id_departemen
                    },                
                }]
            }).then((hasil)=>{
                res.json({status:true, message:'berhasil mendapatkan presma', result:hasil})
            }).catch(()=>{
                res.json({status:false, message:'gagal mendapatkan prestasi mahasiswa'});
            })
        }
    }

    //method for update status of ekskul. jangan lupa diganti status[0,1,2]
    verifikasiEkskul(data, res){
        console.log('data bodynya:', data.body)
        //menerima status verif, id_ekskl dan keterangan
        var id = data.body.id_ekskul,
            status = data.body.status_verifikasi,
            keterangan = data.body.keterangan;

        ekskul.findOne({
            where: {
                id:id
            }
        }).then((hasil)=>{
            if (hasil.length==0 || hasil==null)
                res.json({status:false, message:'prestasi tidak ditemukan'})
            else{
                ekskul.update({
                    status_verifikasi_ekstrakurikuler:status,
                    keterangan: keterangan
                },
                {
                    where:{
                        id:id
                    }
                }).then(()=>{
                    res.json({status:true, message:'berhasil update status verifikasi'})
                }).catch(()=>{
                    res.json({status:false, message:'error saat update'})
                })      
            }
        }).catch((err)=>{
            res.json({status:false, message:'error saat pencarian ekskul'})
        })
    }

    getPresmaById(data, res){
        // menerima paramsnya id ekskul
        console.log(data.params)
        var id_ekskul = data.params.id_ekskul;
        ekskul.findOne({
            where:{
                id: id_ekskul
            }
        }).then((hasil)=>{
            if(hasil == null)
                res.json({status:false, message:'ekskul tidak ditemukan'})
            else{
                ekskul.findOne({
                    where:{
                        id: id_ekskul
                    },
                    include:[{
                        model:skor,
                        include:[{
                            model: tingkat,
                        },{
                            model: sub_kategori
                        }]                      
                    },{
                        model:mahasiswa,
                        include:[{
                            model:departemen
                        }]
                    }]
                }).then((hasil)=>{
                    res.json({status:true, message:'ekskul berhasil ditemukan', result:hasil});
                }).catch((err)=>{
                    res.json({status:false, message:'error saat menemukan'})
                })
 
            }
        }).catch((err)=>{
            res.json(err)
        })
    }

    //departemen ke 9
    getAllMahasiswa(data, res){
        mahasiswa.findAll({
            include: [{
                model:departemen
            }],
        }).then((hasil)=>{
            res.json({status:true, message:'berhasil get all mahasiswa', result: hasil});
        }).catch((err)=>{
            res.json({status:false, message:'gagal get mahasiswa', result: err});
        })
    }

    getMutu(data, res){
        //menerima jumlah_skor di params
        console.log('masuk mutu')
        var jumlah_skor = data.params.jumlah_skor;
        mutu.findOne({
            where: {
                batas_bawah: {
                    $lte: jumlah_skor
                },
                batas_atas: {
                    $gte: jumlah_skor
                }
            }
        }).then((hasil)=>{
            console.log(hasil)
            if(hasil == null)
                res.json({status:true, message: 'berhasil get mutu', result: null})
            res.json({status: true, message: 'berhasil get mutu', result: hasil.nama_mutu})
        }).catch((err)=>{
            res.json({status: false, message:'error saat pencarian mutu', result: err})
        })
    }

}

module.exports = new Departemen;
