import 'mocha';
import { expect } from 'chai';

import { isOpen } from 'src/isOpen';
import { createIssue, createPR } from './support';

describe('#isOpen()', () => {
  context('on issue', () => {
    it('should return true', () => {
      expect(isOpen({ value: true }, createIssue({ state: 'open' })));
      expect(isOpen({ value: false }, createIssue({ state: 'closed' })));
    });

    it('should return false', () => {
      expect(isOpen({ value: true }, createIssue({ state: 'closed' })));
      expect(isOpen({ value: false }, createIssue({ state: 'open' })));
    });
  });

  context('on pull request', () => {
    it('should return true', () => {
      expect(isOpen({ value: true }, createPR({ state: 'open' })));
      expect(isOpen({ value: false }, createPR({ state: 'closed' })));
    });

    it('should return false', () => {
      expect(isOpen({ value: true }, createPR({ state: 'closed' })));
      expect(isOpen({ value: false }, createPR({ state: 'open' })));
    });
  });
});
