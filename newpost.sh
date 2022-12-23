#! /bin/bash
echo \
"\
---\n\
title: ''\n\
metaTitle: ''\n\
metaDesc: ''\n\
socialImage: images/\n\
date: '$(date +%Y-%m-%d)'\n\
tags:\n\
  - \n\
---\
\n
main
"\
> posts/$(date +%Y%m%d%H%M%S).md

