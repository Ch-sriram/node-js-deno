import path from 'path';

export enum PORTS {
  localhost = 3000
}

export const rootDir = path.dirname(require.main!.filename);

export default {
  PORTS,
  rootDir
};
