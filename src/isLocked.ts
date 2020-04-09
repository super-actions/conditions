interface ConditionIsLocked {
  value: boolean;
}

export const isLocked = (
  { value }: ConditionIsLocked,
  issue: IssueProps | PRProps,
) => issue.locked === value;
