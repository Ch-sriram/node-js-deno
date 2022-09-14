import mysql from 'mysql2';

/**
 * We've 2 ways to connect to the DB:
 * 1. Create a connection
 *    - We can run a query and close the connection immediately. Downside is that
 *      we always have to reconnect after we close the connection. We've to make a 
 *      connection for almost every new query. This is really INEFFICIENT.
 * 2. Create a pool of connections
 *    - We have a bunch of connection objects which we can use to connect to the
 *      mysql db whenever needed and then the pool holds the connection objects for us.
 */

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'node-complete',
  password: 'Password@123#'
});

export const db = pool.promise();
export default db;
