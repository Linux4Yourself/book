<pkg :name="'sysklogd'" instsize showsbu2></pkg>

## Подготовка

Исправьте ошибку, приводящую к краху программы:

[filename](../../packages/core/sysklogd/prepare ':include')

## Сборка

[filename](../../packages/core/sysklogd/build ':include')

## Тестирование

[filename](../../packages/core/sysklogd/test ':include')

## Установка

[filename](../../packages/core/sysklogd/install ':include')

> Если вы собираете систему с раздельной структурой каталогов, то пропустите шаг с установкой, перейдя к следующему

## При раздельной структуре каталогов

[filename](../../packages/core/sysklogd/cldirs ':include')

## Настройка

Создайте конфигурационный файл:

[filename](../../packages/core/sysklogd/postinstall ':include')

<script>
	new Vue({ el: '#main' })
</script>
