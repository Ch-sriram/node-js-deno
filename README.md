# Proof of Concept: NodeJS & Deno

Repository contains concepts and code related to Node JS (Vanilla Node, Express Framework, REST APIs, GraphQL, Websockets & More...) & Deno, both as a Runtime Environment.

## References

- **[NodeJS Course](https://www.udemy.com/course/nodejs-the-complete-guide/)** by **[Maximilian Schwarzmüller](https://twitter.com/maxedapps?s=20)**
- **[NodeJS Documentation](https://nodejs.org/en/docs/)**
- **[Ben Awad's Fullstack Tutorial on YouTube](https://www.youtube.com/watch?v=I6ypD7qv3Z8)**

## Details on NodeJS & Express

- **[What is NodeJS?](./node-first-app/README.md#what-is-nodejs)**
- **[Software Requirements](./node-first-app/README.md#software-requirements)**
- **[Compiler Details](./node-first-app/README.md#compiler-details)**
- **[Role & Usage of NodeJS](./node-first-app/README.md#role--usage-of-nodejs)**
- **[Node Lifecycle & Event Loop](./understanding-basics/README.md#node-lifecycle--event-loop)**
- **[Running NodeJS + TypeScript](https://khalilstemmler.com/blogs/typescript/node-starter-project/)**
- **[NodeJS &mdash; Behind the Scenes: Single Thread, Event Loop & Blocking Code (Deep Dive)](./understanding-basics/README.md#single-thread-event-loop--blocking-code---in-depth)** 🌟✨ &mdash; **MUST READ!**
- **[Event Loop, Timers & process.nexttick - Official NodeJS Docs](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)**
- **[Don't Block the Event Loop - Official NodeJS Docs](https://nodejs.org/en/docs/guides/dont-block-the-event-loop/)**
- **[The Concept of Middleware](https://github.com/Ch-sriram/node-js-deno/blob/main/working-with-express/README.md)**
- **[What's the Model-View-Controller Architecture?](./model-view-controller/README.md#mvc-model-view-controller-architecture)**

## Table of Contents ©

- **[Introduction](#introduction)**
- **[Understanding Basics](#understanding-basics)**
- **[Express Framework 🚅🌪💨](#express-framework-)**
- **[Dynamic Content & Templating Engines](#dynamic-content--templating-engines)**
- **[Models Views & Controllers](#models-views--controllers-mvc)**
- **[Dynamic Routes & Advanced Models](#dynamic-routes--advanced-models)**

### Introduction

Contents of this section are in **[node-first-app](https://github.com/Ch-sriram/node-js-deno/tree/main/node-first-app)** directory.

1. First NodeJS App: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/3d01adb458180d2e22eebc510a59b706a9729624)
2. Writing to a new file using `fs` module with `fs.writeFileSync()` method (Basic Intro): [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/76b67ea753649d5743be8c75075e23db0164af78)

### Understanding Basics

Contents of this section are in **[understanding-basics](https://github.com/Ch-sriram/node-js-deno/tree/main/understanding-basics)** directory.

1. Creating a Node Server: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/40982d85b9387018a88b9e8c1975eba1dd8429f2)
2. The Node Lifecycle & Event Loop: **[READ THIS BEFORE MOVING AHEAD](./understanding-basics/README.md#node-lifecycle--event-loop)** | [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/5f8c03b229e23561949ba64772a85c334322ea6a)
3. Understanding the `request` object (`request.url`, `request.method` & `request.headers`): [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/f0a220a00811a31132b580be45a50b2e44dd286b)
4. Sending Responses using `response.write()` & `response.end()`: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/0f7b4b4e647a2c504cf9438c42cdbc3b41bf43cb#diff-9f8c87a053f47465defc2ede5990a09b615313f888333b1211bb762b7ac0122f)
5. Diving deeper into the `request` object
   1. Routing Requests using `request.url`: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/814a2691ce922aeb2812e3588675bc555c2d1937)
   2. Redirecting Requests `request.url && request.method` by using `fs.writeFileSync` along with `response.writeHead()` (or `response.setHeader()` / `response.statusCode`) to write a to a file on a specific route: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/041b81860b1f2ba15cac6612c2ae01bf61390f6d)
   3. Parsing Request Bodies using `request.on('data')`, `request.on('end')` & `Buffer.concat()`: [READ THIS BEFORE GOING AHEAD](./understanding-basics/README.md#streams--buffers) | [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/ca12eb612d904d107763ec504e03f74064fcb035)
6. **Understanding Event Driven Code Execution** ⭐
   1. **[Writing Events That Would Eventually Error Out](./understanding-basics/README.md#event-driven-code-execution)**: [Commit Details](https://github.com/Ch-sriram/node-js-deno/blob/5f4d6c46a4137e31004e8489575a123c032fd26a/understanding-basics/src/index.ts#L109-L118)
   2. **[Writing Events To Mitigate Errors](./understanding-basics/README.md#event-driven-code-execution-writing-events-that-wont-error-out)**: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/86f0571879f47a6202d50251dca3d3374c83dabb)
7. Blocking &mdash; `writeFileSync()` & Non-Blocking &mdash; `writeFile()` Code: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/81ccf70ff515d9985d0679b3778c355375edc804)
8. **[NodeJS &mdash; Behind the Scenes: Single Thread, Event Loop & Blocking Code (Deep Dive)](./understanding-basics/README.md#single-thread-event-loop--blocking-code---in-depth)** 🌟✨ &mdash; __MUST READ!__
9. Using the Node Modules System &mdash; `exports` & `imports` (ES5/ES6+): [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/51a6fb45756fe669a5a5a35dbaeda0063453f4bc)
10. **[Assignment I](./assignments/assignment-1/README.md#assignment-question)**: **[Solution - I](./assignments/assignment-1/)** && **[Solution - II (revision)](./assignments/revision/assignment-1/)**
11. [Debugging using VS Code's NodeJS Debugger](https://code.visualstudio.com/docs/nodejs/nodejs-debugging): [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/21014c85c29f0d9e20d6d021f4025eab6a5853cf) 🌟

### Express Framework 🚅🌪💨

Contents of this section are in **[working-with-express](https://github.com/Ch-sriram/node-js-deno/tree/main/working-with-express)** directory.

1. Prerequisite: A Basic Setup: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/a6ab359b7d460f4329a621e9550ce4e43c53299e)
2. Installing Express & Using `express()`: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/c605244443c83725e89f428e7c5f6fec837a292a)
3. **[Adding Middleware](./working-with-express/README.md#express-as-a-middleware)** using `app.use()`: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/3483e1ba4c15c8e5cfae3ff7f0e8ea81e49b0b02)
4. How Middleware Works: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/a61644bc3205d21ca45305ea5d929297410f20de)
5. **[Express.js &mdash; Looking Behind the Scenes](./working-with-express/README.md#expressjs-behind-the-scenes)**: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/973f10bed1deffd662bb7a150cc0f5cc096f762e)
6. Handling Different Routes: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/090fadb85699f271b37958a6d4d47d98abdcac6e)
7. **[Assignment II](./assignments/assignment-2/README.md#assignment-question)**: **[Solution](./assignments/assignment-2/)** && **[Solution-II (revision)](./assignments/revision/assignment-2/)**
8. Parsing Incoming Requests using `express.urlencoded({ extended: false })` (or, `bodyParser` \[*deprecated*\]) passed to `app.use()` middleware: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/403fbed4352139e172a94e26be36c06dce0f6adc)
9. Limiting Middleware Execution to POST/GET Requests Using `app.get()` & `app.post()`: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/77e6829a71e2e1623af040244dfde32586cc865c)
10. Using Express Router using `express.Router()`: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/45ba2c746f46deee5a8fba8e43dec1906e16e320)
11. Adding a 404 Error Page using `res.status(400).send()`: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/93d5846be882f761ff02b22b8021e03f705fb23f)
12. Filtering & Grouping Routes/Paths Logically: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/cf6f3abf953a0a6b4e91cf2ec1a45a0c51180600)
13. Creating HTML Pages: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/60223b7e37bc735bbd490bbaa8ab866204d45415)
14. Serving HTML Pages using `path.join()` & `__dirname`: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/29de79330672b2f55c193fb222d9be23f97b57bb)
15. Returning a 404 Error Page: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/154cecf251208c39791a01908ec197ad3044523a)
16. Using a Helper Function for Navigation using `path.dirname(require.main.filename)`: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/1b682c2d46bb804209dea0dc1e86e068ec114437)
17. Styling HTML Pages: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/1c95acc9dd636f519d786ce99cabcb4cf32313ee)
18. **[Serving Files Statically](./working-with-express/README.md#serving-static-files)** using `express.static()` middleware: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/a4a4623241ee65d72e3cb8942f81255359ad507a)
19. **[Assignment III](./assignments/assignment-3/README.md#assignment-question)**: **[My Solution](./assignments/assignment-3/)** 📜

### Dynamic Content & Templating Engines

Contents of this section are in **[dynamic-content-templating-engines](https://github.com/Ch-sriram/node-js-deno/tree/main/dynamic-content-templating-engines)** directory.

1. Basic Setup: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/e03323269365f20a38c606415cf8b1693c03c418)
2. Sharing Data Across Requests & Users: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/74a44f1998a8d5db558c5e649ca24ea92ecb0e76)
3. **[Templating Engines](./dynamic-content-templating-engines/README.md#templating-engines)**: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/6962aea80ff55ddd150230d4ad165ab22e9629db)
4. **Templating Engines**:
   1. Installing **[Pug](https://pugjs.org/api/getting-started.html)**, **[Handlebars](https://github.com/express-handlebars/express-handlebars)** & **[EJS](https://ejs.co/#install)**: 
      1. Packages: `npm i --save pug express-handlebars  ejs`
      2. TypeScript Support: `npm i -D @types/pug @types/express-handlebars  @types/ejs`
   2. **[Pug](https://pugjs.org/api/getting-started.html)** &mdash; *Minimalist Syntax* 🐶 \[**Supported in Express Out of the Box**\]:
      1. Using the **Pug** Templating Engine: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/618aa101f101cd45aa418d569d8c81f6e24c8910) 🌟
      2. Outputting Dynamic Content Using Pug Templates &mdash; `each`, `if`, `else` & `#{<object_name>}`: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/6250029b9cf7496fe667a4ba4487b492cd2ec234) & [Commit Details - Fixed `.active` class bug](https://github.com/Ch-sriram/node-js-deno/commit/7e27f7bd67e6fcbbc807e228ebe2fd2e181490fe)
      3. Converting Remaining HTML files to Pug templates: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/8b75ad801c561c2784be948ff2f86a86ea1aefcb)
      4. Adding a Base Layout using `block`s & Extending that Layout to other templates using `extends <layout-name>`: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/afa644d5523a54b4175ad36510b27ab62a36aadf)
      5. Finishing the Pug Template by adding conditional `.active` `class` property to elements in templates: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/5be59c1181e34ad65df90b307f2e3d6844aa4d86)
   3. **[Handlebars](https://github.com/express-handlebars/express-handlebars)** &mdash; *Templating language syntax similar to HTML, but keep the logic separate from the view* 👨🏾 \[**No Support from Express**\]:
      1. Working with Handlebars: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/dd9a442450a080206e05e43e56240f7febfa21b6)
      2. Converting our Project to Handlebars: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/b3b12e1d32769671411f679218780b3c973c2f2d)
      3. Adding the Layout to Handlebars: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/e0268ce4253d6c0ad147256720969f9e009fc4fc)
   4. **[EJS](https://ejs.co/#install)** &mdash; *Closest to JS, Simple Syntax & HTML like syntax* 📜⭐\[**Supported in Express Out of the Box**\]
      1. Working with **EJS**: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/99ae0cb6618dc39d7f5650f21b246955f35e223d)
      2. Working on the Layout with Partials/Includes using `<%- include(<path>) %>`: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/c40815e07aa389549e8a1b066a7e6342f8c5bff5)
   5. **[Assignment IV](./assignments/assignment-4/images/assignment-4.png)**:
      1. Solution using Pug Templates: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/3b92efdc0794c3d868b70dea205e1052362adbcb)
      2. Solution using EJS Templates: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/fc14b9fa75bd7ebf835635b3dcfc35871d4af444)

### Models Views & Controllers (MVC)

Contents of this section are in **[model-view-controller](https://github.com/Ch-sriram/node-js-deno/tree/main/model-view-controller)** directory.

1. [What's MVC?](./model-view-controller/README.md#mvc-model-view-controller-architecture) ⭐⭐
2. Adding Controllers: [Previous Setup](https://github.com/Ch-sriram/node-js-deno/commit/1cf5aa0e471d259105b0cfb90fc25817ea8e938e) -> [What needs changing?](https://github.com/Ch-sriram/node-js-deno/commit/db2fdad829a525a734934b43d207c9e1a066464c) -> **[Moving Core Logic to `controllers` directory](https://github.com/Ch-sriram/node-js-deno/commit/672bcbe2e968817a4f06cd6e9ccac8e8c293488e)**
3. Adding all other controllers &mdash; controller for error 404 route: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/8b6f9981e5fe88af78d8040b12ef5f419a7ce620)
4. Adding a `Product` Model using `Singleton Pattern`: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/e05e0b505faa344f5cb4f6430ce26b6db47c6191)
5. Storing Data (Model) in Files via the `fs.readFile()` and `fs.writeFile()` functions: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/10437f1c7c5f8e6aa5ef90603c767ec48efdd739)
6. Restructuring the directory structure for online shop application: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/96d4cbc069686b3a0cd4ec1ed3c47a44d4753752) 🌟🌟
7. Working on the Navigation &mdash; Adding New Links: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/c026a108d556ba879972502f006b60a25237a806)
8. Registering Routes for New Navigation Items: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/d15eaafb6c7ad37c03a9c8acf5195f77fb6f0689)
9. Letting the User Add More Fields (vis. `Image URL`, `Price` & `Description`) & Storing that Data: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/1c5b0bacab2d74a7eeb959775d5c794605c7d511)
10. Displaying Product Data: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/b057803431718b8faf770682ffa3a35c7a41e66b)
11. Preparing for Editing & Deleting Products: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/56227a19311841b63c7b081e78926c3125a6b183)
12. Adding another view/route: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/70617578555ab6e15a31f301ffeb73aacc295bbe)

### Dynamic Routes & Advanced Models

Contents of this section are in **[dynamic-routes-advanced-models](https://github.com/Ch-sriram/node-js-deno/tree/main/dynamic-routes-advanced-models)** directory.

1. Basic Setup: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/56eb188ee2ba81ca68b88e4ac86c54a1e9d66c35)
2. Adding Product ID to the Query Path: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/616512f2cfb055cf847848c2fd78260ca66118a1)
3. Dynamic Routes (Eg: `/products/:productId`) & Extracting Dynamic Params using `req.params.productId`: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/13dbed2d073e2e6e4ec29d462118954ad6bf6ec6)
4. Loading Product Details Data: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/106094655fdd210f6f88bc7570fc3c7774241f8f) ✨✨ &mdash; Many concepts covered!
5. Rendering the Product Detail View: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/705f92f080439801a15655c3481bc0bf4e220818)
6. Passing Data with `POST` Requests: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/b164f1e3eb18c1011a10f07badeee1ddc9b9fbcb)
7. Adding a Cart Model: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/cefbbb55cab2a04ca56d232815dd6fce0834aed9) ✨✨✨ V.V.Imp Section &mdash; Understand this before moving on!
8. Accessing Query Parameters in Controllers using `request.query`
   1. Rendering the Edit Page Manually: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/2dadadceab34bc2d76f2ed30b099dc9f1b1da66a)
   2. Pre-populating the Edit Product Page w. Data: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/c523b527c54e12e880af5267761ac403ba53af9f)
   3. Linking to the Edit Page &mdash; Reaching Edit Product Page through `Edit` button on the respective product: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/976400d3353e218a4a8b6fb7982f93edd4e2005c) ⭐
   4. Updating Product Data Model to Enable Editing Product Data: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/c0b2ad67bf3b7dd3e7c43fe3f80b25bd3a8025da)
9. Adding the Product Delete Functionality
   1. Changes in Product Model: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/16a45a87c42f1c374cfb3e2c5c7bb14bbb4c451f)
   2. Deleting Cart Items *i.e.*, Changes in Cart Model: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/d1f5398e292f30f353e20a14c6a8ec8726c9ae37)
10. Fixing Edit Product Bug In Relation to Cart Pricing: [Commit I - main](https://github.com/Ch-sriram/node-js-deno/commit/212f075234022a65fc15d378549680c12683d570) & [Commit II - for-of loop to reduce function change](https://github.com/Ch-sriram/node-js-deno/commit/df25f80db5099847ec4ff8d68e62e6c32706fdca) &mdash; ⭐⭐ *focus on `save()` changes && new methods in both `Product` and `Cart` models*
