import 'mocha';
import { expect } from 'chai';

import { isLocked } from 'src/isLocked';
import { createIssue, createPR } from './support';

describe('#isLocked()', () => {
  context('on issue', () => {
    it('should return true', () => {
      expect(isLocked({ value: true }, createIssue({ locked: true })));
      expect(isLocked({ value: false }, createIssue({ locked: false })));
    });

    it('should return false', () => {
      expect(isLocked({ value: true }, createIssue({ locked: false })));
      expect(isLocked({ value: false }, createIssue({ locked: true })));
    });
  });

  context('on pull request', () => {
    it('should return true', () => {
      expect(isLocked({ value: true }, createPR({ locked: true })));
      expect(isLocked({ value: false }, createPR({ locked: false })));
    });

    it('should return false', () => {
      expect(isLocked({ value: true }, createPR({ locked: false })));
      expect(isLocked({ value: false }, createPR({ locked: true })));
    });
  });
});
