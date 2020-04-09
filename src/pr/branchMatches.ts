interface ConditionBranchMatches {
  pattern: RegExp;
}

export const branchMatches = (
  { pattern }: ConditionBranchMatches,
  pr: PRProps,
) => pattern.test(pr.branch);
