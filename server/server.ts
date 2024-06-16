import express from 'express';
import React, { ReactElement } from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../src/App';

const server = express();

server.get('/', (req, res) => {
  const html = ReactDOMServer.renderToString(<App />);
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR with React and TypeScript</title>
      </head>
      <body>
        <div id="app">${html}</div>
      </body>
    </html>
  `);
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
