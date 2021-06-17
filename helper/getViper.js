const pool = require('../db/db')
async function getViper(details) {
    const ability = details[1], map = details[2], area = details[3]
    const query = 
    "select url from viper where ability=$1\
    and map=$2 and area=$3"
    const lineups = await pool.query(query,[ability,map,area])
    return lineups.rows
}
module.exports=getViper