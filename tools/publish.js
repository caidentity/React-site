/**
 * React Site
 * 
 *
 * Copyright © 2017-present Craig Aucutt. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

const path = require('path');
const firebase = require('firebase-tools');
const build = require('./build');
const task = require('./task');
const config = require('./config');

// Build and deploy the app to Firebase
module.exports = task('deploy', () => Promise.resolve()
  .then(() => build())
  .then(() => firebase.login({ nonInteractive: false }))
  .then(() => firebase.deploy({
    project: config.project,
    cwd: path.resolve(__dirname, '../'),
  }))
  .then(() => { setTimeout(() => process.exit()); }));
