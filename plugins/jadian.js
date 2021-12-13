/*let R = Math.random
let Fl = Math.floor
let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
    let ps = groupMetadata.participants.map(v => v.jid)
    let a = ps[Fl(R() * ps.length)]
    let b
    do b = ps[Fl(R() * ps.length)]
    while (b === a)
    m.reply(`${toM(a)} ❤️ ${toM(b)}`, null, {
        contextInfo: {
            mentionedJid: [a, b]
        }
    })
}
handler.help = ['jadian']
handler.tags = ['main']
handler.command = ['jadian']
handler.group = true
handler.limit = true

module.exports = handler*/

let handler = async (m, { conn, participants, usedPrefix, command }) => {
let member = participants.map(u => u.jid)
let orang
if (/ku/i.test(command)) orang = m.sender
else orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `@${orang.replace(/@.+/, '')} ❤️ @${jodoh.replace(/@.+/, '')}`.trim()
let mentionedJid = [orang, jodoh]
//conn.reply(m.chat, jawab, m, { contextInfo: { mentionedJid } })
await conn.sendButton(m.chat, jawab, footer, 'Jadian💘♥️❤️😘', `${usedPrefix + command}`, m, { contextInfo: { mentionedJid } })
}
handler.help = ['jodohin', 'jodohku', 'jadian']
handler.tags = ['main']
handler.command = /^jodoh(in|ku)|jadian$/i
handler.group = true

module.exports = handler