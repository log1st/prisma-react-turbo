import { generateTemplateFiles, CaseConverterEnum } from '@oapis/generate-template-files';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirName = path.dirname(fileURLToPath(import.meta.url));
const resolve = (url: string) => path.resolve(dirName, url);

await generateTemplateFiles([
  {
    option: 'Api: endpoint',
    defaultCase: CaseConverterEnum.CamelCase,
    entry: {
      folderPath: resolve('templates/api/endpoint'),
    },
    stringReplacers: [
      {
        slot: '__type__',
        question: 'Type (mutation/query)',
      },
      {
        slot: '__namespace__',
        question: 'Namespace',
      },
      {
        slot: '__name__',
        question: 'Name',
      },
    ],
    output: {
      path: resolve(
        '../apps/frontend/src/api/apis/',
      ),
      overwrite: true,
    },
  },
]);
