# node-nix

## Purpose

This is a collection of non-portable *nix functions.

Ryan has stated that he does not want anything in node that cannot be ported
to windows. So I have started this addon for *nix functions that are commonly
found in the standard libraries of other languages.

Feel free to suggest additional functions via pull requests / issue tickets!

## Install

To install this package, simply run:

    npm install nix

## API

### nix.fork();

A binding to [fork()](http://linux.die.net/man/2/fork).

Returns `0` for the child process and the pid of the child process for the
parent.

This function will create a new child process that is an identical copy of the
parent process. All I/O watchers will be left in-tact, so you need to
understand what this means when calling this function from within an http
request.

**Warning:** Do not call this function from the repl on OSX, unless you want
to trigger a kernel panic.

## License

node-nix is licensed under the MIT license.
