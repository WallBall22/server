const Discord = require("discord.js");
const client = new Discord.Client();
client.on("message", msg => {
var prefix = '-';// البرفكس
var m = msg.guild.name
var d = msg.guild.memberCount
var p = msg.guild.roles.size
var c = msg.guild.channels.size
var l = msg.guild.region
var o = msg.guild.iconURL
var k = msg.guild.owner
var i = msg.guild.emojis.size
var b = msg.guild.members.filter(m => m.user.bot).size
var h = d - b
var cre = `${moment(msg.guild.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(msg.guild.createdAt).fromNow()}\``
var t = msg.guild.channels.filter(e => e.type === "text")
var v = msg.guild.channels.filter(e => e.type === "voice")
var pow = msg.guild.verificationLevel
var e = msg.guild.emojis.size
var e2 = msg.guild.emojis.array()
var afk = msg.guild.afkChannel
var ID = msg.guild.id
if (msg.content.startsWith(prefix + "servers")){// الامر
var embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setThumbnail(o)
.addField("👑**Owner**👑⤵", k, true)
.addField("📜**Name**📜⤵", m, true)
.addField("🆔**ID**🆔⤵", ID, true)
.addField("👥**MembersAll**🤖⤵", d, true)
.addField("📕**Roles**📕⤵", p, true)
.addField("📕**Channels**📕⤵", c, true)
.addField("🌐**Region**🌐⤵", l, true)
.addField("🤖**Bots**🤖⤵", b, true)
.addField("👥**Humans**👥⤵", h, true)
.addField("📝**TextRooms**📝⤵", `${t.size}`, true)
.addField("🔒**verificationLevel**🔒➥", pow, true)
.addField("🎤**VoiceRooms**🎤⤵", `${v.size}`, true)
.addField("📆Created At📆⤵", cre,true)
.addField("🛏AFKRoom🛏⤵", afk, true)
msg.channel.sendEmbed(embed);
}
});



client.login(process.env.BOT_TOKEN);
