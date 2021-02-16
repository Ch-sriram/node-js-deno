// Core NodeJS Imports
import path from 'path';

/**
 * path.dirname(): returns the directory name of the path given
 * into the method.
 * 
 * process: A property that's available in all the files in 
 * NodeJS, inside which there will be a mainModule property, 
 * which refers to the module which was created in index.ts.
 * And then, on process.mainModule, one more property can be
 * chained --- called as `filename`, i.e., the property passed
 * onto path.dirname() is process.mainModule.filename
 */
// const rootDir = path.dirname(process.mainModule!.filename); // @deprecated — since v14.0.0 - use require.main instead.
// https://stackoverflow.com/questions/64884587/deprecated-message-auto-import-from-process-property-nodejs-process-mainmo
const rootDir = path.dirname(require.main!.filename ?? '');

export default rootDir;
