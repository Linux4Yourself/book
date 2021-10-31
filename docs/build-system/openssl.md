{{ include('../packages/openssl/README.md') }}

## Настройка

```bash 
{{ include('../packages/openssl/configure') }}
```

## Сборка

```bash 
{{ include('../packages/openssl/build') }}
```

## Тестирование

```bash 
{{ include('../packages/openssl/test') }}
```

???+ warning "Предупреждение"

    Известно, что один тест `30-test_afalg.t` даст сбой в некоторых конфигурациях ядра (по-видимому, предполагает, что некоторые неопределенные параметры `Crypto` были выбраны).

## Установка

```bash 
{{ include('../packages/openssl/install') }}
```

## Для multilib

### Очистка

```bash 
{{ include('../packages/openssl/multi_prepare') }}
```

### Подготовка

```bash 
{{ include('../packages/openssl/multi_configure') }}
```

### Сборка

```bash 
{{ include('../packages/openssl/multi_build') }}
```

### Установка

```bash 
{{ include('../packages/openssl/multi_install') }}
```

## Установленные файлы

Программы: c_rehash и openssl

Библиотеки: libcrypto.so и libssl.so

Директории: /etc/ssl, /usr/include/openssl и /usr/lib/engines


