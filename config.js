/**

██╗░░░░░██╗░░░██╗████████╗██╗░░██╗███████╗██████╗░
██║░░░░░██║░░░██║╚══██╔══╝██║░░██║██╔════╝██╔══██╗
██║░░░░░██║░░░██║░░░██║░░░███████║█████╗░░██████╔╝
██║░░░░░██║░░░██║░░░██║░░░██╔══██║██╔══╝░░██╔══██╗
███████╗╚██████╔╝░░░██║░░░██║░░██║███████╗██║░░██║
╚══════╝░╚═════╝░░░░╚═╝░░░╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝

███╗░░░███╗██████╗░
████╗░████║██╔══██╗
██╔████╔██║██║░░██║
██║╚██╔╝██║██║░░██║
██║░╚═╝░██║██████╔╝
╚═╝░░░░░╚═╝╚═════╝░

* Project name - LUTHER- MD- X1 
* Author - LUTHER
* Team - DTX STUDIO
* Version - X1

World best and powerfull whatsapp user bot in KOLKATA*/






import chalk from 'chalk'
import { fileURLToPath } from 'url'
import { watchFile, unwatchFile, readFileSync } from 'fs'

global.owner = 
 [
  ['+919332425327', 'ᴴᴱᴿᴼᴮᴿᴵᴺᴱ', true]
]
// Put your number here
// [number, he creator/owner?, he developer?]

global.mods = [] // Want some help?
global.prems = [] // Premium user has unlimited limit



 global.thumbnailUrl = [
  'https://telegra.ph/file/81260a8b9e8cff26d2b48.jpg', 'https://telegra.ph/file/ac4928f0824a2a0492737.jpg',
  'https://telegra.ph/file/6359b013bc7e52c3b346f.jpg', 'https://telegra.ph/file/d43c89a5d2da72875ec05.jpg',
  'https://telegra.ph/file/7d6c0e35f9c8f52715541.jpg', 'https://telegra.ph/file/ef4b742d47e6a9115e2ff.jpg',
  'https://telegra.ph/file/55e5af5f33fbd57104187.jpg', 'https://telegra.ph/file/af236598456b95884bd15.jpg',
  'https://telegra.ph/file/de92ed4a729887ffc974c.jpg', 'https://telegra.ph/file/00ce42a193b1dbbf907d4.jpg'
]

// Sticker WM
global.packname = `「 Cʀᴇᴀᴛᴇᴅ Bʏ 𝖑𝖚𝖙𝖍𝖊𝖊𝖗 」`
global.author = ''
global.thumb = readFileSync('./me.png')
global.thumb2 = readFileSync('./me2.jpeg')
global.multiplier = 69 // The higher, The harder levelup

//Text here
global.me = 'Cʀᴇᴀᴛᴇᴅ Bʏ  𝔡𝔱𝔵 𝔰𝔱𝔲𝔡𝔦𝔬 - 2024'
global.bott = '𝓗𝓔𝓡𝓞𝓑𝓡𝓘𝓝𝓔 𝓜𝓓'
global.nomorown = '+919332425327'
// owner put this creator.js
global.str = '-------------'
global.l = '「'
global.r = '」'
global.wait = '```「▰▰▰▱▱▱▱▱▱▱」ʟ ᴏ ᴀ ᴅ ɪ ɴ ɢ...```'
global.eror = '```404 ᴇʀʀᴏʀ```'

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '🧬',
      limit: '🌌',
      health: '❤️',
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐎',
      cat: '🐈',
      dog: '🐕',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.cyanBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
