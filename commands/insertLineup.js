const pool = require('../db/db')
const insertLineup = async () => {
	let details = process.argv.slice(2);
	const insert_query = "INSERT INTO lps(agent,map,side,area,url) values($1,$2,$3,$4,$5)"
	const insert = await pool.query(insert_query,[details[0],details[1],details[2],details[3],details[4]])
	console.log(insert.rows[0])
} 
insertLineup()



