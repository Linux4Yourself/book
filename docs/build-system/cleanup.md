# Очистка системы

Во время тестов может создаваться большое количество временных файлов. Удалите их:

```bash
rm -rf /tmp/*
```

Перезайдите в среду `chroot`:

```bash
logout
```

[filename](../scripts/chroot.md ':include')


Файлы `.la` потеряли свою актуальность и могут вызвать проблемы при обновлении. Удалите их:

```bash
find /usr/lib /usr/libexec /usr/lib32 -name \*.la -delete
```

Удалите временный компилятор:

```bash
find /usr -depth -name $(uname -m)-lin-linux-gnu\* | xargs rm -rf
```

Удалите кросс-компилятор:

```bash
rm -rf /tools
```

Удалите созданного для тестов пользователя:

```bash
userdel -r tester
```

Вы можете удалить ненужные символы из исполняемых файлов:

```bash
save_usrlib="$(cd /usr/lib; ls ld-linux*)
             libc.so.6
             libthread_db.so.1
             libquadmath.so.0.0.0
             libstdc++.so.6.0.29
             libitm.so.1.0.0
             libatomic.so.1.2.0"

cd /usr/lib

for LIB in $save_usrlib; do
    objcopy --only-keep-debug $LIB $LIB.dbg
    cp $LIB /tmp/$LIB
    strip --strip-unneeded /tmp/$LIB
    objcopy --add-gnu-debuglink=$LIB.dbg /tmp/$LIB
    install -vm755 /tmp/$LIB /usr/lib
    rm /tmp/$LIB
done

online_usrbin="bash find strip"
online_usrlib="libbfd-2.37.so
               libhistory.so.8.1
               libncursesw.so.6.2
               libm.so.6
               libreadline.so.8.1
               libz.so.1.2.11.zlib-ng
               $(cd /usr/lib; find libnss*.so* -type f)"

for BIN in $online_usrbin; do
    cp /usr/bin/$BIN /tmp/$BIN
    strip --strip-unneeded /tmp/$BIN
    install -vm755 /tmp/$BIN /usr/bin
    rm /tmp/$BIN
done

for LIB in $online_usrlib; do
    cp /usr/lib/$LIB /tmp/$LIB
    strip --strip-unneeded /tmp/$LIB
    install -vm755 /tmp/$LIB /usr/lib
    rm /tmp/$LIB
done

for i in $(find /usr/lib -type f -name \*.so* ! -name \*dbg) \
         $(find /usr/lib -type f -name \*.a)                 \
         $(find /usr/{bin,sbin,libexec} -type f); do
    case "$online_usrbin $online_usrlib $save_usrlib" in
        *$(basename $i)* )
            ;;
        * ) strip --strip-unneeded $i
            ;;
    esac
done

unset BIN LIB save_usrlib online_usrbin online_usrlib

find /usr/lib{,32} -type f -name \*.a \
   -exec strip --strip-debug  {} ';'

find /usr/lib32 -type f -name \*.so* ! -name \*dbg \
   -exec strip --strip-unneeded {} ';'
```

<script>
	new Vue({ el: '#main' })
</script>
