const { prefix } = require('../config.json')
const pool = require('../db/db')
const { viper } = require('../helper/helperString')
const helperString = require('../helper/helperString')
const getAgent = require('../helper/getAgent')
/**
 * command prefix = '-'
 * commanad def = "AGENT_NAME" "ABILITY" "ATT/DEF" "MAP" "OUTPUT_AREA"
 */
module.exports = async (client,callback) => {
	client.on('message', async message => {

		const { content } = message
		const details = content.slice(1).split(' ')
		const agent = details[0]

		if (content.startsWith(prefix)) {
			if (details.length == 1) {
				switch(agent.toLowerCase()){
					case 'sova':
						message.reply(helperString['sova'])
						break
					case 'viper':
						message.reply(helperString['viper'])
						break
					case 'cypher':
						message.reply(helperString['agentFail'])
						break
					case 'brimstone':
						message.reply(helperString['agentFail'])
						break
					default:
						message.reply(helperString['default'])
				}
			}
			else {
				let data
				switch(agent){
					case 'sova':
						url = getAgent(details,agent).then(data => {
							message.reply(data)
						}).catch(err => message.reply("`Lineup not found!`"))
						break
					case 'viper':
						data = getAgent(details,agent)
						data.then(res => {
							message.reply(res[0]["url"])
						}).catch(
							err => message.reply("`Lineup not found`")
						)
						break
				}
			}
		}
	})
}
