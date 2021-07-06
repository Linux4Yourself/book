#!/bin/bash

if [ `whoami` -ne "root" ]; then
      echo "Запустите этот скрипт от имени root! Выход."
      exit 0
fi

urpmi bison gawk texinfo make gcc-c++