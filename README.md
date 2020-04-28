# 👑 Peerage

## _🚨 This isn't implemented yet 🚨_

## A web server that runs _inside_ your web browser

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

### 1:N

Connect lots of devices together.

### Speed

Content travels directly between peers

### Bidirectional streaming

Send a stream of messages for interative UIs
