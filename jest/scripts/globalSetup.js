/* Global setup modle.
**
** This module exports an async function that is triggered
** once before all test suites.
**
*/

const chalk = require('chalk');

// eslint-disable-next-line require-await
module.exports = async function() {
    // eslint-disable-next-line no-console
    console.log(chalk.green('λ'));
    global.t = 'hello';
};
