import { Resolver } from '@parcel/plugin';
import path from 'path';

export default new Resolver({
  async resolve({specifier}) {
    if (specifier === 'special-module') {
      return {
        // This may look arbitrary but I've checked best as Parcel's console allows me to do that this is correct.
        filePath: path.join(__dirname, '..', '..', 'example', 'special-modulus.js'),
        // This really should be correct. I've even pasted it in TypeScript to be extra sure.
        code: 'import { foo } from "./foo";\nexport default foo;'
      };
    }
    return null;
  }
});
