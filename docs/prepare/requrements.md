# Требования к рабочей станции и операционной системе

Для выполнения данных инструкций понадобится следущее:
1. Раздел на жестком диске, рекомендуемый размер - более 20 гб, так как для сборки пакетов необходимо много свободного места.
2. Если оперативной памяти ПК мало (3 Гб и меньше), то рекомендуется создать раздел/файл подкачки. В крайнем случае, используйте zram.
3. Поддерживаемые архитектуры: x86_64. Однако вы можете с минимальными отклонениями от инструкции собрать все для другой архитектуры.


**Чтобы узнать, что ваша хост-система полностью соответствует всем необходимым требованиям, для дальнейшей работы, выполните следующий набор команд:**

[filename](https://raw.githubusercontent.com/Linux4Yourself/Linux4Yourself.Book.Scripts/develop/src/version-check.sh ':include')

?> Внимательно изучите результат выполнения. В нём не должно встречаться строк, содержащих ERROR.

**Ошибочный результат**

```
bash, version 5.0.17(1)-release
/bin/sh -> /usr/bin/dash
ERROR: /bin/sh does not point to bash
Binutils: version-check.sh: line 12: ld: command not found
version-check.sh: line 13: bison: command not found
yacc not found
bzip2, Version 1.0.8, 13-Jul-2019.
Coreutils: 8.32
diff (GNU diffutils) 3.7
find (GNU findutils) 4.7.0
version-check.sh: line 27: gawk: command not found
/usr/bin/awk -> /usr/bin/mawk
version-check.sh: line 37: gcc: command not found
version-check.sh: line 38: g++: command not found
(Ubuntu GLIBC 2.32-0ubuntu3) 2.32
grep (GNU grep) 3.4
gzip 1.10
Linux version 5.8.0-25-generic (buildd@lcy01-amd64-022) (gcc (Ubuntu 10.2.0-13ubuntu1) 10.2.0, GNU ld (GNU Binutils for Ubuntu) 2.35.1) #26-Ubuntu SMP Thu Oct 15 10:30:38 UTC 2020
version-check.sh: line 43: m4: command not found
version-check.sh: line 44: make: command not found
GNU patch 2.7.6
Perl version='5.30.3';
Python 3.8.6
sed (GNU sed) 4.7
tar (GNU tar) 1.30
version-check.sh: line 50: makeinfo: command not found
xz (XZ Utils) 5.2.4
version-check.sh: line 53: g++: command not found
g++ compilation failed
```

**Успешный результат**

```
bash, version 5.0.0(1)-release
/bin/sh -> /bin/bash
Binutils: (GNU Binutils) 2.32
bison (GNU Bison) 3.4.1
yacc is bison (GNU Bison) 3.4.1
bzip2, Version 1.0.8, 13-Jul-2019.
Coreutils: 8.31
diff (GNU diffutils) 3.7
find (GNU findutils) 4.6.0
GNU Awk 5.0.1, API: 2.0 (GNU MPFR 4.0.2, GNU MP 6.1.2)
/usr/bin/awk -> /usr/bin/gawk
gcc (GCC) 9.2.0
g++ (GCC) 9.2.0
(GNU libc) 2.30
grep (GNU grep) 3.3
gzip 1.10
m4 (GNU M4) 1.4.18
GNU Make 4.2.1
GNU patch 2.7.6
Perl version='5.30.0';
Python 3.7.4
sed (GNU sed) 4.7
tar (GNU tar) 1.32
texi2any (GNU texinfo) 6.6
xz (XZ Utils) 5.2.4
g++ compilation OK
```
