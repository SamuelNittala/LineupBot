const { prefix } = require('../config.json')
const pool = require('../db/db')
/**
 * command prefix = '-' 
 * commanad def = "AGENT_NAME" "ATT/DEF" "MAP" "OUTPUT_AREA" 
 */
module.exports = async (client,callback) => {
	client.on('message', async message => {
		const { content } = message
		const details = content.split(' ') 	
		const agent = details[1], side = details[2], map = details[3], area = details[4]

		if (details.length == 5 && content.startsWith(prefix)) {

			const find_lineup_query = "select url from lps where agent=$1 and side=$2 and map=$3 and area=$4"
			const lineups = await pool.query(find_lineup_query,[agent,side,map,area])

			const url_found = (lineups.rows.length == 0) ? false : true;

			if (!url_found) url = undefined
			else url = lineups.rows[0]["url"]

			console.log(url)
			callback(message,url)	
		}
		else {
			callback(message,undefined)
		}
	})
}
