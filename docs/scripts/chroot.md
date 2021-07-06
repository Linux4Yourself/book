```bash
chroot "$LIN" /usr/bin/env -i          \
    HOME=/root TERM="$TERM"            \
    PS1='(chroot) \u:\w\$ '        \
    PATH=/usr/bin            \
    /bin/bash --login
```
