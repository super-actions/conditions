import 'mocha';
import { expect } from 'chai';

import { titleMatches } from 'src/titleMatches';
import { createIssue, createPR } from './support';

describe('#titleMatches()', () => {
  context('on issue', () => {
    it('should return true', () => {
      expect(titleMatches({ pattern: /foo/ }, createIssue({ title: 'foobar' })))
        .to.be.true;
      expect(
        titleMatches(
          { pattern: /^foo\d+bar$/ },
          createIssue({ title: 'foo123bar' }),
        ),
      ).to.be.true;
    });

    it('should return false', () => {
      expect(titleMatches({ pattern: /foo/ }, createIssue({ title: 'bar' }))).to
        .be.false;
      expect(
        titleMatches(
          { pattern: /^foo\d+bar$/ },
          createIssue({ title: 'foobar' }),
        ),
      ).to.be.false;
    });
  });

  context('on pull request', () => {
    it('should return true', () => {
      expect(titleMatches({ pattern: /foo/ }, createPR({ title: 'foobar' }))).to
        .be.true;
      expect(
        titleMatches(
          { pattern: /^foo\d+bar$/ },
          createPR({ title: 'foo123bar' }),
        ),
      ).to.be.true;
    });

    it('should return false', () => {
      expect(titleMatches({ pattern: /foo/ }, createPR({ title: 'bar' }))).to.be
        .false;
      expect(
        titleMatches({ pattern: /^foo\d+bar$/ }, createPR({ title: 'foobar' })),
      ).to.be.false;
    });
  });
});
