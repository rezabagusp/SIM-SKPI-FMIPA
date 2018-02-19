var express = require('express'),
	sequelize = require('../dbsequelize'),
    jwt = require('jsonwebtoken'),
    rp = require('request-promise');
    crypto = require('crypto');

// const oauth2 = require('simple-oauth2').create(credentials);    
var Client = require('node-rest-client').Client;
var client = new Client();

var user = sequelize.import('./../models/user.model.js');
var mahasiswa = sequelize.import('./../models/mahasiswa.model.js');
var base_url='http://localhost:4200'; // url untuk redirect ke dashboard sistem

var saml2_oauth_IPB = 'ccounts.ipb.ac.id/saml2/idp/SSOService.php?spentityid=https%3A%2F%2Faccounts.ipb.ac.id%2Fmodule.php%2Fsaml%2Fsp%2Fmetadata.php%2Fdefault-sp&cookieTime=150643`0063&RelayState=https%3A%2F%2Faccounts.ipb.ac.id%2FOAuth%2Fauthorize.php%3Fredirect_url%3Dhttp%253A%252F%252Fskpi.fmipa.ipb.ac.id%252Flogin%252Fauth2%26scope%3Dcore_applications%26state%3D3%28%25230%252F%21~%26response_type%3Dcode%26client_id%3Dfmipa.skpi' 

class Authentication{
    

    constructor(){  
        this.nama_user='';
        this.password_user='';
        this.url_oauth_token='https://accounts.ipb.ac.id/OAuth/token.php'; //url untuk get access token
        this.url_oauth_claims='https://accounts.ipb.ac.id/OAuth/api.php/me/'; //url untuk get claims

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
        let code = data.query.code;
        let state = data.query.state;
        let options = {
            form: {
                client_id: 'fmipa.skpi',
                client_secret: '445634566',
                grant_type: 'authorization_code',
                code: code,
                state: state
            },
            json: true,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',  // Is set automatically,
            }
        };
        rp.post(this.url_oauth_token, options) // requst for access token
            .then((body) => {
                var access_token = body.access_token;
                let options1 = {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',  // Is set automatically,
                        'Authorization': 'Bearer '+ access_token,
                    },
                    json: true 
                }
                rp.post(this.url_oauth_claims, options1) // request for claims
                .then(function(body){
                    let status = body.status;
                    if(status && status == 'Mahasiswa'){ // check apakah yang ingin masuk mahasiswa
                        if((body.nim).charAt(0) == 'G' ){//pastikan mahasiswa dengan nim G FMIPA
                            mahasiswa.findOne({
                                where: {
                                    nama_user: body.username
                                }
                            }).then((data)=>{ // kalau sudah ada entry di DB
                                let token = jwt.sign(data.dataValues, SECRET_KEY); // buat token
                                res.redirect(base_url+'/#/auth/sso/'+token)
                            }).catch((err)=>{ // kalau belum ada entry di DB
                                mahasiswa.create({
                                    nama_user: body.username,
                                    nama_mahasiswa: body.nama,
                                    nim_mahasiswa: body.nim,
                                    email_user: body.email,
                                    role: (body.status).toLowerCase(),
                                    fk_departemen_id: (body.nim).charAt(1)
                                }).then((hasil)=>{
                                    mahasiswa.findOne({
                                        where:{
                                            nama_user: body.username
                                        }
                                    }).then((hasil)=>{
                                        let token = jwt.sign(hasil.dataValues, SECRET_KEY);
                                        res.redirect(base_url+'/#/auth/sso/'+token);
                                    }).catch((err)=>{
                                        res.json(err);
                                    })
                                })           
                            })                            
                        
                        }
                        else{ //selain mahasiswa fmipa
                            res.json({status: false, message: 'maaf anda tidak dapat masuk ke dalam sistem'});
                        }
                    }
                    else{//selain mahasiswa --> staff
                        user.findOne({
                            where:{
                                nama_user: body.username
                            }
                        }).then((hasil)=>{ // true kalau staff terdaftar
                            //buat token
                            let token = jwt.sign(hasil.dataValues, SECRET_KEY);
                            res.redirect(base_url+'/#/auth/sso/'+token);
                        }).catch((err)=>{// false, kalau bukan staff terdaftar
                            res.json({status:false, message:'maaf anda tidak memiliki akses'})
                        })
                    }
                }).catch(function(err){
                    res.redirect(saml2_oauth_IPB); // request ulang untuk mendapatkan access token
                })
            }).catch(function(err){
                res.json('authorization code was not found');
            })

    }
}

module.exports = new Authentication;