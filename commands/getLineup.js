const { prefix } = require('../config.json')
const pool = require('../db/db')
const { viper } = require('../helper/helperString')
const helperString = require('../helper/helperString')
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
						console.log(agent)
						message.reply(helperString['default'])	
				}
			}	
			else {
				switch(agent){
					case 'sova':
						find_lineup_query = 
						`select url from sove where ability=$1 and side=$2 and map=$3 and area=$4`
						lineups = await pool.query(find_lineup_query,[ability,side,map,area])
						break
					case 'viper':
						const getViper = require('../helper/getViper')
						const data = getViper(details)	
						data.then(res => {
							message.reply(res[0]["url"])
						})
						break
				}
			}
		}
	})
}
