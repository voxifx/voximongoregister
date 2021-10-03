const Discord = require("discord.js");
const client = global.client;

exports.execute = async () => {
  
client.user.setPresence({ activity: { name: "Voxi was here!"}, status: "online" });



};

exports.conf = {
  event: "ready"
};
