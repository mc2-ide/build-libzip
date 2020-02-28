const core = require('@actions/core');
const {exec} = require('@actions/exec');
const {join} = require('path');
const {rmdirSync} = require('fs');

async function run() {
  try {
    await exec('git', ['clone', 'https://github.com/nih-at/libzip']);
    rmdirSync(join(process.cwd(), './libzip/vstudio/zlib'), {recursive: true});
    await exec('git', ['clone', 'https://github.com/madler/zlib'], {
      cwd: join(process.cwd(), './libzip/vstudio')
    });
    await exec('./vsbuild.cmd', ['build', 'Visual Studio 16 2019', 'v142'], {
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