let fs = require('fs')
let moment = require('moment-timezone')
let handler = async (m, { itsu, command }) => {
don = `┌〔 Donasi • Emoney 〕
├ Pulsa : 089677763976
├ Gopay : 089677763976
├ Ovo : 089677763976
├ Dana : 089677763976
├ saweria.co/rey404
├ trakteer.id/rey404
└────`

let user = global.DATABASE.data.users[m.sender]
/*itsu.sendFile(m.chat, img, '', `Halo juga kak ${itsu.getName(m.sender)}`, { key: { fromMe: false, remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { message: `${ucapan()} ${itsu.getName(m.sender)}`, itemCount: 999, thumbnail: fs.readFileSync('./src/mikey.jpg')
}}})*/
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? itsu.user.jid : m.sender
let name = m.fromMe ? itsu.user : itsu.contacts[who]
pushname = `*${name.vnmae || name.notify || name.name || ('+' + name.jid.split`@`[0])}*`

function kyun(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);

//return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
return `${pad(hours)}Jam ${pad(minutes)}Menit ${pad(seconds)}Detik`
}
runtime = process.uptime()
					teks = `𝙍𝙚𝙖𝙡 𝙁𝙖𝙢𝙨 𝙆𝙞𝙡𝙡𝙚𝙧`// \n\n${kyun(runtime)}`
					run = `${kyun(runtime)}`
					var itsme = `0@s.whatsapp.net`
					var split = `teks`
					const rtimebro = {
					contextInfo: {
					participant: itsme,
					quotedMessage: {
					extendedTextMessage: {
					text: split,
									}
								}
							}
					}
//m.reply(don)
itsu.sendMessage(m.chat, `${ucapan()} Kak ${pushname}\n\n⬣━━〔 ---------- 〕━━⬣\n\n${don}\n⬣━━〔 ---------- 〕━━⬣\n`, 'conversation', {quoted: m, thumbnail: global.thumb, contextInfo:{externalAdReply: {title: teks, body: `${run}`, sourceUrl: linkf, thumbnail: global.thumb2}}})
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler

function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dinihari"
    if (time >= 4) {
        res = "Selamat pagi"
    }
    if (time > 10) {
        res = "Selamat siang🌞"
    }
    if (time >= 15) {
        res = "Selamat sore🌝"
    }
    if (time >= 18) {
        res = "Selamat malam🌚"
    }
    return res
}