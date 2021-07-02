const Discord = require("discord.js");
const settings = require("../settings.json");

exports.execute = async (client, message, args) => {

  if(!message.member.permissions.has(8)) if(!message.member.roles.cache.has(settings.kayıtSorumlusu)) return;

  let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
  let nick = args[1];
  let age = Number(args[2]);

  if(!age) return message.channel.send("Hata: `İsmi değiştirilecek üyeye yaş belirtmelisin!`").then(m => m.delete({ timeout: 3000 }));
  if(!user) return message.channel.send("Hata: `İsmi değiştirilecek bir üye belirtmelisin!`").then(m => m.delete({ timeout: 3000 }));
  if(!nick) return message.channel.send("Hata: `İsmi değiştirilecek üyeye bir isim belirtmelisin!`").then(m => m.delete({ timeout: 3000 }));
  
  await user.setNickname(`0990 ${nick.charAt(0).toUpperCase() + nick.slice(1).toLowerCase()}${age ? ` | ${age}` : ``}`).catch();
  
 
  message.react('<a:voxi_tik:859782588053848115>')
  
  

};

exports.conf = {
  command: "isim",
  description: "Belirtilen üyenin ismini değiştirmeye yarar.",
  aliases: ["name", "nick", "i"]
}
