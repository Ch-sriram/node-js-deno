import path from 'path';

export const rootDir = path.dirname(require.main!.filename ?? '');
console.log(rootDir);

export default rootDir;
