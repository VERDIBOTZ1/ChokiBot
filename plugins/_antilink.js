/*let linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i
module.exports = {
  before(m, { isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe) return true
    let chat = global.db.data.chats[m.chat]
    let isGroupLink = linkRegex.exec(m.text)

    if (chat.antiLink && isGroupLink) {
      m.reply('Hapus!!\n\nLink Grup terdeteksi')
      if (global.opts['restrict']) {
        if (isAdmin || !isBotAdmin) return true
         this.groupRemove(m.chat, [m.sender])
      }
    }
    return true
  }
}
*/
let handler = m => m

let linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i
handler.before = async function (m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.db.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink && isGroupLink && !isAdmin && !m.isBaileys && m.isGroup) {
    let thisGroup = `https://chat.whatsapp.com/${await itsu.groupInviteCode(m.chat)}`
    if (m.text.includes(thisGroup)) throw false // jika link grup itu sendiri gak dikick
    await itsu.sendButton(m.chat, `*Link Grup Terdeteksi!*${isBotAdmin ? '' : '\n\nbukan admin jadi gabisa kick t_t'}\n\nKetik *.off antilink* untuk mematikan fitur ini${opts['restrict'] ? '' : '\nketik *#on restrict* supaya bisa kick'}`, footer, 'Matikan Antilink', '#off antilink', m)
    //if (global.opts['restrict']) {
      if (isBotAdmin) this.groupRemove(m.chat, [m.sender])
//    }
  }
  return true
}

module.exports = handler
