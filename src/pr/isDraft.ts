interface ConditionIsDraft {
  value: boolean;
}

/**
 * Checks a pull request's draft state.
 *
 * Info about draft pull requests can be found
 * [here](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests#draft-pull-requests).
 *
 * @param pr  The pull request to check.
 * @returns  If the pull request's draft state matches the desired `value`.
 */
export const isDraft = (
  {
    /** Desired draft state - `true` for draft, `false` for not a draft. */
    value,
  }: ConditionIsDraft,
  pr: PRProps,
) => pr.isDraft === value;
