<pkg :name="'bash'" instsize showsbu2></pkg>

## Подготовка

Для многоядерных процессоров внесите исправление, которое устраняет проблему "состояния гонки" при использовании нескольких ядер.

[filename](../packages/core/bash/prepare ':include')

## Настройка

[filename](../packages/core/bash/configure ':include')

### Значения параметров

`--without-bash-malloc` - этот параметр отключает использование функции выделения памяти (malloc) Bash, которая вызывает ошибки сегментации. Отключив эту опцию, Bash будет использовать функции malloc из libc, которые более стабильны.

`--with-installed-readline` - указывает на то, что следует задействовать ранее установленную библиотеку readline, вместо использования внутренней.

## Сборка

[filename](../packages/core/bash/build ':include')

## Тестирование

Для корректного выполнения тестов, сделайте пользователя `tester` владельцем каталога и запустите тесты от пользователя `tester`

[filename](../packages/core/bash/test ':include')

## Установка

[filename](../packages/core/bash/install ':include')

## При раздельной структуре каталогов

Создайте ссылку на нужный бинарный файл.

[filename](../packages/core/bash/cldirs ':include')

`bash` должен находиться в `/bin`. Для упрощённой структуры этого делать не требуется.

## Запуск новой сессии

Запустите `bash` (заменив тот, который в настоящее время выполняется):

```bash
exec /bin/bash --login +h
```

<script>
	new Vue({ el: '#main' })
</script>
