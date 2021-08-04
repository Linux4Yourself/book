<pkg :name="'kmod'" instsize showsbu2></pkg>

## Настройка

[filename](../packages/core/kmod/configure ':include')

### Значения параметров

`--with-xz, --with-zlib, --with-zstd`

Параметры позволяют `Kmod` обрабатывать сжатые модули ядра соответствующим алгоритмом сжатия.

## Сборка

[filename](../packages/core/kmod/build ':include')

## Тестирование

Пакет не имеет тестов, которые можно запустить непосредственно сейчас. Необходимо дополнительно установить `git`, при этом, некоторые тесты также не будут выполнены вне репозитория.

## Установка

[filename](../packages/core/kmod/install ':include')

Необходимо создать символические ссылки (симлинки) для совместимости с `Module-Init-Tools` (предыдущая реализация программы обработки модулей ядра).

[filename](../packages/core/kmod/postinstall ':include')

> Заметьте, что эту команду не следует вводить, если вы используете систему с раздельной структурой каталогов, в таком случае перейдите к следующему шагу.

## При раздельной структуре каталогов

Добавьте опцию `--bindir=/bin` скрипту `configure` из пункта "Настройка".

Измените предыдущую команду (создающую симлинки для совместимости с `Module-Init-Tools`) и создайте необходимую ссылку в `/bin`:

[filename](../packages/core/kmod/cldirs ':include')

## Для multilib

### Очистка

Очистите предыдущую сборку, но сохраните страницы руководства, так как они не могут быть воссозданы, поскольку пакет `xsltproc` не установлен:

[filename](../packages/core/kmod/multi_prepare ':include')

### Подготовка

[filename](../packages/core/kmod/multi_configure ':include')

### Сборка

[filename](../packages/core/kmod/multi_build ':include')

### Установка

[filename](../packages/core/kmod/multi_install ':include')

<script>
	new Vue({ el: '#main' })
</script>
