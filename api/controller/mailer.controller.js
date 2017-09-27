var nodemailer = require('nodemailer')

/*Settup email*/
var transport = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	auth: {
		user: 'miqdadfawwaz95@gmail.com',
		pass: 'bismill4h'
	}
})

/*Object for sending email*/
class Mailer {
	constructor() {
		/*SET OBJECT'S ATTRIBUTE IN HERE*/
		this.sender = '"Tenaga Pelayanan Akademik dan Mahasiswa FMIPA IPB" <FMIPA@apps.ipb.ac.id>'
		this.reciever = ''
		this.subject = ''
        this.tamplate = ''
	}
	/*Set tamplate email for finished surat*/
	SetTemplateVerifikasiGagal () {
		this.subject = 'Verifikasi peserta '
		this.tamplate = `
			<p> Kami memberitahukan bahwa verifikasi prestasi ekstrakurikuler yang anda ajukan <i>ditolak<i>.</p> 
			<p> Silahkan melakukan revisi pada prestasi yang bersangkutan </p>
			<br>
			<p> Hormati kami SIM SKPI IPB.</p>
		`
	}
	/*send email*/
	SendEmail(email,res) {
		var mailOptions = {
			from: this.sender,
			to: email, 
			subject: this.subject,  
			html: this.tamplate
		}
		transport.sendMail(mailOptions, (error, info) => {
			if (error) {
				res.json({status: false, message: 'Mail sent failed', err: error})
			} else {
				console.log('Message %s sent: %s', info.messageId, info.response)
			}
		})
	}
}

module.exports = new Mailer;