interface ConditionIsOpen {
  value: boolean;
}

export const isOpen = (
  { value }: ConditionIsOpen,
  issue: IssueProps | PRProps,
) => (value ? issue.state === 'open' : issue.state === 'closed');
