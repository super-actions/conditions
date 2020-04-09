import 'mocha';
import { expect } from 'chai';

import { descriptionMatches } from 'src/descriptionMatches';
import { createIssue, createPR } from './support';

describe('#descriptionMatches()', () => {
  context('on issue', () => {
    it('should return true', () => {
      expect(
        descriptionMatches(
          { pattern: /foo/ },
          createIssue({ description: 'foobar' }),
        ),
      ).to.be.true;
      expect(
        descriptionMatches(
          { pattern: /^foo\d+bar$/ },
          createIssue({ description: 'foo123bar' }),
        ),
      ).to.be.true;
    });

    it('should return false', () => {
      expect(
        descriptionMatches(
          { pattern: /foo/ },
          createIssue({ description: 'bar' }),
        ),
      ).to.be.false;
      expect(
        descriptionMatches(
          { pattern: /^foo\d+bar$/ },
          createIssue({ description: 'foobar' }),
        ),
      ).to.be.false;
    });
  });

  context('on pull request', () => {
    it('should return true', () => {
      expect(
        descriptionMatches(
          { pattern: /foo/ },
          createPR({ description: 'foobar' }),
        ),
      ).to.be.true;
      expect(
        descriptionMatches(
          { pattern: /^foo\d+bar$/ },
          createPR({ description: 'foo123bar' }),
        ),
      ).to.be.true;
    });

    it('should return false', () => {
      expect(
        descriptionMatches(
          { pattern: /foo/ },
          createPR({ description: 'bar' }),
        ),
      ).to.be.false;
      expect(
        descriptionMatches(
          { pattern: /^foo\d+bar$/ },
          createPR({ description: 'foobar' }),
        ),
      ).to.be.false;
    });
  });
});
