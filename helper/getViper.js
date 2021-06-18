const pool = require('../db/db')
async function getViper(details) {
    let ability = details[1], map = details[2], area = details[3]

    if (ability == 'sb') ability = 'snakebite'
    if (ability == 'pc') ability = 'poisoncloud'
    
    const query = 
    "select url from viper where ability=$1\
    and map=$2 and $3=any(area)"
    const lineups = await pool.query(query,[ability,map,area])

    return lineups.rows
}
module.exports=getViper