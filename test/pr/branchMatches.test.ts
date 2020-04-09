import 'mocha';
import { expect } from 'chai';

import { branchMatches } from 'src/pr/branchMatches';
import { createPR } from '../support';

describe('#branchMatches()', () => {
  context('on pull request', () => {
    it('should return true', () => {
      expect(
        branchMatches(
          { pattern: /feature\/.+/ },
          createPR({ branch: 'feature/foo' }),
        ),
      ).to.be.true;
      expect(
        branchMatches(
          { pattern: /^foo\d+bar$/ },
          createPR({ branch: 'foo123bar' }),
        ),
      ).to.be.true;
    });

    it('should return false', () => {
      expect(
        branchMatches(
          { pattern: /feature\/.+/ },
          createPR({ branch: 'bugfix/foo' }),
        ),
      ).to.be.false;
      expect(
        branchMatches(
          { pattern: /^foo\d+bar$/ },
          createPR({ branch: 'foobar' }),
        ),
      ).to.be.false;
    });
  });
});
