import {exec, ExecOptions, ExecException} from 'child_process';

export interface CommandResult {
  stdout:string|Buffer, stderr:string|Buffer
}

/**
 * Executes a shell command and return it as a Promise.
 * @param cmd {string}
 * @return {Promise<string>}
 */
export function shellCommand(command: string, options?: ExecOptions): Promise<CommandResult> {
  return new Promise((resolve, reject) => {
   exec(command, options, (error, stdout, stderr) => {
    if (error) {
     return reject(error)
    }
    return resolve({stdout, stderr});
   });
  });
}

export default shellCommand;