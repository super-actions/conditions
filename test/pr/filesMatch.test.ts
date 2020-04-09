import 'mocha';
import { expect } from 'chai';

import { filesMatch } from 'src/pr/filesMatch';
import { createPR } from '../support';

describe('#filesMatch()', () => {
  context('on pull request', () => {
    it('should return true', () => {
      expect(
        filesMatch(
          { glob: 'test/**/*' },
          createPR({ files: ['src/index.ts', 'test/foo.ts'] }),
        ),
      ).to.be.true;
      expect(
        filesMatch(
          { glob: 'package*.json' },
          createPR({
            files: ['src/index.ts', 'test/foo.ts', 'package-lock.json'],
          }),
        ),
      ).to.be.true;
    });

    it('should return false', () => {
      expect(
        filesMatch(
          { glob: 'test/*' },
          createPR({ files: ['src/index.ts', 'test/foo/bar.ts'] }),
        ),
      ).to.be.false;
      expect(
        filesMatch(
          { glob: 'package-lock*' },
          createPR({ files: ['src/index.ts', 'test/foo.ts', 'package.json'] }),
        ),
      ).to.be.false;
    });
  });
});
