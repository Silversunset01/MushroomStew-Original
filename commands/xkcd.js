const Discord = require("discord.js");
const request = require('axios');

exports.run = (client, msg, args) => {
    var id = args[0];
    if (typeof id === 'undefined') {
        var embed = new Discord.RichEmbed()
            request.get('https://xkcd.com/info.0.json')
            .then(res => {
                embed.setTitle("#" + res.data.num + " - " + res.data.title + " - " + res.data.month + "/" + res.data.day + "/" + res.data.year)
                //embed.setColor(0x092366)
                embed.setImage(res.data.img)
                embed.setFooter(res.data.alt)
                msg.channel.send({embed}).catch(console.error);
            });
    } else {
        var embed = new Discord.RichEmbed()
            request.get('https://xkcd.com/' + id + '/info.0.json')
            .then(res => {
                embed.setTitle("#" + res.data.num + " - " + res.data.title + " - " + res.data.month + "/" + res.data.day + "/" + res.data.year)
                //embed.setColor(0x092366)
                embed.setImage(res.data.img)
                embed.setFooter(res.data.alt)
            msg.channel.send({embed}).catch(console.error);
            });
    }
};

exports.help = {
    name: "xkcd",
    category: "Fun",
    description: "Retrieves the current XKCD comic. If an ID is entered, it will retrieve the comic with the matching ID#.",
    usage: "xkcd [<id number>]",
    example: "xkcd 2015"
};