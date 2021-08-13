<pkg :name="'sysklogd'" instsize showsbu2></pkg>

## Подготовка

Исправьте ошибку, приводящую к краху программы:

[filename](../../packages/sysklogd/prepare ':include')

## Сборка

[filename](../../packages/sysklogd/build ':include')

## Тестирование

[filename](../../packages/sysklogd/test ':include')

## Установка

[filename](../../packages/sysklogd/install ':include')

> Если вы собираете систему с раздельной структурой каталогов, то пропустите шаг с установкой, перейдя к следующему

## При раздельной структуре каталогов

[filename](../../packages/sysklogd/cldirs ':include')

## Настройка

Создайте конфигурационный файл:

[filename](../../packages/sysklogd/postinstall ':include')

<script>
	new Vue({ el: '#main' })
</script>
