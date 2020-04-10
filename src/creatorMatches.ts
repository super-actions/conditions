interface ConditionCreatorMatches {
  pattern: RegExp;
}

/**
 * Checks if the creator of an issue or pull request matches a Regex pattern.
 *
 * @param issue  The issue or pull request to check.
 * @returns  If the creator matches the pattern.
 */
export const creatorMatches = (
  {
    /** Regex pattern to test against creator. */
    pattern,
  }: ConditionCreatorMatches,
  issue: IssueProps | PRProps,
) => pattern.test(issue.creator);
