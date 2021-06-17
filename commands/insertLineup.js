const pool = require('../db/db')
const insertLineup = async () => {
	let details = process.argv.slice(2);
	const insert_query = "INSERT INTO sova(ability,side,map,area,url) values($2,$3,$4,$5,$6)"
	const insert = await pool.query(insert_query,[details[0],details[1],details[2],details[3],details[4],details[5]])
} 
insertLineup()



