let fetch = require("node-fetch")

let handler = async (m, { itsu }) => {
  let res = await fetch(global.API('LeysCoder', '/api/ppcouple', {}, 'apikey'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.status) throw json
  await itsu.sendFile(m.chat, json.result.male, '', 'cowo', m)
  await itsu.sendFile(m.chat, json.result.female, '', 'cewe', m)
}
handler.help = ['ppcouple', 'ppcp']
handler.tags = ['internet']
handler.command = /^(pp(cp|couple))$/i

module.exports = handler
