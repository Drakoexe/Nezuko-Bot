import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumber = '' //Ejemplo: 573218138672

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.owner = [
// <-- Número @s.whatsapp.net -->
  ['51971285104', '🜲 Propietario 🜲', true],
  ['5492916450307'],
  ['5219541690054'],
  ['5214811527445'], 
  ['5216671548329'],
  
// <-- Número @lid -->
//  ['', 'Destroy', true],
  ['258892692984006', 'DevAlexJs', true], 
  ['58566677377081', 'Legna', true]
];

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.mods = []
global.suittag = ['51971285104'] 
global.prems = []

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.libreria = 'Baileys'
global.baileys = 'V 6.7.17' 
global.vs = '2.2.5'
global.nameqr = 'NezukoBot-MD'
global.namebot = 'ᰔᩚ 𝙽𝚎zuko-Bot ᰔᩚ'
global.sessions = 'Sessions'
global.jadi = 'JadiBots' 
global.yukiJadibts = true

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.packname = 'ᰔᩚ 𝙽𝚎𝚣𝚞𝚔𝚘-Bot ᰔᩚ'
global.botname = '𝙽𝚎𝚣𝚞𝚔𝚘-𝙱𝚘𝚝'
global.wm = '❀ 𝙽𝚎𝚣𝚞𝚔𝚘 𝙺𝚊𝚖𝚊𝚍𝚘 ❀'
global.author = '© mᥲძᥱ ᥕі𝗍һ ᑲᥡⁱ 𝙳𝚊𝚛𝚔࿐'
global.dev = '© ⍴᥆ᥕᥱrᥱძ ᑲᥡ 𝙳𝚊𝚛𝚔࿐'
global.textbot = '𝙽𝚎𝚣𝚞𝚔𝚘, mᥲძᥱ ᥕі𝗍һ 𝙳𝚊𝚛𝚔࿐'
global.etiqueta = '𝙳𝚊𝚛𝚔 𝚋𝚛𝚡𝚣𝚣𝚣࿐'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.moneda = '𝙽𝚎𝚣𝚞𝚔𝚌𝚘𝚒𝚗𝚜'
global.welcom1 = '❍ Edita Con El Comando setwelcome'
global.welcom2 = '❍ Edita Con El Comando setbye'
global.banner = 'https://qu.ax/TVCPv.jpg'
global.avatar = 'https://qu.ax/vauaJ.jpg'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.gp1 = 'https://chat.whatsapp.com/Hh1UhuZNOHx3QWvdMB3NAF?mode=ems_copy_t'
global.comunidad1 = 'https://chat.whatsapp.com/Hh1UhuZNOHx3QWvdMB3NAF?mode=ems_copy_t'
global.channel = 'https://whatsapp.com/channel/0029Vb5l5w1CHDyjovjN8s2V'
global.channel2 = 'https://whatsapp.com/channel/0029Vb5l5w1CHDyjovjN8s2V'
global.md = 'https://github.com/Drkexe'
global.correo = 'jxxlznexce@gmail.com'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.catalogo = fs.readFileSync('./src/catalogo.jpg');
global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: packname, orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}
global.ch = {
ch1: '120363401983007420@newsletter',
ch2: "120363401983007420@newsletter",
ch3: "120363401983007420@newsletter"
}
global.multiplier = 60

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment   

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'settings.js'"))
  import(`${file}?update=${Date.now()}`)
})
