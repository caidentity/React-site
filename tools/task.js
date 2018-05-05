/**
 * React Site
 * 
 *
 * Copyright © 2017-present Craig Aucutt. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/*
 * Minimalistic script runner. Usage example:
 *
 *     node tools/deploy.js
 *     Starting 'deploy'...
 *     Starting 'build'...
 *     Finished 'build' in 3212ms
 *     Finished 'deploy' in 582ms
 */

function run(task, action, ...args) {
  const command = process.argv[2];
  const taskName = command && !command.startsWith('-') ? `${task}:${command}` : task;
  const start = new Date();
  process.stdout.write(`Starting '${taskName}'...\n`);
  return Promise.resolve().then(() => action(...args)).then(() => {
    process.stdout.write(`Finished '${taskName}' after ${new Date().getTime() - start.getTime()}ms\n`);
  }, err => process.stderr.write(`${err.stack}\n`));
}

process.nextTick(() => require.main.exports());
module.exports = (task, action) => run.bind(undefined, task, action);
