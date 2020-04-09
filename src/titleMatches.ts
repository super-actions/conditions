interface ConditionTitleMatches {
  pattern: RegExp;
}

export const titleMatches = (
  { pattern }: ConditionTitleMatches,
  issue: IssueProps | PRProps,
) => pattern.test(issue.title);
