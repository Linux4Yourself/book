{{ include('../packages/texinfo/README.md') }}

## Настройка

```bash 
{{ include('../packages/texinfo/configure') }}
```

<!-- Временно -->

Исправьте ошибку, связанную с `glibc-2.34`:

```bash
sed -e 's/__attribute_nonnull__/__nonnull/' \
    -i gnulib/lib/malloc/dynarray-skeleton.c
```

<!-- Временно -->

## Сборка

```bash 
{{ include('../packages/texinfo/build') }}
```

## Тестирование

```bash 
{{ include('../packages/texinfo/test') }}
```

## Установка

При желании установите компоненты TeX.
```bash 
{{ include('../packages/texinfo/install') }}
```

`TEXMF=/usr/share/texmf` - Переменная TEXMF содержит местоположение корня дерева TeX, если пакет TeX будет установлен позже.

Система документации Info использует простой текстовый файл для хранения списка пунктов меню. Файл находится в каталоге `/usr/share/info/dir`. К сожалению, из-за случайных проблем в Make-файлах различных пакетов, он иногда может выйти из синхронизации с информационными страницами, установленными в системе. Если каталог `/usr/share/info/dir` когда-либо потребуется создать заново, следующие команды выполнят эту задачу:
```bash 
{{ include('../packages/texinfo/postinstall') }}
```


