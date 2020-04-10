interface ConditionIsOpen {
  value: boolean;
}

/**
 * Checks if an issue or pull request is open or closed.
 *
 * @param issue  The issue or pull request to check.
 * @returns  If the issue or pull request's open/closed state matches the
 * desired `value`.
 */
export const isOpen = (
  {
    /** Desired open/closed state - `true` for open, `false` for closed. */
    value,
  }: ConditionIsOpen,
  issue: IssueProps | PRProps,
) => (value ? issue.state === 'open' : issue.state === 'closed');
