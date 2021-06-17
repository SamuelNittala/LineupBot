require('dotenv').config()

var parse = require('pg-connection-string').parse;
const Pool = require('pg').Pool

var config = parse(process.env.DB_URL)
const pool = new Pool(config);

module.exports=pool;