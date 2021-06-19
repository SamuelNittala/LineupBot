const pool = require('../db/db')

async function getSova(details){
	console.log(details)
    let ability = details[1], side = details[2], map = details[3], area = details[4]

    if (ability == 'r') ability = 'recon'
    if (ability == 's') ability = 'shock'

    const find_query = 
    "SELECT url from sova where ability=$1\
    and side=$2 and map=$3 and $4=any(area)"

    const lineups = await pool.query(find_query,[ability,side,map,area])

	let len = lineups.rows.length
	if (len > 1) len = Math.floor(Math.random()*len)
	else len--

	return lineups.rows[len]["url"]
}

module.exports = getSova