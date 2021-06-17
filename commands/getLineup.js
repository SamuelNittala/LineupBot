const { prefix } = require('../config.json')
const pool = require('../db/db')
const sovaHelperString = require('../helper/sova')
/**
 * command prefix = '-' 
 * commanad def = "AGENT_NAME" "ATT/DEF" "MAP" "OUTPUT_AREA" 
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
						message.reply(sovaHelperString)
						break
					case 'viper':
					case 'cypher':
					case 'brimstone':
					default:
						console.log(agent)
						message.reply('`type: -{agent-name}`')	
				}
			}	
			else if (details.length != 5) {
				message.reply('`type: -{agent-name} for help`')
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
