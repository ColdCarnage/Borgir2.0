// Require the necessary discord.js classes
const fs = require('fs');
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const { prefix } = require('./config.json');
const commandHandler = require('./commands');
// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on('messageCreate', commandHandler)

// Login to Discord with your client's token
client.login(token);
