let handler = async (m, { conn, args }) => {
let userId = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
let user = global.db.data.users[userId]
let name = conn.getName(userId)
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let totalCommands = Object.values(global.plugins).filter((v) => v.help && v.tags).length
    
let txt = `Hola! Soy *${botname}* ⏤͟͟͞͞❀
Aquí tienes la lista de comandos
╭┈ ↷
│ᰔᩚ Cliente » @${userId.split('@')[0]}
│❀ Modo » Publico
│❖ Bot » ${(conn.user.jid == global.conn.user.jid ? 'Principal 🅥' : 'Sub-Bot 🅑')}
│ⴵ Activada » ${uptime}
│✰ Usuarios » ${totalreg}
│✧ Comandos » ${totalCommands}
│🜸 Baileys » Multi Device
╰─────────────────
Crea un *Sub-Bot* con tu número utilizando *#qr* o *#code*

• :･ﾟ⊹˚• \`『 Info-Bot 』\` •˚⊹:･ﾟ•

❍ Comandos para ver estado e información del Bot.
ᯓᡣ𐭩 *#help • #menu*
> ❀ Ver la lista de comandos del Bot.
ᯓᡣ𐭩 *#uptime • #runtime*
> ❀ Ver tiempo activo o en linea del Bot.
ᯓᡣ𐭩 *#sc • #script*
> ❀ Link del repositorio oficial del Bot
ᯓᡣ𐭩 *#staff • #colaboradores*
> ❀ Ver la lista de desarrolladores del Bot.
ᯓᡣ𐭩 *#serbot • #serbot code*
> ❀ Crea una sesión de Sub-Bot.
ᯓᡣ𐭩 *#bots • #sockets*
> ❀ Ver la lista de Sub-Bots activos.
ᯓᡣ𐭩 *#status • #estado*
> ❀ Ver el estado actual del Bot.
ᯓᡣ𐭩 *#links • #grupos*
> ❀ Ver los enlaces oficiales del Bot.
ᯓᡣ𐭩 *#infobot • #infobot*
> ❀ Ver la información completa del Bot.
ᯓᡣ𐭩 *#sug • #newcommand*
> ❀ Sugiere un nuevo comando.
ᯓᡣ𐭩 *#p • #ping*
> ❀ Ver la velocidad de respuesta del Bot.
ᯓᡣ𐭩 *#reporte • #reportar*
> ❀ Reporta alguna falla o problema del Bot.
ᯓᡣ𐭩 *#sistema • #system*
> ❀ Ver estado del sistema de alojamiento.
ᯓᡣ𐭩 *#speed • #speedtest*
> ❀ Ver las estadísticas de velocidad del Bot.
ᯓᡣ𐭩 *#views • #usuarios*
> ❀ Ver la cantidad de usuarios registrados en el sistema.
ᯓᡣ𐭩 *#funciones • #totalfunciones*
> ❀ Ver todas las funciones del Bot.
ᯓᡣ𐭩 *#ds • #fixmsgespera*
> ❀ Eliminar archivos de sesión innecesarios.
ᯓᡣ𐭩 *#editautoresponder*
> ❀ Configurar un Prompt personalizado del Bot.

• :･ﾟ⊹˚• \`『 Buscadores 』\` •˚⊹:･ﾟ•

❍ Comandos para realizar búsquedas en distintas plataformas.
ᯓᡣ𐭩 *#tiktoksearch • #tiktoks*
> ❀ Buscador de videos de tiktok.
ᯓᡣ𐭩 *#tweetposts*
> ❀ Buscador de posts de Twitter/X.
ᯓᡣ𐭩 *#ytsearch • #yts*
> ❀ Realiza búsquedas de Youtube.
ᯓᡣ𐭩 *#githubsearch*
> ❀ Buscador de usuarios de GitHub.
ᯓᡣ𐭩 *#cuevana • #cuevanasearch*
> ❀ Buscador de películas/series por Cuevana.
ᯓᡣ𐭩 *#google*
> ❀ Realiza búsquedas por Google.
ᯓᡣ𐭩 *#pin • #pinterest*
> ❀ Buscador de imagenes de Pinterest.
ᯓᡣ𐭩 *#imagen • #image*
> ❀ buscador de imagenes de Google.
ᯓᡣ𐭩 *#infoanime*
> ❀ Buscador de información de anime/manga.
ᯓᡣ𐭩 *#hentaisearch • #searchhentai*
> ❀ Buscador de capítulos hentai.
ᯓᡣ𐭩 #xnxxsearch • #xnxxs*
> ❀ Buscador de vídeos de Xnxx.
ᯓᡣ𐭩 *#xvsearch • #xvideossearch*
> ❀ Buscador de vídeos de Xvideos.
ᯓᡣ𐭩 *#pornhubsearch • #phsearch*
> ❀ Buscador de videos de Pornhub.
ᯓᡣ𐭩 *#npmjs*
> ❀ Buscandor de npmjs.

• :･ﾟ⊹˚• \`『 Descargas 』\` •˚⊹:･ﾟ•

❍ Comandos de descargas para varios archivos.
ᯓᡣ𐭩 *#tiktok • #tt*
> ❀ Descarga videos de TikTok.
ᯓᡣ𐭩 *#mediafire • #mf*
> ❀ Descargar un archivo de MediaFire.
ᯓᡣ𐭩 *#pinvid • #pinvideo* + [enlacé]
> ❀ Descargar vídeos de Pinterest. 
ᯓᡣ𐭩 *#mega • #mg* + [enlacé]
> ❀ Descargar un archivo de MEGA.
ᯓᡣ𐭩 *#play • #play2*
> ❀ Descarga música/video de YouTube.
ᯓᡣ𐭩 *#ytmp3 • #ytmp4*
> ❀ Descarga música/video de YouTube mediante url.
ᯓᡣ𐭩 *#fb • #facebook*
> ❀ Descarga videos de Facebook.
ᯓᡣ𐭩 *#twitter • #x* + [Link]
> ❀ Descargar un video de Twitter/X
ᯓᡣ𐭩 *#ig • #instagram*
> ❀ Descarga contenido de Instagram.
ᯓᡣ𐭩 *#tts • #tiktoks* + [busqueda]
> ❀ Buscar videos de tiktok 
ᯓᡣ𐭩 *#terabox • #tb* + [enlace]
> ❀ Descargar archivos por Terabox.
ᯓᡣ𐭩 *#ttimg • #ttmp3* + <url>
> ❀ Descarga fotos/audios de tiktok. 
ᯓᡣ𐭩 *#gitclone* + <url> 
> ❀ Descarga un repositorio de github.
ᯓᡣ𐭩 *#xvideosdl*
> ❀ Descarga videos porno de (Xvideos). 
ᯓᡣ𐭩 *#xnxxdl*
> ❀ Descarga videos porno de (xnxx).
ᯓᡣ𐭩 *#apk • #modapk*
> ❀ Descarga un apk de Aptoide.
ᯓᡣ𐭩 *#tiktokrandom • #ttrandom*
> ❀ Descarga un video aleatorio de tiktok.
ᯓᡣ𐭩 *#npmdl • #npmdownloader*
> ❀ Descarga paquetes de NPMJs.

• :･ﾟ⊹˚• \`『 Economia 』\` •˚⊹:･ﾟ•

❍ Comandos de economía y rpg para ganar dinero y otros recursos.
ᯓᡣ𐭩 *#w • #work • #trabajar*
> ❀ Trabaja para ganar ${moneda}.
ᯓᡣ𐭩 *#slut • #protituirse*
> ❀ Trabaja como prostituta y gana ${moneda}.
ᯓᡣ𐭩 *#cf • #suerte*
> ❀ Apuesta tus ${moneda} a cara o cruz.
ᯓᡣ𐭩 *#crime • #crimen
> ❀ Trabaja como ladrón para ganar ${moneda}.
ᯓᡣ𐭩 *#ruleta • #roulette • #rt*
> ❀ Apuesta ${moneda} al color rojo o negro.
ᯓᡣ𐭩 *#casino • #apostar*
> ❀ Apuesta tus ${moneda} en el casino.
ᯓᡣ𐭩 *#slot*
> ❀ Apuesta tus ${moneda} en la ruleta y prueba tu suerte.
ᯓᡣ𐭩 *#cartera • #wallet*
> ❀ Ver tus ${moneda} en la cartera.
ᯓᡣ𐭩 *#banco • #bank*
> ❀ Ver tus ${moneda} en el banco.
ᯓᡣ𐭩 *#deposit • #depositar • #d*
> ❀ Deposita tus ${moneda} al banco.
ᯓᡣ𐭩 *#with • #retirar • #withdraw*
> ❀ Retira tus ${moneda} del banco.
ᯓᡣ𐭩 *#transfer • #pay*
> ❀ Transfiere ${moneda} o XP a otros usuarios.
ᯓᡣ𐭩 *#miming • #minar • #mine*
> ❀ Trabaja como minero y recolecta recursos.
ᯓᡣ𐭩 *#buyall • #buy*
> ❀ Compra ${moneda} con tu XP.
ᯓᡣ𐭩 *#daily • #diario*
> ❀ Reclama tu recompensa diaria.
ᯓᡣ𐭩 *#cofre*
> ❀ Reclama un cofre diario lleno de recursos.
ᯓᡣ𐭩 *#weekly • #semanal*
> ❀ Reclama tu regalo semanal.
ᯓᡣ𐭩 *#monthly • #mensual*
> ❀ Reclama tu recompensa mensual.
ᯓᡣ𐭩 *#steal • #robar • #rob*
> ❀ Intenta robarle ${moneda} a alguien.
ᯓᡣ𐭩 *#robarxp • #robxp*
> ❀ Intenta robar XP a un usuario.
ᯓᡣ𐭩 *#eboard • #baltop*
> ❀ Ver el ranking de usuarios con más ${moneda}.
ᯓᡣ𐭩 *#aventura • #adventure*
> ❀ Aventúrate en un nuevo reino y recolecta recursos.
ᯓᡣ𐭩 *#curar • #heal*
> ❀ Cura tu salud para volverte aventurar.
ᯓᡣ𐭩 *#cazar • #hunt • #berburu*
> ❀ Aventúrate en una caza de animales.
ᯓᡣ𐭩 *#inv • #inventario*
> ❀ Ver tu inventario con todos tus ítems.
ᯓᡣ𐭩 *#mazmorra • #explorar*
> ❀ Explorar mazmorras para ganar ${moneda}.
ᯓᡣ𐭩 *#halloween*
> ❀ Reclama tu dulce o truco (Solo en Halloween).
ᯓᡣ𐭩 *#christmas • #navidad*
> ❀ Reclama tu regalo navideño (Solo en Navidad).

• :･ﾟ⊹˚• \`『 Gacha 』\` •˚⊹:･ﾟ•

❍ Comandos de gacha para reclamar y colecciónar personajes.
ᯓᡣ𐭩 *#rollwaifu • #rw • #roll*
> ❀ Waifu o husbando aleatorio.
ᯓᡣ𐭩  *#claim • #c • #reclamar*
> ❀ Reclamar un personaje.
ᯓᡣ𐭩 *#harem • #waifus • #claims*
> ❀ Ver tus personajes reclamados.
ᯓᡣ𐭩 *#charimage • #waifuimage • #wimage* 
> ❀ Ver una imagen aleatoria de un personaje.
ᯓᡣ𐭩 *#charinfo • #winfo • #waifuinfo*
> ❀ Ver información de un personaje.
ᯓᡣ𐭩 *#givechar • #givewaifu • #regalar*
> ❀ Regalar un personaje a otro usuario.
ᯓᡣ𐭩 *#vote • #votar*
> ❀ Votar por un personaje para subir su valor.
ᯓᡣ𐭩 *#waifusboard • #waifustop • #topwaifus*
> ❀ Ver el top de personajes con mayor valor.

• :･ﾟ⊹˚• \`『 Stickers 』\` •˚⊹:･ﾟ•

❍ Comandos para creaciones de stickers etc.
ᯓᡣ𐭩 *#sticker • #s*
> ❀ Crea stickers de (imagen/video)
ᯓᡣ𐭩 *#setmeta*
> ❀ Estable un pack y autor para los stickers.
ᯓᡣ𐭩 *#delmeta*
> ❀ Elimina tu pack de stickers.
ᯓᡣ𐭩 *#pfp • #getpic*
> ❀ Obtén la foto de perfil de un usuario.
ᯓᡣ𐭩 *#qc*
> ❀ Crea stickers con texto o de un usuario.
ᯓᡣ𐭩 *#toimg • #img*
> ❀ Convierte stickers en imagen.
ᯓᡣ𐭩 *#brat • #ttp • #attp*︎ 
> ❀ Crea stickers con texto.
ᯓᡣ𐭩 *#emojimix*
> ❀ Fuciona 2 emojis para crear un sticker.
ᯓᡣ𐭩 *#wm*
> ❀ Cambia el nombre de los stickers.

•:･ﾟ⊹˚• \`『 Herramientas 』\` •˚⊹:･ﾟ•

❍ Comandos de herramientas con muchas funciones.
ᯓᡣ𐭩 *#calcular • #calcular • #cal*
> ❀ Calcular todo tipo de ecuaciones.
ᯓᡣ𐭩 *#tiempo • #clima*
> ❀ Ver el clima de un pais.
ᯓᡣ𐭩 *#horario*
> ❀ Ver el horario global de los países.
ᯓᡣ𐭩 *#fake • #fakereply*
> ❀ Crea un mensaje falso de un usuario.
ᯓᡣ𐭩 *#enhance • #remini • #hd*
> ❀ Mejora la calidad de una imagen.
ᯓᡣ𐭩 *#letra*
> ❀ Cambia la fuente de las letras.
ᯓᡣ𐭩 *#read • #readviewonce • #ver*
> ❀ Ver imágenes de una sola vista.
ᯓᡣ𐭩 *#whatmusic • #shazam*
> ❀ Descubre el nombre de canciones o vídeos.
ᯓᡣ𐭩 *#ss • #ssweb*
> ❀ Ver el estado de una página web.
ᯓᡣ𐭩 *#length • #tamaño*
> ❀ Cambia el tamaño de imágenes y vídeos.
ᯓᡣ𐭩 *#say • #decir* + [texto]
> ❀ Repetir un mensaje.
ᯓᡣ𐭩 *#todoc • #toducument*
> ❀ Crea documentos de (audio, imágenes y vídeos).
ᯓᡣ𐭩 *#translate • #traducir • #trad*
> ❀ Traduce palabras en otros idiomas.

• :･ﾟ⊹˚• \`『 Perfil 』\` •˚⊹:･ﾟ•

❍ Comandos de perfil para ver, configurar y comprobar estados de tu perfil.
ᯓᡣ𐭩 *#reg • #verificar • #register*
> ❀ Registra tu nombre y edad en el bot.
ᯓᡣ𐭩 *#unreg*
> ❀ Elimina tu registro del bot.
ᯓᡣ𐭩 *#profile*
> ❀ Muestra tu perfil de usuario.
ᯓᡣ𐭩 *#marry* [mension / etiquetar]
> ❀ Propón matrimonio a otro usuario.
ᯓᡣ𐭩 *#divorce*
> ❀ Divorciarte de tu pareja.
ᯓᡣ𐭩 *#setgenre • #setgenero*
> ❀ Establece tu género en el perfil del bot.
ᯓᡣ𐭩 *#delgenre • #delgenero*
> ❀ Elimina tu género del perfil del bot.
ᯓᡣ𐭩 *#setbirth • #setnacimiento*
> ❀ Establece tu fecha de nacimiento en el perfil del bot.
ᯓᡣ𐭩 *#delbirth • #delnacimiento*
> ❀ Elimina tu fecha de nacimiento del perfil del bot.
ᯓᡣ𐭩 *#setdescription • #setdesc*
> ❀ Establece una descripción en tu perfil del bot.
ᯓᡣ𐭩 *#deldescription • #deldesc*
> ❀ Elimina la descripción de tu perfil del bot.
ᯓᡣ𐭩 *#lb • #lboard* + <Paginá>
> ❀ Top de usuarios con más (experiencia y nivel).
ᯓᡣ𐭩 *#level • #lvl* + <@Mencion>
> ❀ Ver tu nivel y experiencia actual.
ᯓᡣ𐭩 *#comprarpremium • #premium*
> ❀ Compra un pase premium para usar el bot sin límites.
ᯓᡣ𐭩 *#confesiones • #confesar*
> ❀ Confiesa tus sentimientos a alguien de manera anonima.

• :･ﾟ⊹˚• \`『 Grupos 』\` •˚⊹:･ﾟ•

❍ Comandos de grupos para una mejor gestión de ellos.
ᯓᡣ𐭩 *#hidetag*
> ❀ Envia un mensaje mencionando a todos los usuarios
ᯓᡣ𐭩 *#gp • #infogrupo*
> ❀  Ver la Informacion del grupo.
ᯓᡣ𐭩 *#linea • #listonline*
> ❀ Ver la lista de los usuarios en linea.
ᯓᡣ𐭩 *#setwelcome*
> ❀ Establecer un mensaje de bienvenida personalizado.
ᯓᡣ𐭩 *#setbye*
> ❀ Establecer un mensaje de despedida personalizado.
ᯓᡣ𐭩 *#link*
> ❀ El bot envia el link del grupo.
ᯓᡣ𐭩 *admins • admin*
> ❀ Mencionar a los admins para solicitar ayuda.
ᯓᡣ𐭩 *#restablecer • #revoke*
> ❀ Restablecer el enlace del grupo.
ᯓᡣ𐭩 *#grupo • #group* [open / abrir]
> ❀ Cambia ajustes del grupo para que todos los usuarios envien mensaje.
ᯓᡣ𐭩 *#grupo • #gruop* [close / cerrar]
> ❀ Cambia ajustes del grupo para que solo los administradores envien mensaje.
ᯓᡣ𐭩 *#kick* [número / mension]
> ❀ Elimina un usuario de un grupo.
ᯓᡣ𐭩 *#add • #añadir • #agregar* [número]
> ❀ Invita a un usuario a tu grupo.
ᯓᡣ𐭩 *#promote* [mension / etiquetar]
> ❀ El bot dara administrador al usuario mencionando.
ᯓᡣ𐭩 *#demote* [mension / etiquetar]
> ❀ El bot quitara administrador al usuario mencionando.
ᯓᡣ𐭩 *#gpbanner • #groupimg*
> ❀ Cambiar la imagen del grupo.
ᯓᡣ𐭩 *#gpname • #groupname*
> ❀ Cambiar el nombre del grupo.
ᯓᡣ𐭩 *#gpdesc • #groupdesc*
> ❀ Cambiar la descripción del grupo.
ᯓᡣ𐭩 *#advertir • #warn • #warning*
> ❀ Darle una advertencia aún usuario.
ᯓᡣ𐭩 ︎*#unwarn • #delwarn*
> ❀ Quitar advertencias.
ᯓᡣ𐭩 *#advlist • #listadv*
> ❀ Ver lista de usuarios advertidos.
ᯓᡣ𐭩 *#bot on*
> ❀ Enciende el bot en un grupo.
ᯓᡣ𐭩 *#bot off*
> ❀ Apaga el bot en un grupo.
ᯓᡣ𐭩 *#mute* [mension / etiquetar]
> ❀ El bot elimina los mensajes del usuario.
ᯓᡣ𐭩 *#unmute* [mension / etiquetar]
> ❀ El bot deja de eliminar los mensajes del usuario.
ᯓᡣ𐭩 *#encuesta • #poll*
> ❀ Crea una encuesta.
ᯓᡣ𐭩 *#delete • #del*
> ❀ Elimina mensaje de otros usuarios.
ᯓᡣ𐭩 *#fantasmas*
> ❀ Ver lista de inactivos del grupo.
ᯓᡣ𐭩 *#kickfantasmas*
> ❀ Elimina a los inactivos del grupo.
ᯓᡣ𐭩 *#invocar • #tagall • #todos*
> ❀ Invoca a todos los usuarios de un grupo.
ᯓᡣ𐭩 *#setemoji • #setemo*
> ❀ Cambia el emoji que se usa en la invitación de usuarios.
ᯓᡣ𐭩 *#listnum • #kicknum*
> ❀ Elimine a usuario por el prefijo de país.

• :･ﾟ⊹˚• \`『 Anime 』\` •˚⊹:･ﾟ•

❍ Comandos de reacciones de anime.
ᯓᡣ𐭩 *#angry • #enojado* + <mencion>
> ❀ Estar enojado
ᯓᡣ𐭩 *#bite* + <mencion>
> ❀ Muerde a alguien
ᯓᡣ𐭩 *#bleh* + <mencion>
> ❀ Sacar la lengua
ᯓᡣ𐭩 *#blush* + <mencion>
> ❀ Sonrojarte
ᯓᡣ𐭩 *#bored • #aburrido* + <mencion>
> ❀ Estar aburrido
ᯓᡣ𐭩 *#cry* + <mencion>
> ❀ Llorar por algo o alguien
ᯓᡣ𐭩 *#cuddle* + <mencion>
> ❀ Acurrucarse
ᯓᡣ𐭩 *#dance* + <mencion>
> ❀ Sacate los pasitos prohíbidos
ᯓᡣ𐭩 *#drunk* + <mencion>
> ❀ Estar borracho
ᯓᡣ𐭩 *#eat • #comer* + <mencion>
> ❀ Comer algo delicioso
ᯓᡣ𐭩 *#facepalm* + <mencion>
> ❀ Darte una palmada en la cara
ᯓᡣ𐭩 *#happy • #feliz* + <mencion>
> ❀ Salta de felicidad
ᯓᡣ𐭩 *#hug* + <mencion>
> ❀ Dar un abrazo
ᯓᡣ𐭩 *#impregnate • #preg* + <mencion>
> ❀ Embarazar a alguien
ᯓᡣ𐭩 *#kill* + <mencion>
> ❀ Toma tu arma y mata a alguien
ᯓᡣ𐭩 *#kiss • #besar* • #kiss2 + <mencion>
> ❀ Dar un beso
ᯓᡣ𐭩 *#laugh* + <mencion>
> ❀ Reírte de algo o alguien
ᯓᡣ𐭩 *#lick* + <mencion>
> ❀ Lamer a alguien
ᯓᡣ𐭩 *#love • #amor* + <mencion>
> ❀ Sentirse enamorado
ᯓᡣ𐭩 *#pat* + <mencion>
> ❀ Acaricia a alguien
ᯓᡣ𐭩 *#poke* + <mencion>
> ❀ Picar a alguien
ᯓᡣ𐭩 *#pout* + <mencion>
> ❀ Hacer pucheros
ᯓᡣ𐭩 *#punch* + <mencion>
> ❀ Dar un puñetazo
ᯓᡣ𐭩 *#run* + <mencion>
> ❀ Correr
ᯓᡣ𐭩 *#sad • #triste* + <mencion>
> ❀ Expresar tristeza
ᯓᡣ𐭩 *#scared* + <mencion>
> ❀ Estar asustado
ᯓᡣ𐭩 *#seduce* + <mencion>
> ❀ Seducir a alguien
ᯓᡣ𐭩 *#shy • #timido* + <mencion>
> ❀ Sentir timidez
ᯓᡣ𐭩 *#slap* + <mencion>
> ❀ Dar una bofetada
ᯓᡣ𐭩 *#dias • #days*
> ❀ Darle los buenos días a alguien 
ᯓᡣ𐭩 *#noches • #nights*
> ❀ Darle las buenas noches a alguien 
ᯓᡣ𐭩 *#sleep* + <mencion>
> ❀ Tumbarte a dormir
ᯓᡣ𐭩 *#smoke* + <mencion>
> ❀ Fumar
ᯓᡣ𐭩 *#think* + <mencion>
> ❀ Pensar en algo

• :･ﾟ⊹˚• \`『 Nsfw 』\` •˚⊹:･ﾟ•

❍ Comandos NSFW (Contenido para adultos)
ᯓᡣ𐭩 *#anal* + <mencion>
> ❀ Hacer un anal
ᯓᡣ𐭩 *#waifu*
> ❀ Buscá una waifu aleatorio.
ᯓᡣ𐭩 *#bath* + <mencion>
> ❀ Bañarse
ᯓᡣ𐭩 *#blowjob • #mamada • #bj* + <mencion>
> ❀ Dar una mamada
ᯓᡣ𐭩 *#boobjob* + <mencion>
> ❀ Hacer una rusa
ᯓᡣ𐭩 *#cum* + <mencion>
> ❀ Venirse en alguien.
ᯓᡣ𐭩 *#fap* + <mencion>
> ❀ Hacerse una paja
ᯓᡣ𐭩 *#ppcouple • #ppcp*
> ❀ Genera imagenes para amistades o parejas.
ᯓᡣ𐭩 *#footjob* + <mencion>
> ❀ Hacer una paja con los pies
ᯓᡣ𐭩 *#fuck • #coger • #fuck2* + <mencion>
> ❀ Follarte a alguien
ᯓᡣ𐭩 *#cafe • #coffe*
> ❀ Tomate un cafecito con alguien
ᯓᡣ𐭩 *#violar • #perra + <mencion>
> ❀ Viola a alguien
ᯓᡣ𐭩 *#grabboobs* + <mencion>
> ❀ Agarrrar tetas
ᯓᡣ𐭩 *#grop* + <mencion>
> ❀ Manosear a alguien
ᯓᡣ𐭩 *#lickpussy* + <mencion>
> ❀ Lamer un coño
ᯓᡣ𐭩 *#rule34 • #r34* + [Tags]
> ❀ Buscar imagenes en Rule34
ᯓᡣ𐭩 *#sixnine • #69* + <mencion>
> ❀ Haz un 69 con alguien
ᯓᡣ𐭩 *#spank • #nalgada* + <mencion>
> ❀ Dar una nalgada
ᯓᡣ𐭩 *#suckboobs* + <mencion>
> ❀ Chupar tetas
ᯓᡣ𐭩 *#undress • #encuerar* + <mencion>
> ❀ Desnudar a alguien
ᯓᡣ𐭩 *#yuri • #tijeras* + <mencion>
> ❀ Hacer tijeras.

• :･ﾟ⊹˚• \`『 Juegos 』\` •˚⊹:･ﾟ•

❍ Comandos de juegos para jugar con tus amigos.
ᯓᡣ𐭩 *#amistad • #amigorandom* 
> ❀ hacer amigos con un juego. 
ᯓᡣ𐭩 *#chaqueta • #jalamela*
> ❀ Hacerte una chaqueta.
ᯓᡣ𐭩 *#chiste*
> ❀ El bot te cuenta un chiste.
ᯓᡣ𐭩 *#consejo* 
> ❀ El bot te da un consejo. 
ᯓᡣ𐭩 *#doxeo • #doxear* + <mencion>
> ❀ Simular un doxeo falso.
ᯓᡣ𐭩 *#facto*
> ❀ El bot te lanza un facto. 
ᯓᡣ𐭩 *#formarpareja*
> ❀ Forma una pareja. 
ᯓᡣ𐭩 *#formarpareja5*
> ❀ Forma 5 parejas diferentes.
ᯓᡣ𐭩 *#frase*
> ❀ El bot te da una frase.
ᯓᡣ𐭩 *#huevo*
> ❀ Agarrale el huevo a alguien.
ᯓᡣ𐭩 *#chupalo* + <mencion>
> ❀ Hacer que un usuario te la chupe.
ᯓᡣ𐭩 *#aplauso* + <mencion>
> ❀ Aplaudirle a alguien.
ᰔᩚ *#marron* + <mencion>
> ❀ Burlarte del color de piel de un usuario. 
ᯓᡣ𐭩 *#suicidar*
> ❀ Suicidate. 
ᯓᡣ𐭩 *#iq • #iqtest* + <mencion>
> ❀ Calcular el iq de alguna persona. 
ᯓᡣ𐭩 *#meme*
> ❀ El bot te envía un meme aleatorio. 
ᯓᡣ𐭩 *#morse*
> ❀ Convierte un texto a codigo morse. 
ᯓᡣ𐭩 *#nombreninja*
> ❀ Busca un nombre ninja aleatorio. 
ᯓᡣ𐭩 *#paja • #pajeame* 
> ❀ El bot te hace una paja.
ᯓᡣ𐭩 *#personalidad* + <mencion>
> ❀ El bot busca tu personalidad. 
ᯓᡣ𐭩 *#piropo*
> ✦ Lanza un piropo.
ᯓᡣ𐭩 *#pregunta*
> ❀ Hazle una pregunta a el bot.
ᯓᡣ𐭩 *#ship • #pareja*
> ❀ El bot te da la probabilidad de enamorarte de una persona. 
ᯓᡣ𐭩 *#sorteo*
> ❀ Empieza un sorteo. 
ᯓᡣ𐭩 *#top*
> ❀ Empieza un top de personas.
ᯓᡣ𐭩 *#formartrio* + <mencion>
> ❀ Forma un trio.
ᯓᡣ𐭩 *#ahorcado*
> ❀ Diviertete con el bot jugando el juego ahorcado.
ᯓᡣ𐭩 *#mates • #matematicas*
> ❀ Responde las preguntas de matemáticas para ganar recompensas.
ᯓᡣ𐭩 *#ppt*
> ❀ Juega piedra papel o tijeras con el bot.
ᯓᡣ𐭩 *#sopa • #buscarpalabra*
> ❀ Juega el famoso juego de sopa de letras.
ᯓᡣ𐭩 *#pvp • #suit* + <mencion>
> ❀ Juega un pvp contra otro usuario.
ᯓᡣ𐭩 *#ttt*
> ❀ Crea una sala de juego.`.trim()

await conn.sendMessage(m.chat, { 
text: txt,
contextInfo: {
mentionedJid: [userId],
externalAdReply: {                
title: botname,
body: textbot,
mediaType: 1,
mediaUrl: redes,
sourceUrl: redes,
thumbnail: await (await fetch(banner)).buffer(),
showAdAttribution: false,
containsAutoReply: true,
renderLargerThumbnail: true
}}}, { quoted: m })
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu', 'menú', 'help']

export default handler

function clockString(ms) {
let seconds = Math.floor((ms / 1000) % 60)
let minutes = Math.floor((ms / (1000 * 60)) % 60)
let hours = Math.floor((ms / (1000 * 60 * 60)) % 24)
return `${hours}h ${minutes}m ${seconds}s`
}
