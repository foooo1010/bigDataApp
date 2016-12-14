var mysql = require('mysql');

var pool = mysql.createPool({
	connectionLimit: 10,
	host: '192.168.15.96',
	user: 'datawarehouse',
	password: 'datawarehouse',
	database: 'datawarehouse'
});

module.exports = {
	pool: pool
}