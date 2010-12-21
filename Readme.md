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

### Example

Using this module, forking a running node.js process is as simple as:

    var nix = require('nix');
    var pid = nix.fork();
    if (pid == 0) {
      // this is the child process, pid = 0
    } else {
      // this is the parent process, pid = child pid
    }

Calling this after creating and listening on a simple http/tcp server should
work as expected for most parts.

If you plan on calling this during a tcp/http request, make sure that you
`destroy()` this stream in either the parent or the child. Otherwise
both of them will try to watch the socket, causing packets to randomly be
seen by either process.

## API

### nix.fork();

A binding to [fork(2)](http://linux.die.net/man/2/fork).

Returns `0` for the child process and the pid of the child process for the
parent.

This function will create a new child process that is an identical copy of the
parent process. All I/O watchers will be left in-tact, so you need to
understand what this means when calling this function during the runtime
phase of your program.

This function is blocking and takes ~3-4ms per call in my benchmarks. Making
it non-blocking would be rather [stupid idea](http://unix.derkeiler.com/Newsgroups/comp.unix.programmer/2003-09/0672.html).

**Warning:** Do not call this function from the repl on OSX, unless you want
to trigger a kernel panic.

## License

node-nix is licensed under the MIT license.
