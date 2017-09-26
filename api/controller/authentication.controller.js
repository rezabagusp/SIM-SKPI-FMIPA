var express = require('express'),
	sequelize = require('../dbsequelize'),
    jwt = require('jsonwebtoken')
    crypto = require('crypto');

var user = sequelize.import('./../models/user.model.js');
var mahasiswa = sequelize.import('./../models/mahasiswa.model.js');

class Authentication{

    constructor(){  
        this.nama_user='';
        this.password_user='';

    }

    setNamaUser(data){
        this.nama_user = data;
    }
    setPasswordUser(data){
        this.password_user = crypto.createHash('sha256').update(data).digest('hex');
    }
    
    login(data, res){
        this.setNamaUser(data.nama_user);
        this.setPasswordUser(data.password_user);
        user.findOne({
            where: {
                nama_user: this.nama_user,
                password_user: this.password_user
            }
        }).then((hasil)=>{
            var token = jwt.sign(hasil.dataValues, SECRET_KEY);
            res.json({status:true, message:"login berhasil", token:token});
        }).catch((err)=> {
            mahasiswa.findOne({
                where: {
                    nama_user:this.nama_user,
                    password_user:this.password_user
                }
            }).then((data)=>{
                var token = jwt.sign(data.dataValues, SECRET_KEY);
                res.json({status:true, message:"login berhasil", token:token});
            }).catch((err)=>{
                res.json({status:false, message:'login gagal'})
            })
        })
    }
}

module.exports = new Authentication;