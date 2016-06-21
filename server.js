const webpack = require('webpack');
const config = require('./webpack.config.js');
const WebpackDevServer = require('webpack-dev-server');

const compiler = webpack(config);

const server = new WebpackDevServer(compiler, {
  noInfo: false,
  hot: true,
  historyApiFallback: true,
  stats: {
    assets: false,
    colors: true,
    version: false,
    hash: false,
    timings: false,
    chunks: false,
    chunkModules: false
  },
  publicPath: config.output.publicPath
});

const port = 3000;

server.listen(port, error => {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
    console.info("==> 🌎  Waiting for webpack...");
  }
});

// TODO this lines should disappear after you enable real api

const mockedApiServer = new (require('express'))();
const mockedApiPort = 3001;

const authors = require('./mocks/authors.json'); // in real app this data will be from mongo or other db
const books = require('./mocks/books.json'); // in real app this data will be from mongo or other db

mockedApiServer.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

mockedApiServer.use('/apiv1/authors', (req, res) => res.json(authors));
mockedApiServer.use('/apiv1/author/:name', (req, res) => {
  const author = authors.find(author => author.name === req.params.name)
  if (author) {
    return res.json(author);
  }
  return res.status(404).send({message: 'Not found'});
});
mockedApiServer.use('/apiv1/books/:genre', (req, res) => {
  const filteredBooks = books.filter(book => book.genre.indexOf(req.params.genre) !== -1);
  res.json(filteredBooks)
});
mockedApiServer.use('/apiv1/books', (req, res) => res.json(books));
mockedApiServer.use('/apiv1/book/:name', (req, res) => {
  const book = books.find(book => book.name === req.params.name)
  if (book) {
    return res.json(book);
  }
  return res.status(404).send({message: 'Not found'});
});

mockedApiServer.listen(mockedApiPort, error => {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Mocked api server started on port", mockedApiPort);
  }
});
