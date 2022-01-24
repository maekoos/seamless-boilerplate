# Seamless: Getting started

**This is a template for getting started with seamless.** Clone this repository
and follow the steps below.

1. Create a react app using cra. _Only react is fully supported at the moment._

```sh
npx create-react-app client
```

2. Update the `seamless.js` config file and start the server.

Change the output path to `client/src/api.js` or whatever you would like the
generated API file to be stored. Uncomment this line:

```js
// in seamless.js:
module.exports = {
    ...
    client: {
        ...
        // outputPath: path.join(__dirname, 'client/src/api.js'),
    }
}
```

Run `npm install` in the root directory and then run this command to start the
server:

```sh
npm i # or use yarn

# Keep this command running during development
# (the sever will reload automatically)
npm run start:watch
```

3. Add `jwt-decode` to your client project.

```sh
cd client/
npm install --save jwt-decode
# or
yarn add jwt-decode
```

4. Call `init()` on the client

Add these lines to `client/src/index.js`:

```js
import { init } from "./api"; // or whatever you saved your api-file as
init();
```

5. Use your api!

You are now ready to start using your API! To call an API-function, import
`functions` from the generated api file. `functions` is an object with the same
functions as the ones defined in server/index.js.

To call your first function, use this snippet inside of your `useEffect`-hooks:

```js
import { functions } from "./api"; // or whatever you saved your api-file as

...

await functions.hello();
```

The API is defined in `server/index.js`. We recommend using multiple files in
`index.js` by requiring the different parts of your api:

```js
module.exports = {
  async hello() {
    console.log("HELLO");
  },
  authentication: require("./authentication"),
  users: require("./users"),
  posts: require("./posts"),
  ...
};
```
