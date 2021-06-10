<pkg :name="'groff'" instsize showsbu2></pkg>

## Подготовка

Groff ожидает переменную окружения `PAGE` значение которой должно содержать формат бумаги по умолчанию. Указание значение переменной ``PAGE=A4`` может быть более подходящим. Хотя значение по умолчанию задается во время компиляции, его можно переопределить позже, записав в файл ``/etc/papersize``.

## Настройка
<package-script :package="'groff'" :type="'configure'"></package-script>

### Значения параметров
`PAGE=A4` - формат бумаги.

## Сборка
Пакет не поддерживает параллельную сборку. Выполните компиляцию пакета:
<package-script :package="'groff'" :type="'build'"></package-script>

## Установка
<package-script :package="'groff'" :type="'install'"></package-script>

<script>
	new Vue({ el: '#main' })
</script> 
