const express = require('express')
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const App = require('../src/App')

const server = express();

server.get('/', (req: any, res: any) => {
<<<<<<< Updated upstream
  const html = ReactDOMServer.renderToString(React.createElement(App));
=======
<<<<<<< HEAD
  const html = ReactDOMServer.renderToString(App as any);
=======
  const html = ReactDOMServer.renderToString(React.createElement(App));
>>>>>>> 66fc9efbb51874a75e589857da82afb808461354
>>>>>>> Stashed changes
  res.send(`
     <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>React SSR with Client-Side Hydration</title>
    </head>
    <body>
      <div id="root">${html}</div>
      <script src="/bundled-client.js"></script>
    </body>
    </html>
  `);
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
