const npm = require('libnpm');

(async () => {
  const published = await npm.fetch.json('peerage');
  const local = require('../package.json');

  const publishedVersion = published['dist-tags'].latest;
  const localVersion = local.version;

  if (publishedVersion !== localVersion) {
    console.log(`deploying ${localVersion} (current: ${publishedVersion})`);
    npm.publish();
  } else {
    console.log(`skiping deploy ${localVersion}`);
  }
})();
