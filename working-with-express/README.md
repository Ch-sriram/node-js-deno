# Express as a Middleware

![Express-Middleware](./images/express-pattern-middleware.png)

- Middleware means that the `IncomingRequest` is funnelled through functions/methods provided by ExpressJS. So, instead of just having one request handler, we'll actually have a possibility of hooking in multiple functions, which the request will go through, until we send a response.
- This allows us to split our code into multiple blocks/pieces of code (instead of having one huge function that does everything) and this is the plug-able nature of ExpressJS where we can easily add other 3rd party packages which simply happen to give us such middleware functions that we can plug into ExpressJS and add certain functionalities.
