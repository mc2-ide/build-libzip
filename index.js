const core = require('@actions/core');
const {exec} = require('@actions/exec');
const {join} = require('path');

async function run() {
  try {
    await exec('git', ['clone', 'https://github.com/nih-at/libzip']);
    await exec('./vsbuild.cmd', [], {
      cwd: join(process.cwd(), './libzip/vstudio')
    });
  // TODO - Get context data

  // TODO - make request to the GitHub API to comment on the issue 
  }
  catch (error) {
    core.setFailed(error.message);
    throw error;
  }
}
module.exports = run;

run();