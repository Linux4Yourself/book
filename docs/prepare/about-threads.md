# О потоках

Сборочная система `make` может разбивать сборку на несколько потоков, число которых регулируеться флагом `-j`. Рекомендуеться использовать число потоков равное количеству потоков процессора или чуть-чуть больше. Задать `-j` можно добавляя его после каждого ввода `make` или установив переменную:

```bash
export MAKEFLAGS="-jN"
```

Где N - число потоков.