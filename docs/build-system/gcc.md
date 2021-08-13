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

Примените патч, исправляющий несколько проблем:

[filename](../packages/gcc/patch ':include')

Исправьте пути установки библиотек:

<package-script :package="'gcc'" :type="'prepare'"></package-script>

## Настройка

?> На данном этапе необходимы только компиляторы для C и C++, однако вы можете собрать компиляторы для любых поддерживаемых GCC языков программирования, перечислив их через запятые в опции configure `--enable-languages=c,c++`. GCC поддерживает следующие языки - `c,c++,d,fortran,go,objc,obj-c++`. вы можете собрать все доступные компиляторы, добавив параметр `--enable-languages=c,c++,d,fortran,go,objc,obj-c++`. Если позднее вам потребуется компилятор для какого либо языка из этого списка - пересоберите GCC с его поддержкой.

[filename](../packages/gcc/configure ':include')

### Для multilib

[filename](../packages/gcc/multi_configure ':include')

### Значения параметров

`--disable-bootstrap` - предотвращает многократную пересборку GCC

`LD=ld` - сообщает GCC использовать ранее установленную версию компоновщика

## Сборка

[filename](../packages/gcc/build ':include')

## Тестирование

- Увеличьте размер стека по умолчанию
- Произведите тестирование от непривилегированного пользователя во избежание непредвиденных ситуаций с системой.

[filename](../packages/gcc/test ':include')

> Тестирование занимает достаточно много времени.

Для просмотра итогов теста выполните:

```bash
../contrib/test_summary
```

?> Известно, что 6 тестов, связанных с `get_time`, дают сбои. По видимому, это связано с локалью `en_HK`. Кроме того, тест `COSTEXPR-52830` не удается.

## Установка

[filename](../packages/gcc/install ':include')

- Удалите ненужную директорию,
- Убедитесь, что владелец установленных заголовков корректный,
- По историческим причинам некоторые программы могут пытаться найти `cpp` в директории `/lib`. Создайте ссылку,
- Для поддержки LTO требуется следующая символическая ссылка,
- Переместите файлы в правильное место:

[filename](../packages/gcc/postinstall ':include')

## При использовании раздельных каталогов:
- Замените `ln -svr /usr/bin/cpp /usr/lib` из предыдущей команды на корректную для раздельной структуры.

## Проверка работоспособности

Выполните набор команд:

```bash
echo 'int main(){}' > dummy.c
cc dummy.c -v -Wl,--verbose &> dummy.log
readelf -l a.out | grep ': /lib'
```

Ошибок быть не должно, а результат команды (учитывая различия в имени динамического компоновщика, зависящие от платформы) будет следующий:

```
Requesting program interpreter: /lib64/ld-linux-x86-64.so.2]
```

Проверим что задействованы правильные стартовые файлы. Выполните команду:

```bash
grep -o '/usr/lib.*/crt[1in].*succeeded' dummy.log
```

Результат выполнения:

```
/usr/lib/gcc/x86_64-pc-linux-gnu/11.1.0/../../../../lib/crt1.o succeeded
/usr/lib/gcc/x86_64-pc-linux-gnu/11.1.0/../../../../lib/crti.o succeeded
/usr/lib/gcc/x86_64-pc-linux-gnu/11.1.0/../../../../lib/crtn.o succeeded
```

В зависимости от архитектуры, приведенное выше может немного отличаться. Разница будет в названии каталога после `/usr/lib/gcc`. Здесь важно обратить внимание на то, что `gcc` обнаружил все три файла `crt * .o` в каталоге `/usr/lib`.


Проверим то, что компилятор выполняет поиск корректных заголовочных файлов:

```bash
grep -B4 '^ /usr/include' dummy.log
```

Результат выполнения:

```
#include <...> search starts here:
 /usr/lib/gcc/x86_64-pc-linux-gnu/11.1.0/include
 /usr/local/include
 /usr/lib/gcc/x86_64-pc-linux-gnu/11.1.0/include-fixed
```

Проверим, что компоновщик использует корректные пути поиска:

```bash
grep 'SEARCH.*/usr/lib' dummy.log |sed 's|; |\n|g'
```

Результат выполнения:

```
SEARCH_DIR("/usr/x86_64-pc-linux-gnu/lib64")
SEARCH_DIR("/usr/local/lib64")
SEARCH_DIR("/lib64")
SEARCH_DIR("/usr/lib64")
SEARCH_DIR("/usr/x86_64-pc-linux-gnu/lib")
SEARCH_DIR("/usr/local/lib")
SEARCH_DIR("/lib")
SEARCH_DIR("/usr/lib");

```

Проверим, что используется корректная стандартная библиотека

```bash
grep "/lib.*/libc.so.6 " dummy.log
```

Результат выполнения:

```
attempt to open /usr/lib/libc.so.6 succeeded
```

Проверим, что используется корректный динамический компоновщик:

```bash
grep "found ld-linux*" dummy.log
```

Результат выполнения должен быть (учитывая различия в имени динамического компоновщика, зависящие от платформы):
```
found ld-linux-x86-64.so.2 at /usr/lib/ld-linux-x86-64.so.2
```

!> Если вывод не соответствует вышеуказанному, или вообще не получен, значит, что-то не так. Изучите и повторите шаги, чтобы выяснить, в чем проблема. Перед продолжением процесса необходимо решить любые проблемы.

Удалите тестовые файлы:

```bash
rm -v dummy.c a.out dummy.log
```

## Установленные файлы

Программы: c++ (ссылка на g++), cc (ссылка на gcc), cpp, g++, gcc, gcc-ar, gcc-nm, gcc-ranlib, gcov, gcov-dump и gcov-tool

Библиотеки: libasan.{a,so}, libatomic.{a,so}, libcc1.so, libgcc.a, libgcc_eh.a, libgcc_s.so, libgcov.a, libgomp.{a,so}, libitm.{a,so}, liblsan.{a,so}, liblto_plugin.so, libquadmath.{a,so}, libssp.{a,so}, libssp_nonshared.a, libstdc++.{a,so}, libstdc++fs.a, libsupc++.a, libtsan.{a,so} и libubsan.{a,so}

Директории: /usr/include/c++, /usr/lib/gcc, /usr/libexec/gcc и /usr/share/gcc-11.1.0
