import { match } from 'minimatch';

interface ConditionFilesMatch {
  glob: string;
}

export const filesMatch = ({ glob }: ConditionFilesMatch, pr: PRProps) =>
  match(pr.files, glob).length > 0;
