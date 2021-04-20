#!/bin/bash

if [ -f MODIFICATIONS.md ] ; then rm MODIFICATIONS.md; fi

html-diff 7c88415ff673fa83762ca4790aa7de68811622f6 > MODIFICATIONS.html

