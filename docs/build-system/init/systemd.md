<pkg :name="'systemd'" instsize showsbu2></pkg>

## Подготовка

Удалите ненужную группу `render` из правил `udev`:

[filename](../../packages/systemd/prepare ':include')

## Настройка

[filename](../../packages/systemd/configure ':include')

## При раздельной структуре каталогов

Добавьте к `meson` ключи:

- `-Dkmod-path=/bin/kmod`
- `-Dmount-path=/bin/mount`
- `-Drootlibdir=/lib`
- `-Dsplit-usr=true`
- `-Dsulogin-path=/sbin/sulogin`
- `-Dsulogin-path=/sbin/sulogin`
- `-Dumount-path=/bin/umount`

## Сборка

[filename](../../packages/systemd/build ':include')

## Установка

[filename](../../packages/systemd/install ':include')

- Удалите ненужный каталог;
- Создайте файл `/etc/machine-id`, необходимый для `systemd-journald`;
- Настройте базовую целевую структуру;
- Отключите службу, которая, как известно, вызывает проблемы с системами, использующими конфигурацию сети, отличную от той, которая предоставляется systemd-networkd:

[filename](../../packages/systemd/postinstall ':include')

## Для multilib

### Очистка

[filename](../../packages/systemd/multi_prepare ':include')

### Настройка

[filename](../../packages/systemd/multi_configure ':include')

### Сборка

[filename](../../packages/systemd/multi_build ':include')

### Установка

[filename](../../packages/systemd/multi_install ':include')

<script>
	new Vue({ el: '#main' })
</script>
