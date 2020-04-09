import 'mocha';
import { expect } from 'chai';

import { creatorMatches } from 'src/creatorMatches';
import { createIssue, createPR } from './support';

describe('#creatorMatches()', () => {
  context('on issue', () => {
    it('should return true', () => {
      expect(
        creatorMatches({ pattern: /foo/ }, createIssue({ creator: 'foobar' })),
      ).to.be.true;
      expect(
        creatorMatches(
          { pattern: /^foo\d+bar$/ },
          createIssue({ creator: 'foo123bar' }),
        ),
      ).to.be.true;
    });

    it('should return false', () => {
      expect(
        creatorMatches({ pattern: /foo/ }, createIssue({ creator: 'bar' })),
      ).to.be.false;
      expect(
        creatorMatches(
          { pattern: /^foo\d+bar$/ },
          createIssue({ creator: 'foobar' }),
        ),
      ).to.be.false;
    });
  });

  context('on pull request', () => {
    it('should return true', () => {
      expect(
        creatorMatches({ pattern: /foo/ }, createPR({ creator: 'foobar' })),
      ).to.be.true;
      expect(
        creatorMatches(
          { pattern: /^foo\d+bar$/ },
          createPR({ creator: 'foo123bar' }),
        ),
      ).to.be.true;
    });

    it('should return false', () => {
      expect(creatorMatches({ pattern: /foo/ }, createPR({ creator: 'bar' })))
        .to.be.false;
      expect(
        creatorMatches(
          { pattern: /^foo\d+bar$/ },
          createPR({ creator: 'foobar' }),
        ),
      ).to.be.false;
    });
  });
});
