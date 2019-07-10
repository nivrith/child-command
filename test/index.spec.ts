import { childCommand } from './../src/index';
import { expect } from 'chai';

describe('childCommand', () => {

  it('Expects stdout in resolved object for successful command', () => {
    return childCommand('node -v')
      .then((result) => {
        expect(result.stdout).to.be.a('string');
      });
  });

  it('Catches error if child process exits', () => {
    return childCommand('exit 2')
      .catch((error) => {
        expect(error).to.not.be.undefined;
      });
  });

  it('Expects stderr in resolved object if child process writes to stderr', () => {
    return childCommand('>&2 echo "error"')
      .then((result) => {
        expect(result.stderr).to.not.be.undefined;
      })
  });


});