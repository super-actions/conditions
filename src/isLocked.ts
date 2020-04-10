interface ConditionIsLocked {
  value: boolean;
}

/**
 * Checks an issue or pull request's locked state.
 *
 * @param issue  The issue or pull request to check.
 * @returns  If the issue or pull request's locked state matches the desired
 * `value`.
 */
export const isLocked = (
  {
    /** Desired locked state - `true` for locked, `false` for not locked. */
    value
  }: ConditionIsLocked,
  issue: IssueProps | PRProps,
) => issue.locked === value;
