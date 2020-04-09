const defaultIssue: IssueProps = {
  creator: 'JohnSmith',
  description: 'Lorem ipsum dolor sit amet.',
  locked: false,
  state: 'open',
  title: 'Lorem Ipsum',
};

export const createIssue = (overwrites: Partial<IssueProps>) => ({
  ...defaultIssue,
  ...overwrites,
});

const defaultPR: PRProps = {
  branch: 'develop',
  creator: 'JohnSmith',
  description: 'Lorem ipsum dolor sit amet.',
  files: ['src/index.ts', 'src/foo/bar/file.ts'],
  isDraft: false,
  locked: false,
  state: 'open',
  title: 'Lorem Ipsum',
};

export const createPR = (overwrites: Partial<PRProps>) => ({
  ...defaultPR,
  ...overwrites,
});
