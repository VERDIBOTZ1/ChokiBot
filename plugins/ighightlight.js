let fetch = require('node-fetch')
let handler = async (m, { itsu, args }) => {
  if (!args[0]) throw 'Uhm...url nya mana?'
  let res = await fetch(global.API('xteam', '/dl/ighighlight', {
    nama: args[0]
  }, 'APIKEY'))
  let json = await res.json()
  if (json.result.error) throw json.result.message
  let { username, items } = json.result
  for (let { thumbnail, isVideo, url } of items) {
    thumbnail = await (await fetch(thumbnail)).buffer()
    itsu.sendFile(m.chat, url, 'ig' + (isVideo ? '.mp4' : '.jpg'), `@${username}`, m, false, {
      thumbnail
    })
  }
}
handler.help = ['ighighlight'].map(v => v + ' <username>')
handler.tags = ['downloader']

handler.command = /^(ighighlight?)$/i

module.exports = handler
