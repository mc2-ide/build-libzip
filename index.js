const core = require('@actions/core');
const {exec} = require('@actions/exec');
async function run() {
  try {
    await exec('git', ['clone', 'https://github.com/nih-at/libzip']);
    await exec('.\\libzip\\vstudio\\vsbuild.cmd', {
      cwd: '.\\libzip\\vstudio'
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