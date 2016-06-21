import 'babel-polyfill';
import React from 'react';

// make expect and sinon global
import chai, { assert, expect } from 'chai';

import chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);

import chaiString from 'chai-string';
chai.use(chaiString);

import sinon from 'sinon';

global.assert = assert;
global.expect = expect;
global.sinon = sinon;
global.React = React;

// Prevent compiling of .scss
require.extensions['.scss'] = () => {};

// Define user agent for Radium
global.navigator = {
  userAgent: `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5)
              AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.97 Safari/537.36`
};

/* init jsdom  */

import { jsdom } from 'jsdom';

const exposedProperties = ['navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};
