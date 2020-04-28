# 👑 Peerage

## _🚨 This isn't implemented yet 🚨_

## A web server that runs inside a web browser

Using peer-to-peer communication for fast and free messaging.

```js
const server = new Server();

console.log(await server.endpoint); // unique-generated-id-abcde

for await (const { message, reply } of server) {
  reply('Hello, ' + message);
}
```

```ts
const client = new Client('unique-generated-id-abcde');

const response = await client.send('Peerage');

console.log(response);
// Hello, Peerage
```

## [todo: video]

### Streaming
