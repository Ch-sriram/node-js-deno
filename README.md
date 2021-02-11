# Proof of Concept: NodeJS & Deno

Repository contains concepts and code related to Node JS (Vanilla Node, Express Framework, REST APIs, GraphQL, Websockets & More...) & Deno, both as a Runtime Environment.

## References

- **[NodeJS Course](https://www.udemy.com/course/nodejs-the-complete-guide/)** by **[Maximilian Schwarzmüller](https://twitter.com/maxedapps?s=20)**
- **[NodeJS Documentation](https://nodejs.org/en/docs/)**

## Details on NodeJS

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

## Table of Contents ©

- **[Introduction](#introduction)**
- **[Understanding Basics](#understanding-basics)**
- **[Express Framework 🚅🌪💨](#express-framework-)**

### Introduction

1. First NodeJS App: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/3d01adb458180d2e22eebc510a59b706a9729624)
2. Writing to a new file using `fs` module with `fs.writeFileSync()` method (Basic Intro): [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/76b67ea753649d5743be8c75075e23db0164af78)

### Understanding Basics

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
10. **[Assignment I](./understanding-basics/images/assignment-I.png)**: **[My Solution](./assignments/assignment-1/)**
11. [Debugging using VS Code's NodeJS Debugger](https://code.visualstudio.com/docs/nodejs/nodejs-debugging): [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/21014c85c29f0d9e20d6d021f4025eab6a5853cf) 🌟

### Express Framework 🚅🌪💨

1. Prerequisite: A Basic Setup: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/a6ab359b7d460f4329a621e9550ce4e43c53299e)
2. Installing Express & Using `express()`: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/c605244443c83725e89f428e7c5f6fec837a292a)
3. **[Adding Middleware](./working-with-express/README.md#express-as-a-middleware)** using `app.use()`: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/3483e1ba4c15c8e5cfae3ff7f0e8ea81e49b0b02)
4. How Middleware Works: [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/a61644bc3205d21ca45305ea5d929297410f20de)
5. [Express.js &mdash; Looking Behind the Scenes](./working-with-express/README.md#expressjs-behind-the-scenes): [Commit Details](https://github.com/Ch-sriram/node-js-deno/commit/973f10bed1deffd662bb7a150cc0f5cc096f762e)
