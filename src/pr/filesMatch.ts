import { match } from 'minimatch';

interface ConditionFilesMatch {
  glob: string;
}

/**
 * Checks if the files modified by a pull request match a glob pattern.
 *
 * The glob will be tested against each file. This condition will return true
 * if any files matched the glob.
 *
 * Glob patterns are matched using the
 * [minimatch](https://github.com/isaacs/minimatch) library.
 *
 * @param pr  The pull request to check.
 * @returns  If any files match the glob.
 */
export const filesMatch = (
  {
    /** The glob pattern to test against the files.  */
    glob,
  }: ConditionFilesMatch,
  pr: PRProps,
) => match(pr.files, glob).length > 0;
