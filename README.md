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

## Table of Contents ©

- **[Introduction](#introduction)**
- **[Understanding Basics](#understanding-basics)**

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
