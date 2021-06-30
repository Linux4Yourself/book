<pkg :name="'gcc'" instsize showsbu2></pkg>

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

<package-script :package="'gcc'" :type="'prepare'"></package-script>

## Настройка

?> На данном этапе необходимы только компиляторы для C и C++, однако вы можете собрать компиляторы для любых поддерживаемых GCC языков программирования, перечислив их через запятые в опции configure `--enable-languages=c,c++`. GCC поддерживает следующие языки - `c,c++,d,fortran,go,objc,obj-c++`. вы можете собрать все доступные компиляторы, добавив параметр `--enable-languages=c,c++,d,fortran,go,objc,obj-c++`. Если позднее вам потребуется компилятор для какого либо языка из этого списка - пересоберите GCC с его поддержкой.

<package-script :package="'gcc'" :type="'configure'"></package-script>

### Для multilib

<package-script :package="'gcc'" :type="'multi_configure'"></package-script>

### Значения параметров

`--disable-bootstrap` - Предотвращает многократную пересборку GCC

`LD=ld` - Сообщает GCC использовать ранее установленную версию компоновщика

## Сборка

<package-script :package="'gcc'" :type="'build'"></package-script>

## Тестирование

- Увеличьте размер стека по умолчанию
- Произведите тестирование от непривилегированного пользователя во избежание непредвиденных ситуаций с системой.

<package-script :package="'gcc'" :type="'test'"></package-script>

> Тестирование занимает достаточно много времени.

Для просмотра итогов теста выполните:

```bash
../contrib/test_summary
```

?> Известно, что 6 тестов, связанных с `get_time`, дают сбои. По видимому, это связано с локалью `en_HK`. Кроме того, тест `COSTEXPR-52830` не удается.

## Установка

<package-script :package="'gcc'" :type="'install'"></package-script>

- Удалите ненужную директорию,
- Убедитесь, что владелец установленных заголовков корректный,
- По историческим причинам некоторые программы могут пытаться найти `cpp` в директории `/lib`. Создайте ссылку,
- Для поддержки LTO требуется следующая символическая ссылка,
- Переместите файлы в правильное место:

<package-script :package="'gcc'" :type="'postinstall'"></package-script>

Проверьте работоспособность:

```bash
echo 'int main(){}' > dummy.c
cc dummy.c
./a.out | echo success
```

Для multilib:

```bash
echo 'int main(){}' > dummy.c
cc -m32 dummy.c
./a.out | echo success
```

Удалите тестовые файлы:

```bash
rm -v dummy.c a.out
```

## Установленные файлы

Программы: c++ (ссылка на g++), cc (ссылка на gcc), cpp, g++, gcc, gcc-ar, gcc-nm, gcc-ranlib, gcov, gcov-dump и gcov-tool

Библиотеки: libasan.{a,so}, libatomic.{a,so}, libcc1.so, libgcc.a, libgcc_eh.a, libgcc_s.so, libgcov.a, libgomp.{a,so}, libitm.{a,so}, liblsan.{a,so}, liblto_plugin.so, libquadmath.{a,so}, libssp.{a,so}, libssp_nonshared.a, libstdc++.{a,so}, libstdc++fs.a, libsupc++.a, libtsan.{a,so} и libubsan.{a,so}

Директории: /usr/include/c++, /usr/lib/gcc, /usr/libexec/gcc и /usr/share/gcc-11.1.0
