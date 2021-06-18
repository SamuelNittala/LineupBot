const pool = require('../db/db')

async function getSova(details){
    let ability = details[1], side = details[2], map = detais[3], area = details[4]
    const find_query = 
    "SELECT url from sova where ability=$1\
    and side=$2 and map=$3 and $4=any(area)"
    const lineups = await pool.query(find_query,[ability,side,map,area])
    return lineups.rows
}