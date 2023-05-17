import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { exec } from 'node:child_process';
import fs from 'node:fs/promises';

const dirName = path.dirname(path.resolve(fileURLToPath(import.meta.url)));

const srcDir = path.resolve(dirName, '../src');

const dirs = [
  'containers',
  'ui',
  'api',
  'providers',
  'store/slices',
  'hooks',
];

const command = [
  'cti',
  'create',
  ...dirs.map((dir) => `./src/${dir}`),
  '-b',
  '-w',
].join(' ');

let process: ReturnType<typeof exec>;
let generating = false;
const build = () => {
  generating = true;
  console.log('Generating imports');
  process?.kill();
  process = exec(command, {
    cwd: path.resolve(dirName, '..'),
  }, () => {
    setTimeout(() => {
      generating = false;
    }, 350);
  });
};

let timeout: ReturnType<typeof setTimeout>;
const run = () => {
  clearTimeout(timeout);
  timeout = setTimeout(build, 500);
};

console.log('Watching imports');

// eslint-disable-next-line no-restricted-syntax,no-unused-vars
for await (const event of fs.watch(srcDir, {
  recursive: true,
})) {
  if (generating) {
    // eslint-disable-next-line no-continue
    continue;
  }

  const filePath = path.relative(srcDir, path.resolve(srcDir, event.filename)).replace(/\//, '/');

  if (!dirs.some((dir) => filePath.startsWith(dir))) {
    // eslint-disable-next-line no-continue
    continue;
  }

  generating = true;

  run();
}
