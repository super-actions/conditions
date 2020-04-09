interface ConditionIsDraft {
  value: boolean;
}

export const isDraft = ({ value }: ConditionIsDraft, pr: PRProps) =>
  pr.isDraft === value;
