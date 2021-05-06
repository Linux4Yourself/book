# Настройка окружения bash

Оболочка командной строки `bash` использует множество стартовых скриптов. С их помощью можно задать различные переменные, функции, алиасы, настройки `bash`
Ниже будут предложены команды по созданию минимальных версий стартовых скриптов  `bash`:

## /etc/profile

<!-- объяснение давать как коментарии в самом скрипте -->

[filename](https://raw.githubusercontent.com/Linux4Yourself/Linux4Yourself.Book.Scripts/develop/src/profile.sh ':include')

### О CFLAGS и CXXFLAGS

С помощью данных переменных можно задать флаги компилятора, влияющие в том числе на оптимизацию. 
Есть следующие уровни оптимизации (и соответствующие флаги)

``-O0`` - Без оптимизации. Не рекомендуется.

``-O1`` - Простейшие минимальные оптимизации. Не рекомендуется.

``-O2`` - Стандартная оптимизация. По умолчанию в GCC.

``-O3`` - Агрессивная оптимизация, почти все пакеты собираются и работают, рекомендуется нами.

``-Ofast`` - Чрезвычайно агрессивная оптимизация, некоторые пакеты не собираются.

``-Os`` - Оптимизация по размеру.

``-Og`` - Оптимизация для отладки. 

Также вы можете сообщить компилятору оптимизировать код для вашего процессора добавив опцию ``-march=native``, однако возможность запуска такого кода на других процессорах будет потеряна.

## Bash-completion

[filename](https://raw.githubusercontent.com/Linux4Yourself/Linux4Yourself.Book.Scripts/develop/src/completion.sh ':include')

## Dircolors

[filename](https://raw.githubusercontent.com/Linux4Yourself/Linux4Yourself.Book.Scripts/develop/src/dircolors.sh ':include')

## Readline

[filename](https://raw.githubusercontent.com/Linux4Yourself/Linux4Yourself.Book.Scripts/develop/src/inputrc.sh ':include')

## Umask

[filename](https://raw.githubusercontent.com/Linux4Yourself/Linux4Yourself.Book.Scripts/develop/src/umask.sh ':include')

## Другие стартовые скрипты

[filename](https://raw.githubusercontent.com/Linux4Yourself/Linux4Yourself.Book.Scripts/develop/src/other.sh ':include')
