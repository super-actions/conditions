interface ConditionCreatorMatches {
  pattern: RegExp;
}

export const creatorMatches = (
  { pattern }: ConditionCreatorMatches,
  issue: IssueProps | PRProps,
) => pattern.test(issue.creator);
