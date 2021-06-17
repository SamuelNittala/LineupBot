const { prefix } = require('../config.json')
const pool = require('../db/db')
const helperString = require('../helper/helperString')
/**
 * command prefix = '-' 
 * commanad def = "AGENT_NAME" "ABILITY" "ATT/DEF" "MAP" "OUTPUT_AREA" 
 */
module.exports = async (client,callback) => {
	client.on('message', async message => {

		const { content } = message
		const details = content.slice(1).split(' ') 	
		const agent = details[0], ability = details[1], side = details[2], map = details[3], area = details[4]

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
			else if (details.length != 5) {
				message.reply(helperString['default'])
			} 
			else {
				const find_lineup_query = `select url from ${agent} where ability=$1 and side=$2 and map=$3 and area=$4`
				const lineups = await pool.query(find_lineup_query,[ability,side,map,area])

				const url_found = (lineups.rows.length == 0) ? false : true;
					
				if (!url_found) url = undefined
				else {
					url = lineups.rows[0]["url"]
				}
				console.log(url)
				callback(message,url)	
			}
		}
	})
}
