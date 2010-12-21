SHELL := /bin/bash

build/default/nix.node: src/nix.cc
	node-waf configure build
