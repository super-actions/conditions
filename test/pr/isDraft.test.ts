import 'mocha';
import { expect } from 'chai';

import { isDraft } from 'src/pr/isDraft';
import { createPR } from '../support';

describe('#isDraft()', () => {
  context('on pull request', () => {
    it('should return true', () => {
      expect(isDraft({ value: true }, createPR({ isDraft: true }))).to.be.true;
      expect(isDraft({ value: false }, createPR({ isDraft: false }))).to.be
        .true;
    });

    it('should return false', () => {
      expect(isDraft({ value: true }, createPR({ isDraft: false }))).to.be
        .false;
      expect(isDraft({ value: false }, createPR({ isDraft: true }))).to.be
        .false;
    });
  });
});
