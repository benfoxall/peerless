# 👑 Peerage

## _🚨 This isn't implemented yet 🚨_

## A web server that runs _inside_ your web browser

```js
// window1.html
const server = new Server();

console.log(await server.endpoint); // unique-generated-code-abcde

for await (const { message, reply } of server) {
  reply('Hello, ' + message);
}
```

```ts
// window2.html
const client = new Client('unique-generated-code-abcde');

const response = await client.send('Peerage');

console.log(response);
// Hello, Peerage
```

## [todo: video]

Good Stuff 👌:

- peer-to-peer – direct connection between browsers (fast!)
- 1:N – let loads of people connect to you
- streaming – for fun/interactive UIs
