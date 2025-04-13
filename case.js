module.exports = async (Klee, m, store) => {
try {
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '' //kalau mau no prefix ganti jadi ini : const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const cmd = prefix + command
const args = body.trim().split(/ +/).slice(1)
let crypto = require('crypto')
const makeid = crypto.randomBytes(3).toString('hex')
const { Client } = require('ssh2');
const quoted = m.quoted ? m.quoted : m
const from = m.key.remoteJid
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const text = q = args.join(" ")
const botNumber = await Klee.decodeJid(Klee.user.id)
const isOwner = m.sender == owner+"@s.whatsapp.net" ? true : m.sender == botNumber ? true : false
const isGroup = m.chat.endsWith('@g.us')
const senderNumber = m.sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = isGroup ? await Klee.groupMetadata(m.chat) : {}
let participant_bot = isGroup ? groupMetadata.participants.find((v) => v.id == botNumber) : {}
let participant_sender = isGroup ? groupMetadata.participants.find((v) => v.id == m.sender) : {}
const isBotAdmin = participant_bot?.admin !== null ? true : false
const isAdmin = participant_sender?.admin !== null ? true : false
const { version } = require("./package.json")
const { runtime, getRandom, getTime, tanggal, toRupiah, telegraPh, pinterest, ucapan, generateProfilePicture, getBuffer, fetchJson } = require('./all/function.js')
const { toAudio, toPTT, toVideo, ffmpeg } = require("./all/converter.js")
const { Scraper } = require("akiraa-wb");
const Skrep = new Scraper()
const pler = JSON.parse(fs.readFileSync('./all/database/idgrup.json').toString())
const jangan = m.isGroup ? pler.includes(m.chat) : false
const plerr = JSON.parse(fs.readFileSync('./all/database/idgrup2.json').toString())
const jangan2 = m.isGroup ? plerr.includes(m.chat) : false
const contacts = JSON.parse(fs.readFileSync("./all/database/contacts.json"))
const seler = JSON.parse(fs.readFileSync("./all/database/reseller.json"))
const prem = JSON.parse(fs.readFileSync("./all/database/premium.json"))

const isReseller = seler.includes(m.sender)
const isPremium = prem.includes(m.sender)
const { BingImageCreator } = require("./all/bingimg.js");


if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(namabot), color(`[ PESAN ]`, `blue`), color(`FROM`, `blue`), color(`${senderNumber}`, `blue`), color(`Text :`, `blue`), color(`${cmd}`, `white`))
}

const qbug = {key: {remoteJid: 'status@broadcast', fromMe: false, participant: '0@s.whatsapp.net'}, message: {listResponseMessage: {title: `Hello My Friends`
}}}

const MessageBug = async (target) => {
return Klee.sendMessage(target, {document: fs.readFileSync("./package.json"), mimetype: "😄😇😂🔥", fileName: "Paket.zip", fileLength: 99999999999, caption: `key.com${teksbug2}`}, {quoted: qbug})
}

let ppuser
try {
ppuser = await Klee.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://telegra.ph/file/a059a6a734ed202c879d3.jpg'
}

async function KleeReply(teks) {
return Klee.sendMessage(m.chat, {text: `${teks}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
showAdAttribution: true, thumbnailUrl: ppuser, title: "｢ ACCESS DENIED ｣", body: "© Powered By "+namabot, previewType: "PHOTO"}}}, {quoted: m})
}

const qpayment = {
key: {
remoteJid: '0@s.whatsapp.net',
fromMe: false,
id: `ownername`,
participant: '0@s.whatsapp.net'
},
message: {
requestPaymentMessage: {
currencyCodeIso4217: "USD",
amount1000: 999999999,
requestFrom: '0@s.whatsapp.net',
noteMessage: {
extendedTextMessage: {
text: namabot
}},
expiryTimestamp: 999999999,
amount: {
value: 91929291929,
offset: 1000,
currencyCode: "INR"
}}}}

const qchanel = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: `120363224727390375@newsletter`,
newsletterName: `Hore`,
jpegThumbnail: "",
caption: `Powered By ${namaowner}`,
inviteExpiration: Date.now() + 1814400000
}
}}

function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
  const length = 10;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

const qtoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
}, message: {
"productMessage": {
"product": {
"productImage": {
"mimetype": "image/jpeg",
"jpegThumbnail": "",
},
"title": `Pterodactyl Server By ${namaowner}`,
"description": null,
"currencyCode": "IDR",
"priceAmount1000": "9999999999",
"retailerId": `Powered By Wyii`,
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}}
}

const qtext = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "0@s.whatsapp.net"} : {}) },'message': {extendedTextMessage: {text: "Thank you for using my services"}}}

const qdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: `Powered By ${namaowner}`, jpegThumbnail: ""}}}


const qkontak = {
key: {
participant: `0@s.whatsapp.net`,
...(botNumber ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `${namaowner}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=6285624297893:+62 856-2429-7893\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
sendEphemeral: true
}}
}


let example = (teks) => {
return `\n*Contoh Penggunaan :*\nketik *${cmd}* ${teks}\n`
}

const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
        const wib = moment.tz('Asia/Jakarta').format('HH : mm :ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

var resize = async (image, width, height) => {
let oyy = await Jimp.read(image)
let kiyomasa = await oyy.resize(width, height).getBufferAsync(Jimp.MIME_JPEG)
return kiyomasa
}

function capital(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

Klee.autoshalat = Klee.autoshalat ? Klee.autoshalat : {}
    let ats = m.chat
    if (ats in Klee.autoshalat) {
    return false
    }
    let jadwalSholat = {
    shubuh: '04:03',
    terbit: '05:44',
    dhuha: '06:02',
    dzuhur: '11:39',
    ashar: '15:03',
    magrib: '17:52',
    isya: '19:05',
    }
    const datek = new Date((new Date).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta"
    }));
    const hours = datek.getHours();
    const minutes = datek.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
    for (let [sholat, waktu] of Object.entries(jadwalSholat)) {
    if (timeNow === waktu) {
        Klee.autoshalat[ats] = [
            Klee.sendMessage(m.chat, {
audio: {
    url: 'https://media.vocaroo.com/mp3/1ofLT2YUJAjQ'
},
mimetype: 'audio/mpeg',
ptt: true,
contextInfo: {
    externalAdReply: {
        showAdAttribution: true,
        mediaType: 1,
        mediaUrl: '',
        title: `Selamat menunaikan Ibadah Sholat ${sholat}`,
        body: `🕑 ${waktu}`,
        sourceUrl: '',
        thumbnail: await fs.readFileSync('./all/shalat.jpg'),
        renderLargerThumbnail: true
    }
}
            }, {}),
            setTimeout(async () => {
delete client.autoshalat[m.chat]
            }, 57000)
        ]
    }
    }
    
const reply = (teks) => {
return Klee.sendMessage(from, { text: teks, contextInfo:{
mentionedJid: [m.sender], 
"externalAdReply": {"title": ` ${botname}`,"body": `Halo kak ${pushname} Selamat ${ucapan()}`, "previewType": "PHOTO","thumbnailUrl": ppuser,"thumbnail": '',"sourceUrl": ``}}}, { quoted:m})} 

