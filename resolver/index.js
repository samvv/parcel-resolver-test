import {Resolver} from '@parcel/plugin';
import path from 'path';

export default new Resolver({
  async resolve({specifier}) {
    if (specifier === 'special-module') {
      process.stdout.write(path.join(__dirname) + '\n\n');
      process.stdout.write(path.join(__dirname, '..', '..', 'example', 'special-modulus.js') + '\n\n');
      return {
        filePath: path.join(__dirname, '..', '..', 'example', 'special-modulus.js'),
        code: 'import { foo } from "./foo";\nexport default 44;'
      };
    }
    return null;
  }
});
