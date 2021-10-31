{{ include('../packages/systemd/README.md') }}

## Подготовка

Удалите ненужную группу `render` из правил `udev`:

{{ include('../packages/systemd/prepare') }}

## Настройка

{{ include('../packages/systemd/configure') }}

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

{{ include('../packages/systemd/build') }}

## Установка

{{ include('../packages/systemd/install') }}

- Удалите ненужный каталог;
- Создайте файл `/etc/machine-id`, необходимый для `systemd-journald`;
- Настройте базовую целевую структуру;
- Отключите службу, которая, как известно, вызывает проблемы с системами, использующими конфигурацию сети, отличную от той, которая предоставляется systemd-networkd:

{{ include('../packages/systemd/postinstall') }}

## Для multilib

### Очистка

{{ include('../packages/systemd/multi_prepare') }}

### Настройка

{{ include('../packages/systemd/multi_configure') }}

### Сборка

{{ include('../packages/systemd/multi_build') }}

### Установка

{{ include('../packages/systemd/multi_install') }}


