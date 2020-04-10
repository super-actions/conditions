interface ConditionDescriptionMatches {
  pattern: RegExp;
}

/**
 * Checks if an issue or pull request's description matches a Regex pattern.
 *
 * @param issue  The issue or pull request to check.
 * @returns  If the description matches the pattern.
 */
export const descriptionMatches = (
  {
    /** Regex pattern to test against description. */
    pattern,
  }: ConditionDescriptionMatches,
  issue: IssueProps | PRProps,
) => pattern.test(issue.description);