switch (command) {
  case 'menu':{
const owned = `${owner}@s.whatsapp.net`
const text12 = `*Haii* @${m.sender.split("@")[0]}, Selamat ${ucapan()}\nAda Yang Bisa Saya Bantu Kak?

 ❏━━『 *INFO USER* 』━━
┣✦  ɴᴀᴍᴀ: ${pushname} 
┣✦  ɴᴜᴍʙᴇʀ: ${m.sender.split('@')[0]}
┗━═┅═━━━═┅═━━━═┅═━━━๑

❏━━『 *INFO BOT* 』━━
┣✦ NAMA BOT: ${namabot}
┣✦ NOMOR CREATOR @${owner.split("@")[0]}
┣✦ VERSI SCRIPT ${global.versisc}
┣✦ VERSI BAILEYS: ^${version}
┣✦ RUNTIME: ${runtime(process.uptime())}
┗━═┅═━━━═┅═━━━═┅═━━━๑

❏━━『 *INFO HARI* 』━━
┣✦ TODAY: ${hariini}
┣✦ WAKTU WIB : ${wib}
┣✦ WAKTU WIT: ${wit}
┣✦ WAKTU WITA : ${wita}
┗━═┅═━━━═┅═━━━═┅═━━━๑

❏━━『 *LIST MENU BOT* 』━━
┣✦ ${prefix}allmenu
┣✦ ${prefix}panelmenu
┣✦ ${prefix}ownermenu
┣✦ ${prefix}mainmenu
┗━═┅═━━━═┅═━━━═┅═━━━๑

© 𝐌𝐀𝐑𝐃𝐈𝐊𝐙 𝐁𝐎𝐓 𝐕𝐈𝐏
`
reply(text12)
}  
break     
case 'panelmenu':{
const owned = `${owner}@s.whatsapp.net`
const text12 = `*Haii* @${m.sender.split("@")[0]}, Selamat ${ucapan()}\nAda Yang Bisa Saya Bantu Kak?

 ❏━━『 *INFO USER* 』━━
┣✦  ɴᴀᴍᴀ: ${pushname} 
┣✦  ɴᴜᴍʙᴇʀ: ${m.sender.split('@')[0]}
┗━═┅═━━━═┅═━━━═┅═━━━๑

❏━━『 *INFO BOT* 』━━
┣✦ NAMA BOT: ${namabot}
┣✦ NOMOR CREATOR @${owner.split("@")[0]}
┣✦ VERSI SCRIPT ${global.versisc}
┣✦ VERSI BAILEYS: ^${version}
┣✦ RUNTIME: ${runtime(process.uptime())}
┗━═┅═━━━═┅═━━━═┅═━━━๑

❏━━『 *INFO HARI* 』━━
┣✦ TODAY: ${hariini}
┣✦ WAKTU WIB : ${wib}
┣✦ WAKTU WIT: ${wit}
┣✦ WAKTU WITA : ${wita}
┗━═┅═━━━═┅═━━━═┅═━━━๑

❏━━『 *LIST PANEL MENU* 』━━
┣✦ ${prefix}panel
┣✦ ${prefix}listsrv
┣✦ ${prefix}delsrv
┣✦ ${prefix}listusr
┣✦ ${prefix}delusr
┣✦ ${prefix}hapuspanel idsrv
┣✦ ${prefix}listadmin
┣✦ ${prefix}admin
┣✦ ${prefix}listsrv2
┣✦ ${prefix}delsrv2
┣✦ ${prefix}listusr2
┣✦ ${prefix}delusr2
┣✦ ${prefix}hapuspanel2 idsrv
┣✦ ${prefix}listadmin2
┣✦ ${prefix}admin2
┗━═┅═━━━═┅═━━━═┅═━━━๑

© 𝐌𝐀𝐑𝐃𝐈𝐊𝐙 𝐁𝐎𝐓 𝐕𝐈𝐏
`
reply(text12)
}  
break     
case 'panel':{
const owned = `${owner}@s.whatsapp.net`
const text12 = `*Haii* @${m.sender.split("@")[0]}, Selamat ${ucapan()}\nAda Yang Bisa Saya Bantu Kak?

 ❏━━『 *INFO USER* 』━━
┣✦  ɴᴀᴍᴀ: ${pushname} 
┣✦  ɴᴜᴍʙᴇʀ: ${m.sender.split('@')[0]}
┗━═┅═━━━═┅═━━━═┅═━━━๑

❏━━『 *INFO BOT* 』━━
┣✦ NAMA BOT: ${namabot}
┣✦ NOMOR CREATOR @${owner.split("@")[0]}
┣✦ VERSI SCRIPT ${global.versisc}
┣✦ VERSI BAILEYS: ^${version}
┣✦ RUNTIME: ${runtime(process.uptime())}
┗━═┅═━━━═┅═━━━═┅═━━━๑

❏━━『 *INFO HARI* 』━━
┣✦ TODAY: ${hariini}
┣✦ WAKTU WIB : ${wib}
┣✦ WAKTU WIT: ${wit}
┣✦ WAKTU WITA : ${wita}
┗━═┅═━━━═┅═━━━═┅═━━━๑

❏━━『 *PANEL SEVER 1 MENU* 』━━
┣✦ ${prefix}1gb nama,62xxx
┣✦ ${prefix}2gb nama,62xxx
┣✦ ${prefix}3gb nama,62xxx
┣✦ ${prefix}4gb nama,62xxx
┣✦ ${prefix}5gb nama,62xxx
┣✦ ${prefix}6gb nama,62xxx
┣✦ ${prefix}7gb nama,62xxx
┣✦ ${prefix}8gb nama,62xxx
┣✦ ${prefix}9gb nama,62xxx
┣✦ ${prefix}10gb nama,62xxx
┣✦ ${prefix}unli nama,62xxx
┗━═┅═━━━═┅═━━━═┅═━━━๑

❏━━『 *PANEL SEVER 2 MENU* 』━━
┣✦ ${prefix}1gbb nama,62xxx
┣✦ ${prefix}2gbb nama,62xxx
┣✦ ${prefix}3gbb nama,62xxx
┣✦ ${prefix}4gbb nama,62xxx
┣✦ ${prefix}5gbb nama,62xxx
┣✦ ${prefix}6gbb nama,62xxx
┣✦ ${prefix}7gbb nama,62xxx
┣✦ ${prefix}8gbb nama,62xxx
┣✦ ${prefix}9gbb nama,62xxx
┣✦ ${prefix}10gbb nama,62xxx
┣✦ ${prefix}unlii nama,62xxx
┗━═┅═━━━═┅═━━━═┅═━━━๑

_note :_
> beda server panel beda database dan id grup

© 𝐌𝐀𝐑𝐃𝐈𝐊𝐙 𝐁𝐎𝐓 𝐕𝐈𝐏
`
reply(text12)
}  
break    
case 'allmenu':{
const owned = `${owner}@s.whatsapp.net`
const text12 = `*Haii* @${m.sender.split("@")[0]}, Selamat ${ucapan()}\nAda Yang Bisa Saya Bantu Kak?

❏━━『 *INFO USER* 』━━
┣✦  ɴᴀᴍᴀ: ${pushname} 
┣✦  ɴᴜᴍʙᴇʀ: ${m.sender.split('@')[0]}
┗━═┅═━━━═┅═━━━═┅═━━━๑

❏━━『 *INFO BOT* 』━━
┣✦ NAMA BOT: ${namabot}
┣✦ NOMOR CREATOR @${owner.split("@")[0]}
┣✦ VERSI SCRIPT ${global.versisc}
┣✦ VERSI BAILEYS: ^${version}
┣✦ RUNTIME: ${runtime(process.uptime())}
┗━═┅═━━━═┅═━━━═┅═━━━๑

❏━━『 *INFO HARI* 』━━
┣✦ TODAY: ${hariini}
┣✦ WAKTU WIB : ${wib}
┣✦ WAKTU WIT: ${wit}
┣✦ WAKTU WITA : ${wita}
┗━═┅═━━━═┅═━━━═┅═━━━๑

❏━━『 *LIST PANEL MENU* 』━━
┣✦ ${prefix}panel
┣✦ ${prefix}listsrv
┣✦ ${prefix}delsrv
┣✦ ${prefix}listusr
┣✦ ${prefix}delusr
┣✦ ${prefix}hapuspanel idsrv
┣✦ ${prefix}listadmin
┣✦ ${prefix}admin
┣✦ ${prefix}listsrv2
┣✦ ${prefix}delsrv2
┣✦ ${prefix}listusr2
┣✦ ${prefix}delusr2
┣✦ ${prefix}hapuspanel2 idsrv
┣✦ ${prefix}listadmin2
┣✦ ${prefix}admin2
┗━═┅═━━━═┅═━━━═┅═━━━๑

❏━━『 *OWNER MENU* 』━━
┣✦ ${prefix}public
┣✦ ${prefix}self
┣✦ ${prefix}kick
┣✦ ${prefix}hidetag
┣✦ ${prefix}tagall
┣✦ ${prefix}addprem
┣✦ ${prefix}delprem
┣✦ ${prefix}addgc
┣✦ ${prefix}addprem2
┣✦ ${prefix}delprem2
┣✦ ${prefix}addgc2
┗━═┅═━━━═┅═━━━═┅═━━━๑

❏━━『 *MAIN MENU* 』━━
┣✦ ${prefix}tiktok
┣✦ ${prefix}remini
┣✦ ${prefix}play ( YouTube Player )
┣✦ ${prefix}splay ( Spotify Player )
┣✦ ${prefix}gpt4
┣✦ ${prefix}txt2img
┣✦ ${prefix}gemini
┣✦ ${prefix}pinterest
┗━═┅═━━━═┅═━━━═┅═━━━๑

© 𝐌𝐀𝐑𝐃𝐈𝐊𝐙 𝐁𝐎𝐓 𝐕𝐈𝐏
`
reply(text12)
}  
break         
    case 'ownermenu':{
const owned = `${owner}@s.whatsapp.net`
const text12 = `*Haii* @${m.sender.split("@")[0]}, Selamat ${ucapan()}\nAda Yang Bisa Saya Bantu Kak?

❏━━『 *INFO USER* 』━━
┣✦  ɴᴀᴍᴀ: ${pushname} 
┣✦  ɴᴜᴍʙᴇʀ: ${m.sender.split('@')[0]}
┗━═┅═━━━═┅═━━━═┅═━━━๑

❏━━『 *INFO BOT* 』━━
┣✦ NAMA BOT: ${namabot}
┣✦ NOMOR CREATOR @${owner.split("@")[0]}
┣✦ VERSI SCRIPT ${global.versisc}
┣✦ VERSI BAILEYS: ^${version}
┣✦ RUNTIME: ${runtime(process.uptime())}
┗━═┅═━━━═┅═━━━═┅═━━━๑

❏━━『 *INFO HARI* 』━━
┣✦ TODAY: ${hariini}
┣✦ WAKTU WIB : ${wib}
┣✦ WAKTU WIT: ${wit}
┣✦ WAKTU WITA : ${wita}
┗━═┅═━━━═┅═━━━═┅═━━━๑

❏━━『 *OWNER MENU* 』━━
┣✦ ${prefix}public
┣✦ ${prefix}self
┣✦ ${prefix}addprem
┣✦ ${prefix}delprem
┣✦ ${prefix}addprem2
┣✦ ${prefix}delprem2
┣✦ ${prefix}listsrv
┣✦ ${prefix}delsrv
┣✦ ${prefix}listusr
┣✦ ${prefix}delusr
┣✦ ${prefix}listsrv2
┣✦ ${prefix}delsrv2
┣✦ ${prefix}listusr2
┣✦ ${prefix}delusr2
┣✦ ${prefix}hapuspanel idsrv
┣✦ ${prefix}listadmin
┣✦ ${prefix}hapuspanel2 idsrv
┣✦ ${prefix}listadmin2
┣✦ ${prefix}admin
┣✦ ${prefix}admin2
┗━═┅═━━━═┅═━━━═┅═━━━๑

© 𝐌𝐀𝐑𝐃𝐈𝐊𝐙 𝐁𝐎𝐓 𝐕𝐈𝐏
`
reply(text12)
}  
break      
case 'mainmenu':{
const owned = `${owner}@s.whatsapp.net`
const text12 = `*Haii* @${m.sender.split("@")[0]}, Selamat ${ucapan()}\nAda Yang Bisa Saya Bantu Kak?

❏━━『 *INFO USER* 』━━
┣✦  ɴᴀᴍᴀ: ${pushname} 
┣✦  ɴᴜᴍʙᴇʀ: ${m.sender.split('@')[0]}
┗━═┅═━━━═┅═━━━═┅═━━━๑

❏━━『 *INFO BOT* 』━━
┣✦ NAMA BOT: ${namabot}
┣✦ NOMOR CREATOR @${owner.split("@")[0]}
┣✦ VERSI SCRIPT ${global.versisc}
┣✦ VERSI BAILEYS: ^${version}
┣✦ RUNTIME: ${runtime(process.uptime())}
┗━═┅═━━━═┅═━━━═┅═━━━๑

❏━━『 *INFO HARI* 』━━
┣✦ TODAY: ${hariini}
┣✦ WAKTU WIB : ${wib}
┣✦ WAKTU WIT: ${wit}
┣✦ WAKTU WITA : ${wita}
┗━═┅═━━━═┅═━━━═┅═━━━๑

❏━━『 *MAIN MENU* 』━━
┣✦ ${prefix}tiktok
┣✦ ${prefix}remini
┣✦ ${prefix}play ( YouTube Player )
┣✦ ${prefix}splay ( Spotify Player )
┣✦ ${prefix}gpt4
┣✦ ${prefix}txt2img
┣✦ ${prefix}gemini
┣✦ ${prefix}pinterest
┗━═┅═━━━═┅═━━━═┅═━━━๑

© 𝐌𝐀𝐑𝐃𝐈𝐊𝐙 𝐁𝐎𝐓 𝐕𝐈𝐏
`
reply(text12)
}  
break  
case 'pinterest':
case 'pin':{
if(!text)return m.reply("Mana text nya?")
const {GOOGLE_IMG_SCRAP} = require('google-img-scrap');
let cariimg = await GOOGLE_IMG_SCRAP({search: text,limit: 6,domains: ["pinterest.com"]})
let imgs = cariimg.result
let imgres = cariimg.result.length
if(imgres==0)return m.reply("Hasil tidak di temukan")
let lim = () => {
  if(imgres>7){return 7}else{return imgres} }
let lmt = lim()
let arrcard = []
for(let i=0;i<lmt;i++){
let eek = {
"header": proto.Message.InteractiveMessage.Header.create({...(await prepareWAMessageMedia({ image : await getBuffer(imgs[i].url)}, { upload: Klee.waUploadToServer})),
title: `*[PINTEREST SEARCH]*`,
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
"body": {
"text": `Hasil ${i+1} pinterest`
},
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"Link","url":"${imgs[i].url}","merchant_url":"https://www.google.co.id"}`
}
]
})
   }
    arrcard.push(eek)
    await sleep(2000)
  }

let ctamsg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body:{text:"*Berikut Hasil Pencarian Anda*"},
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.create({
        "cards": arrcard,
        "messageVersion": 1
       }
    )
})
}
}
}, {});
await Klee.relayMessage(ctamsg.key.remoteJid, ctamsg.message, {
messageId: ctamsg.key.id
})

}
break  
  case 'gemini': {
    const prompt = text.trim();
    if (!prompt) {
        return m.reply("Masukkan prompt untuk digunakan! Contoh: .gemini Explain how AI works");
    }
// Fungsi untuk mengirim permintaan ke API Gemini
const sendToGemini = async (prompt) => {
    const apiKey = 'AIzaSyB2mvsGVTZAU-h-GtCLzoLhjHEdvugx9uQ';
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;
    
    const body = {
        contents: [
            {
                parts: [
                    { text: prompt }
                ]
            }
        ]
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        const data = await response.json();

        if (response.ok) {
            return data; // Mengembalikan data respons dari API
        } else {
            throw new Error(data.error.message || 'Request failed');
        }
    } catch (error) {
        console.error('Error:', error.message);
        return null;
    }
};
    
    try {
        const response = await sendToGemini(prompt); 
        if (response) {
            // Mengambil teks dari respons API
            const candidates = response.candidates;
            const message = candidates && candidates.length > 0
                ? candidates[0].content.parts[0].text // Mengambil bagian teks
                : 'Tidak ada respons yang diterima dari model.';

            // Menampilkan respons yang didapat dari Gemini
            m.reply(`Hasil Gemini:\n${message}`);
        } else {
            m.reply('Gagal mendapatkan respons dari Gemini API.');
        }
    } catch (error) {
        console.error(error);
        m.reply('Terjadi kesalahan saat memproses permintaan Anda.');
    }
    }
    break
 
case 'txt2img': {
if (!text) return m.reply(`Example: ${prefix + command} cat`)
async function photoleap(prompt) {
    try {
        let result = []
        for (let i = 0; i < 3; i++) {
            let {
                data
            } = await axios.get('https://tti.photoleapapp.com/api/v1/generate?prompt=' + prompt);
            result.push(data.result_url)
        }
        return result
    } catch (e) {
        return ({
            msg: 404
        })
    }
}

let tahu = await photoleap(text)
for (const x of tahu) {
Klee.sendMessage(m.chat, {image: {url: x}, caption: `Done`}, {quoted: m})
}
}
break
case 'gpt4': {
  if (!text) return m.reply(`Hai, apa yang ingin saya bantu?`)
async function openai(text, logic) { // Membuat fungsi openai untuk dipanggil
    let response = await axios.post("https://chateverywhere.app/api/chat/", {
        "model": {
            "id": "gpt-4",
            "name": "GPT-4",
            "maxLength": 32000,  // Sesuaikan token limit jika diperlukan
            "tokenLimit": 8000,  // Sesuaikan token limit untuk model GPT-4
            "completionTokenLimit": 5000,  // Sesuaikan jika diperlukan
            "deploymentName": "gpt-4"
        },
        "messages": [
            {
                "pluginId": null,
                "content": text, 
                "role": "user"
            }
        ],
        "prompt": logic, 
        "temperature": 0.5
    }, { 
        headers: {
            "Accept": "/*/",
            "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
        }
    });
    
    let result = response.data;
    return result;
}

let kanjuthann = await openai(text, "nama mu adalah Furina, kamu adalah asisten kecerdasan buatan yang sering membantu orang lain jika ada yang ditanyakan")
m.reply(kanjuthann)
}
break                      
case 'tiktok': case "tt": { 
    if (!text) return reply(`Example : ${prefix + command} link`);
    if (!text.includes('tiktok')) return reply(`Link Invalid!!`);
    reply("PROSES TUAN MOHON JANGAN SPAM..");
    
    // Menggunakan fetch untuk akses API TikTok milikmu
    fetch(`https://api.tiklydown.eu.org/api/download/v5?url=${encodeURIComponent(text)}`)
        .then(response => response.json())
        .then(data => {
            if (data.status !== 200) return reply('Gagal mengambil data dari API');
            
            // Mengambil URL video dan audio
        const title = `${data.result.title}\n${data.result.size}\n© KleeMD - FlowFalcon`
            const videoUrl = data.result.play;
            const audioUrl = data.result.music;
            
            // Mengirim video dan audio
            Klee.sendMessage(m.chat, { caption: title, video: { url: videoUrl }}, { quoted: m });
            Klee.sendMessage(m.chat, { audio: { url: audioUrl }, mimetype: 'audio/mp4' }, { quoted: m });
        })
        .catch(err => reply(err.toString()));
}
break;
case "play": {
    const axios = require("axios");
    if (!text) return m.reply('Masukkan Judul Contoh\nContoh La Vagualette!');

    await reply("Mohon Tunggu Sebentar...");

    try {
        // URL API untuk pencarian lagu
        const searchApiUrl = `https://api.agatz.xyz/api/ytsearch?message=${encodeURIComponent(text)}`;
        const searchData = (await axios.get(searchApiUrl)).data;

        // Pilih hasil pertama dari data pencarian
        const data = searchData.data[0];
        if (!data) return reply("Lagu tidak ditemukan.");

        // Teks yang akan dikirimkan
        const tekswait = `_###_ YOUTUBE PLAYER ###

- Judul: ${data.title}
- Artis: ${data.author.name}
- URL: ${data.url}`;

        // Mengirim pesan informasi lagu
        await Klee.sendMessage(m.chat, { 
            text: `${tekswait}`, 
            contextInfo: {
                mentionedJid: [m.sender],
                externalAdReply: { 
                    showAdAttribution: true,
                    title: `${data.title}`,
                    body: "YOUTUBE SEARCH & DOWNLOAD",
                    thumbnailUrl: data.thumbnail,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            } 
        }, { quoted: qchanel });

        // URL API untuk download lagu
        const downloadApiUrl = `https://api.nexoracle.com/downloader/yt-audio?apikey=free_key@maher_apis&url=${encodeURIComponent(data.url)}`;
        const downloadData = (await axios.get(downloadApiUrl)).data;

        // Cek jika status berhasil
        if (downloadData.status === 200 && downloadData.result.audio) {
            const audioUrl = downloadData.result.audio;
            const title = downloadData.result.title || "Audio";
            const thumbnail = downloadData.result.thumb;

            // Mengirim audio melalui WhatsApp
            await Klee.sendMessage(m.chat, { 
                audio: { url: audioUrl }, 
                mimetype: 'audio/mpeg',
                fileName: `${title}.mp3`,
                thumbnail: thumbnail
            }, { quoted: m });
        } else {
            m.reply("Gagal mendapatkan file audio.");
        }
    } catch (error) {
        console.error(error);
        m.reply("Terjadi kesalahan saat mengambil file audio.");
    }
}
break;
case "splay": {
    const axios = require("axios");
    if (!text) return m.reply('Masukkan Judul Contoh\nContoh `La Vagualette!`');

    await reply("Mohon Tunggu Sebentar...");

    try {
        // URL API untuk pencarian lagu
        const searchApiUrl = `https://spotifyapi.caliphdev.com/api/search/tracks?q=${encodeURIComponent(text)}`;
        const searchData = (await axios.get(searchApiUrl)).data;
        
        // Pilih hasil pertama dari data pencarian
        const data = searchData[0];
        if (!data) return reply("Lagu tidak ditemukan.");

        // Teks yang akan dikirimkan
        const tekswait = `_###_ *SPOTIFY PLAYER* _###_

- *Judul:* ${data.title}
- *Artis:* ${data.artist}
- *URL:* ${data.url}`;

        // Mengirim pesan informasi lagu
        await Klee.sendMessage(m.chat, { 
            text: `${tekswait}`, 
            contextInfo: {
                mentionedJid: [m.sender],
                externalAdReply: { 
                    showAdAttribution: true,
                    title:`${data.title}`,
                    body:"SPOTIFY SEARCH & DOWNLOAD",
                    thumbnailUrl: data.thumbnail,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            } 
        }, { quoted: qchanel });

        // URL API untuk download lagu
        const downloadApiUrl = `https://spotifyapi.caliphdev.com/api/download/track?url=${encodeURIComponent(data.url)}`;
        // Mendapatkan data dari API
        let response = await fetch(downloadApiUrl);
        
        // Memastikan respon adalah tipe audio
        if (response.headers.get("content-type") === "audio/mpeg") {
            // Mengirim audio melalui WhatsApp
            await Klee.sendMessage(m.chat, { audio: { url: downloadApiUrl }, mimetype: 'audio/mpeg' }, { quoted: m });
        } else {
            m.reply("Gagal mendapatkan file audio.");
        }
    } catch (error) {
        console.error(error);
        m.reply("Terjadi kesalahan saat mengambil file audio.");
    }
}
break;
case 'hdr': case 'remini':{
	   	if (!quoted) return reply(`Fotonya Mana Kak ?`)
			if (!/image/.test(mime)) return reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
			reply("Proses Kak....")
			let media = await quoted.download()
			const { remini } = require('./all/remini.js')
			let proses = await remini(media, "enhance");
			Klee.sendMessage(m.chat, { image: proses, caption: '🍁 Ini Hasilnya Kak...'}, { quoted: m})
			await sleep(5000)
			}
			break
			
        case "public": {
if (!isOwner) return KleeReply(msg.owner)
Klee.public = true
reply("Berhasil mengganti mode bot menjadi *Public*")
}
break
case "self": {
if (!isOwner) return KleeReply(msg.owner)
Klee.public = false
reply("Berhasil mengganti mode bot menjadi *Self*")
}
break

case "owner": {
Klee.sendContact(m.chat, [owner], "Developer Bot WhatsApp", null, {contextInfo: {
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true, 
thumbnail: `https://telegra.ph/file/fdae7519babe60a216115.jpg`, 
title: `© Copyright ${global.namabot}`, 
renderLargerThumbnail: true, 
sourceUrl: ``, 
mediaType: 1
}}})
}
break
case "addprem":{
if (!isOwner) return m.reply('Fitur Ini hanya dapat di akses Oleh Owner Seseorang!')
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6289526438285`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await Klee.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync("./database/premium.json", JSON.stringify(prem))
m.reply(`Nomor ${prrkek} Telah Menjadi Premium!`)
}
break
case "delprem":{
if (!isOwner) return m.reply('Fitur Ini hanya dapat di akses Oleh Owner Seseorang!')
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6289526438285`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync("./database/premium.json", JSON.stringify(prem))
reply(`Nomor ${ya} Telah Di Hapus Premium!`)
}    
        break
        case "addprem2":{
if (!isOwner) return m.reply('Fitur Ini hanya dapat di akses Oleh Owner Seseorang!')
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62895428251533`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await Klee.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
seler.push(prrkek)
fs.writeFileSync("./database/reseller.json", JSON.stringify(prem))
m.reply(`Nomor ${prrkek} Telah Menjadi Premium!`)
}
break
case "delprem":{
if (!isOwner) return m.reply('Fitur Ini hanya dapat di akses Oleh Owner Seseorang!')
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62895428251533`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
seler.splice(unp, 1)
fs.writeFileSync("./database/reseller.json", JSON.stringify(prem))
reply(`Nomor ${ya} Telah Di Hapus Premium!`)
}    
        break
                case "listsrv": {
  if (!isOwner) return m.reply(`Maaf, Anda tidak dapat melihat daftar server.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/servers?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let servers = res.data;
  let sections = [];
  let messageText = "Berikut adalah daftar server:\n\n";
  
  for (let server of servers) {
    let s = server.attributes;
    
    let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
      "method": "GET",
      "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + capikey
      }
    });
    
    let data = await f3.json();
    let status = data.attributes ? data.attributes.current_state : s.status;
    
    messageText += `ID Server: ${s.id}\n`;
    messageText += `Nama Server: ${s.name}\n`;
    messageText += `Status: ${status}\n\n`;
  }
  
  messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Server: ${res.meta.pagination.count}`;
  
  await Klee.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    m.reply(`Gunakan perintah ${prefix}listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }        
}
break;
              case "listusr": {
  if (!isOwner) return m.reply('Fitur Ini hanya dapat di akses Oleh Owner Seseorang!r')
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list user:\n\n";
  
  for (let user of users) {
    let u = user.attributes;
    messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
    messageText += `${u.username}\n`;
    messageText += `${u.first_name} ${u.last_name}\n\n`;
  }
  
  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Users: ${res.meta.pagination.count}`;
  
  await Klee.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    m.reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
case "listsrv2": {
  if (!isOwner) return m.reply(`Maaf, Anda tidak dapat melihat daftar server.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain2 + "/api/application/servers?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey2
    }
  });
  let res = await f.json();
  let servers = res.data;
  let sections = [];
  let messageText = "Berikut adalah daftar server:\n\n";
  
  for (let server of servers) {
    let s = server.attributes;
    
    let f3 = await fetch(domain2 + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
      "method": "GET",
      "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + capikey2
      }
    });
    
    let data = await f3.json();
    let status = data.attributes ? data.attributes.current_state : s.status;
    
    messageText += `ID Server: ${s.id}\n`;
    messageText += `Nama Server: ${s.name}\n`;
    messageText += `Status: ${status}\n\n`;
  }
  
  messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Server: ${res.meta.pagination.count}`;
  
  await Klee.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    m.reply(`Gunakan perintah ${prefix}listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }        
}
break;
              case "listusr2": {
  if (!isOwner) return m.reply('Fitur Ini hanya dapat di akses Oleh Owner Seseorang!r')
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain2 + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey2
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list user:\n\n";
  
  for (let user of users) {
    let u = user.attributes;
    messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
    messageText += `${u.username}\n`;
    messageText += `${u.first_name} ${u.last_name}\n\n`;
  }
  
  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Users: ${res.meta.pagination.count}`;
  
  await Klee.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    m.reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
        case "delsrv": {
      if (!isOwner) return m.reply(`Fitur Ini hanya dapat di akses Oleh Owner Seseorang!`)

let srv = args[0]
if (!srv) return m.reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('*SERVER NOT FOUND*')
m.reply('*SUCCESSFULLY DELETE THE SERVER*')
}
        break
        case "delusr": {
  if (!isOwner) return m.reply(`Fitur Ini hanya dapat di akses Oleh Owner Seseorang!`)
let usr = args[0]
if (!usr) return m.reply('ID nya mana?')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('*USER NOT FOUND*')
m.reply('*SUCCESSFULLY DELETE THE USER*')
} 
break
case "delsrv2": {
      if (!isOwner) return m.reply(`Fitur Ini hanya dapat di akses Oleh Owner Seseorang!`)

let srv = args[0]
if (!srv) return m.reply('ID nya mana?')
let f = await fetch(domain2 + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('*SERVER NOT FOUND*')
m.reply('*SUCCESSFULLY DELETE THE SERVER*')
}
        break
        case "delusr2": {
  if (!isOwner) return m.reply(`Fitur Ini hanya dapat di akses Oleh Owner Seseorang!`)
let usr = args[0]
if (!usr) return m.reply('ID nya mana?')
let f = await fetch(domain2 + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('*USER NOT FOUND*')
m.reply('*SUCCESSFULLY DELETE THE USER*')
} 
break

case "admin": {
if (!isOwner) return m.reply(`*Fitur Ini hanya dapat di akses Oleh Owner Seseorang!*`)
if (!isOwner) return m.reply(mess.owner)

let s = q.split(',')
let email = s[0];
let username = s[0]
let nomor = s[1]
if (s.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (!username) return m.reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
if (!nomor) return m.reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
let password = username + "024"
let nomornya = nomor.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": username + "@gmail.com",
"username": username,
"first_name": username,
"last_name": "Admin",
"language": "en",
 "root_admin" : true,  
"password": password.toString()
})

})

let data = await f.json();

if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));

let user = data.attributes

let tks = `
TYPE: USER

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
CREATED AT: ${user.created_at}
`
    const listMessage = {
        text: tks,
    }
    await Klee.sendMessage(m.chat, listMessage)
    await Klee.sendMessage(nomornya, {
        text: `_*BERIKUT DETAIL AKUN ADMIN  PANEL ANDA*_\n
Username :  ${username}
Password: ${password}
Login: ${domain}

Catatan Tambahan
> dilarang bagi-bagi panel secara gratis
> dilarang menyebarkan data anda
> dilarang menyebarkan Link login
> info selengkapnya hubungi owner panel
`,    })        
}

break
case "admin2": {
if (!isOwner) return m.reply(`*Fitur Ini hanya dapat di akses Oleh Owner Seseorang!*`)
if (!isOwner) return m.reply(mess.owner)

let s = q.split(',')
let email = s[0];
let username = s[0]
let nomor = s[1]
if (s.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (!username) return m.reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
if (!nomor) return m.reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
let password = username + "024"
let nomornya = nomor.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let f = await fetch(domain2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": username + "@gmail.com",
"username": username,
"first_name": username,
"last_name": "Admin",
"language": "en",
 "root_admin" : true,  
"password": password.toString()
})

})

let data = await f.json();

if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));

let user = data.attributes

let tks = `
TYPE: USER

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
CREATED AT: ${user.created_at}
`
    const listMessage = {
        text: tks,
    }
    await Klee.sendMessage(m.chat, listMessage)
    await Klee.sendMessage(nomornya, {
        text: `_*BERIKUT DETAIL AKUN ADMIN  PANEL ANDA*_\n
Username :  ${username}
Password: ${password}
Login: ${domain2}

Catatan Tambahan
> dilarang bagi-bagi panel secara gratis
> dilarang menyebarkan data anda
> dilarang menyebarkan Link login
> info selengkapnya hubungi owner panel
`,    })        
}

break
  
        case "listadmin": {
  if (!isOwner) return m.reply(`Maaf, Anda tidak dapat melihat daftar pengguna.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list admin:\n\n";

  for (let user of users) {
    let u = user.attributes;
    if (u.root_admin) {
      messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
      messageText += `${u.username}\n`;
      messageText += `${u.first_name} ${u.last_name}\n\n`;
    }
  }

  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Admin: ${res.meta.pagination.count}`;

  await Klee.sendMessage(m.chat, { text: messageText }, { quoted: m });

  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    m.reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }        
}
break;
 case "listadmin2": {
  if (!isOwner) return m.reply(`Maaf, Anda tidak dapat melihat daftar pengguna.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain2 + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey2
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list admin:\n\n";

  for (let user of users) {
    let u = user.attributes;
    if (u.root_admin) {
      messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
      messageText += `${u.username}\n`;
      messageText += `${u.first_name} ${u.last_name}\n\n`;
    }
  }

  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Admin: ${res.meta.pagination.count}`;

  await Klee.sendMessage(m.chat, { text: messageText }, { quoted: m });

  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    m.reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }        
}
break;        

case "1gb": case "2gb": case "3gb": case "4gb": case "5gb": case "6gb": case "7gb": case "8gb": case "9gbb": case "10gb": case "unli": {
    if (!isPremium && !isOwner) return KleeReply("Maaf Kamu Belum Terdaftar Di Database Resseler Silahkan Untuk Menghubungi Owner")
if (!jangan) return KleeReply("Group Belum Terdaftar")

if (global.apikey.length < 1) return reply("Apikey Tidak Ditemukan!")
if (!args[0]) return reply(example("nama,6283XXX"))
if (!text.split(",")) return reply(example("nama,6283XXX"))
var buyyer = text.split(",")[0].toLowerCase()
if (!buyyer) return reply(example("nama,6283XXX"))
var ceknya = text.split(",")[1]
if (!ceknya) return reply(example("nama,6283XXX"))
var client = text.split(",")[1].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var check = await Klee.onWhatsApp(ceknya)
if (!check[0].exists) return reply("Nomor Buyyer Tidak Valid!")
global.panel2 = [buyyer, client]
var ram
var disknya
var cpu
if (command == "1gb") {
ram = "1125"
disknya = "1125"
cpu = "40"
} else if (command == "2gb") {
ram = "2125"
disknya = "2125"
cpu = "60"
} else if (command == "3gb") {
ram = "3125"
disknya = "3125"
cpu = "80"
} else if (command == "4gb") {
ram = "4125"
disknya = "4125"
cpu = "100"
} else if (command == "5gb") {
ram = "5125"
disknya = "5125"
cpu = "120"
} else if (command == "6gb") {
ram = "6125"
disknya = "6125"
cpu = "140"
} else if (command == "7gb") {
ram = "7125"
disknya = "7125"
cpu = "160"
} else if (command == "8gb") {
ram = "8125"
disknya = "8125"
cpu = "180"
} else if (command == "9gb") {
ram = "9124"
disknya = "9125"
cpu = "200"
} else if (command == "10gb") {
ram = "10125"
disknya = "10125"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
if (!jangan) return KleeReply("Grup Belum Terdaftar")
let username = global.panel2[0].toLowerCase()
let email = username+"@gmail.com"
let name = capital(username)
let password = username + "1221"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
await reply(`*Berhasil Membuat Akun Panel ✅*\n\n* *User ID :* ${user.id}\n* *Server ID :* ${server.id}\n* *Nama :* ${name} Server\n* *Ram :* ${ram == "0" ? "Unlimited" : ram.charAt(0) + "GB"}\n* *CPU :* ${cpu == "0" ? "Unlimited" : cpu+"%"}\n* *Storage :* ${disknya == "0" ? "Unlimited" : disknya.charAt(0) + "GB"}\n* *Created :* ${desc}\n\nData Akun Sudah Dikirim Ke Nomor ${global.panel2[1].split('@')[0]}`)
var datapanel = `Hai @${global.panel2[1].split`@`[0]}
*BERIKUT DATA AKUN PANEL ANDA*

* *Username :* ${user.username}
* *Password :* ${password.toString()}
* *Link Login :* ${global.domain}

Catatan Tambahan
> dilarang bagi-bagi panel secara gratis
> dilarang menyebarkan data anda
> dilarang menyebarkan Link login
> info selengkapnya hubungi owner panel
`
Klee.sendMessage(global.panel2[1],{text: datapanel }, { quoted: Klee.chat })
}
break

case "1gbb": case "2gbb": case "3gbb": case "4gbb": case "5gbb": case "6gbb": case "7gbb": case "8gbb": case "9gbbb": case "10gbb": case "unlii": {
    if (!isReseller && !isOwner) return KleeReply("Maaf Kamu Belum Terdaftar Di Database Resseler Silahkan Untuk Menghubungi Owner")
if (!jangan2) return KleeReply("Group Belum Terdaftar")

if (global.apikey.length < 1) return reply("Apikey Tidak Ditemukan!")
if (!args[0]) return reply(example("nama,6283XXX"))
if (!text.split(",")) return reply(example("nama,6283XXX"))
var buyyer = text.split(",")[0].toLowerCase()
if (!buyyer) return reply(example("nama,6283XXX"))
var ceknya = text.split(",")[1]
if (!ceknya) return reply(example("nama,6283XXX"))
var client = text.split(",")[1].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var check = await Klee.onWhatsApp(ceknya)
if (!check[0].exists) return reply("Nomor Buyyer Tidak Valid!")
global.panel2 = [buyyer, client]
var ram
var disknya
var cpu
if (command == "1gbb") {
ram = "1125"
disknya = "1125"
cpu = "40"
} else if (command == "2gbb") {
ram = "2125"
disknya = "2125"
cpu = "60"
} else if (command == "3gbb") {
ram = "3125"
disknya = "3125"
cpu = "80"
} else if (command == "4gbb") {
ram = "4125"
disknya = "4125"
cpu = "100"
} else if (command == "5gbb") {
ram = "5125"
disknya = "5125"
cpu = "120"
} else if (command == "6gbb") {
ram = "6125"
disknya = "6125"
cpu = "140"
} else if (command == "7gbb") {
ram = "7125"
disknya = "7125"
cpu = "160"
} else if (command == "8gbb") {
ram = "8125"
disknya = "8125"
cpu = "180"
} else if (command == "9gbb") {
ram = "9124"
disknya = "9125"
cpu = "200"
} else if (command == "10gbb") {
ram = "10125"
disknya = "10125"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
if (!jangan2) return KleeReply("Grup Belum Terdaftar")
let username = global.panel2[0].toLowerCase()
let email = username+"@gmail.com"
let name = capital(username)
let password = username + "1221"
let f = await fetch(domain2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain2 + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain2 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
await reply(`*Berhasil Membuat Akun Panel ✅*\n\n* *User ID :* ${user.id}\n* *Server ID :* ${server.id}\n* *Nama :* ${name} Server\n* *Ram :* ${ram == "0" ? "Unlimited" : ram.charAt(0) + "GB"}\n* *CPU :* ${cpu == "0" ? "Unlimited" : cpu+"%"}\n* *Storage :* ${disknya == "0" ? "Unlimited" : disknya.charAt(0) + "GB"}\n* *Created :* ${desc}\n\nData Akun Sudah Dikirim Ke Nomor ${global.panel2[1].split('@')[0]}`)
var datapanel = `Hai @${global.panel2[1].split`@`[0]}
*BERIKUT DATA AKUN PANEL ANDA*

* *Username :* ${user.username}
* *Password :* ${password.toString()}
* *Link Login :* ${global.domain2}

Catatan Tambahan
> dilarang bagi-bagi panel secara gratis
> dilarang menyebarkan data anda
> dilarang menyebarkan Link login
> info selengkapnya hubungi owner panel
`
Klee.sendMessage(global.panel2[1],{text: datapanel }, { quoted: Klee.chat })
}
break

  case 'addgc':
if (!isOwner) return m.reply('Maaf, command ini hanya untuk pemilik.')
if (!isGroup) return m.reply("Khusus Owner")
pler.push(m.chat)
fs.writeFileSync('./all/database/idgrup.json', JSON.stringify(pler))
m.reply(`${command} Success Active To Crate panel Klee - OfficiaL✅`)
break       
case 'addgc2':
if (!isOwner) return m.reply('Maaf, command ini hanya untuk pemilik.')
if (!isGroup) return m.reply("Khusus Owner")
plerr.push(m.chat)
fs.writeFileSync('./all/database/idgrup2.json', JSON.stringify(pler))
m.reply(`${command} Success Active To Crate panel Server 2\nKleeMD - OfficiaL✅`)
break       
     case "delpanel": case "hapuspanel": {
    if (!isOwner) return KleeReply(msg.owner);
    if (global.apikey.length < 1) return reply("Apikey Tidak Ditemukan!");
    if (!args[0]) return reply(example("idservernya\n\nuntuk melihat id server ketik *.listpanel*"));

    let sections = [];
    let pageServer = 1;
    let foundServer = false;

    // Pencarian Server dengan Pagination
    while (!foundServer) {
        let f = await fetch(`${domain}/api/application/servers?page=${pageServer}`, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + apikey
            }
        });
        let result = await f.json();
        if (!result.data || result.data.length === 0) break; // Jika tidak ada data, hentikan

        let servers = result.data;
        for (let server of servers) {
            let s = server.attributes;
            if (args[0] == s.id.toString()) {
                sections.push(s.name.toLowerCase());
                // Hapus server
                await fetch(`${domain}/api/application/servers/${s.id}`, {
                    "method": "DELETE",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    }
                });
                foundServer = true;
                break;
            }
        }

        if (!foundServer) pageServer++; // Lanjutkan ke halaman berikutnya jika belum ditemukan
    }

    if (sections.length > 0) {
        // Pencarian User dengan Pagination
        let pageUser = 1;
        let foundUser = false;

        while (!foundUser) {
            let cek = await fetch(`${domain}/api/application/users?page=${pageUser}`, {
                "method": "GET",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                }
            });
            let res2 = await cek.json();

            if (!res2.data || res2.data.length === 0) break; // Jika tidak ada data, hentikan

            let users = res2.data;
            for (let user of users) {
                let u = user.attributes;
                if (sections.includes(u.username)) {
                    // Hapus user
                    await fetch(`${domain}/api/application/users/${u.id}`, {
                        "method": "DELETE",
                        "headers": {
                            "Accept": "application/json",
                            "Content-Type": "application/json",
                            "Authorization": "Bearer " + apikey
                        }
                    });
                    foundUser = true;
                    break;
                }
            }

            if (!foundUser) pageUser++; // Lanjutkan ke halaman berikutnya jika belum ditemukan
        }

        reply(`Berhasil Menghapus Akun Panel *${capital(sections[0])}*`);
    } else {
        reply("*ID Server/User* Tidak Ditemukan");
    }
}
break;
case "delpanel2": case "hapuspanel2": {
    if (!isOwner) return KleeReply(msg.owner);
    if (global.apikey2.length < 1) return reply("Apikey Tidak Ditemukan!");
    if (!args[0]) return reply(example("idservernya\n\nuntuk melihat id server ketik *.listpanel*"));

    let sections = [];
    let pageServer = 1;
    let foundServer = false;

    // Pencarian Server dengan Pagination
    while (!foundServer) {
        let f = await fetch(`${domain2}/api/application/servers?page=${pageServer}`, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + apikey2
            }
        });
        let result = await f.json();
        if (!result.data || result.data.length === 0) break; // Jika tidak ada data, hentikan

        let servers = result.data;
        for (let server of servers) {
            let s = server.attributes;
            if (args[0] == s.id.toString()) {
                sections.push(s.name.toLowerCase());
                // Hapus server
                await fetch(`${domain2}/api/application/servers/${s.id}`, {
                    "method": "DELETE",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey2
                    }
                });
                foundServer = true;
                break;
            }
        }

        if (!foundServer) pageServer++; // Lanjutkan ke halaman berikutnya jika belum ditemukan
    }

    if (sections.length > 0) {
        // Pencarian User dengan Pagination
        let pageUser = 1;
        let foundUser = false;

        while (!foundUser) {
            let cek = await fetch(`${domain2}/api/application/users?page=${pageUser}`, {
                "method": "GET",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey2
                }
            });
            let res2 = await cek.json();

            if (!res2.data || res2.data.length === 0) break; // Jika tidak ada data, hentikan

            let users = res2.data;
            for (let user of users) {
                let u = user.attributes;
                if (sections.includes(u.username)) {
                    // Hapus user
                    await fetch(`${domain2}/api/application/users/${u.id}`, {
                        "method": "DELETE",
                        "headers": {
                            "Accept": "application/json",
                            "Content-Type": "application/json",
                            "Authorization": "Bearer " + apikey2
                        }
                    });
                    foundUser = true;
                    break;
                }
            }

            if (!foundUser) pageUser++; // Lanjutkan ke halaman berikutnya jika belum ditemukan
        }

        reply(`Berhasil Menghapus Akun Panel *${capital(sections[0])}*`);
    } else {
        reply("*ID Server/User* Tidak Ditemukan");
    }
}
break;
case "kik": case "kick": {
if (!isGroup) return KleeReply(msg.group)
if (!isBotAdmin) return KleeReply(msg.adminbot)
if (!isAdmin && !isOwner) return KleeReply(msg.admin)
if (text || m.quoted) {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Klee.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => Klee.sendMessage(m.chat, {text: `Berhasil Mengeluarkan @${users.split("@")[0]} Dari Grup Ini`, mentions: [`${users}`]}, {quoted: m})).catch((err) => reply(err.toString()))
} else return reply(example('nomornya/@tag'))}
break
case "hidetag": case "z": case "h": {
if (!isGroup) return KleeReply(msg.group)
if (!isAdmin && !isOwner) return KleeReply(msg.admin)
if (!m.quoted && !text) return reply(example("teksnya/replyteks"))
var teks = m.quoted ? m.quoted.text : text
var member = await groupMetadata.participants.map(e => e.id)
Klee.sendMessage(m.chat, {text: teks, mentions: [...member]})
}
break
case "tagall": case "tag": {
if (!isGroup) return KleeReply(msg.group)
if (!isAdmin && !isOwner) return KleeReply(msg.admin)
if (!text) return reply(example("Pesannya"))
var member = await groupMetadata.participants.map(e => e.id)
var teks = ` ${text}\n\n`
member.forEach(e => e !== m.sender ? teks += `@${e.split("@")[0]}\n` : '')
Klee.sendMessage(m.chat, {text: teks, mentions: [...member]})
}
break

   case "sc": case "script": {
let teksmenu = `
*Haii* @${m.sender.split("@")[0]}, Selamat ${ucapan()}
Untuk Scirpt Dapat Di unduh secara gratis di website official 𝐌𝐀𝐑𝐃𝐈𝐊𝐙 𝐁𝐎𝐓 𝐕𝐈𝐏
 

> Create by 𝐌𝐀𝐑𝐃𝐈𝐊𝐙 𝐁𝐎𝐓 𝐕𝐈𝐏
> Grub Whatsapp : https://chat.whatsapp.com/CnxVf2Lb7aHDjQ56Rs7dtT
> YouTube : https://www.youtube.com/@MarDikz-DEVELOPER
> Chanel : https://whatsapp.com/channel/0029VasjrIh3gvWXKzWncf2P
`
reply(teksmenu)
}
break
default:
if (budy.startsWith('$')) {
if (!isOwner) return
exec(budy.slice(2), (err, stdout) => {
if(err) return Klee.sendMessage(m.chat, {text: err.toString()}, {quoted: m})
if (stdout) return Klee.sendMessage(m.chat, {text: util.format(stdout)}, {quoted: m})
})}

if (budy.startsWith(">")) {
if (!isOwner) return
try {
let evaled = await eval(text)
if (typeof evaled !== 'string') evaled = util.inspect(evaled)
Klee.sendMessage(m.chat, {text: util.format(evaled)}, {quoted: m})
} catch (e) {
Klee.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

if (budy.startsWith("=>")) {
if (!isOwner) return
try {
const evaling = await eval(`;(async () => { ${text} })();`);
return Klee.sendMessage(m.chat, {text: util.format(evaling)}, {quoted: m})
} catch (e) {
return Klee.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

}} catch (e) {
console.log(e)
Klee.sendMessage(`${owner}@s.whatsapp.net`, {text:`${util.format(e)}`})
}}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})