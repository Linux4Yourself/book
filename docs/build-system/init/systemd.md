{{ include('../packages/systemd/README.md') }}

## Подготовка

Удалите ненужную группу `render` из правил `udev`:

```bash 
{{ include('../packages/systemd/prepare') }}
```

## Настройка

```bash 
{{ include('../packages/systemd/configure') }}
```

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

```bash 
{{ include('../packages/systemd/build') }}
```

## Установка

```bash 
{{ include('../packages/systemd/install') }}
```

- Удалите ненужный каталог;
- Создайте файл `/etc/machine-id`, необходимый для `systemd-journald`;
- Настройте базовую целевую структуру;
- Отключите службу, которая, как известно, вызывает проблемы с системами, использующими конфигурацию сети, отличную от той, которая предоставляется systemd-networkd:

```bash 
{{ include('../packages/systemd/postinstall') }}
```

## Для multilib

### Очистка

```bash 
{{ include('../packages/systemd/multi_prepare') }}
```

### Настройка

```bash 
{{ include('../packages/systemd/multi_configure') }}
```

### Сборка

```bash 
{{ include('../packages/systemd/multi_build') }}
```

### Установка

```bash 
{{ include('../packages/systemd/multi_install') }}
```


