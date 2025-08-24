let handler = async (m, { conn, command, usedPrefix }) => {
let img = './src/catalogo.jpg'
let staff = `ᥫ᭡ *EQUIPO DE AYUDANTES* ❀
✰ *Dueño* ${creador}
✦ *Bot:* ${botname}
⚘ *Versión:* ${vs}
❖ *Libreria:* ${libreria} ${baileys}

❍ *Creador:*

ᰔᩚ 𝙳𝚛𝚊𝚔𝚘.𝚌𝚘𝚖
> 🜸 Rol » *Creador*
> ✧ GitHub » https://github.com/Drkexe

❒ *Colaboradores:*

ᰔᩚ 𝚕𝚡𝚕𝚣𝚗 
> 🜸 Rol » *Developer*
> ✧ GitHub » https://github.com/Drkexe

ᰔᩚ 𝙰𝚗𝚘́𝚗𝚒𝚖𝚘
> 🜸 Rol » *Developer*
> ✧ GitHub » https://github.com/Drkexe

✧ 𝚁𝚔
> 🜸 Rol » *Developer*
> ✧ GitHub » https://github.com/Drkexe

ᰔᩚ 𝙹𝚡𝚡𝚕𝚣𝚗.𝚎𝚡𝚎
> 🜸 Rol » *Developer*
> ✧ GitHub » https://github.com/Drkexe

ᰔᩚ 𝙱𝚛𝚡
> 🜸 Rol » *Mini-Dev* 
> ✧ GitHub » https://github.com/Drkexe
`
await conn.sendFile(m.chat, img, 'yuki.jpg', staff.trim(), m)
}
  
handler.help = ['staff']
handler.command = ['colaboradores', 'staff']
handler.register = true
handler.tags = ['main']

export default handler
