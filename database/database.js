var pg = require('pg');
var conString = 'postgres://JackOng:adpic123@localhost:5432/adpic';

module.exports = {
	saveResult: function (surveyResult, cb) {
		pg.connect(conString, function (err, client, done) {
			if (err) {
				return console.error('error fetching client from pool', err);
			};

			// start building the query
			var query = "INSERT INTO survey_result (";

			// get the column names from surveyResult
			var columns = Object.keys(surveyResult);

			// store all the survey responses
			var values = "(";

			for (i in columns) {
				query += columns[i];
				query += ',';
				values += '\'' + surveyResult[columns[i]] + '\'' + ',';
				if (i == columns.length - 1) {
					query = query.substring(0, query.length - 1);
					query += ') values ';
					values = values.substring(0, values.length - 1);
					values += ');';
					query += values;
				} 
			};

			cb("Query executed: " + query);

			client.query(query, function (err, result) {
				done();

				if (err) {
					return console.error('error running query', err);
				}

				cb(result);
			})
		});
	}
}