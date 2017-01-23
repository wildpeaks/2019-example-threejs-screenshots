/* eslint-env node */
/* eslint-disable no-sync */
'use strict';
const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');

exports.config = {
	directConnect: true,
	allScriptsTimeout: 15000,
	capabilities: {
		browserName: 'chrome'
	},
	suites: {
		screenshots: 'test/tests.js'
	},
	jasmineNodeOpts: {
		showColors: true
	},
	beforeLaunch: () => {
		const folder = path.join(__dirname, 'test/screenshots');
		rimraf.sync(folder);
		fs.mkdirSync(folder);
	}
};
