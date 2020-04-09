declare global {
  interface Props {
    creator: string;
    description: string;
    locked: boolean;
    state: 'open' | 'closed';
    title: string;
  }

  interface IssueProps extends Props {}

  interface PRProps extends Props {
    branch: string;
    files: string[];
    isDraft: boolean;
  }
}

export { creatorMatches } from './creatorMatches';
export { descriptionMatches } from './descriptionMatches';
export { isLocked } from './isLocked';
export { isOpen } from './isOpen';
export { titleMatches } from './titleMatches';

export * from './pr';
