let moment = require('moment-timezone')
let fs = require('fs')
let handler = async (m, { itsu, command }) => {
m.reply(gc1)
m.reply(gc2)
m.reply(gc3)
}
handler.help = ['gcbot', 'grupbot']
handler.tags = ['main']
handler.command = /^(allgc|gcbot|grupbot|groupbot)$/i

module.exports = handler
