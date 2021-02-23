# Express as a Middleware

![Express-Middleware](./images/express-pattern-middleware.png)

- Middleware means that the `IncomingRequest` is funnelled through functions/methods provided by ExpressJS. So, instead of just having one request handler, we'll actually have a possibility of hooking in multiple functions, which the request will go through, until we send a response.
- This allows us to split our code into multiple blocks/pieces of code (instead of having one huge function that does everything) and this is the plug-able nature of ExpressJS where we can easily add other 3rd party packages which simply happen to give us such middleware functions that we can plug into ExpressJS and add certain functionalities.

## Express.js: Behind the Scenes

On GitHub, express.js is open-sourced, and so, we can see the code related to express.js, specifically, we can see some interesting sections like:

- **[send()](https://github.com/expressjs/express/blob/508936853a6e311099c9985d4c11a4b1b8f6af07/lib/response.js#L107)**: In [L141 of response.js](https://github.com/expressjs/express/blob/508936853a6e311099c9985d4c11a4b1b8f6af07/lib/response.js#L141), `send()` analyzes the kind of data a response body is trying to send, and it is evident that if the data sent is a `string` type data, the `Content-Type` is set to `text/html` as seen from [L143 to L147](https://github.com/expressjs/express/blob/508936853a6e311099c9985d4c11a4b1b8f6af07/lib/response.js#L143-L147) and for types `number`, `boolean` or `object`, the `Content-Type` is set to `text/bin` (using **[mime module](https://github.com/broofa/mime)**, but it is actually `application/octet-stream` as seen **[here](https://github.com/jshttp/mime-db/blob/10d87440851afae4a566605ed3a7c95ed9abc552/src/apache-types.json#L308)**) which can be seen from [L148 to L160](https://github.com/expressjs/express/blob/508936853a6e311099c9985d4c11a4b1b8f6af07/lib/response.js#L148-L160).
- **[app.listen()](https://github.com/expressjs/express/blob/508936853a6e311099c9985d4c11a4b1b8f6af07/lib/application.js#L616-L619)**: Now, instead of using the `http` module to create a server with `http.createServer(app).listen(<port_number>)`, we can simply use `app.listen(<port_number>)`, because if we look into the code related to `app.listen()` from [L617 to L618](https://github.com/expressjs/express/blob/508936853a6e311099c9985d4c11a4b1b8f6af07/lib/application.js#L617-L618), we can see that it uses `http.createServer()` to make a server. Therefore, it is kind of same, using `app.listen()` or `http.createServer().listen()`. Therefore, we can replace **[this line](https://github.com/Ch-sriram/node-js-deno/commit/c605244443c83725e89f428e7c5f6fec837a292a#diff-9aa0b207299d6279a2b3a26798d30839bed45259b3587950a36e4e40aa903c3aR13)** with `app.listen(<port_number>)`.
**NOTE**: `app` is actually defined as `const app = express()` as seen **[here](https://github.com/Ch-sriram/node-js-deno/commit/c605244443c83725e89f428e7c5f6fec837a292a#diff-9aa0b207299d6279a2b3a26798d30839bed45259b3587950a36e4e40aa903c3aR10)**.

## Serving Static Files

- Instead of defining all the markup, styling and the JS code in a single HTML file, there's a way to externalize them. Typically, if there is a need to externalize CSS/JS from the HTML code in `.html` files, the CSS/JS files would be somewhere in the project, and they would most definitely be pointed (or imported by) by some other resource/file (typically an HTML file for static files) when the app gets served.
- All these static files (`.html`, `.css`, `.js`, etc), live inside a special (by convention, not compulsion) sub-directory known as **`public`** &mdash; a directory that holds content/code which is always exposed to be used by any resource. All the files inside all the sub-directories (except the `public` sub-directory), are NOT accessible by the users *i.e.*, if a user/dev tries to access a route like: `localhost:3000/views/add-product.html`, he/she won't be able to access that resource.
- But with having a `public` sub-directory, there's a way for the users/dev to access the filesystem, BUT (there's a catch) the backend developer controls what he/she wants the user to be accessible and puts that into the `public` sub-directory.
- So, how does someone link an HTML page inside `views` sub-directory to external scripts and styling resources? \[NOTE: **[Directory Structure Used](https://github.com/Ch-sriram/node-js-deno/tree/26fc3d7642453024f5ac5c7f3045a03792641279/working-with-express)**\]
  - Try #1: Keep the required resource, let's say the resource is `main.css`, which is put in the `public` sub-directory with the path as `public/css/main.css`. If the resource (*i.e.*, `main.css`) is imported in one of the view templates (say `views/add-product.html`) using the `<link/>` tag as follows: `<link rel="stylesheet" href="/css/main.css"/>` &mdash; the reload after that will make sure that the styling is all gone (*i.e.*, the view and the styling didn't get connected properly).
  - Try #2: Even if `<link href="some/path"/>` is changed to `<link rel="stylesheet" href="public/css/main.css"/>`, it's NOT going to work.
- To serve static files, the `express` framework provides another middleware known as the `static()`, which serves static files from a directory that needs to be specified to the `express.static()` middleware. Example: If the resource to be shared to the public (to every user/resource) is inside the directory `public`, then it can be shared using the `static()` middleware from `express` as follows:

```ts
app.use(express.static(path.join(__dirname, 'public'))); 
// should be defined at the top level, so that all the other middlewares are aware of the public resources
```

- Now, inside the view template, say `views/add-product.html`, is the linking with the style resource (`.css` file) is done as following: `<link rel="stylesheet" href="/css/main.css" />`, and then reload the route linked to `add-product.html` resource's route, the styling will work. **NOTE**: Here when giving the `href` as `/css/main.css`, from the path, `/public` is NOT prefixed because that's automatically taken care by the `express.static()` middleware, and so, there's NO need to use the path as `/public/css/main.css`, BUT instead, the path to the resource can be omitted of the prefix `/public` and given directly as if the resource is being accessed from the `/public` directory itself, because the `express.static()` middleware automatically forwards the path mentioned inside the middleware (which in this case is `public` directory) and appends them to the path in the links/href.
- There can be multiple static directories given using the `express.static()` middleware which can be given as follows:

```ts
app.use(express.static(path.join(__dirname, '<folder_1>')));
app.use(express.static(path.join(__dirname, '<folder_2>')));
app.use(express.static(path.join(__dirname, '<folder_3>')));
```

- The express middleware will funnel the request through all the specified static folders/directories until it gets a hit on the first static file that is found in a static directory. Now, the same is to be done for both `views/shop.html` and `views/error-404.html`.
- With this, any static file (hardcoded/unchanging files) can be added to the view or any other resource, since the resolution is handled by the express middleware. Also, these are static files (images, css, js, etc), later, work will be done on templates, which are dynamic in nature.
