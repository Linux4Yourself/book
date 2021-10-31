{{ include('../packages/tcl/README.md') }}

```bash 
{{ include('../shared/test-pkgs.md') }}
```

## Настройка

```bash 
{{ include('../packages/tcl/configure') }}
```

## Сборка

```bash 
{{ include('../packages/tcl/build') }}
```

## Тестирование

```bash 
{{ include('../packages/tcl/test') }}
```

???+ warning "Предупреждение"

    В результатах теста есть несколько мест, связанных с `clock.test`, которые указывают на сбой, но сводка в конце указывает никаких ошибок. `clock.test` проходит на полной системе LX4.

## Установка

```bash 
{{ include('../packages/tcl/install') }}
```

Сделайте установленную библиотеку доступной для записи, чтобы отладочные символы можно было удалить позже, сделайте необходимую символическую ссылку и переименуйте страницу руководства, которая конфликтует со страницей руководства Perl:

```bash 
{{ include('../packages/tcl/postinstall') }}
```

Сделайте необходимую ссылку:

```bash
ln -sfv tclsh8.6 /usr/bin/tclsh
```


