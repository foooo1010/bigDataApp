var pool = require("../pool").pool;
var squel = require("squel");

module.exports = function getTc(app) {
	app.get('/tc', function(req, res) {
		var sql = squel.select()
			.from("FactOrder")
			.group("OrderDate")
			.group("StoreName")
			.field("StoreName")
		.field("OrderDate")
			.field("count(*)", "count")
			.toString()
		console.log(sql);
		pool.query(sql, function(err, rows, fields) {
			if (err) {
				res.send(err)
			};
			var items = []
			rows.forEach(function(row) {
				let have = false
				let currItem = null
				items.forEach(function(item) {
					if (item.key === row.StoreName) {
						have = true;
						currItem = item
						return;
					}
				})
				if (!have) {
					currItem = {
						key: row.StoreName,
						values: [],
					}
					items.push(currItem)
				}
				currItem.values.push({
					x: new Date(row.OrderDate).getTime(),
					y: row.count
				})
			})

			res.json(items)
		});

	})
}