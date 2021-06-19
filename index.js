require('dotenv').config()

const Discord = require('discord.js')

const client = new Discord.Client()

const config = require('./config.json')
const getLineup = require('./commands/getLineup')

client.on('ready',() => {
	client.user.setStatus('Type -help to start!')
	console.log('Listening!')
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