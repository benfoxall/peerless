const { execSync } = require('child_process');

const published = JSON.parse(execSync('npm info peerage --json'));
const current = require('../package.json').version;

if (!published.versions.includes(current)) {
  console.log(`publish! ${current} (current: ${published.versions})`);
  execSync('npm publish');
} else {
  console.log(`skiping deploy ${current}`);
}
