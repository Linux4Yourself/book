{{ include('../packages/gmp/README.md') }}

## Подготовка

???+ warning "Предупреждение"

    По умолчанию gmp оптимизируется под ваш процессор. Для того чтобы её можно было запустить на другом процессоре, можете выполнить:
    ```
    cp -v configfsf.guess config.guess
    cp -v configfsf.sub config.sub
    ```

## Настройка

```bash 
{{ include('../packages/gmp/configure') }}
```

???+ warning "Предупреждение"

    Код gmp сильно оптимизирован для процессора, на котором построен. Изредка, если система LX4 была перенесена на ПК с другим процессором, при компиляции может выдавать ошибки `Illegal instruction` и прерывать сборку программы. Чтобы этого избежать, перекомпилируйте пакет `gmp`, добавив опцию `--build=x86_64-pc-linux-gnu`.

### Значения параметров

`--enable-cxx` - Собрать библиотеку C++

## Сборка

```bash 
{{ include('../packages/gmp/build') }}
```

## Тестирование

```bash 
{{ include('../packages/gmp/test') }}
```

## Установка

```bash 
{{ include('../packages/gmp/install') }}
```

## Для multilib

### Очистка и подготовка

```bash 
{{ include('../packages/gmp/multi_prepare') }}
```

### Настройка

```bash 
{{ include('../packages/gmp/multi_configure') }}
```

### Сборка

```bash 
{{ include('../packages/gmp/multi_build') }}
```

### Установка

```bash 
{{ include('../packages/gmp/multi_install') }}
```

## Установленные файлы

**Библиотеки:** `libgmp.so` и `libgmpxx.so`
