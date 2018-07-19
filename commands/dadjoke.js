const request = require('axios');       //required for API requests

exports.run = (client, msg, args, content) => {
	request.get('https://icanhazdadjoke.com/slack')
    .then(res => {msg.channel.send(res.data.attachments[0].text)})
    .catch(err => {console.log(err)});
};

exports.help = {
    name: "dadjoke",
    category: "Fun",
    description: "Generates a random dad joke.",
    usage: "dadjoke",
    example: ""
};