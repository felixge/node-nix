#include <v8.h>
#include <node.h>

// this is where fork() comes from
#include <unistd.h>

using namespace v8;

static Handle<Value> Fork(const Arguments& args) {
  HandleScope scope;

  pid_t pid = fork();

  if (pid < 0)
  {
    return ThrowException(Exception::Error(String::New("fork: could not fork, pid < 0. see man fork")));
  }

  if (pid == 0) {
    // Child process: We need to tell libev that we are forking because
    // kqueue can't deal with this gracefully.
    //
    // See: http://pod.tst.eu/http://cvs.schmorp.de/libev/ev.pod#code_ev_fork_code_the_audacity_to_re
    ev_default_fork();
  }

  return scope.Close(Number::New(pid));
}

extern "C" void init (Handle<Object> target)
{
  HandleScope scope;
  NODE_SET_METHOD(target, "fork", Fork);
}
