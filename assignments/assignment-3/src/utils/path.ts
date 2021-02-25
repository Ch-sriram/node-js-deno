import path from 'path';

const rootDir = path.dirname((require.main && require.main.filename) ?? '');
export default rootDir;
