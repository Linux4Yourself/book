{{ include('../packages/perl/README.md') }}

## Настройка

<!-- TODO: Заменять вручную, т.к. в таком выводе нельзя использовать функционал vuejs -->

```bash
sh Configure -des                                        \
             -Dprefix=/usr                               \
             -Dvendorprefix=/usr                         \
             -Dprivlib=/usr/lib/perl5/5.34/core_perl     \
             -Darchlib=/usr/lib/perl5/5.34/core_perl     \
             -Dsitelib=/usr/lib/perl5/5.34/site_perl     \
             -Dsitearch=/usr/lib/perl5/5.34/site_perl    \
             -Dvendorlib=/usr/lib/perl5/5.34/vendor_perl \
             -Dvendorarch=/usr/lib/perl5/5.34/vendor_perl
```

### Значения параметров

`-des` - это комбинация трёх опций:

`-d` - использует значения по умолчанию для всех элементов,

`-e` - обеспечивает выполнение всех задач,

`-s` - отключает вывод лишней информации.

## Сборка

```bash
make
```

## Установка

```bash
make install
```
