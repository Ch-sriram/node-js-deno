import express, { Request, Response, NextFunction } from 'express';

const app = express();

// Q2:

// /**
//  * Controller for '/users' route
//  */
// app.use('users', (req: Request, _: Response, next: NextFunction) => {
//   console.log(`This is '${req.url}' route.`);
//   console.log('Calling next()...');
//   next();
// });

// /**
//  * Controller for '/' route
//  */
// app.use((req: Request, res: Response, _: NextFunction) => {
//   console.log(`This is '${req.url}' route.`);
// });


// Q3:

/**
 * Controller for '/users' route
 */
app.use('users', (req: Request, res: Response, _: NextFunction) => {
  console.log(`This is '${req.url}' route.`);
  res.send(`<h1>This is '${req.url}' route.</h1>`);
});

/**
 * Controller for '/' route
 */
app.use((req: Request, res: Response, _: NextFunction) => {
  console.log(`This is '${req.url}' route.`);
  res.send(`<h1>This is '${req.url}' route and this is a &lt;h1> element.<s/h1>`);
});

app.listen(3000);
