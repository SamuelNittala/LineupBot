require('dotenv').config()

const Discord = require('discord.js')

const client = new Discord.Client()

const config = require('./config.json')
const getLineup = require('./commands/getLineup')

client.on('ready',() => {
	client.user.setPresence({
		status: 'online',
		activity: {
			name: '-help for info'
		}
	})
	getLineup(client, (message,url) => {
		if (message.author.bot) return
		if (url == undefined) message.reply("Lineup not found!")
		else {
			message.reply(url)
		}
	})
})
const token = process.env.DISCORD_TOKEN
client.login(token)
