const request = require('axios');       //required for API requests

exports.run = (client, msg, args, content) => {
    request.get('http://api.icndb.com/jokes/random')
	.then(res => {msg.channel.send(res.data.value.joke)})
    .catch(err => {console.log(err)});
};

exports.help = {
    name: "chucknorris",
    category: "Fun",
    description: "Generates a random Chuck Norris joke.",
    usage: "chucknorris",
    example: ""
};
