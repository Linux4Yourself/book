<pkg :name="'bash'" instsize showsbu2></pkg>

## Подготовка

Для многоядерных процессоров внесите исправление, которое устраняет проблему "состояния гонки" при использовании нескольких ядер.

<package-script :package="'bash'" :type="'prepare'"></package-script>

## Настройка

<package-script :package="'bash'" :type="'configure'"></package-script>

### Значения параметров

`--without-bash-malloc` - Этот параметр отключает использование функции выделения памяти (malloc) Bash, которая вызывает ошибки сегментации. Отключив эту опцию, Bash будет использовать функции malloc из libc, которые более стабильны.

`--with-installed-readline` - Указывает на то, что следует задействовать ранее установленную библиотеку readline, вместо использования внутренней.

## Сборка

<package-script :package="'bash'" :type="'build'"></package-script>

## Тестирование

Для корректного выполнения тестов, сделайте пользователя `tester` владельцем каталога и запустите тесты от пользователя `tester`

<package-script :package="'bash'" :type="'test'"></package-script>

## Установка

<package-script :package="'bash'" :type="'install'"></package-script>

Запустите `bash` (заменив тот, который в настоящее время выполняется):

```bash
exec /bin/bash --login +h
```

<script>
	new Vue({ el: '#main' })
</script>
