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
