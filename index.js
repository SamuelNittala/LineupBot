require('dotenv').config()

const Discord = require('discord.js')

const client = new Discord.Client()

const config = require('./config.json')
const getLineup = require('./commands/getLineup')

client.on('ready',() => {
	console.log('Listening!')
	getLineup(client, (message,url) => {
		if (message.author.bot) return
		if (url == undefined) message.reply("Lineup not found!")
		else {
			const attachement = new Discord.MessageAttachment(url)
			message.reply("Lineup",attachement)
		}
	})
})
const token = process.env.DISCORD_TOKEN
client.login(token)