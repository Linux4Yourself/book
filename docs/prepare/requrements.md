# Требования к рабочей станции и операционной системе

## Требования к аппаратному обеспечению

- Раздел на жёстком диске, рекомендуемый размер - более 20 Гб, так как для сборки пакетов необходимо много свободного места.
- Если оперативной памяти ПК мало (3 Гб и меньше), то рекомендуется создать раздел/файл подкачки. В крайнем случае используйте [zram](additional/zram).


## Требования к программному обеспечению

Более ранние версии перечисленных программных пакетов могут работать, но корректность работы не проверялась.

- Bash-3.2 (`/bin/sh` - жесткая или символическая ссылка на ``bash``)
- Binutils-2.25
- Bison-2.7 (`/usr/bin/yacc` - символическая ссылка на `bison` или на файл сценария, который его запускает)
- Bzip2-1.0.4
- Coreutils-6.9
- Diffutils-2.8.1
- Findutils-4.2.31
- Gawk-4.0.1 (``/usr/bin/awk`` - символическая ссылка на `gawk`)
- GCC-6.2 с компилятором C++, g++
- Glibc-2.11
- Grep-2.5.1a
- Gzip-1.3.12
- Linux Kernel-3.2
- M4-1.4.10
- Make-4.0
- Patch-2.5.4
- Perl-5.8.8
- Python-3.4
- Sed-4.1.5
- Tar-1.22
- Texinfo-4.7
- Xz-5.0.0

В зависимости от семейства ОС Linux, выполните следующий команды, чтобы обеспечить совместимость и установить необходимые пакеты:

### Для Debian, Ubuntu:

```bash
apt-get install build-essential bison gawk texinfo
ln -sf bash /bin/sh
```

### Для ArchLinux

```bash
pacman -S base-devel
```

### Для Rosa

```bash
urpmi bison gawk texinfo make gcc-c++
```


## Проверка соответствия программного обеспечения

Чтобы узнать, что ваша хост-система полностью соответствует всем необходимым для дальнейшей работы требованиям, выполните следующий набор команд:

```bash 
{{ include('../scripts/version-check.md') }}
```

???+ warning "Предупреждение"
	 Внимательно изучите результат выполнения. В нём не должно встречаться строк, содержащих `ERROR`, `command not found`, `failed`.

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


