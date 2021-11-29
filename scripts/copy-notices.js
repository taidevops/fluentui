const monorepo = require('./monorepo');
const path = require('path');
const fs = require('fs');

async function copyNotices() {
  const noticeFilePath = path.resolve(monorepo.findGitRoot(), 'packages/react-components', 'NOTICE.txt');

  if (!fs.existsSync(noticeFilePath)) {
    throw new Error('NOTICE.txt file does not exsit in packages/react-components');
  }

  console.log(`NOTICE.txt exists in ${noticeFilePath}`);
}

if (require.main === module) {
  copyNotices().catch(err => {
    console.error(err);
    process.exit(1);
  });
}
