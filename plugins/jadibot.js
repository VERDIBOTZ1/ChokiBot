let { MessageType } = require('@adiwajshing/baileys')
let qrcode = require('qrcode')

if (global.conns instanceof Array) console.log()// for (let i of global.conns) global.conns[i] && global.conns[i].user ? global.conns[i].close().then(() => delete global.conns[id] && global.conns.splice(i, 1)).catch(global.itsu.logger.error) : delete global.conns[i] && global.conns.splice(i, 1)
else global.conns = []

let handler = async (m, { itsu, args, usedPrefix, command }) => {
  let parent = args[0] && args[0] == 'plz' ? itsu : global.itsu
  let auth = false
  if ((args[0] && args[0] == 'plz') || global.itsu.user.jid == itsu.user.jid) {
    let id = global.conns.length
    let itsu = new global.itsu.constructor()
    itsu.version = global.itsu.version
    if (args[0] && args[0].length > 200) {
      let json = Buffer.from(args[0], 'base64').toString('utf-8')
      // global.itsu.reply(m.isGroup ? m.sender : m.chat, json, m)
      let obj = JSON.parse(json)
      await itsu.loadAuthInfo(obj)
      auth = true
    }
    itsu.on('qr', async qr => {
      let scan = await parent.sendFile(m.chat, await qrcode.toDataURL(qr, { scale: 8 }), 'qrcode.png', 'Scan QR ini untuk jadi bot sementara\n\n1. Klik titik tiga di pojok kanan atas\n2. Ketuk WhatsApp Web\n3. Scan QR ini \nQR Expired dalam 20 detik', m)
      setTimeout(() => {
        parent.deleteMessage(m.chat, scan.key)
      }, 30000)
    })
    itsu.welcome = global.itsu.welcome + ''
    itsu.bye = global.itsu.bye + ''
    itsu.spromote = global.itsu.spromote + ''
    itsu.sdemote = global.itsu.sdemote + ''
    itsu.handler = global.itsu.handler.bind(itsu)
    itsu.onDelete = global.itsu.onDelete.bind(itsu)
    itsu.onParticipantsUpdate = global.itsu.onParticipantsUpdate.bind(itsu)
    itsu.onCall = global.itsu.onCall.bind(itsu)
    itsu.on('chat-update', itsu.handler)
    itsu.on('message-delete', itsu.onDelete)
    itsu.on('group-participants-update', itsu.onParticipantsUpdate)
    itsu.on('CB:action,,call', itsu.onCall)
    itsu.regenerateQRIntervalMs = null
    itsu.itsuect().then(async ({ user }) => {
      parent.reply(m.chat, 'Berhasil tersambung dengan WhatsApp - mu.\n*NOTE: Ini cuma numpang*\n' + JSON.stringify(user, null, 2), m)
      if (auth) return
      await parent.sendMessage(user.jid, `Kamu bisa login tanpa qr dengan pesan dibawah ini. untuk mendapatkan kode lengkapnya, silahkan kirim *${usedPrefix}getcode* untuk mendapatkan kode yang akurat`, MessageType.extendedText)
      parent.sendMessage(user.jid, `${usedPrefix + command} ${Buffer.from(JSON.stringify(itsu.base64EncodedAuthInfo())).toString('base64')}`, MessageType.extendedText)
    })
    setTimeout(() => {
      if (itsu.user) return
      itsu.close()
      let i = global.conns.indexOf(itsu)
      if (i < 0) return
      delete global.conns[i]
      global.conns.splice(i, 1)
    }, 60000)
    itsu.on('close', () => {
      setTimeout(async () => {
        try {
          if (itsu.state != 'close') return
          if (itsu.user && itsu.user.jid)
            parent.sendMessage(itsu.user.jid, `Koneksi terputus...`, MessageType.extendedText)
          let i = global.conns.indexOf(itsu)
          if (i < 0) return
          delete global.conns[i]
          global.conns.splice(i, 1)
        } catch (e) { itsu.logger.error(e) }
      }, 30000)
    })
    global.conns.push(itsu)
  } else throw 'Tidak bisa membuat bot didalam bot!\n\nhttps://wa.me/' + global.itsu.user.jid.split`@`[0] + '?text=.jadibot'
}
handler.help = ['jadibot']
handler.tags = ['jadibot']

handler.command = /^jadibot$/i
//handler.private = true
handler.limit = 5

module.exports = handler
