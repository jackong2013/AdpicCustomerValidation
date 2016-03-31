# AdpicCustomerValidation

Download all the dependencies by running the following on terminal at this project's root directory
```
npm install
```

Make sure that you have PostgreSQL server running, database and table created using the DDL from `/database/TABLES_DDL.sql`
After setting up PostgreSQL server, edit the javascript file `/database/database.js`:
```javascript
var conString = 'postgres://USERNAME:PASSWORD@localhost:5432/DATABASE_NAME';
```

To spin up the server, run the following command
```
node server.js
```