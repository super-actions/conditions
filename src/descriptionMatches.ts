interface ConditionDescriptionMatches {
  pattern: RegExp;
}

export const descriptionMatches = (
  { pattern }: ConditionDescriptionMatches,
  issue: IssueProps | PRProps,
) => pattern.test(issue.description);
