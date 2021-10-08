import path from 'path';

export const CONSTANTS = {
  PORTS: { localhost: 3000 },
  ROOT_DIR: path.dirname(require.main!.filename)
} as const;

export default CONSTANTS;
