declare global {
  /**
   * Properties shared by both issues and pull requests.
   */
  interface Props {
    /** Github username of the creator of this issue or pull request. */
    creator: string;
    /** Issue/pull request description. */
    description: string;
    /** If this issue or pull request is locked. */
    locked: boolean;
    /** If this issue or pull request is open or closed. */
    state: 'open' | 'closed';
    /** Issue/pull request title. */
    title: string;
  }

  /**
   * Properties exclusive to issues.
   */
  interface IssueProps extends Props {}

  /**
   * Properties excluse to pull requests.
   */
  interface PRProps extends Props {
    /** The branch being merged by this pull request. */
    branch: string;
    /** Files modified by this pull request. */
    files: string[];
    /** If the pull request is a draft. */
    isDraft: boolean;
  }
}

export { creatorMatches } from './creatorMatches';
export { descriptionMatches } from './descriptionMatches';
export { isLocked } from './isLocked';
export { isOpen } from './isOpen';
export { titleMatches } from './titleMatches';

export * from './pr';
