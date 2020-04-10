interface ConditionTitleMatches {
  pattern: RegExp;
}

/**
 * Checks if an issue or pull request's title matches a Regex pattern.
 *
 * @param issue  The issue or pull request to check.
 * @returns  If the title matches the pattern.
 */
export const titleMatches = (
  {
    /** Regex pattern to test against description. */
    pattern,
  }: ConditionTitleMatches,
  issue: IssueProps | PRProps,
) => pattern.test(issue.title);
