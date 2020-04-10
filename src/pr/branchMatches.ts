interface ConditionBranchMatches {
  pattern: RegExp;
}

/**
 * Checks if a pull request's head branch matches a Regex pattern.
 *
 * @param pr  The pull request to check.
 * @returns  If the head branch matches the pattern.
 */
export const branchMatches = (
  {
    /** Regex pattern to test against head branch. */
    pattern,
  }: ConditionBranchMatches,
  pr: PRProps,
) => pattern.test(pr.branch);
