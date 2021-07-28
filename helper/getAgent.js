const pool = require('../db/db')

async function getAgent(details,agent){

    let ability = details[1], side = details[2], map = details[3], area = details[4]

    if(side == 'a') side = 'att'
    if(side == 'd') side = 'def'

    if (agent == 'sova') {
        if (ability == 'r') ability = 'recon'
        if (ability == 's') ability = 'shock'
    }

    if (agent == 'viper') {
        if (ability == 'sb') ability = 'snakebite'
        if (ability == 'pp') ability = 'poisoncloud'
    }

    const find_query =
    "SELECT url from " + agent + " where ability=$1\
    and side=$2 and map=$3 and $4=any(area)"

    const lineups = await pool.query(find_query,[ability,side,map,area])

    let len = lineups.rows.length
    if (len > 1) len = Math.floor(Math.random()*len)
    else len--

    return lineups.rows[len]["url"]
}

module.exports = getAgent
