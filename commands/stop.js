const config = require("../config.json");
exports.run = (client, msg, args, content) => {
    if (msg.author.id !== config.owner) {
        msg.channel.send("I'm sorry, only my owner can run this command.").catch(console.error);
    } else {
        console.log("Stopping the bot");
        process.exit(0);
    }
};

exports.help = {
    name: "stop",
    category: "Owner",
    description: "Stops the bot. Currently this is restricted to the owner of the bot.",
    usage: "stop",
    example: ""
};