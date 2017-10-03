var express = require('express'),
	sequelize = require('../dbsequelize'),
    jwt = require('jsonwebtoken'),
    rp = require('request-promise');
    crypto = require('crypto');
var Client = require('node-rest-client').Client;
var client = new Client();

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
    auth2(data, res){
        var code = 'e8f73c4aaf7d9cfa4da13bf124dcf3d6'
        var options = {
            method: 'POST',
            url: 'http://accounts.ipb.ac.id/OAuth/token.php',
            form: {
                // Like <input type="text" name="name">
                client_id: 'fmipa.skpi',
                client_secret: '445634566',
                grant_type: 'authorization_code',
                code: code
            },
            json: true,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',  // Is set automatically,
                'Authorization': 'Bearer '+code,
            }
        };

        rp(options) // requst for access token
            .then(function(body) {
                console.log(body)
                let options1 = {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',  // Is set automatically,
                        'Authorization': 'Bearer '+ body.access_token,
                    },
                    json: true
                }
                rp.post('https://accounts.ipb.ac.id/OAuth/api.php/me/', options1) // request for claims
                .then(function(body){
                    res.json(body)
                }).catch(function(err){
                    res.json(err)
                })
            }).catch(function(err){
                res.json(err)
            })

    }
    isi(data, res) {
        console.log('masuk', data.body)
        res.json(data.body)
    }
    Step2Oauth2(data, res) {
        var code = 'd3aae5033ae698336846b7d8eb35294d'
        var args = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ',
                'tambah':'coba'
            },
            body: {
                client_id: 'fmipa.skpi',
                client_secret: '445634566',
                grant_type: 'authorization_code',
                code: code
            }
        }
        client.post('http://localhost:8000/login/coba',args, (data, response) => {
            console.log(data)
            // console.log(response)
        })
    }
}

module.exports = new Authentication;