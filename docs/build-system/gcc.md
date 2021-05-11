<package-info :package="package" showsbu2></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('gcc');
		},
		methods: {
			getPackage: function(name) {
					getPackage(name)
					.then(response => this.package = response);
			},
		}
  })
</script>

## Подготовка

Исправьте пути установки библиотек:

```bash
sed -e '/m64=/s/lib64/lib/' \
    -e '/m32=/s/m32=.*/m32=..\/lib32$(call if_multiarch,:i386-linux-gnu)/' \
    -i.orig gcc/config/i386/t-linux64
```

В документации пакета {{package.name}} требуется использовать отдельную директорию для сборки:

```bash
mkdir -v build
cd       build
```

## Настройка

?> На данном этапе необходимы только компиляторы для C и C++, однако, вы можете собрать компиляторы для любых, поддерживаемых GCC, языков программирования, перечислив их через запятые в опции configure `--enable-languages=c,c++`. GCC поддерживает следующие языки - `c,c++,d,fortran,go,objc,obj-c++`. Вы можете собрать все доступные компиляторы добавив параметр `--enable-languages=c,c++,d,fortran,go,objc,obj-c++`. Если позднее вам потребуется компилятор для какого либо языка из этого списка - пересоберите GCC с его поддержкой.

```bash
../configure --prefix=/usr               \
             LD=ld                       \
             --disable-bootstrap         \
             --with-system-zlib          \
             --enable-languages=c,c++  --disable-multilib
```

### Для multilib

Замените параметр `--disable-multilib` на `--enable-multilib --with-multilib-list=m64,m32 `

### Объяснение опций configure

`--disable-bootstrap` - Предотвращает многократную пересборку GCC

`LD=ld` - Сообщает GCC использовать ранее установленную версию компоновщика

## Сборка


```bash
make
```
## Тестирование

```bash
ulimit -s 32768
chown -Rv tester . 
su tester -c "PATH=$PATH make -k check"
```

Для просмотра итогов теста выполните:

```bash
../contrib/test_summary
```

## Установка

```bash
make install
```

Удалите ненужную директорию:

```bash
rm -rf /usr/lib/gcc/$(gcc -dumpmachine)/11.1.0/include-fixed/bits/
```

Убедитесь что владелец установленных заголовков корректный:

```bash
chown -v -R root:root \
    /usr/lib/gcc/*linux-gnu/10.2.0/include{,-fixed}
```

По историческим причинам некоторые программы могут пытаться найти `cpp` в директории `/lib`. Создайте ссылку:

```bash
ln -sv ../bin/cpp /lib
```

Для поддержки LTO требуется следующая символическая ссылка:

```bash
ln -sfv ../../libexec/gcc/$(gcc -dumpmachine)/11.1.0/liblto_plugin.so \
        /usr/lib/bfd-plugins/
```

Переместите файлы в правильное место:

```bash
mkdir -pv /usr/share/gdb/auto-load/usr/lib{,32}
mv -v /usr/lib/*gdb.py /usr/share/gdb/auto-load/usr/lib
mv -v /usr/lib32/*gdb.py /usr/share/gdb/auto-load/usr/lib32
```

Проверьте работоспособность:

```bash
echo 'int main(){}' > dummy.c
cc dummy.c
exec a.out || echo fail
```

Для multilib:

```bash
echo 'int main(){}' > dummy.c
cc -m32 dummy.c
exec a.out || echo fail
```

Удалите тестовые файлы:

```bash
rm -v dummy.c a.out
```

## Установленные файлы

Программы:  c++ (ссылка на g++), cc (ссылка на gcc), cpp, g++, gcc, gcc-ar, gcc-nm, gcc-ranlib, gcov, gcov-dump и gcov-tool

Библиотеки:  libasan.{a,so}, libatomic.{a,so}, libcc1.so, libgcc.a, libgcc_eh.a, libgcc_s.so, libgcov.a, libgomp.{a,so}, libitm.{a,so}, liblsan.{a,so}, liblto_plugin.so, libquadmath.{a,so}, libssp.{a,so}, libssp_nonshared.a, libstdc++.{a,so}, libstdc++fs.a, libsupc++.a, libtsan.{a,so} и libubsan.{a,so}

Директории:  /usr/include/c++, /usr/lib/gcc, /usr/libexec/gcc и /usr/share/gcc-11.1.0
