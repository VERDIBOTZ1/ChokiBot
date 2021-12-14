
let path = require('path')
let fs = require('fs')
let tum = fs.readFileSync('./src/elaina2.jpeg')
let tum2 = fs.readFileSync('./src/emror.jpeg')
let tum3 = fs.readFileSync('./ah1.jpeg')
const { MessageType} = require("@adiwajshing/baileys")
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
let { performance } = require('perf_hooks')
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `Runtime\n${pad(hours)}H ${pad(minutes)}M ${pad(seconds)}S`
}
					runtime = process.uptime()
					teks = `${kyun(runtime)}`
					run = `${kyun(runtime)}`
					
global.owner = ['6281234567890'] // Put your number here
global.fake = ['6283820073017', '6281382836249', '6289681378568', '62813828362494', '6283801499848']
global.fakeNum = ['6283820073017', '6281382836249', '6289681378568', '62813828362494', '6283801499848', '6283820073017','62813828362494', '6287827659529', '919089248348','12135998445', '0' ]
global.mods = [] // Want some help?
global.prems = [''] // Premium user has unlimited limit
global.kontak = ['6289677763976'] // y
namalu = './Pengocok • Hebat'

//+6281362730880 Riri 1 = aktif
//+62895359557749 Riri 2 = Private
//6283190327988 Nerina 3 = Scanner
/*Premium 
6285669443044    // 29 November 2021 - 29 Desember
380945680870      // 30 November 2021 - 30 Desember
6287843813955   //Apen Pekalongan, Selamanya (no expired)
Tambah lagi
*/

global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com', 
  Dehan: 'https://dhnjing.xyz',
  Velgrynd: 'https://api.ichikaa.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd37372311698ed1d',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'Nyarlathotep',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://dhnjing.xyz': 'e2645065aaced89861b4'
}

// Sticker WM
global.packname =  `RSP • RyuuZeyy`
global.author = ''
//global.author = `@Rlxfly`
global.thumb = tum
global.thumb2 = tum2
global.thumb3 = tum3

global.runtime = teks
global.multiplier = 69 // The higher, The harder levelup
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})


gc1 = 'https://chat.whatsapp.com/FJkbQjpewltErmQRwzC9rj'
gc2 = 'https://chat.whatsapp.com/HTcmEqjQeu1GMN2xN210QJ'
gc3 = 'https://chat.whatsapp.com/I3yAMaBNA9X63FspQ5V46N'
namaig = 'instagram.com/bah.raid'
linkf = gc2
linkff = namaig
gcid = '972502255007-1406453544'
lolkey = 'rey2k21'
bc = 'ChokiBot'
footer = 'ChokiBot'
