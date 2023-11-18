const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `*𝐄𝐲 𝐏𝐥𝐚𝐧𝐭𝐢𝐭𝐚 🌱 𝐓𝐞𝐧𝐞𝐦𝐨𝐬 𝐀𝐜𝐭𝐢𝐯𝐢𝐝𝐚𝐝𝐞𝐬 , 𝐓𝐞 𝐀𝐧𝐨𝐭𝐚𝐬 𝐎 𝐂𝐮𝐩𝐨 𝐃𝐢𝐫𝐞𝐜𝐭𝐨 🌸?* ${pesan}`;
  let teks = `🌸  𝕭𝖔𝖒𝖇 𝕭𝖔𝖙  🌸\n\n ${oi}\n\n🌸| ▪ *@SamuraiBot*\n`;
  for (const mem of participants) {
    teks += `🌸| ▪ @${mem.id.split('@')[0]}\n`;
  }
  teks += `\n\n🌸  𝕭𝖔𝖒𝖇 𝕭𝖔𝖙  🌸`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;
