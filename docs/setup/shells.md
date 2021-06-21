Некоторые программы требуют файл ``/etc/shells``, в котором должны быть перечислены доступные командные оболочки.

Создайте его:

```bash
cat > /etc/shells << "EOF"
# Begin /etc/shells

/bin/sh
/bin/bash

# End /etc/shells
EOF
```
